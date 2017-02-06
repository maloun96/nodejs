import React, {Component} from 'react';
import ServicesList from './ServicesList';

class ServicesApp extends Component {
    constructor(props) {
        super(props);

        this.state = {
            products: []
        };
    }

    componentWillMount() {

        $.ajax({
            url: '/',
            method: 'post',
            success: function(data) {
                this.setState({ products: data});
            }.bind(this),
                error: function(xhr, status, err) {
                console.error(this.props.url, status, err.toString());
            }.bind(this)
        });
    }


    render() {
        return (
            <div className="App">
                <ServicesList products={this.state.products}/>
            </div>
        );
    }
}

export default ServicesApp;


