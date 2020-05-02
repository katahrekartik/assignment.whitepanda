import React from 'react';
import { Card, CardImg, CardImgOverlay,
    CardTitle, Breadcrumb, BreadcrumbItem } from 'reactstrap';
import { Link } from 'react-router-dom';
        


function RenderMenuItems({car}){

    return(
        <Card>
            <Link to={`/menu/${car.id}`} >
                <CardImg width="100%" src={car.image} alt={car.modelName} />
                <CardImgOverlay>
                    <CardTitle>{car.modelName}</CardTitle>
                </CardImgOverlay>
            </Link>
        </Card>
        
    );
}


const Cars  = (props) => {

    const carslist = props.cars.map((car)=>{
        return (
            <div  className="col-12 col-md-5 m-1">
               <RenderMenuItems car={car} /> 
            </div>
        );
    })

    return(
        <div className="container">
            <div className="row">
                <Breadcrumb>
                    <BreadcrumbItem><Link to="/">Cars</Link></BreadcrumbItem>
                    <BreadcrumbItem active>Menu</BreadcrumbItem>
                </Breadcrumb>
                <div className="col-12">
                    <h3>Cars</h3>
                    <hr />
                </div>                
            </div>
            <div className="row">
                {carslist}
            </div>
        </div>
    );
    
}

export default Cars;