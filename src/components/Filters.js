import React from 'react';
import styles from './Filters.module.css'

function CheckBox(props){
    return(
        <div style={{display:'flex',flexDirection:'row',textAlign:'left'}}>
            <label style={{flex:'1'}}>
                {props.label}
            </label>
            <input type='checkBox'/>
        </div>
    )
}


class Filters extends React.Component {
    
    constructor(props) {
        super(props);
        this.state = 
        {
            
        };
    }
    render() {
        return(
            <div className={styles.container}>
                <input className={styles.search}/>
                <br/>
                <form className={styles.filterBox}>
                    <div style={{padding: '12px'}}>
                        <CheckBox label='Political'/>
                        <CheckBox label='Environmental'/>
                        <CheckBox label='Cats'/>
                    </div>
                </form>
            </div>
        );
    }
}

export default Filters;