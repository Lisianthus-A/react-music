import React, { useMemo, useState } from 'react';
import style from './index.module.scss';

import type { ReactNode } from 'react';

interface TabsProps {
    children: ReactNode;
    onChange?: (activeKey: string) => void;
}

function Tabs({ children, onChange }: TabsProps) {
    const childrenArray = useMemo(() => {
        const array: any[] = [];
        React.Children.forEach(children, (child) => {
            if (React.isValidElement(child)) {
                array.push({
                    key: child.key,
                    text: child.props.text,
                    element: child
                });
            }
        });
        return array;
    }, [children]);

    const [activeKey, setActiveKey] = useState(childrenArray[0].key);

    return (
        <>
            <div className={style.tabs}>
                {childrenArray.map(({ key, text }) =>
                    <div
                        key={key}
                        className={activeKey === key ? style['tab-active'] : style.tab}
                        onClick={() => {
                            setActiveKey(key);
                            onChange && onChange(key);
                        }}
                    >
                        {text}
                    </div>
                )}
            </div>
            {childrenArray.filter(item => item.key === activeKey)[0].element}
        </>
    );
}

interface Props {
    children: ReactNode;
    text: string;
}

function Pane(props: Props): JSX.Element {
    return props.children as JSX.Element;
}

Tabs.Pane = Pane;

export default Tabs;