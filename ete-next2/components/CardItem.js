import React from 'react';
import {Link} from 'react-router-dom';
import styles from '../styles/Card.module.css';

function CardItem(props) {
    return (

         <li className={styles.cards__item}>
            <div className={styles.cards__item__link}>
                <figure className={styles.cards__item__pic_wrap} data-category={props.label}>
                     <img src={props.src} alt='nesto' className={styles.cards__item__img}/>
                 </figure>  
            < div className={styles.cards__item__info}>
                <h5 className={styles.cards__item_text}>{props.text}</h5>
             </div>
            </div>
         </li>
        
    )
}

export default CardItem;
