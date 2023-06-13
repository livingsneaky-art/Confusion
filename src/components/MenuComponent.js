import React, { Component } from 'react';
import { Card, CardImg, CardImgOverlay, CardText, CardBody, CardTitle } from 'reactstrap';
import DishDetail from './DishdetailComponent';

class Menu extends Component  {
    constructor(props) {
        super(props);

        this.state = {
           selectDish: null
        }
        console.log('Menu Component constructor is invoked');
    }

    componentDidMount() {
        console.log('Menu Component  componentDidMount is invoked');
    }

    onDishSelect(dish) {
        this.setState({ 
            selectDish: dish 
        });
    }

    renderDish(dish) {
        if (dish != null) {
            return (
                <Card>
                    <CardImg object src={dish.image} alt={dish.name}/>
                    <CardBody>
                        <CardTitle>{dish.name}</CardTitle>
                        <CardText>{dish.description}</CardText>
                    </CardBody>
                </Card>
            );
        }else {
            return (
                <div></div>
            )
        }
    }

    render() {

        const menu = this.props.dishes.map((dish) => {
            return (
                //mt = margin top ml = margin left
                //m-1 margin overall by 1
                <div key={dish.id} className="col-12 col-md-5 m-1">
                    <Card onClick={() => this.onDishSelect(dish)}>
                        <CardImg object src={dish.image} alt={dish.name}/>
                            <CardImgOverlay >
                                <CardTitle>{dish.name}</CardTitle>
                            </CardImgOverlay>
                    </Card>
                </div>
            );
        });
        console.log('Menu Component render is invoked');
        return (
            <div className="container">
                <div className="row">
                    {menu}    
                </div>

                    <DishDetail tail dish= {this.state.selectDish} />
               
            </div>
        );
    }
}

export default Menu;