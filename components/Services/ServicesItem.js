import React, {Component} from 'react';


class ServicesItem extends Component {


    render() {
        return (
            <div key={this.props.product.id}>
                <div className="col-sm-6 col-md-4">
                    <div className="thumbnail">
                        <img src="http://www.mamiyaleaf.com/assets/slider/product/product_slider_heinz_baumann.jpg"/>
                        <div className="caption">
                            <h3>{this.props.product.title}</h3>
                            <p>{this.props.product.description}</p>
                            <h5>${this.props.product.price}</h5>
                            <p><a href="#" className="btn btn-primary" role="button">Button</a></p>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default ServicesItem;


