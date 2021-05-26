import React, { useContext, useEffect, useRef, useState } from 'react';
import Slider from "react-slick";
import { Link, useParams } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import ReactImageZoom from 'react-image-zoom';
//import { detailsProduct } from '../../../actions/productActions';
import { checkCanComment, listProducts } from '../../../actions/productActions';
import LoadingBox from '../../Config/LoadingBox';
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
require ('dotenv').config();
const url = process.env.REACT_APP_URL_CLIENT;
function ProductDetailScreen(props){
    const params = useParams()
    const [loading2,setLoading2]=useState(false);

    const state = useContext(DataContext)
    const socket = state.socket

    let productList = useSelector(state => state.productList);
    let {products} = productList;
    const userLogin = useSelector(state => state.userLogin);
    const { userInfo} = userLogin;

    const checkComment = useSelector(state => state.checkComment);
    const { checkStatus} = checkComment;
    console.log(checkStatus)
    
    const [rating, setRating] = useState(0);
    
    const [comments, setComments] = useState([])
    
    const [loading, setLoading] = useState(false);
    
    const [page, setPage] = useState(1)
    const pageEnd = useRef()

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

    const [detailProduct, setDetailProduct] = useState([])
    const dispatch = useDispatch();


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

    useEffect(() => {
        if(params.id){

            products.forEach(product => {
                if(product._id === params.id) setDetailProduct(product)
            })    
        }


        const test = async()=>{
        await dispatch(listProducts());
        setLoading2(false)
        }
    
    
        if (products.length===0)
        {
            setLoading2(true)
            test(); 
    
        }

     
    }, [products.length,loading2,params.id])

    //console.log(userInfo.newUser._id,params.id)
    useEffect(() => {
           dispatch(checkCanComment(userInfo.newUser._id,params.id));   
           console.log(userInfo.newUser._id, params.id)
    },[userInfo.newUser._id,params.id])
    

    useEffect(() => {
        setLoading(true)
        getData(`${url}/comment/${params.id}?limit=${page * 5}`)
            .then(res => {
                setComments(r => r = res.data.comments)
                setLoading(false)
            })
            .catch(err => console.log(err.response.data.msg))
           
    },[params.id, page])
    const prop = {width: 350, height: 292, zoomWidth: 350, zoomPosition :"original",img: `${detailProduct.img}`};
    const handleAddToCart = (id,name,price, image) =>{
        let a = {_id: id,
            name: name,
            price: price,
            img: image,
            quantity: 1};
        let carts =[a];
        
        if(!userInfo){
            props.history.push("/login");
        }else{
            dispatch(addCart(userInfo.newUser._id,carts));
                props.history.push(`/cart/${id}`); 
        }
    }
    return <div>
        <TopBar/>
        <BottomBar  ></BottomBar>
        <NavBar/>
       
        {loading2?<LoadingBox></LoadingBox>:  <div className="product-detail">
                <div className="container">
                    <div className="row ">
                        <div className="col-lg-12">
                            <div className="col-lg-12">
                                <div className="product-detail-top">
                                    <div className="row align-items-center">
                                        <div className="col-md-5">
                                            <div className="product-slider-single ">
                                                  <ReactImageZoom {...prop} /> 
                                                {/* <img src={detailProduct.img} alt="Product" />   */}
                                            </div>
                                        </div>
                                        <div className="col-md-4">
                                            <div className="product-content">
                                                <div className="title">
                                                    <h2>{detailProduct.name}</h2>
                                                </div>
                                                <div className="price">
                                                    <h4>Price:</h4>
                                                    <p> ${detailProduct.price} <span>$149</span></p>
                                                </div>
                                                <div className="quantity">
                                                    <h4>Status:</h4>       
                                                    {detailProduct.quantity > 0? 
                                                    (
                                                        <span className="success">In Stock</span>
                                                    ):(
                                                        <span className="danger">Unavailable</span>
                                                    )}
                                                </div>
                                                <div className="p-color">
                                                    <h4>Color:</h4>
                                                    <div className="btn-group btn-group-sm">
                                                        {detailProduct.color}
                                                    </div> 
                                                </div>
                                                <div className="p-color">
                                                    <h4>Review:</h4>
                                                    <div className="btn-group btn-group-sm">
                                                        {detailProduct.rating} Reviews
                                                    </div>
                                                </div>
                                                <div className="p-rating p-color">
                                                    <h4>Rating:</h4>
                                                    <div>
                                                    <Rating props={detailProduct}/>
                                                    </div>  
                                                </div>
                                                <div className="action">
                                                {
                                                    detailProduct.quantity>0 && 
                                                    <a className="btn"  onClick={()=>handleAddToCart(detailProduct._id,detailProduct.name,detailProduct.price,detailProduct.img)} ><i className="fa fa-shopping-cart" />Add to Cart</a>
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
                                                <a className="nav-link active" data-toggle="pill" href="#description">Description</a>
                                            </li>
                                            <li className="nav-item">
                                                <a className="nav-link" data-toggle="pill" href="#reviews">Reviews</a>
                                            </li>
                                        </ul>
                                        <div className="tab-content">
                                            <div id="description" className="container tab-pane active">
                                                <h4>Product description</h4>
                                                <p>
                                                    {detailProduct.description}   
                                                </p>
                                            </div>
                                            <div id="reviews" className="container tab-pane fade">
                                            <div className="comments">
                                            {
                                                checkStatus =='true'?(
                                                    <>
                                                        <h2 className="app_title">
                                                    Your Feedback
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
                                                <Link to="/product-list"className="danger">See more product</Link>
                                            }
                                            <div className="comments_list">
                                                <h2 className="app_title">
                                                    All of Feedback
                                                </h2>
                                                {
                                                comments.length >0 ? comments.map(comment => (
                                                    <CommentItem key={comment._id} comment={comment} socket={socket} />
                                                )): <p>Let 's enter the first feedback</p>
                                                    
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
                            </div>   
                            <div className="product">
                                {
                                    products.filter((pr)=>pr.id_category===detailProduct.id_category).length>1 ? 
                                     <div className="section-header">
                                        <h1>Related Products</h1>
                                     </div>:null
                                   
                                }
                                
                                <div className="align-items-center">
                                <Slider {...settings}>
                                    {
                                        products.map((pr)=>{
                                            return  pr.id_category === detailProduct.id_category && pr._id!== detailProduct._id
                                            ?
                                                <div className="col-lg-12" key={pr._id}>
                                                <div className="product-item">
                                                    <div className="product-title">
                                                    <Link to={"/product-detail/"+ pr._id}>{pr.name}</Link>
                                                    </div>
                                                    <div className="product-image">
                                                        <img className="image-product" src={pr.img}alt="Product" />
                                                        <div className="product-action">
                                                            <Link to={'/product-detail/' + pr._id}><i className="fas fa-eye" /></Link>
                                                        </div>
                                                    </div>
                                                    <div className="product-price">
                                                    <h3><span>$</span>{pr.price}</h3>
                                                    <a className="btn" onClick={()=>handleAddToCart(pr._id,pr.name,pr.price,pr.img)} ><i className="fa fa-shopping-cart" />Buy Now</a>
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
            </div>} 
      
          
     
    <Brand/>
    <FooterPage/>
    <ScrollToTopBtn />
    </div>
}
export default ProductDetailScreen;