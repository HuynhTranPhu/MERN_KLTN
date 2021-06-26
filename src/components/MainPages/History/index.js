import React, { useEffect, useState } from 'react';

import TopBar from '../../Common/TopBar/TopBar';
import NavBar from '../../Common/NavBar/index';
import BottomBar from '../../Common/BottomBar/index';
import { useDispatch, useSelector } from 'react-redux';
import { getOrderByType, historyGet } from '../../../actions/orderActions';

import FooterPage from '../../Common/Footer/Footer';
import ScrollToTopBtn from '../../Common/ScrollToTop/ScrollToTop';

import SwipeableViews from 'react-swipeable-views';
import { useTheme } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';
import HistoryItem from './HistoryItem';
import { useTranslation } from 'react-i18next';
  
function TabPanel(props) {
const { children, value, index, ...other } = props;

return (
    <div
        role="tabpanel"
        hidden={value !== index}
        id={`full-width-tabpanel-${index}`}
        aria-labelledby={`full-width-tab-${index}`}
        {...other}
        >
        {value === index && (
            <Box p={6}>
            <Typography>{children}</Typography>
            </Box>
        )}
    </div>
);
}
function a11yProps(index) {
    return {
      id: `full-width-tab-${index}`,
      'aria-controls': `full-width-tabpanel-${index}`,
    };
  }
  
const History = () => {
    const { t } = useTranslation(['mainpages_history']);
    const historyOrder = useSelector(state => state.historyOrder);
    const {history, loading, error } = historyOrder;

    const getOrdersByType = useSelector(state => state.getOrdersByType);
    const {ordersByTypes, loading1, error1 } = getOrdersByType;

    const userLogin = useSelector(state => state.userLogin);
    const { userInfo} = userLogin;
    const dispatch = useDispatch();
    //const cartItems=[];
   
    
    //const classes = useStyles();
    const theme = useTheme();
    const [value, setValue] = useState(0);

    const handleChange = (event, newValue) => {
        setValue(newValue);
        //console.log(newValue)
        dispatch(getOrderByType(userInfo.newUser._id, newValue, ''));
        if(newValue===5){
            dispatch(getOrderByType(userInfo.newUser._id, '', 'cancelled'));
        }
    };

    const handleChangeIndex = (index) => {
        setValue(index);
    };



    useEffect(() => {
            dispatch(historyGet(userInfo.newUser._id));

        return () => {
            //
        };
    }, [dispatch, userInfo.newUser._id])
   
    return (
        <div>
            <TopBar/>
            <BottomBar ></BottomBar>
            <NavBar/>
            <h1 className="Order-title">{t('mainpages_history:order_history')}</h1>   
                <div className="container-fluid" >
                    <AppBar position="static" color="default" >
                        <Tabs
                        value={value}
                        onChange={handleChange}
                        indicatorColor="primary"
                        textColor="primary"
                        variant="fullWidth"
                        aria-label="full width tabs example"
                        >
                        <Tab label={t('mainpages_history:all')} {...a11yProps(0)} />
                        <Tab label={t('mainpages_history:received')} {...a11yProps(1)} />
                        <Tab label={t('mainpages_history:packed')} {...a11yProps(2)} />
                        <Tab label={t('mainpages_history:shipped')} {...a11yProps(3)} />
                        <Tab label={t('mainpages_history:delivered')} {...a11yProps(4)} />
                        <Tab label={t('mainpages_history:canceled')} {...a11yProps(5)} />
                        </Tabs>
                    </AppBar>
                    <SwipeableViews
                        axis={theme.direction === 'rtl' ? 'x-reverse' : 'x'}
                        index={value}
                        onChangeIndex={handleChangeIndex}
                    >
                        <TabPanel value={value} index={0} dir={theme.direction}>
                         <HistoryItem history={history} loading={loading} error={error}/>
                                
                        </TabPanel>
                        <TabPanel value={value} index={1} dir={theme.direction} >
                          <HistoryItem history={ordersByTypes} loading={loading1} error={error1}/>
                        </TabPanel>
                        <TabPanel value={value} index={2} dir={theme.direction}>
                           <HistoryItem history={ordersByTypes} loading={loading1} error={error1}/>
                        </TabPanel>
                        <TabPanel value={value} index={3} dir={theme.direction}>
                          <HistoryItem history={ordersByTypes} loading={loading1} error={error1}/>
                        </TabPanel>
                        <TabPanel value={value} index={4} dir={theme.direction}>
                          <HistoryItem history={ordersByTypes} loading={loading1} error={error1}/>
                        </TabPanel>
                        <TabPanel value={value} index={5} dir={theme.direction}>
                           <HistoryItem history={ordersByTypes} loading={loading1} error={error1}/>
                        </TabPanel>
                    </SwipeableViews>
                </div>
                <FooterPage/>
                <ScrollToTopBtn />
    
        </div>
       
    );
};

export default History;