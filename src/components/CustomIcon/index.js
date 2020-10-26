import React from 'react';
import { createFromIconfontCN } from '@ant-design/icons';

const IconFont = createFromIconfontCN({
    scriptUrl: '//at.alicdn.com/t/font_2138442_u24rlwvdrhs.js',
});

const CustomIcon = (props) => {
    return (
        <IconFont {...props} />
    );
}

export default CustomIcon;