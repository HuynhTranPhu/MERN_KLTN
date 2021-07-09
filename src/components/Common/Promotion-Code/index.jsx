import React, { useEffect } from 'react'
import TopBar from '../TopBar/TopBar';
import BottomBar from '../BottomBar/index';
import NavBar from '../NavBar/index';
import FooterPage from '../Footer/Footer';
import ScrollToTopBtn from '../ScrollToTop/ScrollToTop';
import { Trans, useTranslation } from 'react-i18next';
import { Link } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { getPromoCode } from '../../../actions/promotionAction';
import PromoCodeItem from './PromoCodeItem/index';
import LoadingBackdrop from '../../Config/LoadingBackdrop';
import './index.css';
function PromotionCode() {
    const { t } = useTranslation(['common_promotion_code']);

    const getPromoCodes = useSelector(state => state.getPromoCodes);
    const {promoCodes,loadingPromotion } = getPromoCodes;
    const dispatch = useDispatch();
    useEffect(() => {
        dispatch(getPromoCode());
        return () => {
        };
    }, [dispatch])
    return (
        <div>
            <TopBar/>
            <BottomBar></BottomBar>
            <NavBar/>


            <div className="promo-codes py-2">
                <div className="container mb-3">
                    <div className="row">
                        <div className="col-12 mb-3">
                        <h1>{t('common_promotion_code:promo_codes')}</h1>
                        <p>{t('common_promotion_code:user_manual')}</p>
                        <ol className="pl-5">
                            <li>
                            <span>
                            <Trans
                                i18nKey="common_promotion_code:order"
                                components={{
                                    b: <b />,
                                    a1: <Link to="/"> </Link>,
                                    a2: <Link to="/product-list"> </Link>
                                }}
                                />
                            </span>
                            </li>
                            <li>
                            <span>
                                <Trans
                                i18nKey="common_promotion_code:use_promocode"
                                components={{
                                    b: <b />
                                }}
                                />
                            </span>
                            </li>
                        </ol>
                        </div>
                    </div>
                </div>

               
            </div>
            {
                loadingPromotion?(<LoadingBackdrop open={loadingPromotion} />):(
                    <div className="another-promocodes mb-5">
                        <div className="container">
                            <div className="row mb-3">
                                <div className="col text-center">
                                <h2>{t('common_promotion_code:all_promo_codes')}</h2>
                                </div>
                            </div>
                            <div className="row">
                                <div className="col-12 coupons">
                                {promoCodes &&
                                    promoCodes?.map((coupon, index) => (
                                    <PromoCodeItem
                                        key={index}
                                        id={coupon._id}
                                        price_discount={coupon.price_discount}
                                        content={coupon.content}
                                        couponCode={coupon.promotion_code}
                                    />
                                    ))
                                }
                                </div>
                                {
                                    promoCodes?.length <= 0 ? <h6 className="col text-center font-weight-bold">{t('common_promotion_code:update')}</h6>:null
                                }
                            </div>
                        </div>
                    </div>
                )
            }
            
            <FooterPage/>
            <ScrollToTopBtn />
        </div>
    )
}

export default PromotionCode
