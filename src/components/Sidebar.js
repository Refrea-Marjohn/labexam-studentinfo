import React from 'react';
import { NavLink } from 'react-router-dom';

function Sidebar() {
  return (
    <aside className="sidebar">
      <div className="sidebar-brand">
        <div className="brand-badge">SIA</div>
        <div>
          <p className="brand-title">Student Info</p>
          <p className="brand-subtitle">University of Cabuyao</p>
        </div>
      </div>
      <nav className="sidebar-nav">
        <NavLink
          to="/"
          end
          className={({ isActive }) => `nav-link${isActive ? ' active' : ''}`}
        >
          <span className="nav-icon" aria-hidden="true">
            <svg viewBox="0 0 24 24" role="img" focusable="false">
              <path
                d="M12 4.2 4.5 10v8.3h5v-4.8h5v4.8h5V10L12 4.2z"
                fill="currentColor"
              />
            </svg>
          </span>
          Home
        </NavLink>
        <NavLink
          to="/students"
          className={({ isActive }) => `nav-link${isActive ? ' active' : ''}`}
        >
          <span className="nav-icon" aria-hidden="true">
            <svg viewBox="0 0 24 24" role="img" focusable="false">
              <path
                d="M12 3.6c-2.4 0-4.4 2-4.4 4.4s2 4.4 4.4 4.4 4.4-2 4.4-4.4-2-4.4-4.4-4.4zm0 10.8c-3.6 0-6.6 2.3-6.6 5.1V21h13.2v-1.5c0-2.8-3-5.1-6.6-5.1z"
                fill="currentColor"
              />
            </svg>
          </span>
          Students
        </NavLink>
      </nav>
      <div className="sidebar-footer">
        <p>Katapatan Mutual Homes, Brgy. Banay-banay</p>
        <p>City of Cabuyao, Laguna 4025</p>
      </div>
    </aside>
  );
}

export default Sidebar;
