import React, { Component } from 'react';

class Modal extends Component {
    constructor(props) {
        super(props);
        this.state = {
            veriiii:{
                address: {},
            },
            broch: {},
        }
    }
    // componentDidMount(){
    //     const asd = this.state.veriiii.address;
    //     // useState({broch:asd})
    // }
    componentWillReceiveProps(nextProps) {
        this.setState({
            veriiii: nextProps.veriiii,
            broch: nextProps.broch,
        });
    }
    render() {
        console.log(this.state.broch)
        // const brochw = this.state.broch.map((item, index) => {
        //     return(
        //         <div key={index}>
        //             {item.city}
        //         </div>
        //     )
        // })
        return (
            <div className="modal fade" id="exampleModal" tabIndex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
                <div className="modal-dialog" role="document">
                    <div className="modal-content">
                        <div className="modal-header">
                            <h5 className="modal-title" id="exampleModalLabel">{this.state.veriiii.name} Modal {this.state.veriiii.id}</h5>
                            <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                                <span aria-hidden="true">&times;</span>
                            </button>
                        </div>
                        <div className="modal-body">
                        <table className="table table-striped text-center">
                            <thead>
                              <tr>
                                <th>desi</th>
                                <th>kg</th>
                                <th>kg</th>
                              </tr>
                            </thead>
                            <tbody>
                                {/* {brochw} */}
                                <tr>
                                    <td>{this.state.veriiii.address.city}</td>
                                    <td>{this.state.veriiii.address.street}</td>
                                    <td>{this.state.veriiii.address.zipcode}</td>
                                </tr>
                            </tbody>
                        </table>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default Modal;