import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { useHistory} from "react-router-dom";
import { searchHeader } from '../../../actions/productActions';
import { useTranslation } from "react-i18next";





function Search(props) {
    const { t } = useTranslation(['common_btbar_index']);

    const [input, setInput] = useState('');
    const history = useHistory();
    const dispatch = useDispatch();
    

    const handelSearch=()=>{
        dispatch(searchHeader(input));
        history.push('/search');
    }
    const handleKeyPress = (e) => {
        if (e.key === 'Enter' && input.length > 0) {
            handelSearch();
        }
    };
   
return (
     <div>
          <input type="text" 
            placeholder= {t('common_btbar_index:search_bottom_bar')}            
            onChange={(event) => setInput(event.target.value)}
            onKeyPress={handleKeyPress}
            />
            <button disabled={!input} onClick={()=>handelSearch()}><i  className="fa fa-search"></i></button> 
    </div>
                   
);
}

export default Search;

