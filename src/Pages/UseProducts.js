import React from 'react';
import { Link } from 'react-router-dom';
import './UseProducts.css'

const UseProducts = (props) => {
    const { header, img, quantity, desc } = props.Product;
    return (
        
        <div className=''>

     
        
            <div className=' bg-white mt-4  single-div '>
            
                    <img className="img-fluid p-3" src={img} alt="img" />
                    <div className='text-align'>
                    <h5>{header}</h5>
                    <h6> {Location} </h6>
                    <h6 className='quantity-color'>{quantity}/-</h6>
                    <p> {desc}</p>

                    <Link>
                    <button className="p-3 m-4 roundd"> View Details</button>
          </Link>

               
                    </div>
                

            </div>
            </div>
       






        // <div>

        //    <img src={img} alt="" />
        //    <h4>{header}</h4>
        //    <p> {quantity} </p>
        //    <p> {desc} </p>

        // </div>
    );
};

export default UseProducts;