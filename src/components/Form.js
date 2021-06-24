import React, { Component } from 'react'
import './Form.css'
import PropTypes from 'prop-types'

class Form extends Component {
  static propTypes = {
    addContact:PropTypes.func.isRequired
  }
  state = {
    name:'',
    phone:''
  }
  onSubmit = (event) => {
    event.preventDefault();
    this.props.addContact({
      ...this.state
    });
  }
  onChange = (event) => {
    this.setState({
      [event.target.name]: event.target.value,
    })
  }
  render() {
    return (
      <div>
        <form className='inputs' onSubmit = {this.onSubmit}>
          <input name='name' type='text' id='name' placeholder='Add a Name' value= {this.state.name} onChange = {this.onChange}></input>
          <input name='phone' type='number' id='phone' placeholder='Add a Phone Number' value = {this.state.phone} onChange = {this.onChange}></input>
          <button className='add' onSubmit={this.addContact}>Add</button>
        </form>
      </div>
    )
  }
}

export default Form
