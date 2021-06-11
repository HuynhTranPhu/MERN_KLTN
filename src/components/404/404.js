import React from 'react'
import TopBar from '../Common/TopBar/TopBar'
import NavBar from '../Common/NavBar/index'
import BottomBar from '../Common/BottomBar/index'
import { useTranslation } from 'react-i18next'
import Footer from '../Common/Footer/Footer'
const NotFound = () => {
	const { t } = useTranslation(['404']);
	return <div>
			<TopBar/>
			<BottomBar  ></BottomBar>
			<NavBar/>
			<div className="container text-center">
				<div className="content-404">
					<img src="/img/404.png" className="img-responsive" alt="" />
					<h1><b>OPPS!</b> {t('404:find_this_page')}</h1>
					<p>{t('404:so_it_looks_like_you_brock_something')}</p>
					<div  style={{height:"80px"}}></div>
				</div>
			</div>
			<Footer/>
		</div>
}

    

export default NotFound