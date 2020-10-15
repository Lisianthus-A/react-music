import React, { useEffect } from 'react';
import './View.scss';
import { banner } from '../../../apis/apiDiscovery';
import Carousel from '../../../components/Carousel';

const Discovery = () => {
    // useEffect(() => {
    //     const asyncFoo = async () => {
    //         console.log(await banner());
    //     }
    //     asyncFoo();
    // },
    //     []
    // );
    return (
        <div className='discovery'>
            <div className='banner'>
                <Carousel />
            </div>
        </div>
    );
}

export default Discovery;