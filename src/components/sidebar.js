
import { Link } from "react-router-dom";

export default function Sidebar() {
  return (
    <div className="sidebar">
      <div className="sidebarWrapper">
        <div className="sidebarMenu">
          <h3 className="sidebarTitle">Dashboard</h3>
          <ul className="sidebarList">
            <Link to="/" className="link">
            <li className="sidebarListItem active">
            <i class="fa-solid fa-house-user" className="sidebarIcon"></i>
              Home
            </li>
            </Link>
            <li className="sidebarListItem">
            <i class="fa-solid fa-chart-line" ></i>
              Analytics
            </li>
            <li className="sidebarListItem">
            <i class="fa-solid fa-chart-line"></i>
              Sales
            </li>
          </ul>
        </div>
        <div className="sidebarMenu">
          <h3 className="sidebarTitle">Quick Menu</h3>
          <ul className="sidebarList">
            <Link to="/users" className="link">
              <li className="sidebarListItem">
              <i class="fa-solid fa-user-gear"></i>
                Employees
              </li>
            </Link>
            <Link to="/products" className="link">
              <li className="sidebarListItem">
              <i class="fa-solid fa-gavel"></i>
                Contracts
              </li>
            </Link>
            <Link to="/products" className="link">
              <li className="sidebarListItem">
              <i class="fa-solid fa-timer"></i>
                Scheduling
              </li>
            </Link>
            <Link to="/products" className="link">
              <li className="sidebarListItem">
              <i class="fa-solid fa-square-dollar"></i>
                Salary
              </li>
            </Link>
            <Link to="/products" className="link">
              <li className="sidebarListItem">
              <i class="fa-solid fa-users"></i>
                Customer
              </li>
            </Link>
            <Link to="/material-home" className="link">
              <li className="sidebarListItem">
              <i class="fa-solid fa-screwdriver-wrench"></i>
                Material
              </li>
            </Link>
            <li className="sidebarListItem">
            <i class="fa-solid fa-coins"></i>
              Finance
            </li>
            <li className="sidebarListItem">
            <i class="fa-solid fa-sitemap"></i>
              Architecture
            </li>
          </ul>
        </div>
        <div className="sidebarMenu">
          <h3 className="sidebarTitle">Notifications</h3>
          <ul className="sidebarList">
            <li className="sidebarListItem">
            <i class="fa-solid fa-envelope"></i>
              Mail
            </li>
            <li className="sidebarListItem">
            <i class="fa-solid fa-comment-dots"></i>
              Feedback
            </li>
            <li className="sidebarListItem">
            <i class="fa-solid fa-message-smile"></i>
              Messages
            </li>
          </ul>
        </div>
        <div className="sidebarMenu">
          <h3 className="sidebarTitle">Staff</h3>
          <ul className="sidebarList">
            <li className="sidebarListItem">
            <i class="fa-solid fa-briefcase-blank"></i>
              Manage
            </li>
            <li className="sidebarListItem">
            <i class="fa-solid fa-chart-line-down"></i>
              Analytics
            </li>
            <li className="sidebarListItem">
            <i class="fa-solid fa-file-chart-column"></i>
              Reports
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}