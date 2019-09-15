import React from 'react';
import styles from './ArticlePreview.module.css'

import { BrowserRouter as Router, Route, Link } from "react-router-dom";

class ArticlePreview extends React.Component {
    
    constructor(props) {
        super(props);
        this.state = 
        {
            
        };
    }
    render() {
        return(
            <Link to={{pathname:"/article/"+this.props.articleTitle}} className={styles.container}>
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
            </Link>
        );
    }
}
  
export default ArticlePreview;