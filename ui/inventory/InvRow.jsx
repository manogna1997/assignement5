import React, { Component } from "react";
import { Link } from "react-router-dom";

export default class InvRow extends Component {

        /**
     * 
     * @param {default init} props 
     */
    constructor(props) {
        super(props);
        this.removeData = this.removeData.bind(this);

    }
    removeData() {
        this.props.remove(this.props.data);
    }
  
      
    render() {
        return (
            <tr>
                <td>{this.props.keyId + 1}</td>
                <td>{this.props.data.name}</td>
                <td>{this.props.data.price}</td>
                <td>{JSON.stringify( this.props.data.category)}</td>
                <td>
                    {this.props.data.image != "" ? (
                        <Link to={'/image/'+this.props.data.id}>View Image</Link>
                    ) : ("N/A")}
                </td>
                <td>
                    <button onClick={this.removeData}>
                                Click to Remove
                    </button>

                </td>
                <td>
                    <Link to={'/edit/'+this.props.data.id}>Click Edit</Link>
                </td>

            </tr>
        );
    }
}

               {/* <a href={this.props.data.image} target="_blank">View
                        </a> */}