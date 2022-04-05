import React, { useEffect, useState } from 'react'
import './Home.css'
import axios from 'axios';
import Farmerheader from './Farmerheader';
import Footer from '../Component/Footer';


const Farmerhome = () => {

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

    <Farmerheader/>
    
    <div className='home'>
        <img 
        className='home_image'
        src="https://wallpaperaccess.com/full/4293117.jpg"
        alt=""
        />
    </div>
    <div className='famfooter'>
    <Footer/>
    </div>
    </>
  )
}
}

export default Farmerhome