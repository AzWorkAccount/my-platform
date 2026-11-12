import './App.css'

type ReportKind = 'bug' | 'feature'

type Report = {
  id: string
  text: string
  kind: ReportKind
}




function App() {

  const sampleReport: Report = {
  id: '1',
  text: 'Navigation link is broken',
  kind: 'bug',
  }

const initialReports: Report[] = [
{ id: '1', text: 'Navigation link is broken', kind: 'bug' },
{ id: '2', text: 'Add dark mode', kind: 'feature' },
]


  return (

    

    
    <main className="page-shell">
      <header className="site-header">
        <a className="wordmark" href="#home" aria-label="Aidan Zacherl home">
          AZ<span>.</span>
        </a>
        <p className="header-note">Personal page</p>
      </header>

      <section className="report-board">
     <h2>Bugs & Feature Requests</h2>
      <ul>
        {initialReports.map((report) => (
        <li key={report.id}>
        {report.text} ({report.kind})
        </li>
        ))}
      </ul>
      </section>

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
