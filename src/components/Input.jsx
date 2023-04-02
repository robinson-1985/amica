import React from 'react'
import Img from '../img/picture.png'
import Send from '../img/send.png'
import Clip from '../img/clip.png'

const Input = () => {
  return (
    <div className='input'>
      <input type="text" placeholder='Type a message'/>
      <div className="send">
        <img src={Clip} alt="" />
        <input type="file" style={{display: "none"}} id="file"/>
        <label htmlFor="file">
          <img src={Img} alt="" />
        </label>
        <button>Send</button>
      </div>
    </div>
  )
}

export default Input