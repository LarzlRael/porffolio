import React, { useState } from 'react'
import './AdminDashBoard.scss'
export const AdminDashBoard = () => {
  const [active, setActive] = useState(true)
  const dashboardItems = [
    {
      title: 'Dashboard',
      icon: 'fas fa-home',
    },
    {
      title: 'Dashboard1',
      icon: 'fas fa-home',
    },
    {
      title: 'Dashboard2',
      icon: 'fas fa-home',
    },
    {
      title: 'Dashboard3',
      icon: 'fas fa-home',
    },
  ]
  const handleSidebar = () => {
    setActive(!active)
  }
  return (
    <div className="AdminDashBoard">
      <div className={'sidebar ' + (active ? 'active' : '')}>
        <div className="logo_content" onClick={() => handleSidebar()}>
          <div className="logo">
            {/* menu bar font awesome icon */}
            <i className="fas fa-bars" id="btn"></i>
            <div className="logo_name">Logo :D</div>
          </div>
        </div>
        <ul className="nav_list">
          <li>
            <i className="bx bx-search"></i>
            <input placeholder="search..." type="text" />
          </li>
          {dashboardItems.map((item, index) => (
            <li key={item.title}>
              <a href="">
                <i className={item.icon}></i>
                <span className="links_name">{item.title}</span>
                <span className="tooltip">{item.title}</span>
              </a>
            </li>
          ))}
        </ul>
        <div className="profile_content">
          <div className="profile">
            <div className="profile_details">
              {/* <img src="" alt="" /> */}
              <div className="name_job">
                <div className="name">Reynaldo</div>
                <div className="job">Web Designer</div>
              </div>
            </div>
            <i id="log_out" className="fas fa-sign-out-alt"></i>
          </div>
        </div>
      </div>
      <div className="home_content">
        <div className="text">Home Content</div>
      </div>
    </div>
  )
}
