import React from 'react';
import { Card, CardImg, CardText, CardBody,
    CardTitle, Breadcrumb, BreadcrumbItem, Button,Row,Col,CardSubtitle,Table} from 'reactstrap';
import { Link } from 'react-router-dom';
    

// function returns the car details
function RenderCarDetails({carDetails,index}){
        if(carDetails!=null){
            return(
                <React.Fragment>
                    {/* //Create card to show the detials of the car */}
                    <Card className="cardetailscard">
                        <Row>
                        <Col md={7}>
                            <CardImg top width="100%" src={carDetails.image} alt={carDetails.carModal} className="cardetailsimg"  />
                            </Col>
                            <Col md={5}>
                            <CardBody>
                                <CardTitle className="carmodal">{carDetails.carModal}</CardTitle>
                                <CardSubtitle className="fullcardetails">
                                    <span className="color"><span className="fa fa-eyedropper fa-sm"></span> { carDetails.color}</span>
                                    <span className="seatingcapacity"><span className="fa fa-car fa-sm"></span>{ carDetails.seatingCapacity} Seater</span>
                                </CardSubtitle>
                                <h5 className="mt-3"> Rent Per Day: <span className="fa fa-inr fa-sm"></span> { carDetails.rentPerDay}</h5>
                                <Link to={`/bookings/${carDetails.id}/${index}`} ><Button className="bookbuttoncardetails" disabled={!carDetails.availability}>Book now</Button></Link>
                                {carDetails.availability?<p></p>:<p className="unavailable">Currently unavailable!</p>}
                            </CardBody>
                        </Col>
                        </Row>
                    </Card>
                    {/* Show the other details of the car */}
                    <div className="row">
                    <div className="col-12 mt-5">
                        <h3 className="heading">Car Details</h3>
                        <hr className="horizontalline"/>
                        {carDetails.availability?<div></div>:<Button disabled={true} className="mb-2">Not Available </Button>}
                        <p>Vehicle number: {carDetails.vehicleNumber}</p>
                        <p>Fuel type: {carDetails.fuelType}</p>
                        <p>Engine: {carDetails.engine}</p>
                        <p>{carDetails.details}</p>
                    </div>
                    </div>
            </React.Fragment>
               
            );
            }else{
                return(
                <div></div>
            );
        }
    }

// Function will return the current booking for the vehicle
function RenderBookings({bookings}){
        if(bookings.length!=0){
            console.log(bookings);
            return(
                <div>
                    <Table borderless>
                    <thead>
                        <tr>
                        <th>NAME</th>
                        <th>PHONE NUMBER</th>
                        <th>ISSUE DATE</th>
                        <th>RETURN DATE</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                        <td>{bookings[0].name}</td>
                        <td>{bookings[0].contactNo}</td>
                        {/* convert the date in short format */}
                        <td>{bookings[0].issueDate.toLocaleDateString('en-US', {
                            day: '2-digit',
                            month: '2-digit',
                            year: 'numeric',
                            })}</td>
                        {/* convert the date in short format */}
                        <td>{bookings[0].returnDate.toLocaleDateString('en-US', {
                            day: '2-digit',
                            month: '2-digit',
                            year: 'numeric',
                            })}</td>
                        </tr>
                    </tbody>
                    </Table>
                    <Link to='/'><Button outline color="secondary">Back</Button></Link>
                </div>
                
            );
            }else{
                return(
                    <div></div>
            );
        }
    }
// Car details component
const CarDetail = props => {
    return(
        <div className="container">
            <div className="row">
                {/* //this will be used for routing between pages */}
                <Breadcrumb>
                    <BreadcrumbItem><Link to="/cars">Cars</Link></BreadcrumbItem>
                    <BreadcrumbItem active>{props.car.carModal}</BreadcrumbItem>
                </Breadcrumb>
            </div>
            {/* Car details starts here */}
            {/* pass the car details and index as a parameter index will be used to update the state  */}
            <RenderCarDetails carDetails={props.car} index={props.index}/>
            {/* //Current booking section starts here */}
            <div className="row">
                <div className="col-12 mt-5">
                <h4 className="heading">Current Booking</h4>
                <hr className="horizontalline"/>
                <RenderBookings bookings={props.bookings}
                />
            </div>
            </div>
        </div>       
        
    );

}
    


export default CarDetail;