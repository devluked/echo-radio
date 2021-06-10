import logo from './assets/echo-radio-logo.png'
import text from './assets/echo-text.png'
import {useState} from 'react'

function TopBar() {
  const [isDropDown, displayDropDown] = useState(false)

  const handleDropDown = () => {
    displayDropDown(!isDropDown)


  }
    return (
      <div className="top-bar">
        <div className="logo">
          <img alt="" src={logo}></img>
        </div>
        <div className="echo-text">
          <img alt="" src={text}></img>
        </div>
        <div className="menu-icon">

         <span className="ellipsis-btn" onClick={handleDropDown}><i className={isDropDown===false? "ellipsis horizontal icon" : "ellipsis vertical icon"}/></span>
         {isDropDown===true ? 
         <div className="drop-down">
          <a href="https://soundcloud.com/echoradioshow" rel="noreferrer" target="_blank"><i class="soundcloud icon"/></a>
          <a href="https://www.instagram.com/echoradioshow/" rel="noreferrer" target="_blank"><i class="instagram icon"/></a>
           </div>
        : ""}

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