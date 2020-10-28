import React from 'react';
import './index.scss';
import testImg from 'Images/test.jpg';
import { Button } from 'antd';
import { CaretRightOutlined, HeartOutlined } from '@ant-design/icons';

const ListInfo = () => {
    return (
        <div className='listinfo'>
            <div className='list-left'>
                <div className='image'><img src={testImg} /></div>
            </div>
            <div className='list-right'>
                <div className='title'>一起自驾旅行，踩着深秋的落叶跳支舞</div>
                <div className='creator'>
                    <a><img src={testImg} />夏天种花秋天晒太阳</a>2019-10-11 创建
                </div>
                <div className='btns'>
                    <Button icon={<CaretRightOutlined />}>播放全部</Button>
                    <Button icon={<HeartOutlined />}>添加到歌单</Button>
                </div>
                <div className='label'>
                    标签：<span>华语</span><span>浪漫</span><span>流行</span>
                </div>
                <div className='description'>介绍：深秋已至，落叶纷纷，想与你共赏秋色，也想在漫天的枫红杏黄中翩翩起舞，落叶的沙沙声也为我们伴奏。<br /><br />封面：Pinterest</div>
            </div>
        </div>
    )
}

export default ListInfo;