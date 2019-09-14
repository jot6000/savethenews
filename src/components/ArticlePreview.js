import React from 'react';
import styles from './ArticlePreview.module.css'

class ArticlePreview extends React.Component {
    
    constructor(props) {
        super(props);
        this.state = 
        {
            
        };
    }
    render() {
        return(
            <div className={styles.container}>
                <div className={styles.pictureContainer}>
                    <div className={styles.picture}/>
                    <caption className={styles.caption}>{this.props.caption}</caption>
                </div>
                <div className={styles.articleContainer}>
                    <h1>{this.props.title}</h1>
                    <h2>{this.props.subtitle}</h2>
                    <span>{this.props.preview}</span>
                </div>
                <div className={styles.authorContainer}>
                    <div>Author</div>
                    <div>Author Rating: </div>
                    <br/>
                    <div>Counter Articles: </div>
                    <br/>
                    <div>Article Rating: </div>
                </div> 
            </div>
        );
    }
}
  
export default ArticlePreview;