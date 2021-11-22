import { Route, Routes } from 'react-router'

export const Navigation = (props) => {
  return (
    <nav id='menu' className='navbar navbar-default navbar-fixed-top'>
      <div className='container'>
        <div className='navbar-header'>
          <button
            type='button'
            className='navbar-toggle collapsed'
            data-toggle='collapse'
            data-target='#bs-example-navbar-collapse-1'
          >
            {' '}
            <span className='sr-only'>Toggle navigation</span>{' '}
            <span className='icon-bar'></span>{' '}
            <span className='icon-bar'></span>{' '}
            <span className='icon-bar'></span>{' '}
          </button>
          <a className='navbar-brand page-scroll' href='#page-top'>
            Donkey Hole NFT
          </a>{' '}
          <div className="subhead">The dumbest NFT of all time</div>
        </div>

        <div
          className='collapse navbar-collapse'
          id='bs-example-navbar-collapse-1'
        >
          <ul className='nav navbar-nav navbar-right'>
            <li>
              <a href='#about' className='page-scroll'>
                About
              </a>
            </li>
            <li>
              <a href='#why' className='page-scroll'>
                Why?
              </a>
            </li>
            <li>
              <a href='#portfolio' className='page-scroll'>
                Gallery
              </a>
            </li>
            <li>
              <a href='#team' className='page-scroll'>
                Team
              </a>
            </li>
            <li>
              <a href='https://discord.gg/HyVCP8RZ
https://discord.gg/HyVCP8RZ' className='page-scroll'>
                Discord
              </a>
            </li>
            <li>
              <a href='https://www.instagram.com/donkeyholenft' className='page-scroll'>
                IG
              </a>
            </li>
            <li>
              {/* <a href='#twitter' className='page-scroll'>
                Twitter
              </a> */}
            </li>
          </ul>
        </div>
      </div>
    </nav>
  )
}
