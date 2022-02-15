import React from "react";
import Image from 'next/image'
import Im from '/Images/travel.jpg';


function HeroSection() {
	return (
        <div className='w-full rounded-none '>
        <Image
            src={Im}
            alt="travel"
            height={850}
           
    
        />
    </div>
    )
}

export default HeroSection;