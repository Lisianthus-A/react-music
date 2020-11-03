import React from 'react';
import './index.scss';
import { LikeOutlined } from '@ant-design/icons';
import { convertDate } from 'Utils';

const CommentList = ({ data }) => {
    const { hotComments, comments } = data;
    return (
        <div className='comment-list'>
            <div className='title'>评论列表</div>
            {hotComments.length > 0 && <div className='sub-title'>精彩评论</div>}
            {
                hotComments.length > 0 &&
                hotComments.map(({ beReplied, content, user, time, likedCount }, idx) =>
                    <div className='comment' key={idx}>
                        <div className='image'><img src={`${user.avatarUrl}?param=50y50`} /></div>
                        <div className='content-container'>
                            <div className='content'>
                                <span><a href={`#/User?id=${user.userId}`}>{user.nickname}：</a>{content}</span>
                                {
                                    beReplied[0] &&
                                    <div className='reply'>
                                        <span><a href={`#/User?id=${beReplied[0].user.userId}`}>{beReplied[0].user.nickname}：</a>{beReplied[0].content}</span>
                                    </div>
                                }
                            </div>
                            <div className='footer'>
                                <span className='date'>{convertDate(time)}</span>
                                <span className='like'><LikeOutlined style={{ color: '#1890ff' }} />({likedCount})</span>
                            </div>
                        </div>
                    </div>
                )
            }
            {comments.length > 0 && <div className='sub-title'>最新评论</div>}
            {
                comments.map(({ beReplied, content, user, time, likedCount }, idx) =>
                    <div className='comment' key={idx}>
                        <div className='image'><img src={`${user.avatarUrl}?param=50y50`} /></div>
                        <div className='content-container'>
                            <div className='content'>
                                <span><a href={`#/User?id=${user.userId}`}>{user.nickname}：</a>{content}</span>
                                {
                                    beReplied[0] &&
                                    <div className='reply'>
                                        <span><a href={`#/User?id=${beReplied[0].user.userId}`}>{beReplied[0].user.nickname}：</a>{beReplied[0].content}</span>
                                    </div>
                                }
                            </div>
                            <div className='footer'>
                                <span className='date'>{convertDate(time)}</span>
                                <span className='like'><LikeOutlined style={{ color: '#1890ff' }} />({likedCount})</span>
                            </div>
                        </div>
                    </div>
                )
            }
        </div>
    )
}

export default CommentList;