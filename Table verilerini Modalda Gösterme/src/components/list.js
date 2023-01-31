import axios from 'axios';
import React, { Component } from 'react';
import Modal from './modal.js';
import './style.css';

class List extends Component {
  constructor(props) {
    super(props);
    this.replaceModalItem = this.replaceModalItem.bind(this);
    this.state = {
      requiredItem: 0,
      brochure: [],
    }
  }
  replaceModalItem(index) {
    this.setState({
      requiredItem: index
    });
  }
  componentDidMount(){
    axios.get('https://jsonplaceholder.typicode.com/users').then(res =>
    {
      const veri = res.data;
      this.setState({brochure:veri})
    });
    
  }

  render() {
    const brochuree = this.state.brochure.map((item, index) => {
      return (
        <tr key={index}>
          <td>{item.id}</td>
          <td>{item.name}</td>
          <td>
            <button className="btn btn-primary" data-toggle="modal" data-target="#exampleModal"
              onClick={() => this.replaceModalItem(index)}>Kargo Fiyat Bilgileri</button>
          </td>
        </tr>
      )
    });
    const requiredItem = this.state.requiredItem;
    const modalData = this.state.brochure[requiredItem];
    return (
      <div>
        <div className='container-fluid'>
          <div className='row'>
            <div className='col-md-8 mx-auto mt-5'>
              <table className="table table-striped text-center">
                <thead>
                  <tr>
                    <th>İd</th>
                    <th>Name</th>
                    <th>Kargo Bilgileri</th>
                  </tr>
                </thead>
                <tbody>
                  {brochuree}
                </tbody>
              </table>
            </div>
          </div>
        </div>
        <Modal
          veriiii={modalData}
        />
      </div>
    );
  }
}

export default List;
