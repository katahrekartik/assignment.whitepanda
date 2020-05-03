import React,{Component} from 'react';
import { Breadcrumb, BreadcrumbItem,
    Button, Form, FormGroup, Label, Input, Col, Row} from 'reactstrap';
import { Link } from 'react-router-dom';
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { addDays } from 'date-fns';
import { withRouter } from 'react-router-dom';


class BookingForm extends Component{

    constructor(props){
        super(props);

        this.state = {
            // use to disable the return date input
            isDisable:true,
            //Other states will be used in form
            name: '',
            contact: '',
            issueDate: '',
            returnDate: '',
            //states for errror
            nameError : '',
            contactError : []
             
        }
        //bind this keyword with all the functions
        this.handleInputChange = this.handleInputChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
        this.checkIsBooked = this.checkIsBooked.bind(this);
        // console.log(this.state);
    }

    validate = () =>{
        let contactError = [];
        let nameError = '';
        //Regex for contact number
        var regContact = /^\d+$/;
        if(!regContact.test(this.state.contact)){
            contactError.push("Alphabates are not allowed");
        }
        //if mobile length is not 10
        if(this.state.contact.length!==10){
            // alert(this.state.contact.length);
            contactError.push('Number Length should be 10') 
        }
        //regex for name
        var regName = /^[a-zA-Z]+ [a-zA-Z]+$/;
        if(!regName.test(this.state.name.trim())){
            nameError = "Should be a full name Ex: John Doe"
        }
        //if error than return false else retrur true
        if(nameError||contactError.length>0){
            this.setState({
                nameError : nameError,
                contactError: contactError
            });

            return false;
        }

        return true;

    }

    //Function invokes when submit is clicked
    handleSubmit(event) {
        event.preventDefault(); 
        const isValid = this.validate();
        //check if the form if validared
        if(isValid){
            //This will add a booking object in Bookings  
            this.props.addbooking(this.props.car.id, this.state.name, this.state.contact, this.state.issueDate, this.state.returnDate);
            //change availablity of the car to false
            this.props.changeavailability(this.props.index);
            //Prevent page from refreshing
        }else{
            alert('Invalid form values');
        }
        
    }

    //set state of name and contact number
    handleInputChange(event) {
        const target = event.target;
        const value = target.value;
        const name = target.name;
        this.setState({
          [name]: value
        });
    }
    //set state of issue date and set state of disable to false so that return date input works  
    handleIssueDate = date => {
        this.setState({
          issueDate: date,
          isDisable:false
        });
    };

    //set state of return date
    handleReturnDate = date => {
        this.setState({
        returnDate: date
        });
    };

    // Function returns the booking form
    BookingForm(){
        return(
            <div className="row row-content">
            <div className="col-12">
                <Form onSubmit={this.handleSubmit}>
                    <Row className="formrow">
                        <Col md={5}>
                        <FormGroup >
                        <Label htmlFor="name">Name</Label>
                            <Input type="text" id="name" className="inputfield" name="name"
                                placeholder="John Doe"
                                required
                                value={this.state.firstname}
                                onChange={this.handleInputChange} />
                            <p className="unavailable">{this.state.nameError}</p>
                            </FormGroup>
                        </Col>
                        <Col md={5}>
                        <FormGroup >
                    <Label htmlFor="contact">Contact Tel.</Label>
        
                            <Input type="text" id="contact" className="inputfield" name="contact"
                                placeholder="+91"
                                required
                                value={this.state.telnum}
                                onChange={this.handleInputChange} />
                            {this.state.contactError.map(value=>{return <p className="unavailable">{value}</p>}    ) }
                            
                    </FormGroup>
                        </Col>
                    </Row>
                    
                    <Row >
                        <Col md={5}>
                    <FormGroup>
                        <Label htmlFor="issueDate">Issue Date</Label><br/>
                    
                            <DatePicker
                            className="form-control inputfield"
                                selected={this.state.issueDate}
                                required
                                placeholderText="MM/DD/YYYY"
                                onChange={this.handleIssueDate}
                                minDate={new Date()}
                            />
        
                    </FormGroup>
                    </Col>
                    <Col md={5}>
                    <FormGroup>
                        <Label htmlFor="returndate" >Return Date</Label><br/>
                            <DatePicker
                                className="form-control inputfield"
                                selected={this.state.returnDate}
                                placeholderText="MM/DD/YYYY"
                                required
                                minDate={addDays(this.state.issueDate,1)}
                                onChange={this.handleReturnDate}
                                disabled={this.state.isDisable}
                            />
                
                    </FormGroup>
                    </Col>
                    </Row>
                    <Row>
                    <Col md={10}>
                    <FormGroup >
                              <Button type="submit" color="secondary" className="submitbutton"  onClick={()=>this.setState({isbooked:true})}>
                                Book Car
                            </Button>
                      </FormGroup>
                      </Col>
                      </Row>
                </Form>
                <Button outline color="secondary" className="backbutton"  onClick={this.props.history.goBack}>Back</Button>
            </div>
       </div>
        );
    }

//Function returns Form if the car is not booked
    checkIsBooked(){
        //return form if there are no bookings
        if(this.props.bookings.length==0){
            return this.BookingForm();
        //check if the car is already booked
        }else if(this.props.bookings[this.props.bookings.length-1].carId == parseInt(this.props.match.params.carId)){
                return (
                    <div className="container">
                    <div className="alert alert-success">
                    <strong>Your Booking has been Confirmed!</strong>
                  </div>
                  <Link to="/cars"><Button outline color="secondary">Continue</Button></Link>
                  </div>
                );
            }
            else{
                return this.BookingForm(); 
            }
    }
 
    render(){
        return(
            <div className="container">
                {/* use to jump between pages */}
                <Breadcrumb>
                    <BreadcrumbItem><Link to="/">Cars</Link></BreadcrumbItem>
                    <BreadcrumbItem active>Booking details</BreadcrumbItem>
                </Breadcrumb>
                {/* //Function returns Form if the car is not booked */}
                {this.checkIsBooked()}
            </div>
        );
    }
}

//Enclose bookingform component inside withrouter 
export default withRouter(BookingForm);