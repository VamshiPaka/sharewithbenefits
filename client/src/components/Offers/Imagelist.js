import React from 'react'

import { NavLink } from 'react-router-dom'

const Imagelist = (props) => {
    
    return (
        <div className="imagebox">
            <img src={props.path} className="image" alt="Images" />
            <h3 className="text">{props.name}</h3>
           Price: <b><h8 className="text"> ₹ {props.price}/-</h8></b>
           <br/>
           Description:<h8 className="text">{props.description}</h8><br/>
            Brand:<h8 className="text">{props.brand}</h8><br/>
            <br/>
            <div className="items">
          <button><a href={props.link} className="btno" id="link1">Checkout at {props.site}</a></button>
         
           <b/>
         
         
          
          
           
<NavLink to='/posting'><button type="button" className="btno" >Intrested to post</button></NavLink>
</div>

          

        </div > 
            )
}
export default Imagelist;