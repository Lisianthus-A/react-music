import React from 'react';
import { createFromIconfontCN } from '@ant-design/icons';

const IconFont = createFromIconfontCN({
    scriptUrl: '//at.alicdn.com/t/font_2138442_yp24oyx9jzn.js',
});

interface Props extends Omit<React.ComponentProps<typeof IconFont>, 'type'> {
    type: 'icon-random' | 'icon-Singlecycle';
}

function CustomIcon(props: Props) {
    return <IconFont {...props} />;
}

export default CustomIcon;