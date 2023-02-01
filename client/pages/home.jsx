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
          <div id='technology' className='section-title column-full text-center'>
            <h2>Technology</h2>
          </div>
          <div className='column-thirds logo-tech text-center'>
            <a target="_blank" title="W3C, CC BY 3.0 &lt;https://creativecommons.org/licenses/by/3.0&gt;, via Wikimedia Commons" href="https://commons.wikimedia.org/wiki/File:HTML5_logo_and_wordmark.svg" rel="noreferrer"><img id='html-logo' width="256" alt="HTML5 logo and wordmark" src="https://upload.wikimedia.org/wikipedia/commons/thumb/6/61/HTML5_logo_and_wordmark.svg/256px-HTML5_logo_and_wordmark.svg.png" /></a>
          </div>
          <div className='column-thirds logo-tech text-center'>
            <a title="Rudloff, CC BY 3.0 &lt;https://creativecommons.org/licenses/by/3.0&gt;, via Wikimedia Commons" href="https://commons.wikimedia.org/wiki/File:CSS3_logo_and_wordmark.svg" target='_blank' rel="noreferrer"><img id='css-logo' width="200" alt="CSS3 logo and wordmark" src="https://upload.wikimedia.org/wikipedia/commons/thumb/d/d5/CSS3_logo_and_wordmark.svg/256px-CSS3_logo_and_wordmark.svg.png" /></a>
          </div>

          <div className='column-thirds logo-tech text-center'>
            <a title="Nikotaf, CC BY-SA 4.0 &lt;https://creativecommons.org/licenses/by-sa/4.0&gt;, via Wikimedia Commons" href="https://commons.wikimedia.org/wiki/File:Javascript_badge.svg" target='_blank' rel="noreferrer"><img width="256" alt="Javascript badge" src="https://upload.wikimedia.org/wikipedia/commons/thumb/b/ba/Javascript_badge.svg/256px-Javascript_badge.svg.png" /></a>
          </div>

          <div className='column-thirds logo-tech text-center'>
            <a title="Facebook, Public domain, via Wikimedia Commons" href="https://commons.wikimedia.org/wiki/File:React-icon.svg" target='_blank' rel="noreferrer"><img width="256" alt="React-icon" src="https://upload.wikimedia.org/wikipedia/commons/thumb/a/a7/React-icon.svg/256px-React-icon.svg.png" /></a>
          </div>

          <div className='column-thirds logo-tech text-center'>
            <a title="node.js authors, Public domain, via Wikimedia Commons" href="https://commons.wikimedia.org/wiki/File:Node.js_logo.svg" target='_blank' rel="noreferrer"><img width="256" alt="Node.js logo" src="https://upload.wikimedia.org/wikipedia/commons/thumb/d/d9/Node.js_logo.svg/256px-Node.js_logo.svg.png" /></a>
          </div>

          <div className='column-thirds logo-tech text-center'>
            <a title="expressjs developers, Public domain, via Wikimedia Commons" href="https://commons.wikimedia.org/wiki/File:Expressjs.png" target='_blank' rel="noreferrer"><img width="256" alt="Expressjs" src="https://upload.wikimedia.org/wikipedia/commons/6/64/Expressjs.png" /></a>
          </div>

          <div className='column-thirds logo-tech text-center'>
            <a title="Daniel Lundin, PostgreSQL License &lt;https://www.postgresql.org/about/licence/&gt;, via Wikimedia Commons" href="https://commons.wikimedia.org/wiki/File:Postgresql_elephant.svg" target='_blank' rel="noreferrer"><img width="256" alt="Postgresql elephant" src="https://upload.wikimedia.org/wikipedia/commons/thumb/2/29/Postgresql_elephant.svg/256px-Postgresql_elephant.svg.png" /></a>
          </div>
          <div className='column-full text-center'>
            <h4><a href='#home' className='back-to-top'>^ TOP ^</a></h4>
          </div>
        </div>
      </div>
      <div className='project-bg'>
        <div className='container'>
          <div className='row'>
            <div className='column-full section-title text-center'>
              <h2 id='projects'>Project</h2>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
