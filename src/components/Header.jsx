import React from "react";
import { Link } from "react-router-dom";

function Header() {  
  return (
    <div className="bg  align-items-center d-flex mt-0" style={{height:"60px",top:'0',zIndex:'100',position:'sticky',backgroundColor:'#131921'}} >
     
    <Link to={'./'}>  <img style={{width:'100px',objectFit:'contain',margin:'0 20px',marginTop:'18px'}} src="http://pngimg.com/uploads/amazon/amazon_PNG11.png"/></Link>
        
        <div className=" d-flex align-items-center" style={{ flex:'1', borderRadius:'24px'}}>
        <i class="fa-solid fa-location-dot ">  </i>
        


        <input  placeholder="Search The Product" style={{height:'40px',padding:'10px',border:'none',width:"450px",marginLeft:'100px'}} type="text"  className="rounded"/>
                 <i class="fa-solid fa-magnifying-glass rounded   " style={{background:'orange' ,width:'50px',height:'30px',padding:'20px',marginRight:'20px',border:'none', }}></i> </div>
        

      <p style={{color:'white',marginRight:'40px',textDecoration:'none',marginTop:'20px'}}> Sign In</p>


        <Link to={'./wishlist'}><i class="fa-solid fa-heart" style={{marginRight:'10px',width:'50px'}}></i></Link>
    <Link to={'./ca'} ><i class="fa-solid fa-cart-shopping  " style={{marginRight:'10px',width:'50px'}}></i>
    </Link>
    </div>
  );
}

export default Header;