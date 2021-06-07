import React from 'react'
import { useTranslation } from 'react-i18next';
import { Link } from 'react-router-dom'
import TopBar from '../Common/TopBar/TopBar';
import BottomBar from '../Common/BottomBar/index';
import NavBar from '../Common/NavBar/index';
import FooterPage from '../Common/Footer/Footer';
const ForgotPassword = ({ setEmail, submit, notification }) => {
	const { t } = useTranslation(['password_forgot']);
	return(
		<div>
			<TopBar/>
			<BottomBar></BottomBar>
			<NavBar/>
			<div className="container text-center">
				<div className="content-404 forgotpass">
					<h1><b>{t('password_forgot:forgot_password')}
					</b></h1>
					<span>{notification}</span>
					<input
						type="email"
						placeholder={t('password_forgot:email_place')}
						onChange={e => setEmail(e.target.value)}
					/>
					<br />
					<button
						className="btn btn-default"
						onClick={() => submit()}>
						{t('password_forgot:submit')}
					</button>
					<h2><Link to="/">{t('password_forgot:back_home')}</Link></h2>
				</div>
			</div>
			<FooterPage/>
		</div>
		
	)
}
	
	
export default ForgotPassword