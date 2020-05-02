import React from 'react';
import { Card, CardImg, CardText, CardBody,
    CardTitle, Breadcrumb, BreadcrumbItem, Button,Row,Col} from 'reactstrap';
import { Link } from 'react-router-dom';
    
function RenderCarDetails({carDetails,index}){
        if(carDetails!=null){
            return(
                 

                <Card width="100%">
                <Row>
                <Col md={6}>
                <CardImg top width="100%" src={carDetails.image} alt={carDetails.carModal} height="100%"  />
                </Col>
                <Col md={6}>
                <CardBody>
                <CardTitle>{carDetails.carModal}</CardTitle>
                <Link to={`/bookings/${carDetails.id}/${index}`} ><Button>Book now</Button></Link>
                <CardText>Some quick example text to build on the card title and make up the bulk of the card's content.</CardText>
                {/* <Link to={`/cars/${carDetails.id}`} ><Button>Button</Button></Link> */}
                </CardBody>
                </Col>
                </Row>
                </Card>
            );
            }else{
                return(
                <div></div>
            );
        }
    }

function RenderBookings({bookings}){
        if(bookings!=null){
            
            return(
                <div>
                    <h4>bookings</h4>
                    {bookings.map(booking => 
                        (
                            <ul key={booking.id} className="list-unstyled">
                                <li>{booking.name}</li>
                                <li> -- {booking.issueDate} , {booking.returnDate}</li>
                            </ul>
                        ) 
                    )}
                    
                </div>
                
            );
            }else{
                return(
                    <div></div>
            );
        }
    }

const CarDetail = props => {
    return(
        <div className="container">
            <div className="row">
                <Breadcrumb>

                    <BreadcrumbItem><Link to="/cars">Cars</Link></BreadcrumbItem>
                    <BreadcrumbItem active>{props.car.carModal}</BreadcrumbItem>
                </Breadcrumb>
                <div className="col-12">
                    <h3>{props.car.name}</h3>
                    <hr />
                </div>                
            </div>
          
            <RenderCarDetails carDetails={props.car} index={props.index}/>
               
                
            <div className="row">
            <div className="col-12 col-md-5 m-1">
                    <RenderBookings bookings={props.bookings}
                     />
            </div>
            </div>
        </div>       
        
    );

}
    


export default CarDetail;