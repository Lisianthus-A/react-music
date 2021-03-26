import React from 'react';
import style from './index.module.scss';

const Tabs = ({ tabs, activeTab, setActive }) => (
    <div className={style.tabs}>
        {tabs.map(({ text, id }) =>
            <div className={activeTab === id ? `${style.tab} ${style.active}` : style.tab} key={id} onClick={() => setActive(id)}>{text}</div>
        )}
    </div>
);

export default Tabs;