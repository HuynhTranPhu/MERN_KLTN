import React  from "react";
import { useTranslation } from "react-i18next";
import { Link } from "react-router-dom";
import Slider from "react-slick";


export default function HeaderSlider() {
    const { t } = useTranslation(['header_slider']);
    var settings = {
        autoplay: true,
        dots: true,
        infinite: true,
        slidesToShow: 1,
        slidesToScroll: 1
    };
    return (
        <div className="col-md-6">
            <div className="header-slider normal-slider">
                <Slider {...settings}>
                    <div className="header-slider-item">
                        <img src="img/slider-1.jpg" alt="Slider" />
                        <div className="header-slider-caption">
                            <p>{t('header_slider:spring_offer')}</p>
                            <Link className="btn" to="/product-list"><i className="fa fa-shopping-cart"></i>{t('header_slider:shop_now')}</Link>
                        </div>
                    </div>
                    <div className="header-slider-item">
                        <img src="img/slider-2.jpg" alt="Slider " />
                        <div className="header-slider-caption">
                            <p>{t('header_slider:sale_off_50')}</p>
                            <a className="btn" href="*"><i className="fa fa-shopping-cart"></i>{t('header_slider:shop_now')}</a>
                        </div>
                    </div>
                    <div className="header-slider-item">
                        <img src="img/slider-3.jpg" alt="Slider " />
                        <div className="header-slider-caption">
                            <p>{t('header_slider:summer_offer')}</p>
                            <a className="btn" href="*"><i className="fa fa-shopping-cart"></i>{t('header_slider:shop_now')}</a>
                        </div>
                    </div>
                </Slider>
                
            </div>
        </div>
    );
}
