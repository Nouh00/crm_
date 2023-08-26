import React, { Component } from 'react'
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { addLead } from '../../actions/leads';


export class Form extends Component {

  state = {
    name: '',
    email: '',
    message: ''
  };

  static propTypes = {
    addLead: PropTypes.func.isRequired
  }

  onChange = (e) => {
    this.setState({
      [e.target.name]: e.target.value
    })
  }

  onSubmit = (e) => {
    e.preventDefault()
    const { name, email, message } = this.state;
    const Lead = {
      name,
      email,
      message
    }
    this.props.addLead(Lead);
  }

  render() {
    const { name, email, message } = this.state;
    return (
      <div className="card card-body mt-4 mb-4">
        <h1>Add Lead</h1>
        <form onSubmit={this.onSubmit}>
          
          <div className="form-group">
            <label >Name</label>
            <input type="text" name='name' className="form-control" onChange={this.onChange} value={name}/>
          </div>
          <div className="form-group">
            <label >Email</label>
            <input type="email" name='email' className="form-control" onChange={this.onChange} value={email}/>
          </div>
          <div className="form-group">
            <label >Message</label>
            <textarea className="form-control"  name='message' rows="3" onChange={this.onChange} value={message}></textarea>
          </div>
          <button type="submit" className="btn btn-primary">Submit</button>
        </form>
      </div>
    )
  }
}

export default connect(null, { addLead })(Form);