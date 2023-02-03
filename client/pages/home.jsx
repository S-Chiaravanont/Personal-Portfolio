import React from 'react';

export default function Home(props) {
  return (
    <>
      <div className='welcome-overlay text-center'>
        <h1>Hello & Welcome</h1>
      </div>
      <div id='home' className='home-background'>
        <ul className='navbar-full'>
          <li><a href='#technology'>Technologies</a></li>
          <li><a href='#projects'>Projects</a></li>
          <li><a href='#contact'>Contact</a></li>
        </ul>
        <div className='intro-card'>
          <h1>Hi, I&apos;m Chai.</h1>
          <h4>I am a full-stack developer in Orange County, CA</h4>
          <div>
            <p className='chevron-down'><a className='chevron-anchor' href='#technology'>&#8964;</a></p>
            <p className='chevron-down-second'><a className='chevron-anchor' href='#technology'>&#8964;</a></p>
          </div>
        </div>
      </div>
      <div className='container'>
        <div className='row flex-wrap'>
          <div id='technology' className='column-full text-center'>
            <h2 className='section-title'>Technology</h2>
          </div>
        </div>
        <div className='row'>
          <div className='column-full dis-grid'>
            <div className='cards'>
              <div className='card text-center'>
                <img id='html-logo' width="256" alt="HTML5 logo and wordmark" src="https://upload.wikimedia.org/wikipedia/commons/thumb/6/61/HTML5_logo_and_wordmark.svg/256px-HTML5_logo_and_wordmark.svg.png" />
              </div>
              <div className='card text-center'>
                <img id='css-logo' width="200" alt="CSS3 logo and wordmark" src="https://upload.wikimedia.org/wikipedia/commons/thumb/d/d5/CSS3_logo_and_wordmark.svg/256px-CSS3_logo_and_wordmark.svg.png" />
              </div>
              <div className='card text-center'>
                <img width="256" alt="Javascript badge" src="https://upload.wikimedia.org/wikipedia/commons/thumb/b/ba/Javascript_badge.svg/256px-Javascript_badge.svg.png" />
              </div>
              <div className='card text-center'>
                <img width="256" alt="React-icon" src="https://upload.wikimedia.org/wikipedia/commons/thumb/a/a7/React-icon.svg/256px-React-icon.svg.png" />
              </div>
              <div className='card text-center'>
                <img width="256" alt="Node.js logo" src="https://upload.wikimedia.org/wikipedia/commons/thumb/d/d9/Node.js_logo.svg/256px-Node.js_logo.svg.png" />
              </div>
              <div className='card text-center'>
                <img width="256" alt="Expressjs" src="https://upload.wikimedia.org/wikipedia/commons/6/64/Expressjs.png" />
              </div>
              <div className='card text-center'>
                <img width="256" alt="Postgresql elephant" src="https://upload.wikimedia.org/wikipedia/commons/thumb/2/29/Postgresql_elephant.svg/256px-Postgresql_elephant.svg.png" />
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className='project-bg'>
        <div className='container'>
          <div className='row flex-wrap'>
            <div className='column-full text-center'>
              <h2 id='projects' className='section-title'>Projects</h2>
            </div>
            <div className='column-halves'>
              <div className='project-card'>
                <h2 id='projects'>PICK-UP (SPORT)</h2>
                <p>A full stack web application for anyone looking for pick-up sports in their community.</p>
                Techonology & API
                <ul>
                  <li>HTML5/CSS3</li>
                  <li>JavaScript</li>
                  <li>React</li>
                  <li>Material UI</li>
                  <li>Node.js</li>
                  <li>Express.js</li>
                  <li>PostgreSQL</li>
                  <li>Google Maps, Autocomplete, Geocoding</li>
                </ul>
                <p>Check out: <a href='http://pick-up-sports.siriphumchiaravanont.com' target='_blank' rel="noreferrer">LIVE DEMO</a> <br />
                </p>
                <p>Check out: <a href='https://github.com/S-Chiaravanont/pick-up-sports' target='_blank' rel="noreferrer">Github repos</a>
                </p>
              </div>
            </div>
            <div className='column-halves'>
              <div className='project-card'>
                <h4>Video DEMO of the application</h4>
                <iframe width="100%" height="220wh" src="https://www.youtube.com/embed/MKU1cMlWuC4" title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen />
              </div>
            </div>
            <div className='column-halves'>
              <div className='project-card'>
                <h2 id='projects'>CO2 Emission</h2>
                <p>A full stack web application for anyone looking track thier carbon footprints on the daily basis.</p>
                Techonology & API
                <ul>
                  <li>HTML5/CSS3</li>
                  <li>JavaScript</li>
                  <li>Chart.css</li>
                  <li>Climatiq API</li>
                </ul>
                <p>Check out: <a href='https://s-chiaravanont.github.io/Carbon-footprint-tracker/' target='_blank' rel="noreferrer">LIVE DEMO</a> <br />
                </p>
                <p>Check out: <a href='https://github.com/S-Chiaravanont/Carbon-footprint-tracker' target='_blank' rel="noreferrer">Github repos</a>
                </p>
              </div>
            </div>
            <div className='column-halves'>
              <div className='project-card'>
                <h4>Video DEMO of the application</h4>
                <iframe width="100%" height="215wh" src="https://www.youtube.com/embed/-X3L_QiC4uY" title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen />
              </div>
            </div>
          </div>
        </div>
      </div>

      <div id='contact' className='contact text-center'>
        <h3 className='section-title'>Contact</h3>
        <p>Email: Cchiaravanont@gmail.com</p>
        <p>Github: <a target='_blank' href="https://github.com/S-Chiaravanont" rel="noreferrer">Link</a></p>
        <p>LinkedIn: <a target='_blank' rel="noreferrer" href='https://www.linkedin.com/in/siriphumchiaravanont/'>Link</a></p>
      </div>
    </>
  );
}
