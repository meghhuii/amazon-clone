import React from 'react'
import Product from './Product'

function Home() {
  return (
    <>
    <img width={'100%'} height={'700px'}  src="https://cdn.dnaindia.com/sites/default/files/styles/full/public/2021/09/24/997848-amazon-great-indian-festival-amazonin.jpg" alt="" />

<div className='d-flex fw-bolder ' >

<div className='d-flex ' style={{zIndex:'1', marginLeft:'5px', marginRight:'5px', width:'400px' , color:'black', }}
>
    <Product  
     image="https://m.media-amazon.com/images/I/51wKPntT05L.SL1080.jpg"   
    id="6767"
    title="Maybelline New York Oil Control Powder"
    price={' ₹380'}
    rating={5}
   
    />

</div>

<div className='d-flex' style={{zIndex:'1', marginLeft:'5px', marginRight:'5px', width:'400px' , color:'black'}}
>
    <Product  
     image="https://m.media-amazon.com/images/I/41GnHRki09L.SX300_SY300_QL70_FMwebp.jpg"
    id="1234"
    title="HUG 'n' FEEL SOFT TOYS Long Soft  Teddy Bear "
    price={' ₹350'}
    rating={4}
      
    />

</div>



<div className='d-flex' style={{zIndex:'1', marginLeft:'5px', marginRight:'5px',width:'400px' , color:'black'}}
>
    <Product 
    image="https://m.media-amazon.com/images/I/41D6U8HssQL.SY300_SX300_QL70_FMwebp.jpg"  
    id="4678"
    title="
    Bergmann Typhoon Heavy Duty Metal Car Tyre Inflator (Blue)  "
    price={' 1900'}
    rating={3}
      
    />

</div>

<div className='d-flex' style={{zIndex:'1', marginLeft:'5px', marginRight:'5px',width:'400px' , color:'black'}}
>
    <Product  
      image="https://m.media-amazon.com/images/I/41wrgMfwdbL.SY300_SX300.jpg" 
    id="9876"
    title="
    Fossil Gwen Analogue Women's Watch "
        price={' ₹500'}
    rating={3}
    
    />

</div>
</div>

<div className='d-flex fw-bolder ' >

<div className='d-flex ' style={{zIndex:'1', marginLeft:'5px', marginRight:'5px', width:'400px' , color:'black'}}
>
    <Product  
     image="https://m.media-amazon.com/images/I/81CSw4UjL5L.SX679.jpg"   
    id="8787"
    title="Panasonic 1.5 Ton 3 Star Wi-Fi Inverter Smart Split AC "
    price={' ₹1500'}
    rating={1}
   
    />

</div>


<div className='d-flex ' style={{zIndex:'1', marginLeft:'5px', marginRight:'5px', width:'400px' , color:'black', }}
>
    <Product  
     image="https://m.media-amazon.com/images/I/51SGNyXoECL.SY395_SX395.jpg"   
    id="5464"
    title="ZOUK Vegan Leather Women's Office Bag  "
    price={' ₹2500'}
    rating={3}
   
    />

</div>

<div className='d-flex ' style={{zIndex:'1', marginLeft:'5px', marginRight:'5px', width:'400px' , color:'black', }}
>
    <Product  
     image="https://m.media-amazon.com/images/I/61fhoPht9OL.SX695.jpg"   
    id="6767"
    title="Puma Womens Ultimate Ease WNS Walking Shoe  "
    price={' ₹2000'}
    rating={5}
   
    />

</div>

<div className='d-flex ' style={{zIndex:'1', marginLeft:'5px', marginRight:'5px', width:'400px' , color:'black', }}
>
    <Product  
     image="https://m.media-amazon.com/images/I/61oXoXM4LDL.SX679.jpg"   
    id="6767"
    title="Ayukta Women's Cotton Salwar Suit Set "
    price={' ₹300'}
    rating={5}
   
    />

</div>

</div>
    </>
  )
}

export default Home