import React from 'react'

import { useTranslation } from 'react-i18next'
const VerifyRegisterAccount = () => {
	const { t } = useTranslation(['verify_register_account']);
	return <div className="container text-center">
				<div className="content-404">
					<img src="/img/confirm.png" className="img-responsive-verifyRegister" alt="confirm-img" />
					<h6><b>{t('verify_register_account:congratulation')}
					</b> {t('verify_register_account:you_have_verified')}</h6>
					<h6>{t('verify_register_account:bring_me_back_home')}</h6>
				</div>
			</div>
	
}
    

export default VerifyRegisterAccount