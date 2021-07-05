import Tooltip from '@material-ui/core/Tooltip';
import { useTranslation } from 'react-i18next';
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './index.css';


export default function PromoCodeItem(props) {
  const { t } = useTranslation(['common_promotion_code']);
  const [click, setClick] = useState('Click to copy');
  //const [open, setOpen] = useState<boolean>(false);
  const imgUrl = '/img/gift.jpg';
  //const { rewardType } = props;
  //const discountFixedAmount = props.discountFixedAmount.toLocaleString('de-DE');
  const handleCopy = () => {
    navigator.clipboard.writeText(props.couponCode || '');
    setClick('Copied');
  };
  const leftPromoCode = () => {
        return (
          <div className="mb-1 benefit">
            <div className="discount">
              <img src={imgUrl} alt="coupon gift" className="img-fluid" width={60} height={60} />
            </div>
            <div className="suffix">{t('common_promotion_code:present')}</div>
          </div>
        );
      
    }
  return (
    <>
      <div className="row no-gutters coupon" >
        <div className="col-4 deal-info pr-3 d-flex flex-column justify-content-between align-items-center">
            {leftPromoCode()}
        </div>
        <div className="col-7 justify-content-between text-center">
          <Tooltip title={props.content} placement="top">
            <div className="mb-2">
              <div className="coupon__amount text-max-2">{props.content}</div>
              <span>{props.price_discount} $ {t('common_promotion_code:discount_total')}</span>
            </div>
          </Tooltip>
          {props.couponCode !== 'false' && (
            <Tooltip title={click} placement="top-end">
              <span className="coupon__code mb-2" onClick={handleCopy}>
                {props.couponCode}
              </span>
            </Tooltip>
          )}

          <div className="coupon__button">
            <Link to="/product-list" className="btn__bottom-bar btn-sm  btn-block">
              {t('common_promotion_code:order_now')}
            </Link>
          </div>
        </div>
      </div>
    </>
  );
}
