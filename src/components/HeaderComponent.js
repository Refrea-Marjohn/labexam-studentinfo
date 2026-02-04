import React from 'react';

function HeaderComponent({ title, subtitle }) {
  return (
    <header className="app-header">
      <div>
        <p className="header-eyebrow">Student Information System</p>
        <h1>{title}</h1>
        <p className="header-subtitle">{subtitle}</p>
      </div>
      <div className="header-meta">
        <span className="header-tag">Prepared for Lab Exam</span>
        <span className="header-tag">AY 2025-2026</span>
        <div className="header-profile" aria-hidden="true">
          <svg viewBox="0 0 24 24" role="img" focusable="false">
            <path
              d="M12 3.5c-2.4 0-4.3 1.9-4.3 4.3S9.6 12 12 12s4.3-1.9 4.3-4.2S14.4 3.5 12 3.5zm0 10.2c-3.4 0-6.2 2.2-6.2 4.8v1.8h12.4v-1.8c0-2.6-2.8-4.8-6.2-4.8z"
              fill="currentColor"
            />
          </svg>
        </div>
      </div>
    </header>
  );
}

export default HeaderComponent;
