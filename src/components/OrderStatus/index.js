import React from 'react';
import { useTranslation } from 'react-i18next';
import { useSelector } from 'react-redux';

const OrderStatus = () => {

    const { t } = useTranslation(['common_promotion_code']);
    const viewHistoryOrder = useSelector(state => state.viewHistoryOrder);
    const {viewHistory} = viewHistoryOrder;
    const formatDate = (date) => {
        if (date) {
          const d = new Date(date);
          return `${d.getFullYear()}-${d.getMonth() + 1}-${d.getDate()}`;
        }
        return "";
      };
    return (
        <div>
                <div className="orderTrack">  
                        {viewHistory?.orderStatus?.map((status) => (
                            <div
                            className={`orderStatus ${
                                status.isCompleted ? "active" : ""
                            }`}
                            >
                            <div
                                className={`point ${status.isCompleted ? "active" : ""}`}
                            ></div>
                            <div className="orderInfo">
                                <div className="status">{t(`common_promotion_code:${status.type}`)}</div>
                                <div className="date">{formatDate(status.date)}</div>
                            </div>
                            </div>
                        ))}
                </div>
        </div>
    );
};

export default OrderStatus;