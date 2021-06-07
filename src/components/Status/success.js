import React from 'react'
import { Link } from 'react-router-dom'
import TopBar from '../Common/TopBar/TopBar'
import NavBar from '../Common/NavBar/index'
import BottomBar from '../Common/BottomBar/index'
import { useTranslation } from 'react-i18next'
const Success = () =>{
	const { t } = useTranslation(['status_success']);
	return (
		<>
			<TopBar/>
			<BottomBar ></BottomBar>
            <NavBar/>
			<div className="container text-center">
				<div className="content-404">
					<h1><b>{t('status_success:congratulations')}!</b></h1>
					<p></p>
					<h2><Link to="/">{t('status_success:bring_me_back_home')}</Link></h2>
				</div>
			</div>
		</>
		
	)
}
export default Success