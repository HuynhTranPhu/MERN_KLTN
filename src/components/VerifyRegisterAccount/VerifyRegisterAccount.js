import React from 'react'
import { useTranslation } from 'react-i18next'
import { Link } from 'react-router-dom';

const VerifyRegisterAccount = () => {
	const { t } = useTranslation(['verify_register_account']);
	return <div className="container text-center">
				<div className="content-404">
					<img src="/img/confirm.png" className="img-responsive" alt="confirm-img" />
					<h6><b>{t('verify_register_account:congratulation')}
					</b> {t('verify_register_account:you_have_verified')}</h6>
					<h6><Link to='/login'>{t('verify_register_account:bring_me_back_home')}</Link> </h6>
				</div>
			</div>
	
}
    

export default VerifyRegisterAccount