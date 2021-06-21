import React from 'react'
import FooterPage from '../Footer/Footer'
import TopBar from '../TopBar/TopBar'
import BottomBar from '../BottomBar/index'
import NavBar from '../NavBar/index'
import ScrollToTop from '../ScrollToTop/ScrollToTop'
import './index.css';
import { useTranslation } from 'react-i18next'

function Size() {
    const { t } = useTranslation(['size_chart']);
    return (
        <>
            <TopBar/>
            <BottomBar  ></BottomBar>
            <NavBar/>
            <div className="site-content">
            <h1 className="text-center mb-3">{t('size_chart:guide_size')}</h1>
            <div className="container">
            <div className="size-chart__heading">
                <h4 className="size-chart__title" style={{fontSize: '25px'}}>
                <img className=" ls-is-cached lazyloaded" src="https://www.coolmate.me/images/star.svg" alt="#" />
                Size <span className="text--bold">{t('size_chart:shirt')}</span>
                </h4>
            </div>
            <p className="text--italic">* {t('size_chart:text__italic')}</p>
            <h4 className="text-center mt-4 mb-4">
                <span className="text--primary">1.</span>
                <span className="text--bold">Áo Sơ mi nam Easycare dài tay</span>
            </h4>
            <div className="mobile--hidden">
                <div className="grid mt-4 ">
                <div className="grid__column nine-twelfths mobile--one-whole">
                    <table className="size-chart__table">
                    <tbody>
                        <tr>
                        <td><span className="title-text text--primary text--bold">{t('size_chart:Symbols')}</span></td>
                        <td>
                            <span className="title-text text--primary text--bold">S</span>
                            <span className="sub-text">
                            1m55 - 1m59<br />
                            48kg - 54kg
                            </span>
                        </td>
                        <td>
                            <span className="title-text text--primary text--bold">M</span>
                            <span className="sub-text">
                            1m60 - 1m65<br />55kg - 61kg</span>
                        </td>
                        <td>
                            <span className="title-text text--primary text--bold">L</span>
                            <span className="sub-text">1m66 - 1m72<br />62kg - 68kg</span>
                        </td>
                        <td>
                            <span className="title-text text--primary text--bold">XL</span>
                            <span className="sub-text">1m72 - 1m77<br />69kg - 75kg</span>
                        </td>
                        <td>
                            <span className="title-text text--primary text--bold">2XL</span>
                            <span className="sub-text">1m77 - 1m83<br />76kg - 82kg</span>
                        </td>
                        </tr>
                        <tr>
                        <td><span className="text--bold">(A) {t('size_chart:Shirt_long')}</span></td>
                        <td>73</td>
                        <td>74</td>
                        <td>75</td>
                        <td>76</td>
                        <td>77</td>
                        </tr>
                        <tr>
                        <td><span className="text--bold">(B) {t('size_chart:horizon_chest')}</span></td>
                        <td>49</td>
                        <td>51</td>
                        <td>53</td>
                        <td>55</td>
                        <td>57</td>
                        </tr>
                        <tr>
                        <td><span className="text--bold">(C) {t('size_chart:long_hand')}</span></td>
                        <td>58</td>
                        <td>59</td>
                        <td>60</td>
                        <td>61</td>
                        <td>62</td>
                        </tr>
                        <tr>
                        <td><span className="text--bold">(D) {t('size_chart:width_shoulder')}</span></td>
                        <td>44</td>
                        <td>45</td>
                        <td>46</td>
                        <td>47</td>
                        <td>48</td>
                        </tr>
                    </tbody>
                    </table>
                </div>
                <div className="grid__column three-twelfths mobile--one-whole">
                    <img src="/img/size-chart-1.PNG" alt="Áo Nỉ" />
                </div>
                </div>
            </div>
            <div className="tablet--hidden desk--hidden large--hidden">
                <table className="size-chart__table mt-3">
                <tbody>
                    <tr>
                    <td><span className="text--primary text--bold">Size</span></td>
                    <td colSpan={2}><span className="text--bold">(A) {t('size_chart:Shirt_long')} - (B) {t('size_chart:horizon_chest')} <br /> (C) {t('size_chart:long_hand')} - (D) {t('size_chart:width_shoulder')}</span>
                    </td>
                    </tr>
                    <tr>
                    <td><span className="text--primary text--bold">S</span><span className="sub-text">1m55 - 1m59<br />48kg - 61kg</span></td>
                    <td>
                        <p>A: 73</p>
                        <p>B: 49</p>
                    </td>
                    <td>
                        <p>C: 58</p>
                        <p>D: 44</p>
                    </td>
                    </tr>
                    <tr>
                    <td><span className="text--primary text--bold">M</span><span className="sub-text">1m60 - 1m65<br />55kg - 61kg</span></td>
                    <td>
                        <p>A: 74</p>
                        <p>B: 51</p>
                    </td>
                    <td>
                        <p>C: 59</p>
                        <p>D: 45</p>
                    </td>
                    </tr>
                    <tr>
                    <td><span className="text--primary text--bold">L</span><span className="sub-text">1m66 - 1m72<br />62kg - 68kg</span></td>
                    <td>
                        <p>A: 75</p>
                        <p>B: 53</p>
                    </td>
                    <td>
                        <p>C: 60</p>
                        <p>D: 46</p>
                    </td>
                    </tr>
                    <tr>
                    <td><span className="text--primary text--bold">XL</span><span className="sub-text">1m72 - 1m77<br />69kg - 75kg</span></td>
                    <td>
                        <p>A: 76</p>
                        <p>B: 55</p>
                    </td>
                    <td>
                        <p>C: 61</p>
                        <p>D: 47</p>
                    </td>
                    </tr>
                    <tr>
                    <td><span className="text--primary text--bold">2XL</span><span className="sub-text">1m77 - 1m83<br />76kg - 82kg</span></td>
                    <td>
                        <p>A: 77</p>
                        <p>B: 57</p>
                    </td>
                    <td>
                        <p>C: 62</p>
                        <p>D: 48</p>
                    </td>
                    </tr>
                </tbody>
                </table>
                <img src="/img/size-chart-1.PNG" alt="Áo Nỉ" />
            </div>
            <h4 className="text-center mt-4 mb-4">
                <span className="text--primary">2.</span>
                <span className="text--bold">Áo Sơ mi nam Easycare Ngắn tay</span>
            </h4>
            <div className="mobile--hidden">
                <div className="grid  mt-4 align-items-center">
                    <div className="grid__column nine-twelfths mobile--one-whole">
                        <table className="size-chart__table">
                        <tbody>
                            <tr>
                            <td><span className="title-text text--primary text--bold">{t('size_chart:Symbols')}</span></td>
                            <td>
                                <span className="title-text text--primary text--bold">S</span>
                                <span className="sub-text">
                                1m55 - 1m59<br />
                                48kg - 54kg
                                </span>
                            </td>
                            <td>
                                <span className="title-text text--primary text--bold">M</span>
                                <span className="sub-text">
                                1m60 - 1m65<br />55kg - 61kg</span>
                            </td>
                            <td>
                                <span className="title-text text--primary text--bold">L</span>
                                <span className="sub-text">1m66 - 1m72<br />62kg - 68kg</span>
                            </td>
                            <td>
                                <span className="title-text text--primary text--bold">XL</span>
                                <span className="sub-text">1m72 - 1m77<br />69kg - 75kg</span>
                            </td>
                            <td>
                                <span className="title-text text--primary text--bold">2XL</span>
                                <span className="sub-text">1m77 - 1m83<br />76kg - 82kg</span>
                            </td>
                            </tr>
                            <tr>
                            <td><span className="text--bold">(A) {t('size_chart:Shirt_long')}</span></td>
                            <td>73</td>
                            <td>74</td>
                            <td>75</td>
                            <td>76</td>
                            <td>77</td>
                            </tr>
                            <tr>
                            <td><span className="text--bold">(B) {t('size_chart:horizon_chest')}</span></td>
                            <td>49</td>
                            <td>51</td>
                            <td>53</td>
                            <td>55</td>
                            <td>57</td>
                            </tr>
                            <tr>
                            <td><span className="text--bold">(C) {t('size_chart:long_hand')}</span></td>
                            <td>19</td>
                            <td>20</td>
                            <td>21</td>
                            <td>22</td>
                            <td>23</td>
                            </tr>
                            <tr>
                            <td><span className="text--bold">(D) {t('size_chart:width_shoulder')}</span></td>
                            <td>44</td>
                            <td>45</td>
                            <td>46</td>
                            <td>47</td>
                            <td>48</td>
                            </tr>
                        </tbody>
                        </table>
                    </div>
                    <div className="grid__column three-twelfths mobile--one-whole">
                        <img src="/img/size-chart-2.PNG" alt="Áo Nỉ" />
                    </div>
                </div>
            </div>
            <div className="tablet--hidden desk--hidden large--hidden">
                <table className="size-chart__table mt-3">
                <tbody>
                    <tr>
                    <td><span className="text--primary text--bold">Size</span></td>
                    <td colSpan={2}><span className="text--bold">(A) {t('size_chart:Shirt_long')} - (B) {t('size_chart:horizon_chest')} <br /> (C) {t('size_chart:long_hand')} - (D) {t('size_chart:width_shoulder')}</span>
                    </td>
                    </tr>
                    <tr>
                    <td><span className="text--primary text--bold">S</span><span className="sub-text">1m55 - 1m59<br />48kg - 61kg</span></td>
                    <td>
                        <p>A: 73</p>
                        <p>B: 49</p>
                    </td>
                    <td>
                        <p>C: 19</p>
                        <p>D: 44</p>
                    </td>
                    </tr>
                    <tr>
                    <td><span className="text--primary text--bold">M</span><span className="sub-text">1m60 - 1m65<br />55kg - 61kg</span></td>
                    <td>
                        <p>A: 74</p>
                        <p>B: 51</p>
                    </td>
                    <td>
                        <p>C: 20</p>
                        <p>D: 45</p>
                    </td>
                    </tr>
                    <tr>
                    <td><span className="text--primary text--bold">L</span><span className="sub-text">1m66 - 1m72<br />62kg - 68kg</span></td>
                    <td>
                        <p>A: 75</p>
                        <p>B: 53</p>
                    </td>
                    <td>
                        <p>C: 21</p>
                        <p>D: 46</p>
                    </td>
                    </tr>
                    <tr>
                    <td><span className="text--primary text--bold">XL</span><span className="sub-text">1m72 - 1m77<br />69kg - 75kg</span></td>
                    <td>
                        <p>A: 76</p>
                        <p>B: 55</p>
                    </td>
                    <td>
                        <p>C: 22</p>
                        <p>D: 47</p>
                    </td>
                    </tr>
                    <tr>
                    <td><span className="text--primary text--bold">2XL</span><span className="sub-text">1m77 - 1m83<br />76kg - 82kg</span></td>
                    <td>
                        <p>A: 77</p>
                        <p>B: 57</p>
                    </td>
                    <td>
                        <p>C: 23</p>
                        <p>D: 48</p>
                    </td>
                    </tr>
                </tbody>
                </table>
                <img src="/img/size-chart-2.PNG" alt="Áo Nỉ" />
            </div>
            <h4 className="text-center mt-4 mb-4">
                <span className="text--primary">3.</span>
                <span className="text--bold">ÁO THỂ THAO MAXCOOL</span>
            </h4>
            <div className="mobile--hidden">
                <div className="grid mgt--30 align--center">
                <div className="grid__column nine-twelfths mobile--one-whole">
                    <table className="size-chart__table">
                    <tbody>
                        <tr>
                        <td><span className="title-text text--primary text--bold">{t('size_chart:Symbols')}</span></td>
                        <td><span className="title-text text--primary text--bold">S</span><span className="sub-text">1m55 - 1m59<br />48kg - 54kg</span>
                        </td>
                        <td><span className="title-text text--primary text--bold">M</span><span className="sub-text">1m60 - 1m65<br />55kg - 61kg</span>
                        </td>
                        <td><span className="title-text text--primary text--bold">L</span><span className="sub-text">1m66 - 1m72<br />62kg - 68kg</span>
                        </td>
                        <td><span className="title-text text--primary text--bold">XL</span><span className="sub-text">1m72 - 1m77<br />69kg - 75kg</span>
                        </td>
                        <td><span className="title-text text--primary text--bold">2XL</span><span className="sub-text">1m77 - 1m83<br />76kg - 82kg</span>
                        </td>
                        </tr>
                        <tr>
                        <td><span className="text--bold">(A) {t('size_chart:Shirt_long')}</span></td>
                        <td>65</td>
                        <td>67</td>
                        <td>69</td>
                        <td>71</td>
                        <td>73</td>
                        </tr>
                        <tr>
                        <td><span className="text--bold">(B) {t('size_chart:horizon_chest')}</span></td>
                        <td>48</td>
                        <td>50</td>
                        <td>52</td>
                        <td>54</td>
                        <td>56</td>
                        </tr>
                        <tr>
                        <td><span className="text--bold">(C) {t('size_chart:long_hand')}</span></td>
                        <td>16</td>
                        <td>17</td>
                        <td>19</td>
                        <td>20</td>
                        <td>21</td>
                        </tr>
                        <tr>
                        <td><span className="text--bold">(D) {t('size_chart:width_shoulder')}</span></td>
                        <td>38</td>
                        <td>40</td>
                        <td>42</td>
                        <td>44</td>
                        <td>46</td>
                        </tr>
                    </tbody>
                    </table>
                </div>
                <div className="grid__column three-twelfths mobile--one-whole">
                    <img src="/img/size-chart-3.PNG" alt="Áo maxcool" />
                </div>
                </div>
            </div>
            <div className="tablet--hidden desk--hidden large--hidden">
                <table className="size-chart__table mt-3">
                <tbody>
                    <tr>
                    <td><span className="text--primary text--bold">Size</span></td>
                    <td colSpan={2}><span className="text--bold">(A) {t('size_chart:Shirt_long')} - (B) {t('size_chart:horizon_chest')} <br /> (C) {t('size_chart:long_hand')} - (D) {t('size_chart:width_shoulder')}</span>
                    </td>
                    </tr>
                    <tr>
                    <td><span className="title-text text--primary text--bold">S</span><span className="sub-text">1m55 - 1m59<br />48kg - 54kg</span></td>
                    <td>
                        <p>A: 65</p>
                        <p>B: 48</p>
                    </td>
                    <td>
                        <p>C: 16</p>
                        <p>D: 38</p>
                    </td>
                    </tr>
                    <tr>
                    <td><span className="title-text text--primary text--bold">M</span><span className="sub-text">1m60 - 1m65<br />55kg - 61kg</span></td>
                    <td>
                        <p>A: 67</p>
                        <p>B: 50</p>
                    </td>
                    <td>
                        <p>C: 17</p>
                        <p>D: 40</p>
                    </td>
                    </tr>
                    <tr>
                    <td><span className="title-text text--primary text--bold">L</span><span className="sub-text">1m66 - 1m72<br />62kg - 68kg</span></td>
                    <td>
                        <p>A: 69</p>
                        <p>B: 52</p>
                    </td>
                    <td>
                        <p>C: 19</p>
                        <p>D: 42</p>
                    </td>
                    </tr>
                    <tr>
                    <td><span className="title-text text--primary text--bold">XL</span><span className="sub-text">1m72 - 1m77<br />69kg - 75kg</span>
                    </td>
                    <td>
                        <p>A: 71</p>
                        <p>B: 54</p>
                    </td>
                    <td>
                        <p>C: 20</p>
                        <p>D: 44</p>
                    </td>
                    </tr>
                    <tr>
                    <td><span className="title-text text--primary text--bold">2XL</span><span className="sub-text">1m77 - 1m83<br />76kg - 82kg</span>
                    </td>
                    <td>
                        <p>A: 73</p>
                        <p>B: 56</p>
                    </td>
                    <td>
                        <p>C: 21</p>
                        <p>D: 46</p>
                    </td>
                    </tr>
                </tbody>
                </table>
                <img src="/img/size-chart-3.PNG" alt="Áo maxcool" />
            </div>
            <h4 className="text-center mt-4 mb-4">
                <span className="text--primary">4.</span>
                <span className="text--bold">ÁO THUN CỔ TRÒN CHẤT LIỆU COTTON COMPACT</span>
            </h4>
            <div className="mobile--hidden">
                <div className="grid mgt--30 align--center">
                <div className="grid__column nine-twelfths mobile--one-whole">
                    <table className="size-chart__table">
                    <tbody>
                        <tr>
                        <td><span className="title-text text--primary text--bold">{t('size_chart:Symbols')}</span></td>
                        <td><span className="title-text text--primary text--bold">S</span>
                            <span className="sub-text">1m55 - 1m59<br />48kg - 54kg</span>
                        </td>
                        <td><span className="title-text text--primary text--bold">M</span>
                            <span className="sub-text">1m60 - 1m65<br />55kg - 61kg</span>
                        </td>
                        <td><span className="title-text text--primary text--bold">L</span>
                            <span className="sub-text">1m66 - 1m72<br />62kg - 68kg</span>
                        </td>
                        <td><span className="title-text text--primary text--bold">XL</span>
                            <span className="sub-text">1m72 - 1m77<br />69kg - 75kg</span>
                        </td>
                        <td><span className="title-text text--primary text--bold">2XL</span>
                            <span className="sub-text">1m77 - 1m83<br />76kg - 82kg</span>
                        </td>
                        </tr>
                        <tr>
                        <td><span className="text--bold">(A) {t('size_chart:Shirt_long')}</span></td>
                        <td>65</td>
                        <td>67</td>
                        <td>69</td>
                        <td>71</td>
                        <td>73</td>
                        </tr>
                        <tr>
                        <td><span className="text--bold">(B) {t('size_chart:horizon_chest')}</span></td>
                        <td>48</td>
                        <td>50</td>
                        <td>52</td>
                        <td>54</td>
                        <td>56</td>
                        </tr>
                        <tr>
                        <td><span className="text--bold">(C) {t('size_chart:long_hand')}</span></td>
                        <td>19</td>
                        <td>20</td>
                        <td>21</td>
                        <td>22</td>
                        <td>23</td>
                        </tr>
                        <tr>
                        <td><span className="text--bold">(D) {t('size_chart:width_shoulder')}</span></td>
                        <td>41.5</td>
                        <td>43</td>
                        <td>44.5</td>
                        <td>46</td>
                        <td>47.5</td>
                        </tr>
                    </tbody>
                    </table>
                </div>
                <div className="grid__column three-twelfths mobile--one-whole">
                    <img src="/img/size-chart-4.PNG" alt="áo thun cổ tròn" />
                </div>
                </div>
            </div>
            <div className="tablet--hidden desk--hidden large--hidden">
                <table className="size-chart__table mt--3">
                <tbody>
                    <tr>
                    <td><span className="text--primary text--bold">Size</span></td>
                    <td colSpan={2}><span className="text--bold">(A) {t('size_chart:Shirt_long')} - (B) {t('size_chart:horizon_chest')} <br /> (C) {t('size_chart:long_hand')} - (D) {t('size_chart:width_shoulder')}</span>
                    </td>
                    </tr>
                    <tr>
                    <td><span className="title-text text--primary text--bold">S</span><span className="sub-text">1m55 - 1m59<br />48kg - 54kg</span></td>
                    <td>
                        <p>A: 65</p>
                        <p>B: 48</p>
                    </td>
                    <td>
                        <p>C: 19</p>
                        <p>D: 41.5</p>
                    </td>
                    </tr>
                    <tr>
                    <td><span className="title-text text--primary text--bold">M</span><span className="sub-text">1m60 - 1m65<br />55kg - 61kg</span></td>
                    <td>
                        <p>A: 67</p>
                        <p>B: 50</p>
                    </td>
                    <td>
                        <p>C: 20</p>
                        <p>D: 43</p>
                    </td>
                    </tr>
                    <tr>
                    <td><span className="title-text text--primary text--bold">L</span><span className="sub-text">1m66 - 1m72<br />62kg - 68kg</span></td>
                    <td>
                        <p>A: 69</p>
                        <p>B: 52</p>
                    </td>
                    <td>
                        <p>C: 21</p>
                        <p>D: 44.5</p>
                    </td>
                    </tr>
                    <tr>
                    <td><span className="title-text text--primary text--bold">XL</span><span className="sub-text">1m72 - 1m77<br />69kg - 75kg</span>
                    </td>
                    <td>
                        <p>A: 71</p>
                        <p>B: 54</p>
                    </td>
                    <td>
                        <p>C: 22</p>
                        <p>D: 46</p>
                    </td>
                    </tr>
                    <tr>
                    <td><span className="title-text text--primary text--bold">2XL</span><span className="sub-text">1m77 - 1m83<br />76kg - 82kg</span>
                    </td>
                    <td>
                        <p>A: 73</p>
                        <p>B: 56</p>
                    </td>
                    <td>
                        <p>C: 23</p>
                        <p>D: 47.5</p>
                    </td>
                    </tr>
                </tbody>
                </table>
                <img src="/img/size-chart-4.PNG" alt="áo thun cổ tròn" />
            </div>
            <h4 className="text-center mt-4 mb-4">
                <span className="text--primary">5.</span>
                <span className="text--bold">ÁO POLO</span>
            </h4>
            <div className="mobile--hidden">
                <div className="grid  mt--3 align--center">
                <div className="grid__column nine-twelfths mobile--one-whole">
                    <table className="size-chart__table">
                    <tbody>
                        <tr>
                        <td><span className="title-text text--primary text--bold">{t('size_chart:Symbols')}</span></td>
                        <td><span className="title-text text--primary text--bold">S</span>
                            <span className="sub-text">1m55 - 1m59<br />48kg - 54kg</span>
                        </td>
                        <td><span className="title-text text--primary text--bold">M</span>
                            <span className="sub-text">1m60 - 1m65<br />55kg - 61kg</span>
                        </td>
                        <td><span className="title-text text--primary text--bold">L</span>
                            <span className="sub-text">1m66 - 1m72<br />62kg - 68kg</span>
                        </td>
                        <td><span className="title-text text--primary text--bold">XL</span>
                            <span className="sub-text">1m72 - 1m77<br />69kg - 75kg</span>
                        </td>
                        <td><span className="title-text text--primary text--bold">2XL</span>
                            <span className="sub-text">1m77 - 1m83<br />76kg - 82kg</span>
                        </td>
                        </tr>
                        <tr>
                        <td><span className="text--bold">(A) {t('size_chart:Shirt_long')}</span></td>
                        <td>65</td>
                        <td>67</td>
                        <td>69</td>
                        <td>71</td>
                        <td>73</td>
                        </tr>
                        <tr>
                        <td><span className="text--bold">(B) {t('size_chart:horizon_chest')}</span></td>
                        <td>48</td>
                        <td>50</td>
                        <td>52</td>
                        <td>54</td>
                        <td>56</td>
                        </tr>
                        <tr>
                        <td><span className="text--bold">(C) {t('size_chart:long_hand')}</span></td>
                        <td>19.5</td>
                        <td>20.25</td>
                        <td>21</td>
                        <td>21.75</td>
                        <td>22.5</td>
                        </tr>
                        <tr>
                        <td><span className="text--bold">(D) {t('size_chart:width_shoulder')}</span></td>
                        <td>42.5</td>
                        <td>43.5</td>
                        <td>44.5</td>
                        <td>45.5</td>
                        <td>46.5</td>
                        </tr>
                    </tbody>
                    </table>
                </div>
                <div className="grid__column three-twelfths mobile--one-whole">
                    <img src="/img/size-chart-5.PNG" alt="Áo polo" />
                </div>
                </div>
            </div>
            <div className="tablet--hidden desk--hidden large--hidden">
                <table className="size-chart__table mt-3">
                <tbody>
                    <tr>
                    <td><span className="text--primary text--bold">Size</span></td>
                    <td colSpan={2}>
                        <span className="text--bold">(A) {t('size_chart:Shirt_long')} - (B) {t('size_chart:horizon_chest')} <br /> (C) {t('size_chart:long_hand')} - (D) {t('size_chart:width_shoulder')}</span>
                    </td>
                    </tr>
                    <tr>
                    <td>
                        <span className="title-text text--primary text--bold">S</span><span className="sub-text">1m55 - 1m59<br />48kg - 54kg</span>
                    </td>
                    <td>
                        <p>A: 65</p>
                        <p>B: 48</p>
                    </td>
                    <td>
                        <p>C: 19.5</p>
                        <p>D: 42.5</p>
                    </td>
                    </tr>
                    <tr>
                    <td><span className="title-text text--primary text--bold">M</span><span className="sub-text">1m60 - 1m65<br />55kg - 61kg</span>
                    </td>
                    <td>
                        <p>A: 67</p>
                        <p>B: 50</p>
                    </td>
                    <td>
                        <p>C: 20.25</p>
                        <p>D: 43.5</p>
                    </td>
                    </tr>
                    <tr>
                    <td>
                        <span className="title-text text--primary text--bold">L</span><span className="sub-text">1m66 - 1m72<br />62kg - 68kg</span>
                    </td>
                    <td>
                        <p>A: 69</p>
                        <p>B: 52</p>
                    </td>
                    <td>
                        <p>C: 21</p>
                        <p>D: 44.5</p>
                    </td>
                    </tr>
                    <tr>
                    <td>
                        <span className="title-text text--primary text--bold">XL</span><span className="sub-text">1m72 - 1m77<br />69kg - 75kg</span>
                    </td>
                    <td>
                        <p>A: 71</p>
                        <p>B: 54</p>
                    </td>
                    <td>
                        <p>C: 21.75</p>
                        <p>D: 45.5</p>
                    </td>
                    </tr>
                    <tr>
                    <td>
                        <span className="title-text text--primary text--bold">2XL</span><span className="sub-text">1m77 - 1m83<br />76kg - 82kg</span>
                    </td>
                    <td>
                        <p>A: 73</p>
                        <p>B: 56</p>
                    </td>
                    <td>
                        <p>C: 22.5</p>
                        <p>D: 46.5</p>
                    </td>
                    </tr>
                </tbody>
                </table>
                <img src="/img/size-chart-5.PNG" alt="Áo polo" />
            </div>
            <h4 className="text-center mt-4 mb-4">
                <span className="text--primary">6.</span>
                <span className="text--bold">ÁO {t('size_chart:long_hand')}</span>
            </h4>
            <div className="mobile--hidden">
                <div className="grid  mt-4 align-items-center">
                <div className="grid__column nine-twelfths mobile--one-whole">
                    <table className="size-chart__table">
                    <tbody>
                        <tr>
                        <td><span className="title-text text--primary text--bold">{t('size_chart:Symbols')}</span></td>
                        <td>
                            <span className="title-text text--primary text--bold">S</span>
                            <span className="sub-text">
                            1m55 - 1m59<br />
                            48kg - 54kg
                            </span>
                        </td>
                        <td>
                            <span className="title-text text--primary text--bold">M</span>
                            <span className="sub-text">1m60 - 1m65<br />55kg - 61kg</span>
                        </td>
                        <td>
                            <span className="title-text text--primary text--bold">L</span>
                            <span className="sub-text">1m66 - 1m72<br />62kg - 68kg</span>
                        </td>
                        <td>
                            <span className="title-text text--primary text--bold">XL</span>
                            <span className="sub-text">1m72 - 1m77<br />69kg - 75kg</span>
                        </td>
                        <td>
                            <span className="title-text text--primary text--bold">2XL</span>
                            <span className="sub-text">1m77 - 1m83<br />76kg - 82kg</span>
                        </td>
                        </tr>
                        <tr>
                        <td><span className="text--bold">(A) {t('size_chart:Shirt_long')}</span></td>
                        <td>67</td>
                        <td>69</td>
                        <td>71</td>
                        <td>73</td>
                        <td>75</td>
                        </tr>
                        <tr>
                        <td><span className="text--bold">(B) {t('size_chart:horizon_chest')}</span></td>
                        <td>48</td>
                        <td>50</td>
                        <td>52</td>
                        <td>54</td>
                        <td>56</td>
                        </tr>
                        <tr>
                        <td><span className="text--bold">(C) {t('size_chart:long_hand')}</span></td>
                        <td>60</td>
                        <td>61</td>
                        <td>62</td>
                        <td>63</td>
                        <td>64</td>
                        </tr>
                        <tr>
                        <td><span className="text--bold">(D) {t('size_chart:width_shoulder')}</span></td>
                        <td>41.5</td>
                        <td>43</td>
                        <td>44.5</td>
                        <td>46</td>
                        <td>47.5</td>
                        </tr>
                    </tbody>
                    </table>
                </div>
                <div className="grid__column three-twelfths mobile--one-whole">
                    <img src="/img/size-chart-6.PNG" alt="Áo nỉ" />
                </div>
                </div>
            </div>
            <div className="tablet--hidden desk--hidden large--hidden">
                <table className="size-chart__table mt-3">
                <tbody>
                    <tr>
                    <td><span className="text--primary text--bold">Size</span></td>
                    <td colSpan={2} style={{textAlign: 'left'}}>
                        <span className="text--bold">(A)</span> {t('size_chart:Shirt_long')}<br />
                        <span className="text--bold">(B)</span> {t('size_chart:horizon_chest')}<br />
                        <span className="text--bold">(C)</span> {t('size_chart:long_hand')}<br />
                        <span className="text--bold">(D)</span> {t('size_chart:width_shoulder')}<br />
                    </td>
                    </tr>
                    <tr>
                    <td><span className="text--primary text--bold">S</span><span className="sub-text">1m55 - 1m59<br />48kg - 61kg</span></td>
                    <td>
                        <p>A: 67</p>
                        <p>B: 48</p>
                    </td>
                    <td>
                        <p>C: 60</p>
                        <p>D: 41.5</p>
                    </td>
                    </tr>
                    <tr>
                    <td><span className="text--primary text--bold">M</span><span className="sub-text">1m60 - 1m65<br />55kg - 61kg</span></td>
                    <td>
                        <p>A: 69</p>
                        <p>B: 50</p>
                    </td>
                    <td>
                        <p>C: 61</p>
                        <p>D: 43</p>
                    </td>
                    </tr>
                    <tr>
                    <td><span className="text--primary text--bold">L</span><span className="sub-text">1m66 - 1m72<br />62kg - 68kg</span></td>
                    <td>
                        <p>A: 71</p>
                        <p>B: 52</p>
                    </td>
                    <td>
                        <p>C: 62</p>
                        <p>D: 44.5</p>
                    </td>
                    </tr>
                    <tr>
                    <td><span className="text--primary text--bold">XL</span><span className="sub-text">1m72 - 1m77<br />69kg - 75kg</span></td>
                    <td>
                        <p>A: 73</p>
                        <p>B: 54</p>
                    </td>
                    <td>
                        <p>C: 63</p>
                        <p>D: 46</p>
                    </td>
                    </tr>
                    <tr>
                    <td><span className="text--primary text--bold">2XL</span><span className="sub-text">1m77 - 1m83<br />76kg - 82kg</span></td>
                    <td>
                        <p>A: 75</p>
                        <p>B: 56</p>
                    </td>
                    <td>
                        <p>C: 64</p>
                        <p>D: 47.5</p>
                    </td>
                    </tr>
                </tbody>
                </table>
                <img src="/img/size-chart-6.PNG" alt="Áo nỉ" />
            </div>
            <h4 className="text-center mt-4 mb-4">
                <span className="text--primary">7.</span>
                <span className="text--bold">ÁO NỈ &amp; ÁO HOODIE ACTIVE GEM</span>
            </h4>
            <div className="mobile--hidden">
                <div className="grid  mt-4 align-items-center">
                <div className="grid__column nine-twelfths mobile--one-whole">
                    <table className="size-chart__table">
                    <tbody>
                        <tr>
                        <td><span className="title-text text--primary text--bold">{t('size_chart:Symbols')}</span></td>
                        <td>
                            <span className="title-text text--primary text--bold">S</span>
                            <span className="sub-text">
                            1m55 - 1m59<br />
                            48kg - 54kg
                            </span>
                        </td>
                        <td>
                            <span className="title-text text--primary text--bold">M</span>
                            <span className="sub-text">1m60 - 1m65<br />55kg - 61kg</span>
                        </td>
                        <td>
                            <span className="title-text text--primary text--bold">L</span>
                            <span className="sub-text">1m66 - 1m72<br />62kg - 68kg</span>
                        </td>
                        <td>
                            <span className="title-text text--primary text--bold">XL</span>
                            <span className="sub-text">1m72 - 1m77<br />69kg - 75kg</span>
                        </td>
                        <td>
                            <span className="title-text text--primary text--bold">2XL</span>
                            <span className="sub-text">1m77 - 1m83<br />76kg - 82kg</span>
                        </td>
                        </tr>
                        <tr>
                        <td><span className="text--bold">(A) {t('size_chart:Shirt_long')}</span></td>
                        <td>67</td>
                        <td>69</td>
                        <td>71</td>
                        <td>73</td>
                        <td>75</td>
                        </tr>
                        <tr>
                        <td><span className="text--bold">(B) {t('size_chart:horizon_chest')}</span></td>
                        <td>48</td>
                        <td>50</td>
                        <td>52</td>
                        <td>54</td>
                        <td>56</td>
                        </tr>
                        <tr>
                        <td><span className="text--bold">(C) {t('size_chart:long_hand')}</span></td>
                        <td>57</td>
                        <td>58</td>
                        <td>59</td>
                        <td>60</td>
                        <td>61</td>
                        </tr>
                        <tr>
                        <td><span className="text--bold">(D) {t('size_chart:width_shoulder')}</span></td>
                        <td>42</td>
                        <td>44</td>
                        <td>46</td>
                        <td>48</td>
                        <td>50</td>
                        </tr>
                    </tbody>
                    </table>
                </div>
                <div className="grid__column three-twelfths mobile--one-whole">
                    <img src="img/size-chart-7.PNG" alt="Áo Nỉ" />
                </div>
                </div>
            </div>
            <div className="tablet--hidden desk--hidden large--hidden">
                <table className="size-chart__table mt-3">
                <tbody>
                    <tr>
                    <td><span className="text--primary text--bold">Size</span></td>
                    <td colSpan={2}><span className="text--bold">(A) {t('size_chart:Shirt_long')} - (B) {t('size_chart:horizon_chest')} <br /> (C) {t('size_chart:long_hand')} - (D) {t('size_chart:width_shoulder')}</span>
                    </td>
                    </tr>
                    <tr>
                    <td><span className="text--primary text--bold">S</span><span className="sub-text">1m55 - 1m59<br />48kg - 61kg</span></td>
                    <td>
                        <p>A: 67</p>
                        <p>B: 48</p>
                    </td>
                    <td>
                        <p>C: 57</p>
                        <p>D: 42</p>
                    </td>
                    </tr>
                    <tr>
                    <td><span className="text--primary text--bold">M</span><span className="sub-text">1m60 - 1m65<br />55kg - 61kg</span></td>
                    <td>
                        <p>A: 69</p>
                        <p>B: 50</p>
                    </td>
                    <td>
                        <p>C: 58</p>
                        <p>D: 44</p>
                    </td>
                    </tr>
                    <tr>
                    <td><span className="text--primary text--bold">L</span><span className="sub-text">1m66 - 1m72<br />62kg - 68kg</span></td>
                    <td>
                        <p>A: 71</p>
                        <p>B: 52</p>
                    </td>
                    <td>
                        <p>C: 59</p>
                        <p>D: 46</p>
                    </td>
                    </tr>
                    <tr>
                    <td><span className="text--primary text--bold">XL</span><span className="sub-text">1m72 - 1m77<br />69kg - 75kg</span></td>
                    <td>
                        <p>A: 73</p>
                        <p>B: 54</p>
                    </td>
                    <td>
                        <p>C: 60</p>
                        <p>D: 48</p>
                    </td>
                    </tr>
                    <tr>
                    <td><span className="text--primary text--bold">2XL</span><span className="sub-text">1m77 - 1m83<br />76kg - 82kg</span></td>
                    <td>
                        <p>A: 75</p>
                        <p>B: 56</p>
                    </td>
                    <td>
                        <p>C: 61</p>
                        <p>D: 50</p>
                    </td>
                    </tr>
                </tbody>
                </table>
                <img src="img/size-chart-7.PNG" alt="Áo Nỉ" />
            </div>
            <h4 className="text-center mt-4 mb-4">
                <span className="text--primary">8.</span>
                <span className="text--bold">ÁO GIỮ NHIỆT</span>
            </h4>
            <div className="mobile--hidden">
                <div className="grid  mt-4 align-items-center">
                <div className="grid__column nine-twelfths mobile--one-whole">
                    <table className="size-chart__table">
                    <tbody>
                        <tr>
                        <td><span className="title-text text--primary text--bold">{t('size_chart:Symbols')}</span></td>
                        <td>
                            <span className="title-text text--primary text--bold">S</span>
                            <span className="sub-text">
                            1m55 - 1m59<br />
                            48kg - 54kg
                            </span>
                        </td>
                        <td>
                            <span className="title-text text--primary text--bold">M</span>
                            <span className="sub-text">1m60 - 1m65<br />55kg - 61kg</span>
                        </td>
                        <td>
                            <span className="title-text text--primary text--bold">L</span>
                            <span className="sub-text">1m66 - 1m72<br />62kg - 68kg</span>
                        </td>
                        <td>
                            <span className="title-text text--primary text--bold">XL</span>
                            <span className="sub-text">1m72 - 1m77<br />69kg - 75kg</span>
                        </td>
                        <td>
                            <span className="title-text text--primary text--bold">2XL</span>
                            <span className="sub-text">1m77 - 1m83<br />76kg - 82kg</span>
                        </td>
                        </tr>
                        <tr>
                        <td><span className="text--bold">(A) {t('size_chart:Shirt_long')}</span></td>
                        <td>65</td>
                        <td>67</td>
                        <td>69</td>
                        <td>71</td>
                        <td>73</td>
                        </tr>
                        <tr>
                        <td><span className="text--bold">(B) {t('size_chart:horizon_chest')}</span></td>
                        <td>44</td>
                        <td>46</td>
                        <td>48</td>
                        <td>50</td>
                        <td>52</td>
                        </tr>
                        <tr>
                        <td><span className="text--bold">(C) {t('size_chart:long_hand')}</span></td>
                        <td>59</td>
                        <td>60</td>
                        <td>61</td>
                        <td>62</td>
                        <td>63</td>
                        </tr>
                        <tr>
                        <td><span className="text--bold">(D) {t('size_chart:width_shoulder')}</span></td>
                        <td>37</td>
                        <td>39</td>
                        <td>41</td>
                        <td>43</td>
                        <td>45</td>
                        </tr>
                    </tbody>
                    </table>
                </div>
                <div className="grid__column three-twelfths mobile--one-whole">
                    <img src="/img/size-chart-8.PNG" alt="Áo Nỉ" />
                </div>
                </div>
            </div>
            <div className="tablet--hidden desk--hidden large--hidden">
                <table className="size-chart__table mt-3">
                <tbody>
                    <tr>
                    <td><span className="text--primary text--bold">Size</span></td>
                    <td colSpan={2}><span className="text--bold">(A) {t('size_chart:Shirt_long')} - (B) {t('size_chart:horizon_chest')} <br /> (C) {t('size_chart:long_hand')} - (D) {t('size_chart:width_shoulder')}</span>
                    </td>
                    </tr>
                    <tr>
                    <td><span className="text--primary text--bold">S</span><span className="sub-text">1m55 - 1m59<br />48kg - 61kg</span></td>
                    <td>
                        <p>A: 65</p>
                        <p>B: 44</p>
                    </td>
                    <td>
                        <p>C: 59</p>
                        <p>D: 37</p>
                    </td>
                    </tr>
                    <tr>
                    <td><span className="text--primary text--bold">M</span><span className="sub-text">1m60 - 1m65<br />55kg - 61kg</span></td>
                    <td>
                        <p>A: 67</p>
                        <p>B: 46</p>
                    </td>
                    <td>
                        <p>C: 60</p>
                        <p>D: 39</p>
                    </td>
                    </tr>
                    <tr>
                    <td><span className="text--primary text--bold">L</span><span className="sub-text">1m66 - 1m72<br />62kg - 68kg</span></td>
                    <td>
                        <p>A: 69</p>
                        <p>B: 48</p>
                    </td>
                    <td>
                        <p>C: 61</p>
                        <p>D: 41</p>
                    </td>
                    </tr>
                    <tr>
                    <td><span className="text--primary text--bold">XL</span><span className="sub-text">1m72 - 1m77<br />69kg - 75kg</span></td>
                    <td>
                        <p>A: 71</p>
                        <p>B: 50</p>
                    </td>
                    <td>
                        <p>C: 62</p>
                        <p>D: 43</p>
                    </td>
                    </tr>
                    <tr>
                    <td><span className="text--primary text--bold">2XL</span><span className="sub-text">1m77 - 1m83<br />76kg - 82kg</span></td>
                    <td>
                        <p>A: 73</p>
                        <p>B: 52</p>
                    </td>
                    <td>
                        <p>C: 63</p>
                        <p>D: 45</p>
                    </td>
                    </tr>
                </tbody>
                </table>
                <img src="/img/size-chart-8.PNG" alt="Áo Nỉ" />
            </div>
           
            <div className="size-chart__heading mt-3">
                <h4 className="size-chart__title" style={{fontSize: '25px'}}>
                <img className="lazyload" src="https://www.coolmate.me/images/star.svg" alt="#" />
                Size <span className="text--bold"> Quần</span>
                </h4>
            </div>
            <h4 className="text-center mt-4 mb-4">
                <span className="text--primary">1.</span>
                <span className="text--bold">QUẦN SHORT ALL DAY</span>
            </h4>
            <div className="mobile--hidden">
                <div className="grid  mt-4 align-items-center">
                <div className="grid__column nine-twelfths mobile--one-whole">
                    <table className="size-chart__table">
                    <tbody>
                        <tr>
                        <td><span className="title-text text--primary text--bold">{t('size_chart:Symbols')}</span></td>
                        <td><span className="title-text text--primary text--bold">M</span><span className="sub-text">1m55 - 1m62<br />51kg - 59kg</span>
                        </td>
                        <td><span className="title-text text--primary text--bold">L</span><span className="sub-text">1m63 - 1m69<br />60kg - 68kg</span>
                        </td>
                        <td><span className="title-text text--primary text--bold">XL</span><span className="sub-text">1m70 - 1m76<br />69kg - 77kg</span>
                        </td>
                        <td><span className="title-text text--primary text--bold">2XL</span><span className="sub-text">1m77 - 1m83<br />78kg - 84kg</span>
                        </td>
                        </tr>
                        <tr>
                        <td><span className="text--bold">(A) {t('size_chart:width_cap')}</span></td>
                        <td>72</td>
                        <td>76</td>
                        <td>80</td>
                        <td>84</td>
                        </tr>
                        <tr>
                        <td><span className="text--bold">(B) {t('size_chart:width_mong')}</span></td>
                        <td>50</td>
                        <td>52</td>
                        <td>54</td>
                        <td>56</td>
                        </tr>
                        <tr>
                        <td><span className="text--bold">(C) {t('size_chart:width_ong')}</span></td>
                        <td>26.5</td>
                        <td>27.5</td>
                        <td>28.5</td>
                        <td>29.5</td>
                        </tr>
                        <tr>
                        <td><span className="text--bold">(D) {t('size_chart:long_trousers')}</span></td>
                        <td>45</td>
                        <td>45.5</td>
                        <td>46</td>
                        <td>36.5</td>
                        </tr>
                    </tbody>
                    </table>
                </div>
                <div className="grid__column three-twelfths mobile--one-whole">
                    <img src="/img/size-chart-9.PNG" alt="" />
                </div>
                </div>
            </div>
            <div className="tablet--hidden desk--hidden large--hidden">
                <table className="size-chart__table mt-3">
                <tbody>
                    <tr>
                    <td><span className="text--primary text--bold">Size</span></td>
                    <td colSpan={2}><span className="text--bold">(A) {t('size_chart:width_cap')} - (B) {t('size_chart:width_mong')} <br /> (C)  {t('size_chart:width_ong')} - (D) {t('size_chart:long_trousers')}</span>
                    </td>
                    </tr>
                    <tr>
                    <td><span className="text--primary text--bold">M</span><span className="sub-text">1m55 - 1m62<br />51kg - 59kg</span></td>
                    <td>
                        <p>A: 72</p>
                        <p>B: 50</p>
                    </td>
                    <td>
                        <p>C: 26.5</p>
                        <p>D: 45</p>
                    </td>
                    </tr>
                    <tr>
                    <td><span className="text--primary text--bold">L</span><span className="sub-text">1m63 - 1m69<br />60kg - 68kg</span></td>
                    <td>
                        <p>A: 76</p>
                        <p>B: 52</p>
                    </td>
                    <td>
                        <p>C: 27.5</p>
                        <p>D: 45.5</p>
                    </td>
                    </tr>
                    <tr>
                    <td><span className="text--primary text--bold">XL</span><span className="sub-text">1m70 - 1m76<br />69kg - 77kg</span></td>
                    <td>
                        <p>A: 80</p>
                        <p>B: 54</p>
                    </td>
                    <td>
                        <p>C: 28.5</p>
                        <p>D: 46</p>
                    </td>
                    </tr>
                    <tr>
                    <td><span className="text--primary text--bold">2XL</span><span className="sub-text">1m77 - 1m83<br />78kg - 84kg</span></td>
                    <td>
                        <p>A: 84</p>
                        <p>B: 56</p>
                    </td>
                    <td>
                        <p>C: 29.5</p>
                        <p>D: 36.5</p>
                    </td>
                    </tr>
                </tbody>
                </table>
                <img src="/img/size-chart-9.PNG" alt="" />
            </div>
            <h4 className="text-center mt-4 mb-4">
                <span className="text--primary">2.</span>
                <span className="text--bold">QUẦN SHORT NỈ FRENCH TERRY &amp; ACTIVE GEM</span>
            </h4>
            <div className="mobile--hidden">
                <div className="grid mt-3">
                <div className="grid__column nine-twelfths mobile--one-whole">
                    <table className="size-chart__table">
                    <tbody>
                        <tr>
                        <td><span className="title-text text--primary text--bold">{t('size_chart:Symbols')}</span></td>
                        <td><span className="title-text text--primary text--bold">M</span><span className="sub-text">1m55 - 1m62<br />51kg - 59kg</span>
                        </td>
                        <td><span className="title-text text--primary text--bold">L</span><span className="sub-text">1m63 - 1m69<br />60kg - 68kg</span>
                        </td>
                        <td><span className="title-text text--primary text--bold">XL</span><span className="sub-text">1m70 - 1m76<br />69kg - 77kg</span>
                        </td>
                        <td><span className="title-text text--primary text--bold">2XL</span><span className="sub-text">1m77 - 1m83<br />78kg - 84kg</span>
                        </td>
                        </tr>
                        <tr>
                        <td><span className="text--bold">(A) {t('size_chart:width_cap')}</span></td>
                        <td>36</td>
                        <td>38</td>
                        <td>40</td>
                        <td>42</td>
                        </tr>
                        <tr>
                        <td><span className="text--bold">(B) {t('size_chart:width_mong')}</span></td>
                        <td>50</td>
                        <td>52</td>
                        <td>54</td>
                        <td>56</td>
                        </tr>
                        <tr>
                        <td><span className="text--bold">(C)  {t('size_chart:width_ong')}</span></td>
                        <td>26.5</td>
                        <td>27.5</td>
                        <td>28.5</td>
                        <td>29.5</td>
                        </tr>
                        <tr>
                        <td><span className="text--bold">(D) {t('size_chart:long_trousers')}</span></td>
                        <td>45</td>
                        <td>45.5</td>
                        <td>46</td>
                        <td>46.5</td>
                        </tr>
                    </tbody>
                    </table>
                </div>
                <div className="grid__column three-twelfths mobile--one-whole">
                    <img src="/img/size-chart-10.PNG" alt="" />
                </div>
                </div>
            </div>
            <div className="tablet--hidden desk--hidden large--hidden">
                <table className="size-chart__table mt-3">
                <tbody>
                    <tr>
                    <td><span className="text--primary text--bold">Size</span></td>
                    <td colSpan={2}><span className="text--bold">(A) {t('size_chart:width_cap')}<br />(B) {t('size_chart:width_mong')} <br /> (C) RỘNG NGANG ỐNG <br />(D) {t('size_chart:long_trousers')}</span>
                    </td>
                    </tr>
                    <tr>
                    <td><span className="text--primary text--bold">M</span><span className="sub-text">1m55 - 1m62<br />51kg - 59kg</span></td>
                    <td>
                        <p>A: 36</p>
                        <p>B: 50</p>
                    </td>
                    <td>
                        <p>C: 26.5</p>
                        <p>D: 45</p>
                    </td>
                    </tr>
                    <tr>
                    <td><span className="text--primary text--bold">L</span><span className="sub-text">1m63 - 1m69<br />60kg - 68kg</span></td>
                    <td>
                        <p>A: 38</p>
                        <p>B: 52</p>
                    </td>
                    <td>
                        <p>C: 27.5</p>
                        <p>D: 45.5</p>
                    </td>
                    </tr>
                    <tr>
                    <td><span className="text--primary text--bold">XL</span><span className="sub-text">1m70 - 1m76<br />69kg - 77kg</span></td>
                    <td>
                        <p>A: 40</p>
                        <p>B: 54</p>
                    </td>
                    <td>
                        <p>C: 28.5</p>
                        <p>D: 46</p>
                    </td>
                    </tr>
                    <tr>
                    <td><span className="text--primary text--bold">2XL</span><span className="sub-text">1m77 - 1m83<br />78kg - 84kg</span></td>
                    <td>
                        <p>A: 42</p>
                        <p>B: 56</p>
                    </td>
                    <td>
                        <p>C: 29.5</p>
                        <p>D: 46.5</p>
                    </td>
                    </tr>
                </tbody>
                </table>
                <img src="/img/size-chart-10.PNG" alt="" />
            </div>
            <h4 className="text-center mt-4 mb-4">
                <span className="text--primary">3.</span>
                <span className="text--bold">QUẦN THỂ THAO ULTRA DÁNG NGẮN</span>
            </h4>
            <div className="mobile--hidden">
                <div className="grid mt-3">
                <div className="grid__column nine-twelfths mobile--one-whole">
                    <table className="size-chart__table">
                    <tbody>
                        <tr>
                        <td><span className="title-text text--primary text--bold">{t('size_chart:Symbols')}</span></td>
                        <td><span className="title-text text--primary text--bold">M</span><span className="sub-text">1m55 - 1m62<br />51kg - 59kg</span>
                        </td>
                        <td><span className="title-text text--primary text--bold">L</span><span className="sub-text">1m63 - 1m69<br />60kg - 68kg</span>
                        </td>
                        <td><span className="title-text text--primary text--bold">XL</span><span className="sub-text">1m70 - 1m76<br />69kg - 77kg</span>
                        </td>
                        <td><span className="title-text text--primary text--bold">2XL</span><span className="sub-text">1m77 - 1m83<br />78kg - 84kg</span>
                        </td>
                        </tr>
                        <tr>
                        <td><span className="text--bold">(A) {t('size_chart:width_cap')}</span></td>
                        <td>33</td>
                        <td>35</td>
                        <td>37</td>
                        <td>39</td>
                        </tr>
                        <tr>
                        <td><span className="text--bold">(B) {t('size_chart:width_mong')}</span></td>
                        <td>51</td>
                        <td>53</td>
                        <td>55</td>
                        <td>57</td>
                        </tr>
                        <tr>
                        <td><span className="text--bold">(C)  {t('size_chart:width_ong')}</span></td>
                        <td>28.5</td>
                        <td>29</td>
                        <td>29.5</td>
                        <td>30</td>
                        </tr>
                        <tr>
                        <td><span className="text--bold">(D) {t('size_chart:long_trousers')}</span></td>
                        <td>45</td>
                        <td>47</td>
                        <td>49</td>
                        <td>51</td>
                        </tr>
                    </tbody>
                    </table>
                </div>
                <div className="grid__column three-twelfths mobile--one-whole">
                    <img src="/img/size-chart-11.PNG" alt="" />
                </div>
                </div>
            </div>
            <div className="tablet--hidden desk--hidden large--hidden">
                <table className="size-chart__table mt-3">
                <tbody>
                    <tr>
                    <td><span className="text--primary text--bold">Size</span></td>
                    <td colSpan={2}><span className="text--bold">(A) RỘNG CẠP<br />(B) RỘNG MÔNG<br />(C) RỘNG GẤU<br />(D) {t('size_chart:long_trousers')}</span>
                    </td>
                    </tr>
                    <tr>
                    <td><span className="text--primary text--bold">M</span><span className="sub-text">1m55 - 1m62<br />51kg - 59kg</span></td>
                    <td>
                        <p>A: 33</p>
                        <p>B: 51</p>
                    </td>
                    <td>
                        <p>C: 28.5</p>
                        <p>D: 45</p>
                    </td>
                    </tr>
                    <tr>
                    <td><span className="text--primary text--bold">L</span><span className="sub-text">1m63 - 1m69<br />60kg - 68kg</span></td>
                    <td>
                        <p>A: 35</p>
                        <p>B: 53</p>
                    </td>
                    <td>
                        <p>C: 29</p>
                        <p>D: 47</p>
                    </td>
                    </tr>
                    <tr>
                    <td><span className="text--primary text--bold">XL</span><span className="sub-text">1m70 - 1m76<br />69kg - 77kg</span></td>
                    <td>
                        <p>A: 37</p>
                        <p>B: 55</p>
                    </td>
                    <td>
                        <p>C: 29.5</p>
                        <p>D: 49</p>
                    </td>
                    </tr>
                    <tr>
                    <td><span className="text--primary text--bold">2XL</span><span className="sub-text">1m77 - 1m83<br />78kg - 84kg</span></td>
                    <td>
                        <p>A: 39</p>
                        <p>B: 57</p>
                    </td>
                    <td>
                        <p>C: 30</p>
                        <p>D: 51</p>
                    </td>
                    </tr>
                </tbody>
                </table>
                <img src="/img/size-chart-11.PNG" alt="" />
            </div>
            <h4 className="text-center mt-4 mb-4">
                <span className="text--primary">4.</span>
                <span className="text--bold">QUẦN MAX ULTRA DÁNG DÀI</span>
            </h4>
            <div className="mobile--hidden">
                <div className="grid mt-3">
                <div className="grid__column nine-twelfths mobile--one-whole">
                    <table className="size-chart__table">
                    <tbody>
                        <tr>
                        <td><span className="title-text text--primary text--bold">{t('size_chart:Symbols')}</span></td>
                        <td><span className="title-text text--primary text--bold">M</span><span className="sub-text">1m55 - 1m62<br />51kg - 59kg</span>
                        </td>
                        <td><span className="title-text text--primary text--bold">L</span><span className="sub-text">1m63 - 1m69<br />60kg - 68kg</span>
                        </td>
                        <td><span className="title-text text--primary text--bold">XL</span><span className="sub-text">1m70 - 1m76<br />69kg - 77kg</span>
                        </td>
                        <td><span className="title-text text--primary text--bold">2XL</span><span className="sub-text">1m77 - 1m83<br />78kg - 84kg</span>
                        </td>
                        </tr>
                        <tr>
                        <td><span className="text--bold">(A) {t('size_chart:width_cap')}</span></td>
                        <td>33</td>
                        <td>35</td>
                        <td>37</td>
                        <td>39</td>
                        </tr>
                        <tr>
                        <td><span className="text--bold">(B) {t('size_chart:width_mong')}</span></td>
                        <td>53</td>
                        <td>55</td>
                        <td>57</td>
                        <td>59</td>
                        </tr>
                        <tr>
                        <td><span className="text--bold">(C)  {t('size_chart:width_ong')}</span></td>
                        <td>27.5</td>
                        <td>28</td>
                        <td>28.5</td>
                        <td>29</td>
                        </tr>
                        <tr>
                        <td><span className="text--bold">(D) {t('size_chart:long_trousers')}</span></td>
                        <td>47</td>
                        <td>49</td>
                        <td>51</td>
                        <td>53</td>
                        </tr>
                    </tbody>
                    </table>
                </div>
                <div className="grid__column three-twelfths mobile--one-whole">
                    <img src="/img/size-chart-12.PNG" alt="" />
                </div>
                </div>
            </div>
            <div className="tablet--hidden desk--hidden large--hidden">
                <table className="size-chart__table mt-3">
                <tbody>
                    <tr>
                    <td><span className="text--primary text--bold">Size</span></td>
                    <td colSpan={2}><span className="text--bold">() {t('size_chart:width_cap')} <br /> (B) {t('size_chart:width_mong')} <br /> (C)  {t('size_chart:width_ong')} <br />(D) {t('size_chart:long_trousers')} </span>
                    </td>
                    </tr>
                    <tr>
                    <td><span className="text--primary text--bold">M</span><span className="sub-text">1m55 - 1m62<br />51kg - 59kg</span></td>
                    <td>
                        <p>A: 33</p>
                        <p>B: 53</p>
                    </td>
                    <td>
                        <p>C: 27.5</p>
                        <p>D: 47</p>
                    </td>
                    </tr>
                    <tr>
                    <td><span className="text--primary text--bold">L</span><span className="sub-text">1m63 - 1m69<br />60kg - 68kg</span></td>
                    <td>
                        <p>A: 35</p>
                        <p>B: 55</p>
                    </td>
                    <td>
                        <p>C: 28</p>
                        <p>D: 49</p>
                    </td>
                    </tr>
                    <tr>
                    <td><span className="text--primary text--bold">XL</span><span className="sub-text">1m70 - 1m76<br />69kg - 77kg</span></td>
                    <td>
                        <p>A: 37</p>
                        <p>B: 57</p>
                    </td>
                    <td>
                        <p>C: 28.5</p>
                        <p>D: 51</p>
                    </td>
                    </tr>
                    <tr>
                    <td><span className="text--primary text--bold">2XL</span><span className="sub-text">1m77 - 1m83<br />78kg - 84kg</span></td>
                    <td>
                        <p>A: 39</p>
                        <p>B: 59</p>
                    </td>
                    <td>
                        <p>C: 29</p>
                        <p>D: 53</p>
                    </td>
                    </tr>
                </tbody>
                </table>
                <img src="/img/size-chart-12.PNG" alt="" />
            </div>
            <h4 className="text-center mt-4 mb-4">
                <span className="text--primary">6.</span>
                <span className="text--bold">QUẦN KAKI</span>
            </h4>
            <div className="mobile--hidden">
                <div className="grid mt-3">
                <div className="grid__column nine-twelfths mobile--one-whole">
                    <table className="size-chart__table">
                    <tbody>
                        <tr>
                        <td><span className="title-text text--primary text--bold">{t('size_chart:Symbols')}</span></td>
                        <td><span className="title-text text--primary text--bold">M</span><span className="sub-text">1m55 - 1m62<br />51kg - 59kg</span>
                        </td>
                        <td><span className="title-text text--primary text--bold">L</span><span className="sub-text">1m63 - 1m69<br />60kg - 68kg</span>
                        </td>
                        <td><span className="title-text text--primary text--bold">XL</span><span className="sub-text">1m70 - 1m76<br />69kg - 77kg</span>
                        </td>
                        <td><span className="title-text text--primary text--bold">2XL</span><span className="sub-text">1m77 - 1m83<br />78kg - 84kg</span>
                        </td>
                        </tr>
                        <tr>
                        <td><span className="text--bold">(A) {t('size_chart:width_cap')}</span></td>
                        <td>40</td>
                        <td>42</td>
                        <td>44</td>
                        <td>46</td>
                        </tr>
                        <tr>
                        <td><span className="text--bold">(B){t('size_chart:width_mong')}</span></td>
                        <td>49</td>
                        <td>51</td>
                        <td>53</td>
                        <td>55</td>
                        </tr>
                        <tr>
                        <td><span className="text--bold">(C)  {t('size_chart:width_ong')}</span></td>
                        <td>24</td>
                        <td>24.5</td>
                        <td>25</td>
                        <td>25.5</td>
                        </tr>
                        <tr>
                        <td><span className="text--bold">(D) {t('size_chart:long_trousers')}</span></td>
                        <td>48</td>
                        <td>50</td>
                        <td>52</td>
                        <td>54</td>
                        </tr>
                    </tbody>
                    </table>
                </div>
                <div className="grid__column three-twelfths mobile--one-whole">
                    <img src="/img/size-chart-13.PNG" alt="" />
                </div>
                </div>
            </div>
            <div className="tablet--hidden desk--hidden large--hidden">
                <table className="size-chart__table mt-3">
                <tbody>
                    <tr>
                    <td><span className="text--primary text--bold">Size</span></td>
                    <td colSpan={2}><span className="text--bold">(A){t('size_chart:width_cap')}<br />(B) {t('size_chart:Width butt')} <br /> (C)  {t('size_chart:width_ong')}<br />(D) {t('size_chart:long_trousers')}</span>
                    </td>
                    </tr>
                    <tr>
                    <td><span className="text--primary text--bold">M</span><span className="sub-text">1m55 - 1m62<br />51kg - 59kg</span></td>
                    <td>
                        <p>A: 40</p>
                        <p>B: 49</p>
                    </td>
                    <td>
                        <p>C: 24</p>
                        <p>D: 48</p>
                    </td>
                    </tr>
                    <tr>
                    <td><span className="text--primary text--bold">L</span><span className="sub-text">1m63 - 1m69<br />60kg - 68kg</span></td>
                    <td>
                        <p>A: 42</p>
                        <p>B: 51</p>
                    </td>
                    <td>
                        <p>C: 24.5</p>
                        <p>D: 50</p>
                    </td>
                    </tr>
                    <tr>
                    <td><span className="text--primary text--bold">XL</span><span className="sub-text">1m70 - 1m76<br />69kg - 77kg</span></td>
                    <td>
                        <p>A: 44</p>
                        <p>B: 53</p>
                    </td>
                    <td>
                        <p>C: 25</p>
                        <p>D: 52</p>
                    </td>
                    </tr>
                    <tr>
                    <td><span className="text--primary text--bold">2XL</span><span className="sub-text">1m77 - 1m83<br />78kg - 84kg</span></td>
                    <td>
                        <p>A: 46</p>
                        <p>B: 55</p>
                    </td>
                    <td>
                        <p>C: 25.5</p>
                        <p>D: 54</p>
                    </td>
                    </tr>
                </tbody>
                </table>
                <img src="/img/size-chart-13.PNG" alt="" />
            </div>
            
            <p className="text--primary text--bold mt-2">{t('size_chart:truong_hop')}</p>
            <p>{t('size_chart:quan_short')} <span className="text--bold">{t('size_chart:uu_tien')}</span>.</p>
            <p>{t('size_chart:vi_du')}</p>
            <p>{t('size_chart:khach_hang')} <span className="text--bold">{t('size_chart:chon_dung')}</span> {t('size_chart:size')}</p>
            <p className="text--italic mt-3">* {t('size_chart:luu_y')}</p>
            </div>
        </div>
      <FooterPage/>
      <ScrollToTop/>
        
    </>
        
      
    )
}

export default Size
