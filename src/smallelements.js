import logo from './assets/echo-radio-logo.png'

function TopBar() {
    return (
      <div className="top-bar">
        <div className="logo">
          <img height="60px" width="60px" src={logo}></img>
        </div>
        <div className="echo-text">
        <h1>ECHO RADIO</h1>
        </div>
      </div>
    )
  }
  
  function LiveDotText() {
    return (
      <div className="text">
        <p className="live-text">LIVE NOW</p>
        <div className="circle red"></div>
      </div>
  
    )
  }

export {TopBar, LiveDotText}