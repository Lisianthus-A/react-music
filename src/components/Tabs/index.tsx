// @ts-nocheck
import React, { useMemo, useState } from 'react';
import style from './index.module.scss';

import type { ReactNode } from 'react';

interface TabsProps {
    children: ReactNode;
    onChange?: (activeKey: string) => void;
}

function Tabs({ children, onChange }: TabsProps) {
    const childrenArray = useMemo(() => React.Children.toArray(children), [children]);
    const [activeKey, setActiveKey] = useState(childrenArray[0].key);

    return (
        <>
            <div className={style.tabs}>
                {childrenArray.map((item, index) =>
                    <div
                        key={index}
                        className={activeKey === item.key ? style['tab-active'] : style.tab}
                        onClick={() => {
                            setActiveKey(item.key);
                            onChange && onChange(item.key);
                        }}
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