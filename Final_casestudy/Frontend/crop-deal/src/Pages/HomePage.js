import React, { useEffect, useState } from 'react'
import './Home.css'
import Product from '../Component/Product'
import axios from 'axios';
import Header from '../Component/Header';
import Footer from '../Component/Footer';

const HomePage = () => {
    const[crop,setCrop]=useState([])
    const [isLoaded, setIsLoaded] = useState(false);
    const[error,setError]= useState(null);

    useEffect(()=>{
        axios.get('http://localhost:9200/api/cropdetails/findAllcropdetails')
        .then(res=>{
            console.log(res)
            setCrop(res.data)
        },
        (error) => {
            setIsLoaded(true);
            setError(error);
        })
    

    },[]);
    if (error) {
        return <>{error.message}</>;
     } 
    // else if (!isLoaded) {
    //     return <>loading...</>;
    // }
    else {
  return (
    <>

    <Header/>
    
    <div className='home'>
        <img 
        className='home_image'
        src="https://wallpaperaccess.com/full/4293117.jpg"
        alt=""
        />

        {/* Product */}
        <div className='home_row'>

        { crop.map(crops=>(
                <Product 
                id={crops.cropId}
                cropType={crops.cropType}
                cropName= {crops.cropName}
                price={crops.price}
                crop_quantity={crops.crop_quantity}
                uploadedBy={crops.uploadedBy}
                />

            ))       
            }
        </div>
    </div>
    <div className='footer1'>
    <Footer/>
    </div>
    </>
)

}
}

export default HomePage