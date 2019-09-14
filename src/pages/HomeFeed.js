import React from 'react';
import styles from './home-feed.module.css';

import Filters from '../components/Filters';
import ArticlePreviewfrom from '../components/ArticlePreview'

class HomeFeed extends React.Component {
    
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
                    <div>Feed Title</div>
                    <div>Profile Menu</div>
                </div>
                <div className={styles.pageContent}>
                    <div className={styles.pageLeft}>
                        <Filters/>
                    </div>
                    <div className={styles.pageCenter}>
                        <ArticlePreviewfrom 
                            caption='Image Caption 1'
                            title='First article header'
                            subtitle='First article subtitle'
                            preview='Lorem ipsum dollar sit amet...'
                        />
                        <ArticlePreviewfrom caption='Image Caption 2'/>
                        <ArticlePreviewfrom caption='Image Caption 2'/>
                        <ArticlePreviewfrom caption='Image Caption 2'/>
                        <ArticlePreviewfrom caption='Image Caption 2'/>
                    </div>
                    <div className={styles.pageRight}></div>
                </div>
            </>
        );
    }
}
  
export default HomeFeed;