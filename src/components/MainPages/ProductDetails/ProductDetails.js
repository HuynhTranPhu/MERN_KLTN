import React, { useContext, useEffect, useRef, useState } from 'react';
import Slider from "react-slick";
import { toast } from 'react-toastify';
import { Link, useParams } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
//import ReactImageZoom from 'react-image-zoom';
import { MagnifierContainer, SideBySideMagnifier } from 'react-image-magnifiers';
//import { detailsProduct } from '../../../actions/productActions';
import { checkCanComment, detailsProduct, listProducts } from '../../../actions/productActions';
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

import { makeStyles } from '@material-ui/core';
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';

import { FacebookShareButton, TwitterShareButton,WhatsappShareButton } from 'react-share';
import { FacebookIcon, TwitterIcon,WhatsappIcon } from 'react-share';

import Loading from '../../../assets/images/loading.gif';
import { useTranslation } from 'react-i18next';
import LoadingBackdrop from '../../Config/LoadingBackdrop'

require ('dotenv').config();




const url = process.env.REACT_APP_URL_CLIENT;

const useStyles = makeStyles((theme) => ({
    root: {
      flexGrow: 1,
      position: 'relative'
    },
    paper: {
      padding: theme.spacing(2),
      textAlign: 'center',
      color: theme.palette.text.secondary
    }
  }));
const ArrowButton = ({ onClick, type = 'prev' }) => {
    return (
      <button
        onClick={onClick}
        className={`slide-arrow-image ${type}-arrow slick-arrow`}
        aria-disabled="true">
        <i className={`fas fa-chevron-${type === 'prev' ? 'left' : 'right'}`}></i>
      </button>
    );
  };


function ProductDetailScreen(props){

    const { t } = useTranslation(['mainpages_pdetal_detail']);
    const params = useParams()

    const classes = useStyles();
    //const [loading2,setLoading2]=useState(false);
    const dispatch = useDispatch();
    const state = useContext(DataContext)
    const socket = state.socket


    let productList = useSelector(state => state.productList);
    let {products} = productList;
    const userLogin = useSelector(state => state.userLogin);
    const { userInfo} = userLogin;

    const checkComment = useSelector(state => state.checkComment);
    const { checkStatus,loadingComment} = checkComment;

    const productDetails = useSelector(state => state.productDetails);
    const { product, loading2} = productDetails;
    //console.log(product);
    
    const [subImageIndex, setSubImageIndex] = useState(0);

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
    // useEffect(() => {
    //        dispatch(checkCanComment(userInfo.newUser._id,params.id));   
    // },[dispatch,userInfo.newUser._id,params.id])
    const checkCommentHandle = () =>{
        if(userInfo){
            dispatch(checkCanComment(userInfo.newUser._id,params.id));
        }else{
            props.history.push('/login');
        }
    }

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
        if(!userInfo){
            props.history.push('/login');
        }else{
            let a = {id: id,
                name: name,
                price: price,
                img: image,
                quantity: 1,
                color:color,
                size:size
            };
            if(color ===''|| size ===''){
                toast.error(t('mainpages_pdetal_detail:add_fail'));
            }else{
                dispatch(addCart(userInfo.newUser._id,a));
                toast.success(t('mainpages_pdetal_detail:add_success'));
            }
        }     
        
    }
    const imagesSlice = product?.images?.slice(0, 4);

   
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
                                        <div className="col-md-4">
                                            <div className="product__image d-none d-sm-block">
                                                <MagnifierContainer>
                                                    <SideBySideMagnifier
                                                        alwaysInPlace={true}
                                                        imageSrc={product?.images?.[subImageIndex] || '/img/no-image.png'}
                                                        className="product-img-magnifier"
                                                    />
                                                </MagnifierContainer>
                                                
                                            </div>
                                            <div className="product__image d-sm-none">
                                                {product?.images?.length > 1 && (
                                                <Slider
                                                    infinite={true}
                                                    slidesToShow={1}
                                                    slidesToScroll={1}
                                                    prevArrow={<ArrowButton />}
                                                    nextArrow={<ArrowButton type="next" />}>
                                                    {product?.images.map((image, index) => (
                                                    <MagnifierContainer key={index}>
                                                        <SideBySideMagnifier
                                                            alwaysInPlace={true}
                                                            imageSrc={image}
                                                            className="product-img-magnifier"
                                                        />
                                                    </MagnifierContainer>
                                                    ))}
                                                </Slider>
                                                )}
                                            </div>
                                            <section className="box-image d-none d-sm-block">
                                                <div className="container mb-3">
                                                </div>
                                                {product?.images?.length > 1 && (
                                                <div className={classes.root}>
                                                    <Grid container>
                                                    {imagesSlice.map((image, index) => (
                                                        <Grid
                                                            xs={6}
                                                            sm={4}
                                                            md={3}
                                                            lg={3}
                                                            item
                                                            key={index}
                                                            className="grid-sub-image">
                                                            <Paper>
                                                                <div
                                                                    onClick={() => { setSubImageIndex(index);}}
                                                                    className={`border-sub__image ${
                                                                    subImageIndex === index ? 'active' : ''} `}
                                                                    key={index}>
                                                                    <img src={image} alt={image} className="img-fluid" />
                                                                </div>
                                                            
                                                            </Paper>
                                                        </Grid>
                                                    ))}
                                                    </Grid>
                                                   
                                                </div>
                                                )}
                                            </section>
                                        </div>
                                        <div className="col-md-8">
                                            <div className="product-content">
                                                <div className="title">
                                                    <h2>{product?.name}</h2>
                                                </div>
                                                <div className="price">
                                                    <h4>{t('mainpages_pdetal_detail:price')}</h4>
                                                    {product?.sellPrice!== undefined?(<p> ${product?.sellPrice} <span>${product?.price}</span></p>):(
                                                        <p> ${product?.price}</p>
                                                    ) }
                                                </div>
                                                <div className="quantity">
                                                    <h4>{t('mainpages_pdetal_detail:brand')}</h4>
                                                    <span> {product?.id_brand?.name} </span>
                                                </div>
                                                <div className="quantity">
                                                    <h4>{t('mainpages_pdetal_detail:status')}</h4>       
                                                    {product?.quantity > 0? 
                                                    (
                                                        <span className="success">{`${t('mainpages_pdetal_detail:in_stock')} (${product?.quantity} ${t('mainpages_pdetal_detail:products_are_available')})`}</span>
                                                    ):(
                                                        <span className="danger">{t('mainpages_pdetal_detail:unavailable')}</span>
                                                    )}
                                                </div>
                                                <div className="p-color__p-size">
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
                                                    <div className="p-size">
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
                                                </div>
                                               

                                                <div className="p-color__p-size">
                                                    <div className="p-rating p-color">
                                                        <h4>{t('mainpages_pdetal_detail:rating')}</h4>
                                                        <div>
                                                            <Rating props={product}/> 
                                                        
                                                        </div> 
                                                    </div>
                                                    <div className="p-rating p-color p-share">
                                                        <h4>{t('mainpages_pdetal_detail:share')}</h4>
                                                        <div className="p-share__icon">
                                                            <FacebookShareButton
                                                                url={`https://estore-kltn.herokuapp.com/product-detail/${product?._id}`}
                                                                role={"The best shop online you chose"}
                                                                hashtag="#EStore"
                                                            >
                                                                <FacebookIcon size={30} round={true} ></FacebookIcon>

                                                            </FacebookShareButton>
                                                            <p >
                                                                <TwitterShareButton
                                                                    url={`https://estore-kltn.herokuapp.com/product-detail/${product?._id}`}
                                                                    title="The best shop online you chose"
                                                                    hashtag="#EStore"
                                                                >
                                                                    <TwitterIcon size={30} round={true} ></TwitterIcon>

                                                                </TwitterShareButton>
                                                            </p>
                                                            <p>
                                                                <WhatsappShareButton
                                                                    url={`https://estore-kltn.herokuapp.com/product-detail/${product?._id}`}
                                                                    title="The best shop online you chose"
                                                                >
                                                                    <WhatsappIcon size={30} round={true} ></WhatsappIcon>

                                                                </WhatsappShareButton>
                                                            </p>
                                                           
                                                        
                                                        </div> 
                                                    </div>
                                                   
                                                    
                                                </div>
                                                 
                                                <div className="action mb-3">
                                                {
                                                    product?.quantity>0 && 
                                                    <span className="btn"  onClick={()=>handleAddToCart(product._id,product.name,product.price,product.images[0])} ><i className="fa fa-shopping-cart" /> {t('mainpages_pdetal_detail:add_to_cart')}</span>
                                                }
                                                </div>
                                                <span ><Link className="success"  to='/size-chart'>{t('mainpages_pdetal_detail:size-chart')}</Link></span>
                                                
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
                                            <li className="nav-item" onClick={checkCommentHandle}>
                                                <a className="nav-link" data-toggle="pill" href="#reviews">{comments?.length >0 > 0?comments?.length:0} {t('mainpages_pdetal_detail:review')}</a>
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
                                    products?.filter((pr)=>pr.id_category===product?.id_category?._id).length>1 ? 
                                    <div className="section-header">
                                        <h1>{t('mainpages_pdetal_detail:related_products')}</h1>
                                    </div>:null
                                
                                }
                                
                                <div className="align-items-center">
                                <Slider {...settings}>
                                    {
                                        products?.map((pr)=>{
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
        
      
          
    <LoadingBackdrop open={loadingComment}/>
    <Brand/>
    <FooterPage/>
    <ScrollToTopBtn />
    </div>
}
export default ProductDetailScreen;