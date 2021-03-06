import React from 'react'
import TopBar from '../../Common/TopBar/TopBar'
import NavBar from '../../Common/NavBar/index'
import BottomBar from '../../Common/BottomBar/index'
import Footer from '../../Common/Footer/Footer'
import { useTranslation } from 'react-i18next'
const OrderSuccess = () => {
	const { t } = useTranslation(['mainpages_ordersuccess']);
	return <div>
		<TopBar/>
		<BottomBar></BottomBar>
		<NavBar/>
		<div className="container text-center">
			<div className="content-404">
				<img src="/img/confirm.png" className="img-responsive-order-success" alt="" />
				<h3>{t('mainpages_ordersuccess:your_order_had_been_place_order')}</h3>
				<div  style={{height:"150px"}}></div>
			</div>
		</div>
		<Footer/>

	</div>

}
	
    
export default OrderSuccess