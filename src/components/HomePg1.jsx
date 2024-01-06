import React, { useEffect, useState } from 'react'
import img1 from '../assets/img1.avif';
import img2 from '../assets/img2.avif';
import img3 from '../assets/img3.avif';
import img4 from '../assets/img4.avif';
import img5 from '../assets/img5.avif';
import img6 from '../assets/img6.avif';
import img7 from '../assets/img7.avif';
import img8 from '../assets/img8.avif';
import img9 from '../assets/img9.avif';
import img10 from '../assets/img10.avif';
import img11 from '../assets/img11.avif';
import img12 from '../assets/img12.avif';
import img13 from '../assets/img13.avif';


const HomePg1 = () => {
    const imgArray = [img1,img2,img3,img4,img5,img5,img6,img7,img8,img9,img10,img11,img12,img13]
    const [currentImage, setCurrentImage] = useState(0);

    useEffect(()=>{
        setTimeout(() => {
            if(currentImage == (imgArray.length-1)) {
                setCurrentImage(0);
            }else
            setCurrentImage(currentImage+1);
        }, 2000);
    },[currentImage])

  return (
    <div className='container-fluid min-vh-50'>
      <img style={{height:"100vh",width:"100%"}} src={imgArray[currentImage]} alt="" />
    </div>
  )
}

export default HomePg1
