import React,{useEffect, useState} from 'react'
import { Button } from '@material-ui/core';
import LocalOfferIcon from '@material-ui/icons/LocalOffer';
import { useTranslation } from 'react-i18next';
import ApplyPromoCodesDialog from './ApplyPromoCodesDialog'
import { useDispatch, useSelector } from 'react-redux';
import {checkPromotionCode,  getPromoCode } from '../../../actions/promotionAction';
import { toast } from 'react-toastify';

//import LoadingBackdrop from '../../Config/LoadingBackdrop';

function PromoCodes(props) {
    const { t } = useTranslation(['place_order']);
    const [open, setOpen] = useState(false);
    //const [code, setCode] = useState('');

    const getPromoCodes = useSelector(state => state.getPromoCodes);
    const {promoCodes } = getPromoCodes;


    const userLogin = useSelector(state => state.userLogin);
    const { userInfo} = userLogin;
    const dispatch = useDispatch();
    useEffect(() => {
        dispatch(getPromoCode());
        return () => { };
    }, [dispatch])
    
    // useEffect(() => {
    //   dispatch(checkPromotionCode(userInfo.newUser._id,code));  
    // },[code, dispatch, userInfo.newUser._id])
    
    const handleApplyCoupon = (input) => {
        //setCode(input);
        dispatch(checkPromotionCode(userInfo.newUser._id,input));
        const listCode = promoCodes.map((coupon)=>coupon.promotion_code)
        for (const element of listCode) {
           if( element === input ){
              setOpen(false);
              toast.success(t('place_order:success'));
              props.priceDecreaseHandle(element,input)
           }  
        }
       if(listCode.indexOf(input) === -1){
          toast.error(t('place_order:error'));
       }
       
    };
    // const check =()=>{
    //   if(checkPromotions===true){
    //     setOpen(false);
    //     toast.success(t('place_order:success'));
    //   }
    //   else{
    //     toast.error(t('place_order:error'));
    //   }
            
    // }
    return (
        <div>
            <Button
                size="small"
                variant="text"
                color="secondary"
                fullWidth
                startIcon={<LocalOfferIcon />}
                onClick={() => setOpen(true)}
                classes={{
                root: 'p-3',
                label: 'justify-content-start'
                }}>
                {t('place_order:choose_or_input_promo_code')}
            </Button>

          <ApplyPromoCodesDialog
            open={open}
            onClose={() => setOpen(false)}
            handleApplyCoupon={handleApplyCoupon}
           // code={code}
            // handleUnapplyCoupon={handleUnapplyCoupon}
            // usableCoupons={getUsedCouponsData?.getUsedCoupon || []}
            // loading={gettingUsedCoupons || applyingCoupon}
            //promoCodes={promoCodes}
          /> 
         
        </div>
    )
}

export default PromoCodes
