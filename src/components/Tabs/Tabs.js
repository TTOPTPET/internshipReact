import React, { useState } from 'react'
import style from './tabs.module.css';
import classNames from 'classnames';
function Tabs() {

    const tabsData = [
        {title: "Instagram"},
        {title: "vkontakte"},
    ]

    const [activeTab, setActiveTab] = useState("Instagram")

    const changeActive = (name) => {
        setActiveTab(name)
    }

    const tabsElements = tabsData.map((item) => {
        return <div onClick={() => changeActive(item.title)} className={classNames(style.item, activeTab === item.title && style.active)}>{item.title}</div>
    })

  return (
    <div className={style.tabs}>
        {tabsElements}
    </div>
  )
}

export default Tabs