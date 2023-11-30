import React, { useState } from 'react'
import './tabs.sass';
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
        return <div onClick={() => changeActive(item.title)} className={activeTab === item.title ? "tabs__item tabs__item_active" : "tabs__item"}>{item.title}</div>
    })

  return (
    <div className="tabs">
        {tabsElements}
    </div>
  )
}

export default Tabs