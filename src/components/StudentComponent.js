import React from 'react';

function StudentComponent({
  name,
  course,
  year,
  section,
  studentNumber,
  status,
  schedules,
  isActive,
  showSchedules,
  onSelect,
}) {
  return (
    <article className={`student-card ${isActive ? 'active' : ''}`}>
      <div className="student-header">
        <div>
          <h3>{name}</h3>
          <p className="student-meta">
            {course} • {year} • Section {section}
          </p>
        </div>
        <button type="button" className="btn-secondary" onClick={onSelect}>
          {isActive ? 'Selected' : 'Select'}
        </button>
      </div>
      <div className="student-body">
        <p>
          <span className="label">Student Number:</span> {studentNumber}
        </p>
        <p>
          <span className="label">Status:</span> {status}
        </p>
        {showSchedules && (
          <p>
            <span className="label">Schedules:</span> {schedules}
          </p>
        )}
      </div>
    </article>
  );
}

export default StudentComponent;
