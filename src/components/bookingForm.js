import React,{Component} from 'react';
import {Button,Modal, ModalHeader, ModalBody,Form, FormGroup, Input, Label,Row,Col,Breadcrumb,BreadcrumbItem } from 'reactstrap';
import { Control, LocalForm, Errors } from 'react-redux-form';
import { Link } from 'react-router-dom';


class BookingForm extends Component{

    constructor(props){
        super(props);

        this.state = {
            isModalOpen:false
        }

        this.toggleModal = this.toggleModal.bind(this);
    }

    toggleModal(){
        this.setState({
            isModalOpen : !this.state.isModalOpen
        })
    }


    handleSubmit(values){
        // console.log(values);
        console.log(this.props);
        this.props.addbooking(this.props.car.id, values.name, values.contact, values.issueDate, values.returnDate);
        this.props.changeavailability(this.props.index);
    }


    render(){
        const required = (val) => val && val.length;
    const maxLength = (len) => (val) => !(val) || (val.length <= len);
    const minLength = (len) => (val) => val && (val.length >= len);
    const isNumber = (val) => !isNaN(Number(val));
    const validEmail = (val) => /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(val);
        return(
            <div className="container">
                <Breadcrumb>
                    <BreadcrumbItem><Link to="/">Cars</Link></BreadcrumbItem>
                    <BreadcrumbItem active></BreadcrumbItem>
                </Breadcrumb>
                <LocalForm onSubmit={(values) => this.handleSubmit(values)}>
                <Row className="form-group">
                    <Label htmlFor="name" md={12}>Your Name</Label>
                    <Col md={12}>
                        <Control.text model=".name" id="name" name="name"
                        placeholder="John Doe"
                        className="form-control"
                        validators={{
                        required, minLength: minLength(3), maxLength: maxLength(15)
                        }}
                        />
                        <Errors
                        className="text-danger"
                        model=".name"
                        show="touched"
                        messages={{
                        required: 'Required',
                        minLength: 'Must be greater than 2 characters',
                        maxLength: 'Must be 15 characters or less'
                        }}
                        />
                    </Col>
                </Row>
                <Row className="form-group">
                    <Col md={12}>
                        <Button type="submit" color="primary">
                        Book Car
                        </Button>
                    </Col>
                </Row>
                </LocalForm>

                <Modal isOpen={this.state.isModalOpen} toggle={this.toggleModal}>
                    <ModalHeader toggle={this.toggleModal}>Login</ModalHeader>
                    <ModalBody>
                        
                    </ModalBody>
                </Modal>
            </div>
                
        );
    }
}

export default BookingForm;