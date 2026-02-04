import React, { useEffect, useState } from 'react';
import axios from 'axios';
import StudentComponent from '../components/StudentComponent';

const studentData = [
  {
    id: '2202191',
    name: 'Mar John Santiago Refrea',
    course: 'BSIT',
    year: '4th Year',
    section: '4IT-B',
    studentNumber: '2202191',
    status: 'Active',
    schedules: 'OJT: Mon, Tue, Thu, Fri • School: Wed',
  },
  {
    id: '2202192',
    name: 'Kian Andrei Miranda',
    course: 'BSIT',
    year: '4th Year',
    section: '4IT-B',
    studentNumber: '2202192',
    status: 'Active',
    schedules: 'Mon, Wed, Fri • 7:30 AM - 11:30 AM',
  },
  {
    id: '2202193',
    name: 'Ken Anthony Villena',
    course: 'BSIT',
    year: '4th Year',
    section: '4IT-B',
    studentNumber: '2202193',
    status: 'Active',
    schedules: 'Tue, Thu • 1:00 PM - 5:00 PM',
  },
  {
    id: '2202194',
    name: 'France Hedrich Soriano',
    course: 'BSIT',
    year: '4th Year',
    section: '4IT-B',
    studentNumber: '2202194',
    status: 'Active',
    schedules: 'Mon, Thu • 8:00 AM - 12:00 PM',
  },
];

function Students() {
  const [selectedId, setSelectedId] = useState(studentData[0].id);
  const [apiStudents, setApiStudents] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [apiError, setApiError] = useState('');

  useEffect(() => {
    let isMounted = true;

    const loadStudents = async () => {
      setIsLoading(true);
      setApiError('');
      try {
        const response = await axios.get('https://jsonplaceholder.typicode.com/users');
        if (isMounted) {
          setApiStudents(response.data);
        }
      } catch (error) {
        if (isMounted) {
          setApiError(error.message || 'Unable to load student list.');
        }
      } finally {
        if (isMounted) {
          setIsLoading(false);
        }
      }
    };

    loadStudents();

    return () => {
      isMounted = false;
    };
  }, []);

  return (
    <section className="page">
      <div className="students-header">
        <div>
          <p className="eyebrow">Class Directory</p>
          <h2>Student Records</h2>
          <p className="muted">
            Track the current 4IT-B roster, academic status, and weekly schedule highlights.
          </p>
        </div>
        <button type="button" className="btn-outline" onClick={() => setSelectedId('')}>
          Clear Selection
        </button>
      </div>

      <section className="students-grid">
        {studentData.map((student) => (
          <StudentComponent
            key={student.id}
            name={student.name}
            course={student.course}
            year={student.year}
            section={student.section}
            studentNumber={student.studentNumber}
            status={student.status}
            schedules={student.schedules}
            isActive={student.id === selectedId}
            showSchedules={student.id === selectedId}
            onSelect={() => setSelectedId(student.id)}
          />
        ))}
      </section>

      <section className="api-section">
        <p className="card-title">API Directory</p>
        <p className="muted">
          Live data pulled from JSONPlaceholder to demonstrate API handling.
        </p>
        {isLoading && <p className="status">Loading student list...</p>}
        {!isLoading && apiError && <p className="status error">{apiError}</p>}
        {!isLoading && !apiError && (
          <ul className="api-list">
            {apiStudents.map((student) => (
              <li key={student.id} className="api-item">
                <div>
                  <p className="api-name">{student.name}</p>
                  <p className="api-email">{student.email}</p>
                </div>
                <span className="api-tag">{student.company?.name || 'Student'}</span>
              </li>
            ))}
          </ul>
        )}
      </section>
    </section>
  );
}

export default Students;
