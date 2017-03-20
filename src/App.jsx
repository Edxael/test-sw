import React, { Component } from 'react';
import './style.css';
import { Jumbotron, Button } from 'react-bootstrap';
 
class Elem1 extends Component{
    render(){
        return(
            <div className="container">
                <div className="jumbotron">
                    <div>Hello from App.js</div>
                    <br/>
                    <Button>Push It</Button>
                </div>
            </div>
        )
    }
}
 
export default Elem1;
