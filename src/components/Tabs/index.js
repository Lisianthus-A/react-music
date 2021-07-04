import React, { useMemo, useState } from 'react';
import style from './index.module.scss';

function Tabs(props) {
    const { children } = props;
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

function Pane(props) {
    return props.children;
}

Tabs.Pane = Pane;

export default Tabs;