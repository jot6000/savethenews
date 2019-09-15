import React from 'react';
import styles from './AuthorCard.module.css';

class AuthorCard extends React.Component {
    constructor(props) {
        super(props);
        this.state = 
        {
            
        };
    }
    render() {
        return(
            <article className={styles.card}>
                <h1>Profile Avatar</h1>
                <div className={styles.details}>
                    <list className={styles.stats}>
                        <li>Article Count</li>
                        <li>Reviews</li>
                        <li>Rating</li>
                    </list>
                    <span className={styles.bio}>
                        Author bio, this can be some kind of sprawly text about loving short walks on the beach or whatever.    
                    </span>
                </div>
            </article>
        );
    }
}
  
export default AuthorCard;