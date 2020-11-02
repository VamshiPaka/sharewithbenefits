import React from 'react'
import './style.css'
export default function Contact() {
    return (
        <div>
           
   <div class="main">
     <div class="container">
      <img src="https://cbhscodeclub.weebly.com/uploads/2/4/2/2/24228565/header_images/1397707948.jpg"/>
      
      <h1>Feel free to Contact Us.</h1>
           
     </div>
   </div>
   
   <div class="content">
     <div class="container"> 
       <h3>Contact Forum</h3>
       <p>Entry's with * are required.</p>
       
       <form action="contact">
         
         <div class="name">
           <p>*Name:</p>
           <input type="text" name="First_Name"/>
         
         </div>
         <br/>
         <div class="email">
           <p>*Email:</p>
           <input type="email" name="Email"/>
         </div>
          
         <div class="comment">  
           <p>*Comment:</p>
          <textarea style={{maxlength:"1000"}}></textarea>
         </div>
         <br/>
         <input type="submit" name="Submit"/>
       </form>
     </div>
   </div>
        </div>
    )
}
