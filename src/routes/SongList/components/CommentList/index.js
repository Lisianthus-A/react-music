import React from 'react';
import './index.scss';
import testImg from 'Images/test.jpg';
import { LikeOutlined } from '@ant-design/icons';

const CommentList = () => {
    return (
        <div className='comment-list'>
            <div className='title'>评论列表</div>
            <div className='sub-title'>精彩评论</div>
            <div className='comment'>
                <div className='image'>
                    <img src={testImg} />
                </div>
                <div className='content-container'>
                    <div className='content'>
                        <span><a href='#'>用户名：</a>内容内容内容</span>
                    </div>
                    <div className='footer'>
                        <span className='date'>x天前</span>
                        <span className='like'><LikeOutlined style={{ color: '#1890ff' }} />(12345)</span>
                    </div>
                </div>
            </div>
            <div className='comment'>
                <div className='image'>
                    <img src={testImg} />
                </div>
                <div className='content-container'>
                    <div className='content'>
                        <span><a href='#'>用户名：</a>内容内容内容</span>
                        <div className='reply'>
                            <span><a href='#'>用户名：</a>被回复的内容</span>
                        </div>
                    </div>
                    <div className='footer'>
                        <span className='date'>x天前</span>
                        <span className='like'><LikeOutlined style={{ color: '#1890ff' }} />(12345)</span>
                    </div>
                </div>
            </div>
            <div className='comment'>
                <div className='image'>
                    <img src={testImg} />
                </div>
                <div className='content-container'>
                    <div className='content'>
                        <span><a href='#'>用户名：</a>很长的内容很长的内容很长的内容很长的内容很长的内容很长的内容很长的内容很长的内容很长的内容很长的内容很长的内容很长的内容很长的内容很长的内容很长的内容很长的内容很长的</span>
                    </div>
                    <div className='footer'>
                        <span className='date'>x天前</span>
                        <span className='like'><LikeOutlined style={{ color: '#1890ff' }} />(12345)</span>
                    </div>
                </div>
            </div>
            <div className='sub-title'>最新评论</div>
            <div className='comment'>
                <div className='image'>
                    <img src={testImg} />
                </div>
                <div className='content-container'>
                    <div className='content'>
                        <span><a href='#'>用户名：</a>内容内容内容</span>
                    </div>
                    <div className='footer'>
                        <span className='date'>x天前</span>
                        <span className='like'><LikeOutlined style={{ color: '#1890ff' }} />(12345)</span>
                    </div>
                </div>
            </div>
            <div className='comment'>
                <div className='image'>
                    <img src={testImg} />
                </div>
                <div className='content-container'>
                    <div className='content'>
                        <span><a href='#'>用户名：</a>内容内容内容</span>
                        <div className='reply'>
                            <span><a href='#'>用户名：</a>被回复的内容</span>
                        </div>
                    </div>
                    <div className='footer'>
                        <span className='date'>x天前</span>
                        <span className='like'><LikeOutlined style={{ color: '#1890ff' }} />(12345)</span>
                    </div>
                </div>
            </div>
            <div className='comment'>
                <div className='image'>
                    <img src={testImg} />
                </div>
                <div className='content-container'>
                    <div className='content'>
                        <span><a href='#'>用户名：</a>很长的内容很长的内容很长的内容很长的内容很长的内容很长的内容很长的内容很长的内容很长的内容很长的内容很长的内容很长的内容很长的内容很长的内容很长的内容很长的内容很长的</span>
                    </div>
                    <div className='footer'>
                        <span className='date'>x天前</span>
                        <span className='like'><LikeOutlined style={{ color: '#1890ff' }} />(12345)</span>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default CommentList;