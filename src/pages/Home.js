import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const highlights = [
  {
    title: 'OJT Readiness',
    description:
      'Focused on real-world workflows, documentation, and communication to deliver strong OJT outcomes.',
    tag: 'OJT Track',
  },
  {
    title: 'Creative Edge',
    description:
      'Loves modern interfaces, mobile-first layouts, and polished presentation for every project.',
    tag: 'Design & UX',
  },
  {
    title: 'Team Momentum',
    description:
      'Reliable teammate with consistent updates, clean code, and supportive collaboration.',
    tag: 'Leadership',
  },
];

const stats = [
  { label: 'Current Year', value: '4th Year' },
  { label: 'Section', value: '4IT-B' },
  { label: 'Course', value: 'BSIT' },
  { label: 'Status', value: 'Active' },
];

function Home() {
  const [spotlightIndex, setSpotlightIndex] = useState(0);
  const spotlight = highlights[spotlightIndex];

  const handleNextSpotlight = () => {
    setSpotlightIndex((prev) => (prev + 1) % highlights.length);
  };

  return (
    <section className="page">
      <div className="hero">
        <div className="hero-card hero-intro">
          <p className="eyebrow">Student Portfolio</p>
          <h2 className="hero-title">
            Mar John Santiago Refrea
            <span className="hero-highlight">Student Info Hub</span>
          </h2>
          <p className="lead">
            A clean and modern student information system that highlights personal details,
            academic standing, and professional goals with a premium gold-inspired design.
          </p>
          <div className="hero-actions">
            <Link to="/students" className="btn-primary">
              View Students
            </Link>
            <button type="button" className="btn-outline" onClick={handleNextSpotlight}>
              Change Focus
            </button>
          </div>
        </div>

        <div className="hero-card hero-spotlight">
          <p className="card-title">Spotlight</p>
          <h3>{spotlight.title}</h3>
          <p className="muted">{spotlight.description}</p>
          <span className="chip">{spotlight.tag}</span>
        </div>
      </div>

      <section className="stats-grid">
        {stats.map((stat) => (
          <div key={stat.label} className="stat-card">
            <p className="stat-label">{stat.label}</p>
            <h3 className="stat-value">{stat.value}</h3>
          </div>
        ))}
      </section>

      <section className="grid-section">
        <article className="info-card">
          <p className="card-title">Personal Information</p>
          <div className="info-list">
            <div className="info-row">
              <span className="label">Name</span>
              <span>Mar John Santiago Refrea</span>
            </div>
            <div className="info-row">
              <span className="label">Age</span>
              <span>24</span>
            </div>
            <div className="info-row">
              <span className="label">Birthdate</span>
              <span>December 15, 2001</span>
            </div>
            <div className="info-row">
              <span className="label">Address</span>
              <span>0175, Brgy. Butong Cabuyao Laguna</span>
            </div>
            <div className="info-row">
              <span className="label">Hobby</span>
              <span>Mobile Legends and Watching Movies</span>
            </div>
            <div className="info-row">
              <span className="label">Status</span>
              <span>Active</span>
            </div>
          </div>
        </article>

        <article className="info-card">
          <p className="card-title">Class Student Information</p>
          <div className="info-list">
            <div className="info-row">
              <span className="label">Name</span>
              <span>Mar John Santiago Refrea</span>
            </div>
            <div className="info-row">
              <span className="label">Section</span>
              <span>4IT-B</span>
            </div>
            <div className="info-row">
              <span className="label">Course</span>
              <span>Bachelor of Science in Information Technology</span>
            </div>
            <div className="info-row">
              <span className="label">Student Number</span>
              <span>2202191</span>
            </div>
            <div className="info-row">
              <span className="label">Schedules</span>
              <span>OJT: Mon, Tue, Thu, Fri • School: Wed</span>
            </div>
          </div>
        </article>
      </section>

      <section className="timeline">
        <p className="card-title">Weekly Focus</p>
        <div className="schedule-grid">
          <div className="schedule-item">
            <h4>OJT Days</h4>
            <p className="muted">Monday, Tuesday, Thursday, Friday</p>
          </div>
          <div className="schedule-item">
            <h4>School Day</h4>
            <p className="muted">Wednesday - lectures and consultations</p>
          </div>
          <div className="schedule-item">
            <h4>Self Study</h4>
            <p className="muted">Weekend practice and portfolio work</p>
          </div>
        </div>
      </section>

      <section className="cta-banner">
        <div className="cta-content">
          <h3>Ready for Top 1 Performance</h3>
          <p className="muted">
            Organized documentation, clear weekly goals, and a modern interface make this
            student info system stand out in class.
          </p>
        </div>
        <Link to="/students" className="btn-secondary">
          View Class Data
        </Link>
      </section>

      <section className="footer-strip">
        <div>
          <h4>Vision</h4>
          <p className="muted">Consistent performance, clean UI, and confident presentation.</p>
        </div>
        <div>
          <h4>Strengths</h4>
          <p className="muted">Adaptable, creative, and reliable on team tasks.</p>
        </div>
        <div>
          <h4>Motivation</h4>
          <p className="muted">Built to impress in every lab exam and class showcase.</p>
        </div>
        <div>
          <h4>Campus</h4>
          <p className="muted">University of Cabuyao, Laguna</p>
        </div>
      </section>
    </section>
  );
}

export default Home;
