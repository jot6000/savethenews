import React from 'react';
import styles from './Article.module.css';

import AuthorCard from '../components/authorProfileCard'

class Article extends React.Component {
    
    constructor(props) {
        super(props);
        this.state = 
        {
            
        };
    }
    render() {
        return(
            <>
                <div className={styles.header}>
                    <div>Logo</div>
                    <h1>{this.props.location.state.title}</h1>
                    <div>Profile Menu</div>
                </div>
                <div className={styles.pageContent}>
                    <div className={styles.pageLeft}>
                        <AuthorCard articleCount={'28'} reviews={'280'} rating={'4.9'}/>
                        <br/>
                    </div>
                    <div className={styles.pageCenter}>
                        Article content
                    </div>
                    <div className={styles.pageRight}>
                        Counter arguments and such
                    </div>
                </div>
            </>
        );
    }
}
  
export default Article;