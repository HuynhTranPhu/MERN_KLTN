import React from 'react'
import { useTranslation } from 'react-i18next'
import TopBar from '../Common/TopBar/TopBar'
import NavBar from '../Common/NavBar/index'
import BottomBar from '../Common/BottomBar/index'
import Footer from '../Common/Footer/Footer'
const Fail = () =>{
	const { t } = useTranslation(['status_fail']);
	return(
		<>
			<TopBar/>
			<BottomBar ></BottomBar>
            <NavBar/>
			<div className="container text-center">
				<div className="content-404">
					<h1><b>OPPS!</b>{t('status_fail:fail')}</h1>
					<p>{t('status_fail:so_it_looks_like_you_brock_something')}</p>
					<div  style={{height:"80px"}}></div>
				</div>
			</div>
			<Footer/>
		</>
		
	)

} 
export default Fail