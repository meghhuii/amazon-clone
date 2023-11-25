import React from 'react'
import { Link } from 'react-router-dom'
function Product({ id, title, image, price, rating }) {
  return (
    <div className="d-flex align-items-center" style={{flexDirection:'column',margin:'10px',padding:'20px',width:'100%',minWidth:'100px',maxWidth:'400px',backgroundColor:'white',justifyContent:'flex-end',zIndex:'1'}}>


     
      <img src={image} alt="" style={{maxHeight:'200px',width:'100%',objectFit:'contain',marginBottom:'15px'}}/>
      <div style={{height:'200px',marginBottom:'15px',marginTop:'15px', textAlign:'center'}}>
        <p>{id}</p>
        <p>{title}</p>
        
        <p style={{marginTop:'0px', color:'black', textAlign:'center' }}>
          <small>$</small>
          <strong>{price}</strong>
        </p>
        <div className="d-flex">
          
          <h6 style={{marginLeft:'40px'}}>Rating :</h6>
          {Array(rating)
            .fill()
            .map((_, i) => (
             <p >   🌟</p>
            ))}
        </div>
   
     <Link to={'./ca'}> <button style={{background:'#f0c14b',border:'1px solid',marginTop:'10px',borderColor:'#a88734 #9c7e31 #846a29',color:'#111',marginLeft:'50px'}}>Add to Basket</button></Link>
     <Link to={'./wishlist'}><i class="fa-solid fa-heart" style={{marginRight:'10px',width:'50px',color:'red'}}></i></Link>
    </div>
    </div>
  )
}

export default Product