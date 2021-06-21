import React, { useContext, useEffect, useRef, useState } from 'react';
import Slider from "react-slick";
import { toast } from 'react-toastify';
import { Link, useParams } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import ReactImageZoom from 'react-image-zoom';
//import { MagnifierContainer, SideBySideMagnifier } from 'react-image-magnifiers';
//import { detailsProduct } from '../../../actions/productActions';
import { checkCanComment, detailsProduct, listProducts } from '../../../actions/productActions';
//import LoadingBox from '../../Config/LoadingBox';
//import MessageBox from '../../Config/MessageBox';
import Brand from '../../Brand/Brand';
import TopBar from '../../Common/TopBar/TopBar';
import NavBar from '../../Common/NavBar/index';
import BottomBar from '../../Common/BottomBar/index';
import FooterPage from '../../Common/Footer/Footer';
import ScrollToTopBtn from '../../Common/ScrollToTop/ScrollToTop';
import { addCart } from '../../../actions/cartAction';
import Rating from './rating';
import FormInput from './FormInput';

import {DataContext} from '../../../Socket'
import CommentItem from './CommentItem/CommentItem';
import { getData } from '../../utils/FetchDataComments';

import Loading from '../../../images/loading.gif';
import { useTranslation } from 'react-i18next';
import LoadingBackdrop from '../../Config/LoadingBackdrop'
require ('dotenv').config();

const url = process.env.REACT_APP_URL_CLIENT;
function ProductDetailScreen(props){

    const { t } = useTranslation(['mainpages_pdetal_detail']);
    const params = useParams()
    //const [loading2,setLoading2]=useState(false);
    const dispatch = useDispatch();
    const state = useContext(DataContext)
    const socket = state.socket


    let productList = useSelector(state => state.productList);
    let {products} = productList;
    const userLogin = useSelector(state => state.userLogin);
    const { userInfo} = userLogin;

    const checkComment = useSelector(state => state.checkComment);
    const { checkStatus} = checkComment;

    const productDetails = useSelector(state => state.productDetails);
    const { product, loading2} = productDetails;
    //console.log(product);
    
    
    const [rating, setRating] = useState(0);
    
    const [comments, setComments] = useState([])
    
    const [loading, setLoading] = useState(false);
    
    const [page, setPage] = useState(1)
    const [color, setColor] = useState('')
    const [size, setSize] = useState('')
    const pageEnd = useRef()
    //detail
    useEffect(() => {
       
            dispatch(detailsProduct(params.id));
            dispatch(listProducts()); 
     
    }, [dispatch,params.id])
    // Realtime 
    // Join room
    useEffect(() => {
        if(socket){
            socket.emit('joinRoom', params.id)
        }
    },[socket, params.id])
    useEffect(() => {
        if(socket){
            socket.on('sendCommentToClient', msg => {
                setComments([msg, ...comments])
                //dispatch(getComment(params.id));
            })

            return () => socket.off('sendCommentToClient')
        } 
    },[socket, comments])

     // infiniti scroll
     useEffect(() => {
        const observer = new IntersectionObserver(entries => {
            if(entries[0].isIntersecting){
                setPage(prev => prev + 1)
            }
        },{
            threshold: 0.1
        })

        observer.observe(pageEnd.current)
    },[])

    // Reply Comments
    useEffect(() => {
        if(socket){
            socket.on('sendReplyCommentToClient', msg => {
                const newArr = [...comments]
                
                newArr.forEach(cm => {
                    if(cm._id === msg._id){
                        cm.reply = msg.reply
                    }
                })

                setComments(newArr)
            })

            return () => socket.off('sendReplyCommentToClient')
        } 
    },[socket, comments])

    //const [detailProduct, setDetailProduct] = useState([])
    


    const settings = {
        autoplay: true,
        infinite: true,
        dots: false,
        slidesToShow: 3,
        slidesToScroll: 1,
        responsive: [
            {
                breakpoint: 992,
                settings: {
                    slidesToShow: 3,
                }
            },
            {
                breakpoint: 768,
                settings: {
                    slidesToShow: 2,
                }
            },
            {
                breakpoint: 576,
                settings: {
                    slidesToShow: 1,
                }
            },
        ]
    };
    const handleSelectColor= (e)=>{
        setColor(e.target.value);
    }
    const handleSelectSize= (e)=>{
        setSize(e.target.value);
    }

    //console.log(userInfo.newUser._id,params.id)
    useEffect(() => {
           dispatch(checkCanComment(userInfo.newUser._id,params.id));   
    },[dispatch,userInfo.newUser._id,params.id])
    

    useEffect(() => {
        setLoading(true)
        getData(`${url}/comment/${params.id}?limit=${page * 5}`)
            .then(res => {
                setComments(r => r = res.data.comments)
                setLoading(false)
            })
            .catch(err => console.log(err.response.data.msg))
           
    },[params.id, page])
    const handleAddToCart = (id,name,price, image) =>{
        let a = {id: id,
            name: name,
            price: price,
            img: image,
            quantity: 1,
            color:color,
            size:size
        };
            if(color ===''|| size ===''){
                toast.error("You don't select color or size");
            }else{
                dispatch(addCart(userInfo.newUser._id,a));
                toast.success("This product is added to cart");
            }
            
        
    }
    const propsImage = {width: 350, height: 300, zoomPosition:'original' ,img: product?.images?.[0] || '/img/no-image.png'};
    return <div>
        {/* <LoadingBackdrop open={loading2} /> */}
        <TopBar/>
        <BottomBar ></BottomBar>
        <NavBar/>
       {
           loading2?(<>
           <LoadingBackdrop open={loading2}/>
            <div  style={{height:"80px"}}></div>
            </>):(
            <div className="product-detail">
                <div className="container">
                    <div className="row ">
                        <div className="col-lg-12">
                            {/* <div className="col-lg-12"> */}
                                <div className="product-detail-top">
                                    <div className="row align-items-center">
                                        <div className="col-md-5">
                                            <div className="product__image">
                                                {/* <MagnifierContainer>
                                                    <SideBySideMagnifier
                                                        alwaysInPlace={true}
                                                        //fillAvailableSpace={false}
                                                        imageSrc={product?.images?.[0] || '/img/no-image.png'}
                                                        className="product-img-magnifier"
                                                    />
                                                </MagnifierContainer> */}
                                                <ReactImageZoom {...propsImage} />
                                            </div>
                                        </div>
                                        <div className="col-md-7">
                                            <div className="product-content">
                                                <div className="title">
                                                    <h2>{product?.name}</h2>
                                                </div>
                                                <div className="price">
                                                    <h4>{t('mainpages_pdetal_detail:price')}</h4>
                                                    <p> ${product?.price} <span>$400</span></p>
                                                </div>
                                                <div className="quantity">
                                                    <h4>{t('mainpages_pdetal_detail:status')}</h4>       
                                                    {product?.quantity > 0? 
                                                    (
                                                        <span className="success">In Stock</span>
                                                    ):(
                                                        <span className="danger">Unavailable</span>
                                                    )}
                                                </div>
                                                <div className="p-color">
                                                    <h4>{t('mainpages_pdetal_detail:color')}</h4>
                                                    <div className="btn-group btn-group-sm">
                                                    <select className="form-control" onChange={handleSelectColor}>
                                                        <option value="">{t('mainpages_pdetal_detail:select_color')}</option>
                                                        {
                                                            product?.colorProducts?.colorProduct?.map(item => (
                                                                <option value={item?._id?._id} key={item?._id?._id}>
                                                                    {item?._id?.name}
                                                                </option>
                                                            ))
                                                        }
                                                    </select>
                                                    </div> 
                                                </div>
                                                <div className="p-color">
                                                    <h4>{t('mainpages_pdetal_detail:size')}</h4>
                                                    <div className="btn-group btn-group-sm">
                                                        <select className="form-control" onChange={handleSelectSize}>
                                                            <option value="">{t('mainpages_pdetal_detail:select_size')}</option>
                                                            {
                                                                product?.sizeProducts?.sizeProduct?.map(item => (
                                                                    <option value={item?._id?._id} key={item?._id?._id}>
                                                                        {item?._id?.name}
                                                                    </option>
                                                                ))
                                                            }
                                                        </select>
                                                    </div> 
                                                </div> 
                                                <div className="p-rating p-color">
                                                    <h4>{t('mainpages_pdetal_detail:rating')}</h4>
                                                    <div>
                                                    <Rating props={product}/>
                                                    </div>  
                                                </div>
                                                <div className="action">
                                                {
                                                    product?.quantity>0 && 
                                                    <span className="btn"  onClick={()=>handleAddToCart(product._id,product.name,product.price,product.images[0])} ><i className="fa fa-shopping-cart" /> {t('mainpages_pdetal_detail:add_to_cart')}</span>
                                                }
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="row product-detail-bottom">
                                    <div className="col-lg-12">
                                        <ul className="nav nav-pills nav-justified">
                                            <li className="nav-item">
                                                <a className="nav-link active" data-toggle="pill" href="#description">{t('mainpages_pdetal_detail:description')}</a>
                                            </li>
                                            <li className="nav-item">
                                                <a className="nav-link" data-toggle="pill" href="#reviews">{product?.rating > 0?product.rating:0} {t('mainpages_pdetal_detail:review')}</a>
                                            </li>
                                        </ul>
                                        <div className="tab-content">
                                            <div id="description" className="container tab-pane active">
                                                <h4>{t('mainpages_pdetal_detail:product_description')}</h4>
                                                <p>
                                                    {product?.description}   
                                                </p>
                                                <h4>{t('mainpages_pdetal_detail:category')}</h4>
                                                <p>
                                                    {product?.id_category?.name}   
                                                </p>
                                                <h4>{t('mainpages_pdetal_detail:brand')}</h4>
                                                <p>
                                                    {product?.id_brand?.name}   
                                                </p>
                                            </div>
                                            <div id="reviews" className="container tab-pane fade">
                                            <div className="comments">
                                            {
                                                checkStatus ==='true'?(
                                                    <>
                                                        <h2 className="app_title">
                                                        {t('mainpages_pdetal_detail:your_feedback')}
                                                    </h2>
            
                                                    <div className="reviews">
                                                        <input type="radio" name="rate" id="rd-5" onChange={() => setRating(5)} />
                                                        <label htmlFor="rd-5" className="fas fa-star"></label>
                
                                                        <input type="radio" name="rate" id="rd-4" onChange={() => setRating(4)} />
                                                        <label htmlFor="rd-4" className="fas fa-star"></label>
                
                                                        <input type="radio" name="rate" id="rd-3" onChange={() => setRating(3)} />
                                                        <label htmlFor="rd-3" className="fas fa-star"></label>
                
                                                        <input type="radio" name="rate" id="rd-2" onChange={() => setRating(2)} />
                                                        <label htmlFor="rd-2" className="fas fa-star"></label>
                
                                                        <input type="radio" name="rate" id="rd-1" onChange={() => setRating(1)} />
                                                        <label htmlFor="rd-1" className="fas fa-star"></label>
                                                    </div>
                                                    <FormInput id={params.id} socket={socket}  rating={rating} />
                                                    </>
                                                    
                                                )
                                                :
                                                <Link to="/product-list"className="danger">{t('mainpages_pdetal_detail:see_more')}</Link>
                                            }
                                            <div className="comments_list">
                                                <h2 className="app_title">
                                                {t('mainpages_pdetal_detail:all_of_feedback')}
                                                </h2>
                                                {
                                                comments.length >0 ? comments.map(comment => (
                                                    <CommentItem key={comment._id} comment={comment} socket={socket} />
                                                )): <p>{t('mainpages_pdetal_detail:enter_first_feedback')}</p>
                                                    
                                                }
                                            </div>

                                            </div>
                                            {
                                                loading && <div className="loading"><img src={Loading} alt=""/></div>
                                            }  
                                            <button ref={pageEnd} style={{opacity: 0}}>Load more</button> 
                                            
                                        </div>
                                            
                                        </div>
                                    </div>
                                </div>
                            {/* </div>    */}
                            <div className="product">
                                {
                                    products.filter((pr)=>pr.id_category===product?.id_category?._id).length>1 ? 
                                    <div className="section-header">
                                        <h1>{t('mainpages_pdetal_detail:related_products')}</h1>
                                    </div>:null
                                
                                }
                                
                                <div className="align-items-center">
                                <Slider {...settings}>
                                    {
                                        products.map((pr)=>{
                                            return  pr.id_category === product?.id_category?._id && pr._id!== product?._id
                                            ?
                                                <div className="col-lg-12" key={pr._id}>
                                                <div className="product-item">
                                                    <div className="product-title">
                                                    <Link to={"/product-detail/"+ pr._id}>{pr.name}</Link>
                                                    </div>
                                                    <div className="product-image">
                                                        <img className="image-product" src={pr.images[0]}alt="Product" />
                                                        <div className="product-action">
                                                            <Link to={'/product-detail/' + pr._id}><i className="fas fa-eye" /></Link>
                                                        </div>
                                                    </div>
                                                    <div className="product-price">
                                                    <h3>${pr.price}</h3>
                                                    <div className="ratting">
                                                        <Rating props={pr}/>
                                                    </div>
                                                    </div>
                                                </div>
                                            </div>
                                            :null
                                        } )
                                    }
                                    
                                </Slider>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
           )
       }
        
      
          
     
    <Brand/>
    <FooterPage/>
    <ScrollToTopBtn />
    </div>
}
export default ProductDetailScreen;