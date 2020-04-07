import React, {Component} from 'react';
import { Card } from 'react-bootstrap';
import './common.css';

class CardLayout extends Component{
    constructor(props){
        super(props);
        this.state = {

        }
    }

    render(){
        const { img, title, text } = this.props;

        return(
            <Card className="card-layout">
                <Card.Img className="card-img" variant="top" src={img} roundedCircle />
                <Card.Body>
                    <Card.Title>{title}</Card.Title>
                    <Card.Text>
                        {text}
                    </Card.Text>
                </Card.Body>
            </Card>
        )
    }
}

export default CardLayout;