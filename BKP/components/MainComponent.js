
import React, {Component} from 'react';
import Cars from './CarComponent';
// import DishDetail from './DishdetailComponent';
import Header from './HeaderComponent';
import Footer from './FooterComponent';
import { Switch, Route, Redirect,withRouter} from 'react-router-dom';
import { connect } from 'react-redux';
import { addbooking } from '../redux/ActionCreators';


// function that maps the state to props
const mapStateToProps = state => {
    return {
      cars: state.cars,
      bookings: state.bookings,
    }
  }
//   This will map the dispatch with props
  const mapDispatchToProps = dispatch => ({
    // addComment: (dishId, rating, author, comment) => dispatch(addComment(dishId, rating, author, comment))
  });

class Main extends Component{
  
    constructor(props){
        super(props);
       
    }

    // onDishSelect(dishId){
    //     this.setState({selectedDish:dishId});
    // }


    render(){



        // const CarWithId = ({match}) => {
        //     return(
        //         <DishDetail dish={this.props.dishes.filter((dish) => dish.id === parseInt(match.params.dishId,10))[0]}
        //         comments={this.props.comments.filter((comment) => comment.dishId === parseInt(match.params.dishId,10))}
        //         addComment={this.props.addComment}
        //       /> 
        //     );
        // }

        return(
        <div>
            <Header/>
            <Switch>   
                <Route exact path='/cars' component={()=> <Cars cars={this.props.cars} />}  />
                {/* <Route path='/menu/:carId' component={CarWithId} /> */}
                {/* Default router when no routes found */}
                <Redirect to='/' />
            </Switch>

            <Footer/>
        </div>
        );
    }
}

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(Main));