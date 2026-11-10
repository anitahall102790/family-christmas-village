import React, { useEffect, useState } from 'react'
import { createRoot } from 'react-dom/client'
import './style.css'

// Edit these values to personalize your family's homepage.
const FAMILY_NAME = 'Black Brady Bunch Christmas Village'
const LAUNCH_DATE = 'December 6, 2026'
const CHRISTMAS_YEAR = 2026

function getCountdown() {
  // Counts down to Christmas at midnight Eastern time. Change offset if desired.
  const target = new Date(`${CHRISTMAS_YEAR}-12-25T00:00:00-05:00`).getTime()
  const remaining = Math.max(0, target - Date.now())
  return {
    days: Math.floor(remaining / 86400000),
    hours: Math.floor((remaining / 3600000) % 24),
    minutes: Math.floor((remaining / 60000) % 60),
    seconds: Math.floor((remaining / 1000) % 60),
    finished: remaining === 0,
  }
}

function House({ variant = 'red', label }) {
  return <div className={`house house--${variant}`} aria-label={label} role="img">
    <div className="chimney" /><div className="roof" /><div className="house-body">
      <div className="window window--left" /><div className="window window--right" />
      <div className="door"><span className="knob" /></div>
    </div>
  </div>
}

function Tree({ size = 'medium' }) {
  return <div className={`tree tree--${size}`} aria-hidden="true"><span className="tree-star">✦</span><span className="tree-top"/><span className="tree-middle"/><span className="tree-bottom"/><span className="tree-trunk"/></div>
}

function Village() {
  return <div className="village" aria-label="An illustrated snowy Christmas village with warmly lit houses">
    <div className="moon"/><div className="hill hill--back"/><div className="hill hill--front"/>
    <div className="village-buildings"><Tree size="small"/><House variant="red" label="A red Christmas cottage"/><Tree size="large"/><House variant="cream" label="A cream Christmas cottage"/><Tree size="medium"/><House variant="blue" label="A blue Christmas cottage"/><Tree size="small"/></div>
    <div className="snow-ground"/>
  </div>
}

function App() {
  const [countdown, setCountdown] = useState(getCountdown)
  useEffect(() => {
    const id = window.setInterval(() => setCountdown(getCountdown()), 1000)
    return () => window.clearInterval(id)
  }, [])
  const units = [['Days', countdown.days], ['Hours', countdown.hours], ['Minutes', countdown.minutes], ['Seconds', countdown.seconds]]
  return <div className="site-shell">
    <div className="snowflakes" aria-hidden="true">{Array.from({length: 36}, (_, i) => <span key={i} style={{'--i': i, '--x': `${(i * 37 + 13) % 100}%`, '--delay': `${(i * 7) % 18}s`, '--duration': `${12 + (i % 9)}s`}}>✳</span>)}</div>
    <header className="site-header"><a className="brand" href="#home"><span className="brand-star">✦</span> {FAMILY_NAME}</a><span className="header-note">Together, wherever we are <span aria-hidden="true">♥</span></span></header>
    <main id="home">
      <section className="hero">
        <div className="eyebrow">✦ &nbsp; A LITTLE MAGIC FOR OUR FAMILY &nbsp; ✦</div>
        <h1>Home for<br/><em>the Holidays</em></h1>
        <p className="intro">Miles may separate us, but the magic of Christmas brings us together. Welcome to our cozy little corner of the world.</p>
        <div className="countdown" aria-label="Countdown to Christmas">
          <p className="countdown-heading">{countdown.finished ? 'Merry Christmas!' : 'Christmas is coming in...'}</p>
          <div className="countdown-grid">{units.map(([unit, value]) => <div className="countdown-unit" key={unit}><strong>{String(value).padStart(2, '0')}</strong><span>{unit}</span></div>)}</div>
        </div>
        <a className="launch-link" href="#invitation">See our grand opening invitation <span aria-hidden="true">↓</span></a>
      </section>
      <Village/>
      <section id="invitation" className="invitation"><div className="invite-decoration">✦ ❄ ✦</div><p className="invite-kicker">SAVE THE DATE</p><h2>You're invited to our<br/><em>Christmas village opening!</em></h2><p>Join us virtually on <strong>Sunday, {LAUNCH_DATE}</strong> as we open our little holiday home together, share some laughs, and discover what's planned for December.</p><div className="invite-footer">Video call details & holiday activities coming soon ♡</div></section>
      <section className="coming-soon" aria-label="Coming soon"><h2>More magic is on the way...</h2><div className="feature-list"><span>🗓️ Holiday Calendar</span><span>🎬 Family Movie Nights</span><span>💌 Letters to Santa</span></div></section>
    </main>
    <footer>Made with love, for family near and far. <span aria-hidden="true">✦</span> Christmas {CHRISTMAS_YEAR}</footer>
  </div>
}

createRoot(document.getElementById('root')).render(<React.StrictMode><App/></React.StrictMode>)
