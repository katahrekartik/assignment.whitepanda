import React from 'react';
import { Card, CardImg, CardImgOverlay,
    CardTitle, Breadcrumb, BreadcrumbItem,Row,Col,CardSubtitle,CardBody,Button, CardText } from 'reactstrap';
import { Link } from 'react-router-dom';
import mypic from '../shared/images/ford.png';
        


function RenderCarList({car,index}){
    
    return(
        <Card width="100%">
            <Row>
            <Col md={3}>
                <CardImg top width="100%" src={car.image} alt={car.carModal} height="100%"  />
            </Col>
            <Col md={9}>
                <CardBody>
                <CardTitle>{car.carModal}</CardTitle>
                <CardSubtitle>Card subtitle</CardSubtitle>
                <Link to={`/bookings/${car.id}/${index}`} ><Button>Book now</Button></Link>
                <Link to={`/cars/${car.id}/${index}`} ><Button>Details</Button></Link>
                </CardBody>
            </Col>
            </Row>
        </Card>
      
        
    );
}


const Cars  = (props) => {

    const carslist = props.cars.map((car, index)=>{
        return (
               <RenderCarList car={car} index={index} /> 
        );
    })

    return(
        <div className="container">
            <div className="row">
                
                <div className="col-12">
                    <h3>Cars for rent</h3>
                    <hr />
                </div>         
            </div>
            {carslist}       

        </div>
    );
    
}

export default Cars;