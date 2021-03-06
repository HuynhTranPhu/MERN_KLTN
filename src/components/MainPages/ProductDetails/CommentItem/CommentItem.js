import React, {useState, useEffect} from 'react'
import CommentCard from './CommentCard'
import FormInput from '../FormInput'
import { useTranslation } from 'react-i18next';

let showComments = []

function CommentItem({comment, socket}) {
    const { t } = useTranslation(['mainpages_pdetal_cmtitems']);
    const [reply, setReply] = useState(false)
    const [name, setName] = useState('')

    const [replyComment, setReplyComment] = useState([])
    const [hideReplyComment, setHideReplyComment] = useState([])
    const [next, setNext] = useState(3)


    const loadMore = () => {
        setNext(next + 3)
    }

    useEffect(() => {
        const loopWithSlice = () => {
            let start = comment.reply.length - next < 0 ? 0 : comment.reply.length - next

            showComments = comment.reply.slice(start, comment.reply.length)
    
            setHideReplyComment(start)
            setReplyComment(showComments)
        }

        loopWithSlice(next)
    }, [comment.reply, next])

    

    const handleReply = (username) => {
        setReply(true)
        setName(username)
    }

    const hideReply = () => {
        setReply(false)
        setNext(3)
    }
    return (
        <>
            <CommentCard comment={comment} >
                <div className="nav_comment">
                    <p onClick={() => handleReply(comment.username)}>{t('mainpages_pdetal_cmtitems:reply')}</p>
                    {
                        hideReplyComment > 0 && 
                        <p onClick={loadMore}>Load more {hideReplyComment} {t('mainpages_pdetal_cmtitems:comments')}</p>
                    }
                    
                    <p onClick={hideReply}>{t('mainpages_pdetal_cmtitems:hide_reply')}</p>
                </div>

                <div className="reply_comment">
                    {
                        replyComment.map(rep => (
                            <CommentCard comment={rep} key={rep._id}>
                                <div className="nav_comment">
                                    <p onClick={() => handleReply(rep.username)}>{t('mainpages_pdetal_cmtitems:reply')}</p>
                                </div>
                            </CommentCard>
                        ))
                    }
                </div>

                {
                    reply && 
                    <FormInput 
                        id={comment._id}
                        socket={socket}
                        name={name}
                        setReply={setReply}
                        send="replyComment"
                    />
                }
            </CommentCard>
        </>
    )
}

export default CommentItem
