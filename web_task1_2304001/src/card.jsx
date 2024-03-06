import React from 'react'
function Card(props) {
  return (
    <div className="prop">
          <div className="left card">
              <h2 className="heading">{props.heading}</h2>
              <p className="content">{props.content}</p>
              <div className="cardbottom"><p>{props.bottom}</p><img src="./src/assets/pngwing.com.png" className="arrow" /></div>
          </div>
          <div className="img-card">
              
              <img src={props.img} alt="placeholder" className="photo" />
          </div>
    </div>
  )
}
export default Card
