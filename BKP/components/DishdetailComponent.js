import React from 'react';
import { Card, CardImg, CardText, CardBody,
    CardTitle, Breadcrumb, BreadcrumbItem, Button} from 'reactstrap';
import { Link } from 'react-router-dom';
import CommentForm from './CommentForm';
    
function RenderDish({dishDetails}){
        if(dishDetails!=null){
            return(
                <Card>
                <CardImg top src={dishDetails.image} alt={dishDetails.name} />
                <CardBody>4
                <CardTitle>{dishDetails.name}</CardTitle>
                <CardText>{dishDetails.description}</CardText>
                </CardBody>
                </Card>
            );
            }else{
                return(
                <div></div>
            );
        }
    }

function RenderComments({comments,addComment,dishId}){
        if(comments!=null){
            
            return(
                <div>
                    <h4>Comments</h4>
                    {comments.map(comment => 
                        (
                            <ul key={comment.id} className="list-unstyled">
                                <li>{comment.comment}</li>
                                <li> -- {comment.author} , {comment.date}</li>
                            </ul>
                        ) 
                    )}
                    <CommentForm dishId={dishId} addComment={addComment} />
                    
                </div>
                
            );
            }else{
                return(
                    <div></div>
            );
        }
    }

const DishDetail = props => {
    return(
        <div className="container">
            <div className="row">
                <Breadcrumb>

                    <BreadcrumbItem><Link to="/menu">Menu</Link></BreadcrumbItem>
                    <BreadcrumbItem active>{props.dish.name}</BreadcrumbItem>
                </Breadcrumb>
                <div className="col-12">
                    <h3>{props.dish.name}</h3>
                    <hr />
                </div>                
            </div>
            <div className="row">
                <div className="col-12 col-md-5 m-1">
                    <RenderDish dishDetails={props.dish}/>
                </div>
                <div className="col-12 col-md-5 m-1">
                    <RenderComments comments={props.comments}
                    addComment = {props.addComment} 
                    dishId = {props.dish.id}/>
                </div>
            </div>
        </div>       
        
    );

}
    


export default DishDetail;