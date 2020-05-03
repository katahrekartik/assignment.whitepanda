import React from 'react';
import { Card, CardImg, CardImgOverlay,
    CardTitle,Row,Col,CardSubtitle,CardBody,Button, CardText } from 'reactstrap';
import { Link } from 'react-router-dom';
        
//Function recives the car object and index of the array which will be use to update the state of the selected object
function RenderCarList({car,index}){
    return(
        <Card className="carlistcards">
            <Row>
            <Col md={3}>
                <CardImg top width="100%" src={car.image} alt={car.carModal} className="cardimg"/>
            </Col>
            <Col md={9}>
                <CardBody>
                    <Row>
                        <Col md={8}>
                            <CardTitle className="carmodal">{car.carModal}</CardTitle>
                            <CardSubtitle className="cardetails">
                                <span className="color"><span className="fa fa-eyedropper fa-sm"></span> { car.color}</span>
                                <span className="seatingcapacity"><span className="fa fa-car fa-sm"></span>{ car.seatingCapacity} Seater</span>
                                <span className="rentperday"><span className="fa fa-inr fa-sm"></span> { car.rentPerDay} / Day</span> 
                            </CardSubtitle>
                        </Col>
                        <Col md={4} className="carlistbuttonsContiner" >
                            {/* This will pass the car id and index in the url  */}
                            <Link to={`/bookings/${car.id}/${index}`} ><Button disabled={!car.availability} style={{margin:"10%"}}>Book now</Button></Link>
                            {/* This will pass the car id and index in the url  */}
                            <Link to={`/cars/${car.id}/${index}`} ><Button outline color="secondary">Details</Button></Link>
                            {car.availability?<p></p>:<p className="unavailableHomepage">Currently unavailable!</p>}


                        </Col>
                    </Row>
                </CardBody>
            </Col>
            </Row>
        </Card>
        
    );
}

const Cars  = (props) => {
    const carslist = props.cars.map((car, index)=>{
        return (
                <div className="cards">
                    {/* pass the car details and index as a parameter index will be used to update the state  */}

                    <RenderCarList car={car} index={index} /> 
                </div>
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
            <div>
                {/* cars list starts here */}
                {/* call function for cars list */}
                {carslist}       
            </div>
        </div>
    );
}
export default Cars;