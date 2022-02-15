import React from 'react'
import Image from 'next/image'
import AB from '/Images/about.jpg';
import styles from '../styles/Card.module.css';

function About() {

    return (
        <div >
            <h1 className={styles.h1}>Where you can find us </h1>
            <div className='mt-5 flex justify-center '>
                <Image
                    src={AB}
                    alt="where find us"
                    width={750}
                    height={400}
                
                />
            </div>
           
            <h1 className='mt-5 ml-48 font-bold justify-center'>Who are we</h1>
         
            <p className='mt-3 ml-48 mr-48  '>Explore, Travel, Enjoy is a travel agency that offers booking excursions 
                andtrips. If you want to visit the surrounding places and enjoy the beauties,
                we offer you this possibility.Also, if you want to visit European countries, 
                you can do it with us at good prices.
            </p>

            <p className='mt-3 ml-48 mr-48'>
            </p>

            <p className='mt-5 ml-48 mr-48 font-semibold'>Become part of our family and enjoy the adventures that are waiting for you !
            </p>

            <h1 className='mt-5 ml-48 font-bold'>Contact :</h1>

            <p className='mt-2 ml-48 mr-48'>+385 95368 765</p>

            <p className='mt-1 ml-48 mr-48'>+385 95368 532 </p>

            <h1 className='mt-5 ml-48 font-bold'>Email:</h1>

            <p className='mt-1 ml-48 mr-48 mb-5'> explore_travel_enjoy@gmail.com</p>
            </div>
     
    )
}

export default About