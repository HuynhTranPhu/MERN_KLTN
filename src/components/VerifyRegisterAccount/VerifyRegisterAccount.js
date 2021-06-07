import React from 'react'
import { Link} from 'react-router-dom'
import TopBar from '../Common/TopBar/TopBar'
import NavBar from '../Common/NavBar/index'
import BottomBar from '../Common/BottomBar/index'
import { useTranslation } from 'react-i18next'
const VerifyRegisterAccount = () => {
	const { t } = useTranslation(['verify_register_account']);
	return <div>
		<TopBar/>
		<BottomBar  ></BottomBar>
		<NavBar/>
		<div className="container text-center">
			<div className="content-404">
				<img src="/img/confirm.png" className="img-responsive" alt="" />
				<h1><b>{t('verify_register_account:congrations')}
				</b> {t('verify_register_account:you_have_verified')}</h1>
				<h2><Link to="/">{t('verify_register_account:bring_me_back_home')}</Link></h2>
			</div>
		</div>
	</div>
}
    

export default VerifyRegisterAccount