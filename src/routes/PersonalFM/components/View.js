import React, { useEffect } from 'react';
import { getToken } from 'Utils';

const PersonalFM = () => {

    if (!getToken()) {  //无token，未登录
        return <div>私人FM需要登录使用</div>;
    }

    useEffect(() => {
        //隐藏音乐播放器
        const middle = document.getElementsByClassName('middle')[0];
        middle.style.height = '100%';

        return () => {
            middle.style.height = 'calc(100% - 128px)';
        }
    },
        []
    );
    return (
        <div className='personal-fm'>
            PersonalFM
        </div>
    );
}

export default PersonalFM;