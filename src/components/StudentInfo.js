import React, {Component} from 'react'
export default class Studentinfo extends Component { 
    render() {
        const {name, email} = this.props;
        return ( 
            <li className="list-group-item d-flex justify-content-between my-2">
                <h6>{name}</h6>
                <h6>{email}</h6>
                <div>
                    <span className ="mx-2 text-success">
                        <i className="fas fa-pen"></i> 
                    </span>
                    <span className ="mx-2 text-success">
                        <i className="fas fa-trash"></i> 
                    </span>
                </div>
            </li>
        );

    }
}