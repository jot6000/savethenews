import React from 'react';
import './myComponent.css';

class MyComponent extends React.Component {
    
    constructor(props) {
        super(props);
        this.state = 
        {
            
        };
    }

    render() {
        return(
            <>
                <h1 className='myClass'>
                    {this.props.Title}
                </h1>
                <div>
                    {this.props.Content}
                </div>
            </>
        );
    }
}
  
export default MyComponent;