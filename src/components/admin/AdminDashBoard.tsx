import { useState } from 'react'
import './AdminDashBoard.scss'
import { Routes, Route, Link } from 'react-router-dom'
import { ListProyects } from './pages/ListProyects'
import { Project } from './pages/Project'
export const AdminDashBoard = () => {
  const [active, setActive] = useState(true)
  const dashboardItems = [
    {
      title: 'Inicio',
      icon: 'fas fa-home',
      link: '/dashboard',
      component: ListProyects,
    },
    {
      title: 'Proyectos',
      icon: 'fas fa-search',
      link: '/dashboard/list_proyects',
      component: Project,
    },
  ]
  const handleSidebar = () => {
    setActive(!active)
  }
  return (
    <div className="AdminDashBoard">
      <div className={'sidebar ' + (active ? 'active' : '')}>
        <div className="logo_content pointer" onClick={() => handleSidebar()}>
          <div className="logo">
            <div className="logo_name">Logo :D</div>
          </div>
          <i className="fas fa-bars" id="btn" />
        </div>
        <ul className="nav_list">
          <li>
            <i className="fas fa-search bx-search"></i>
            <input placeholder="search..." type="text" />
          </li>
          {dashboardItems.map((item, index) => (
            <li key={item.title}>
              <Link to={item.link}>
                <i className={item.icon}></i>
                <span className="links_name">{item.title}</span>
                <span className="tooltip">{item.title}</span>
              </Link>
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
        <Routes>
          <Route path="/" element={<Project />} />
          <Route path="/list_proyects" element={<ListProyects />} />
        </Routes>
      </div>
    </div>
  )
}
