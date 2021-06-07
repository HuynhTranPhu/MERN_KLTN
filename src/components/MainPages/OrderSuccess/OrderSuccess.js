import React from 'react'
import { Link} from 'react-router-dom'
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
				<img src="/img/confirm.png" className="img-responsive" alt="" />
				<h1><b>{t('mainpages_ordersuccess:congratulations')}
				</b> {t('mainpages_ordersuccess:your_order_had_been_place_order')}</h1>
				<h2><Link to="/">{t('mainpages_ordersuccess:bring_me_back_home')}</Link></h2>
			</div>
		</div>
		<Footer/>

	</div>

}
	
    
export default OrderSuccess