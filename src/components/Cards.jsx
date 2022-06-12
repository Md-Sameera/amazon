import React from 'react'

export default function Cards(props) {
  return (
    <>
    {/* <div className="ved"> <video src='https://youtu.be/a0VSkmgTMfs'/> </div> */}

  <li>  
    <a href="" className="card">
    <img src={props.link? props.link:""} className="card__image" alt="" />
      <div className="card__overlay">
        <div className="card__header">
        <svg className="card__arc" xmlns="http://www.w3.org/2000/svg"><path /></svg>                     
          <img className="card__thumb" src="https://cdn.shopify.com/s/files/1/0747/3829/products/mHP0317_1024x1024.jpeg?v=1571444288" alt="" />
          <div className="card__header-text">
            <h3 className="card__title">{ props.name }</h3>            
            <span className="card__status">1 hour ago</span> 
          </div>
        </div>
        <p className="card__description">Lorem ipsum dolor sit amet consectetur adipisicing elit. Asperiores, blanditiis?</p>
      </div>
    </a>      
  </li>

    </>
  );
}
