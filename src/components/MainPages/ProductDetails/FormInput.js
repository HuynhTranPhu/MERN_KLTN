import React, {useRef, useEffect} from 'react'
import { useTranslation } from 'react-i18next';
import { useDispatch, useSelector } from 'react-redux'
import { updateRating } from '../../../actions/comment'

function FormInput({id, socket, rating, setReply, send, name}) {
    const { t } = useTranslation(['mainpages_pdetal_forminput']);
    const nameRef = useRef()
    const contentRef = useRef()

    const userLogin = useSelector((state) => state.userLogin);
    const {userInfo} = userLogin;

    const dispatch = useDispatch();

    useEffect(() => {
        if(name){
            contentRef.current.innerHTML = `
                <a href="#!"
                    style="color: #FF6F61;
                    font-weight: 600;
                    text-transform: capitalize;"
                >${name}: </a>
            `
        }
    },[name])

    const commentSubmit = () => {
        const username = nameRef.current.value
        const content = contentRef.current.innerHTML

        if(!username.trim()) return alert('Not Empty!')
        if(contentRef.current.textContent.trim().length < 10)
            return alert('Contents too short, must be at least 20 characters')
        
        const createdAt = new Date().toISOString()

        socket.emit('createComment', {
            username, content, product_id: id, createdAt, rating, send
        })


        if(rating && rating !== 0){
            dispatch(updateRating(id, rating));
        }

        contentRef.current.innerHTML = ''

        if(setReply) setReply(false)
    }

    return (
        <div className="form_input">
            <p>{t('mainpages_pdetal_forminput:name')}</p>
            <input type="text" defaultValue={userInfo?.newUser?.name} ref={nameRef} />

            <p>{t('mainpages_pdetal_forminput:content')}</p>
            <div ref={contentRef} 
                contentEditable="true"
                style={{
                    height: '100px',
                    border: '1px solid #ccc',
                    padding: '5px 10px',
                    outline: 'none'
                }}
            />

            <button onClick={commentSubmit}>{t('mainpages_pdetal_forminput:send')}</button>
        </div>
    )
}

export default FormInput