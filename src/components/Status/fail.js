import React from 'react'
import { useTranslation } from 'react-i18next'
import { Link } from 'react-router-dom'
import TopBar from '../Common/TopBar/TopBar'
import NavBar from '../Common/TopBar/TopBar'
import BottomBar from '../Common/TopBar/TopBar'
import Footer from '../Common/TopBar/TopBar'
const Fail = () =>{
	const { t } = useTranslation(['status_fail']);
	return(
		<>
			<TopBar/>
			<BottomBar  ></BottomBar>
            <NavBar/>
			<div className="container text-center">
				<div className="content-404">
					<h1><b>OPPS!</b>{t('status_fail:fail')}</h1>
					<p>{t('status_fail:so_it_looks_like_you_brock_something')}</p>
					<h2><Link to="/">{t('status_fail:bring_me_back_home')}</Link></h2>
				</div>
			</div>
			<Footer/>
		</>
		
	)

} 
export default Fail