import { useTranslation } from 'react-i18next';
import NumberFormat from 'react-number-format';



const PriceText = (props) => {
  const { t } = useTranslation(['mainpages_home']);

  return (
    <NumberFormat
      value={props.price}
      displayType="text"
      thousandSeparator="."
      decimalSeparator=","
      suffix={' ' + t('mainpages_home:vnd')}
      prefix={props.negative && props.price > 0 && '- '}
    />
  );
};

export default PriceText;
