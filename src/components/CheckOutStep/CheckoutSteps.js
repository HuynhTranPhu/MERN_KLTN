import React from 'react';
import { useTranslation } from 'react-i18next';
function CheckoutSteps(props){
    const { t } = useTranslation(['checkoutsteps']);
    return <div className="checkout-steps">
        <div className={props.step1?'active':''}>{t('checkoutsteps:login')}</div>
        <div className={props.step2?'active':''}>{t('checkoutsteps:shipping')}</div>
        <div className={props.step3?'active':''}>{t('checkoutsteps:payment')}</div>
        <div className={props.step4?'active':''}>{t('checkoutsteps:place_order')}</div>
    </div>
}

//ccccc
export default CheckoutSteps;