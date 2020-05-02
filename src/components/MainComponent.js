
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
    addbooking: (carId, name, contactNo, issueDate, returnDate) => dispatch(addbooking(carId, name, contactNo, issueDate,returnDate)),
    changeavailability: (index) => dispatch(changeavailability(index))
  });

class Main extends Component{
  
    constructor(props){
        super(props);
       
    }


    render(){

        const CarWithId = ({match}) => {
            return(
                <CarDetail car={this.props.cars.filter((car) => car.id === parseInt(match.params.carId,10))[0]}
                bookings={this.props.bookings.filter((booking) => booking.carId === parseInt(match.params.carId,10))}
                index = {match.params.index}
                /> 
            );
        }

        const BookWithId = ({match}) => {
            return(
                <BookingForm car={this.props.cars.filter((car) => car.id === parseInt(match.params.carId,10))[0]}
                // bookings={this.props.bookings.filter((booking) => booking.carId === parseInt(match.params.carId,10))}
                addbooking={this.props.addbooking}
                changeavailability = {this.props.changeavailability}
                index = {match.params.index}
              /> 
            );
        }

        return(
        <div>
            <Header/>
            <Switch>   
                <Route exact path='/cars' component={()=> <Cars cars={this.props.cars} />}  />
                <Route path='/cars/:carId/:index' component={CarWithId} />
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