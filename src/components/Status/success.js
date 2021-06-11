import React from 'react'
import TopBar from '../Common/TopBar/TopBar'
import NavBar from '../Common/NavBar/index'
import BottomBar from '../Common/BottomBar/index'
import { useTranslation } from 'react-i18next'
import Footer from '../Common/Footer/Footer'
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
					<div  style={{height:"80px"}}></div>
				</div>
			</div>
			<Footer/>
		</>
		
	)
}
export default Success