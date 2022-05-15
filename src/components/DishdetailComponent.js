import React, { Component } from 'react';

import { Card, CardImg, CardImgOverlay, CardText, CardBody, CardTitle } from 'reactstrap';

class DishDetail extends Component{
    constructor(props){
        super(props);

        this.state={
            selectedDishDetail: null
        };
    }
    
    renderDish(dish){
        if(dish != null){
            return(
                <Card>
                    <CardImg top src={dish.image} alt={dish.name} />
                    <CardBody>
                        <CardTitle>{dish.name}</CardTitle>
                        <CardText>{dish.description}</CardText>
                    </CardBody>
                </Card>
                
            );
        }
        else{
            return (<div></div>);
        }
    }
    renderComments(comments){
        if (comments == null) {
            return (<div></div>)
        }
        const comnts = comments.map(comment => {
            return (
                <div className="col-12 col-md-10 m-1">
                    <li key={comment.id}>
                        <p>{comment.comment}</p>
                        <p>-- {comment.author},
                        &nbsp;
                        {new Intl.DateTimeFormat('en-US', {
                            year: 'numeric',
                            month: 'short',
                            day: '2-digit'
                        }).format(new Date(Date.parse(comment.date)))}
                        </p>
                    </li>
                </div>
            )
        })
        return (
            <div className="col-14 col-md-13 m-1">
                <h4> Comments </h4>
                <ul className='list-unstyled'>
                    {comnts}
                </ul>

            </div>
        )
    }
    render() {

        const dish= this.props.dish
        console.log(dish);
        if(dish != null){
            const dishItem= this.renderDish(dish);
            const dishComment = this.renderComments(dish.comments);
            return (
                <div className="container">
                    <div className="col-14 col-md-13 m-1"> {dishItem} </div>
                    <div className="col-14 col-md-13 m-1">{dishComment}</div> 
                </div>
            )
        }
    }
} 

export default DishDetail