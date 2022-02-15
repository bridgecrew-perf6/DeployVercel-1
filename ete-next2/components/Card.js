import React from 'react';
import CardItem from './CardItem';
import styles from '../styles/Card.module.css';



function Cards() {
    return (
      <div className={styles.cards}> 
        <h1 className={styles.h1}>I am not the same, having seen the moon shine on the other side of the world!</h1>
        <div className={styles.cards__container}>
          <div className={styles.cards__wrapper}>
             <h2 className={styles.h2}>Trips to nearby areas </h2>
            <ul className={styles.cards__items}> 
          
              <CardItem 
                src='https://trip.hr/wp-content/uploads/2020/04/plitvicka-jezera.jpg'
                text='Experience beauty of Plitvice Lakes'    
              />
              
              
              <CardItem
                src='https://splitadventure.com/wp-content/uploads/split-cliff-jumping-adventure-kayaking-08-1.jpg'
                text='Go on advanture with kayaking tour'
                path='/trips'
              />
            </ul>
            <h2 className={styles.h2}>Travels to European cities </h2>
            <ul className={styles.cards__items}>
              <CardItem
                src='https://www.preporod.info/media/image/15784/original/Sevilla01.jpg'
                text='Sevilla-capital of Andalusia'
                path='/travels'
              />
              <CardItem
                src='https://potovanja.nomago.si//wp-content/uploads/slike-blog-hr/slike/2018/2018_04_05%20Santorini/santorini-putovanje-fira.jpg'
                text='Fell in love with Santorini'
                path='/travels'
              />
              <CardItem 
                src='https://www.intergeo.com/wp-content/uploads/2015/05/milano-1-750x501.jpg'
                text='Visit the centre of fashion'   
                path='/travels'
              />
            </ul>
          </div>
        </div>
      </div>
    );
  }

export default Cards;
