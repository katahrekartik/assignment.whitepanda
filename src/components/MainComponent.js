
import React, {Component} from 'react';
import Cars from './CarComponent';
import CarDetail from './CardetailComponent';
import Header from './HeaderComponent';
import Footer from './FooterComponent';
import BookingForm from './bookingForm';
import { Switch, Route, Redirect,withRouter} from 'react-router-dom';
import { connect } from 'react-redux';
import { addbooking,changeavailability } from '../redux/ActionCreators';


// function that maps the state to props
const mapStateToProps = state => {
    return {
      cars: state.cars,
      bookings: state.bookings,
    }
  }
//   This will map the dispatch with props
  const mapDispatchToProps = dispatch => ({
    //function for add booking
    addbooking: (carId, name, contactNo, issueDate, returnDate) => dispatch(addbooking(carId, name, contactNo, issueDate,returnDate)),
    //use to change the availability of the vehicle if the car is booked
    changeavailability: (index) => dispatch(changeavailability(index))
  });

class Main extends Component{
    constructor(props){
        super(props);
    }
    render(){
        const CarWithId = ({match}) => {
            return(
                //Pass the car object using filter function
                <CarDetail car={this.props.cars.filter((car) => car.id === parseInt(match.params.carId,10))[0]}
                bookings={this.props.bookings.filter((booking) => booking.carId === parseInt(match.params.carId,10))}
                // index will be used to update the state of the seleted item                
                index = {match.params.index}
                /> 
            );
        }

        const BookWithId = ({match}) => {
            return(
                //Pass the car object using filter function
                <BookingForm car={this.props.cars.filter((car) => car.id === parseInt(match.params.carId,10))[0]}
                addbooking={this.props.addbooking}
                changeavailability = {this.props.changeavailability}
                // index will be used to update the state of the seleted item
                index = {match.params.index}
                //this will be used to check  if the car is already booked
                bookings={this.props.bookings}
              /> 
            );
        }

        return(
        <div>
            <Header/>
            <Switch>   
                <Route exact path='/cars' component={()=> <Cars cars={this.props.cars} />}  />
                {/* Index will be use to update the state of the selected item */}
                <Route path='/cars/:carId/:index' component={CarWithId} />
                {/* Index will be use to update the state of the selected item */}
                <Route path='/bookings/:carId/:index' component={BookWithId} />
                {/* Default router when no routes found */}
                <Redirect to='/cars' />
            </Switch>

            <Footer/>
        </div>
        );
    }
}

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(Main));