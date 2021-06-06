function TopBar() {
    return (
      <div className="top-bar">
        <h1>ECHO RADIO</h1>
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