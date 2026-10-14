import './App.css'

function App() {
  return (
    <main className="page-shell">
      <header className="site-header">
        <a className="wordmark" href="#home" aria-label="Aidan Zacherl home">
          AZ<span>.</span>
        </a>
        <p className="header-note">Personal page</p>
      </header>

      <section className="intro" id="home" aria-labelledby="intro-title">
        <div className="intro-copy">
          <p className="eyebrow">Hello, I’m</p>
          <h1 id="intro-title">Aidan Zacherl</h1>
          <p className="area-of-study">
            Computer Science <span aria-hidden="true">·</span> Cybersecurity minor
            
          </p>
          <p className="bio">
            I am a senior computer science student at Grove city College. I love working with low 
            level systems, and learning new ways to improve and grow as a develper.
             
          </p>
        </div>

        <div
          className="avatar"
          role="img"
          aria-label="Placeholder avatar with the initials A Z"
        >
          <span>AZ</span>
          <span className="avatar-spark" aria-hidden="true">
            +
          </span>
        </div>
      </section>

      <footer className="site-footer">
        <p>Computer Science student</p>
      </footer>
    </main>
  )
}

export default App
