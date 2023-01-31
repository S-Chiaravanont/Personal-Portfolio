import React from 'react';

export default function Home(props) {
  return (
    <>
      <div className='welcome-overlay'>
        <h1>Hello & Welcome</h1>
      </div>
      <div id='home' className='home-background'>
        <ul>
          <li><a href='#technology'>Technologies</a></li>
          <li><a href='#projects'>Projects</a></li>
          <li><a href='#contact'>Contact</a></li>
        </ul>
        <div className='intro-card'>
          <h1>Hi, I&apos;m Chai.</h1>
          <h4>I am a full-stack developer in Orange County, CA</h4>
          <div>
            <p className='chevron-down'>&#8964;</p>
            <p className='chevron-down-second'>&#8964;</p>
          </div>
        </div>
      </div>
      <div className='container'>
        <div className='row'>
          <div id='technology' className='home-technology column-full'>
            <h2>Technology</h2>
            <a title="Rudloff, CC BY 3.0 &lt;https://creativecommons.org/licenses/by/3.0&gt;, via Wikimedia Commons" href="https://commons.wikimedia.org/wiki/File:CSS3_logo_and_wordmark.svg"><img id='css-logo' width="128" alt="CSS3 logo and wordmark" src="https://upload.wikimedia.org/wikipedia/commons/thumb/d/d5/CSS3_logo_and_wordmark.svg/128px-CSS3_logo_and_wordmark.svg.png" /></a>

            <a title="W3C, CC BY 3.0 &lt;https://creativecommons.org/licenses/by/3.0&gt;, via Wikimedia Commons" href="https://commons.wikimedia.org/wiki/File:HTML5_logo_and_wordmark.svg"><img id='html-logo' width="128" alt="HTML5 logo and wordmark" src="https://upload.wikimedia.org/wikipedia/commons/thumb/6/61/HTML5_logo_and_wordmark.svg/128px-HTML5_logo_and_wordmark.svg.png" /></a>
          </div>
        </div>
      </div>
    </>
  );
}
