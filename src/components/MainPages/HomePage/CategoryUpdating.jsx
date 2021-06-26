import React from 'react'
import TopBar from '../../Common/TopBar/TopBar';
import NavBar from '../../Common/NavBar/index';
import  BottomBar from '../../Common/BottomBar/index';
import FooterPage from '../../Common/Footer/Footer';
import { useTranslation } from 'react-i18next';
function CategoryUpdating() {

    const { t } = useTranslation(['mainpages_home']);
    return (
        <div>
            <TopBar/>
            <BottomBar  ></BottomBar>
            <NavBar/>
            <p className="text-center font-weight-bold">{t('mainpages_home:update')}</p>
            <div  style={{height:"200px"}}></div>
            <FooterPage/>
        </div>
    )
}

export default CategoryUpdating
