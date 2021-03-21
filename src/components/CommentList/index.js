import React from 'react';
import style from './index.module.scss';
import { Link } from 'react-router-dom';
import { LikeOutlined } from '@ant-design/icons';
import { convertDate, replaceHttpToHttps as rp } from 'Utils';

const CommentList = ({ data }) => {
    const { hotComments, comments, total } = data;
    return (
        <div className={style['comment-list']}>
            <div className={style.title}>评论列表<span className={style.total}>共{total}条</span></div>
            {hotComments.length > 0 && <div className={style['sub-title']}>精彩评论</div>}
            {hotComments.length > 0 && hotComments.map(({ beReplied, content, user, time, likedCount }, idx) =>
                <div className={style.comment} key={idx}>
                    <div className={style.image}><img src={`${rp(user.avatarUrl)}?param=50y50`} loading='lazy' /></div>
                    <div className={style.container}>
                        <div className={style.content}>
                            <span><Link to={`User?id=${user.userId}`}>{user.nickname}：</Link>{content}</span>
                            {beReplied[0] &&
                                <div className={style.reply}>
                                    <span><Link to={`User?id=${beReplied[0].user.userId}`}>{beReplied[0].user.nickname}：</Link>{beReplied[0].content}</span>
                                </div>
                            }
                        </div>
                        <div className={style.footer}>
                            <span className={style.date}>{convertDate(time)}</span>
                            <span className={style.like}><LikeOutlined style={{ color: '#1890ff' }} />({likedCount})</span>
                        </div>
                    </div>
                </div>
            )}
            {comments.length > 0 && <div className={style['sub-title']}>最新评论</div>}
            {comments.length > 0 && comments.map(({ beReplied, content, user, time, likedCount }, idx) =>
                <div className={style.comment} key={idx}>
                    <div className={style.image}><img src={`${rp(user.avatarUrl)}?param=50y50`} loading='lazy' /></div>
                    <div className={style.container}>
                        <div className={style.content}>
                            <span><Link to={`User?id=${user.userId}`}>{user.nickname}：</Link>{content}</span>
                            {beReplied[0] &&
                                <div className={style.reply}>
                                    <span><Link to={`User?id=${beReplied[0].user.userId}`}>{beReplied[0].user.nickname}：</Link>{beReplied[0].content}</span>
                                </div>
                            }
                        </div>
                        <div className={style.footer}>
                            <span className={style.date}>{convertDate(time)}</span>
                            <span className={style.like}><LikeOutlined style={{ color: '#1890ff' }} />({likedCount})</span>
                        </div>
                    </div>
                </div>
            )}
        </div>
    )
}

export default CommentList;