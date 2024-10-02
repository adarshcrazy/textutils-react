import React from 'react'
import PropTypes from 'prop-types'
import { Link } from 'react-router-dom'

export default function Navbar(props) {

  let textStyle = {
    color: props.mode=="light"?'#000':'#fff',
    marginRight:'10px',
  }

  const remvoeBodyBg = (cls) =>{
     document.body.classList.remove('bg-primary');
    document.body.classList.remove('bg-success');
  }

  const changeBodybg = (cls) => {
    // console.log(".."+cls).
    remvoeBodyBg(cls);
    document.body.classList.add('bg-'+cls);
  }
  return (
    <nav className={`navbar navbar-expand-lg navbar-${props.mode} bg-${props.mode}`}>
        <div className="container">
          <a className="navbar-brand" href="/">{props.logo}</a>
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="/navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <Link className="nav-link active" aria-current="page" to="/">Home</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/about">{props.aboutText}</Link>
              </li>
           </ul>
          
          </div>

          <div className="btn btn-primary mr-2" style={{marginRight:'20px'}} onClick={() => changeBodybg('primary')}></div>
          <div className="btn btn-success mr-2" style={{marginRight:'20px'}} onClick={() => changeBodybg('success')}></div>
          <div className="form-check form-switch mr-2">
            <input className="form-check-input" type="checkbox" id="colorChanged" />
            <label className="form-check-label" htmlFor="logoChanged" style={textStyle}>Red color</label>
          </div>

          <div className="form-check form-switch">
            <input className="form-check-input" type="checkbox" onChange={props.logoToggle} id="logoChanged" />
            <label className="form-check-label" htmlFor="logoChanged" style={textStyle}>Enable Logo</label>
          </div>

          <div className={`form-check form-switch text-${props.mode==="dark"?'light':'dark'}`}>
            <input className="form-check-input" type="checkbox" onChange={props.toggle} id="flexSwitchCheckDefault" />
            <label className="form-check-label" htmlFor="flexSwitchCheckDefault">Enable Dark Mode</label>
          </div>
        </div>
      </nav>
  )
}

Navbar.propTypes = {
    title: PropTypes.string.isRequired,
    aboutText: PropTypes.string
}

Navbar.defaultProps = {
    title: "Your title here",
    aboutText: "Text"
}