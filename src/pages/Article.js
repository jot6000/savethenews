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
                    <div>{this.props.location.state.title}</div>
                    <div>Profile Menu</div>
                </div>
                <div className={styles.pageContent}>
                    <div className={styles.pageLeft}>
                        <AuthorCard/>
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