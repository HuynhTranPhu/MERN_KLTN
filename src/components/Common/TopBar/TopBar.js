import React from 'react';
import LanguagePicker from '../LanguagePicker';

const TopBar = () => {
    return (
        <div className="top-bar">
            <div className="container-fluid">
                <div className="row">
                    <div className="col-sm-11">
                        <i className="fa fa-envelope"></i>
                        support@email.com
                    </div>
                    <div className="col-sm-1">
                       <LanguagePicker/>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default TopBar;