import React, {Component} from 'react';
import ServicesItem from './ServicesItem';

class ServicesList extends Component {

    render() {
        let services = this.props.products.map(function (product){
            return (
                <ServicesItem key={product.id} product={product}/>
            );
        });
        return (<div>{services}</div>);
    }
}

export default ServicesList;


