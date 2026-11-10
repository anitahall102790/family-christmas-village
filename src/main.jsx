import React, { useEffect, useState } from 'react'
import { createRoot } from 'react-dom/client'
import './style.css'

const FAMILY_NAME = 'Black Brady Bunch Christmas Village'
const LAUNCH_DATE = 'December 6, 2026'
const CHRISTMAS_YEAR = 2026

function getCountdown() {
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

function App() {
  const [countdown, setCountdown] = useState(getCountdown)
  useEffect(() => {
    const id = window.setInterval(() => setCountdown(getCountdown()), 1000)
    return () => window.clearInterval(id)
  }, [])
  const units = [['Days', countdown.days], ['Hours', countdown.hours], ['Minutes', countdown.minutes], ['Seconds', countdown.seconds]]

  return <div className="site-shell">
    <div className="snowflakes" aria-hidden="true">
  {Array.from({ length: 36 }, (_, i) => (
    <span
      key={i}
      style={{
        '--i': i,
        '--x': `${(i * 37 + 13) % 100}%`,
        '--delay': `${(i * 7) % 18}s`,
        '--duration': `${12 + (i % 9)}s`,
        '--size': `${3 + (i % 4) * 2}px`
      }}
    />
  ))}
</div>
    <main id="home">
      <div className="storybook-scene">
        <header className="site-header">
          <a className="brand" href="#home"><span className="brand-star">✦</span> {FAMILY_NAME}</a>
          <nav aria-label="Site navigation"><a href="#invitation">Our Invitation</a><a href="#coming-soon">Coming Soon</a></nav>
        </header>
        <section className="hero" aria-labelledby="page-title">
          <div className="eyebrow">✦ &nbsp; A SEASON OF FAMILY, TRADITION & TOGETHERNESS &nbsp; ✦</div>
          <h1 id="page-title">Home for<br /><em>the Holidays</em></h1>
          <p className="intro">Miles may separate us, but the magic of Christmas brings us together. Welcome to our little Christmas village.</p>
          <a className="launch-link" href="#invitation">You're invited <span aria-hidden="true">↓</span></a>
        </section>
        <div className="village" role="img" aria-label="Snowy Christmas village with homes representing Washington DC, Northern Virginia, Richmond and the Netherlands, Black Santa and a little elf checking the children's names on Santa's Nice List">
          <img className="village-art" src={`${import.meta.env.BASE_URL}christmas-village.png`} alt="" />
        </div>
      </div>
      <div className="lower-scene">
        <section id="invitation" className="invitation">
          <div className="invite-decoration" aria-hidden="true">✦ ❄ ✦</div>
          <p className="invite-kicker">SAVE THE DATE</p>
          <h2>You're invited to our<br /><em>Christmas village opening!</em></h2>
          <p>Join us virtually on <strong>Sunday, {LAUNCH_DATE}</strong> as we open our little holiday home together, share some laughs, and discover what's planned for December.</p>
          <div className="invite-footer">Video call details & holiday activities coming soon ♡</div>
        </section>
        <section className="countdown" aria-label="Countdown to Christmas">
          <p className="countdown-heading">{countdown.finished ? 'Merry Christmas!' : 'Christmas is coming in...'}</p>
          <div className="countdown-grid">{units.map(([unit, value]) => <div className="countdown-unit" key={unit}><strong>{String(value).padStart(2, '0')}</strong><span>{unit}</span></div>)}</div>
        </section>
        <section id="coming-soon" className="coming-soon" aria-label="Coming soon">
          <h2>More magic is on the way...</h2>
          <div className="feature-list"><span>🗓️ Holiday Calendar</span><span>🎬 Family Movie Nights</span><span>💌 Letters to Santa</span></div>
        </section>
        <footer>Made with love, for family near and far. <span aria-hidden="true">✦</span> Christmas {CHRISTMAS_YEAR}</footer>
      </div>
    </main>
  </div>
}

createRoot(document.getElementById('root')).render(<React.StrictMode><App /></React.StrictMode>)
