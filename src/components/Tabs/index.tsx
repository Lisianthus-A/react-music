// @ts-nocheck
import React, { useMemo, useState } from 'react';
import style from './index.module.scss';

import type { ReactNode } from 'react';

function Tabs({ children }) {
    const childrenArray = useMemo(() => React.Children.toArray(children), [children]);
    const [activeKey, setActiveKey] = useState(childrenArray[0].key);

    return (
        <>
            <div className={style.tabs}>
                {childrenArray.map((item, index) =>
                    <div
                        key={index}
                        className={activeKey === item.key ? style['tab-active'] : style.tab}
                        onClick={() => setActiveKey(item.key)}
                    >
                        {item.props.text}
                    </div>
                )}
            </div>
            {childrenArray.filter(item => item.key === activeKey)}
        </>
    );
}

interface Props {
    children: ReactNode;
    text: string;
}

function Pane(props: Props): JSX.Element {
    return props.children;
}

Tabs.Pane = Pane;

export default Tabs;