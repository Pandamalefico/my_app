import React, { useState } from "react"

const Tabs = ({ children }) => {
  const [active, setActive] = useState("0")

  const activeTab = (index, e) => {
    setActive(index)
    e.preventDefault()
  }
  const childs = children.map((child) => (
    <li
      className={`tabs_nav_item ${
        active === child.props.index ? "tabs_nav_active" : ""
      }`}
      onClick={(e) => activeTab(child.props.index, e)}
      key={child.props.index}
    >
      <a href='/'>{child.props.name}</a>
    </li>
  ))
  return (
    <div className='tabs'>
      <nav className='tabs_nav'>
        <ul className='tabs_nav_items'>{childs}</ul>
      </nav>
      <div className='tab_content'>{children[active]}</div>
    </div>
  )
}

export default Tabs
