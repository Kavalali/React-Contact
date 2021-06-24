import React, { Component } from 'react'
import './List.css'
import PropTypes from 'prop-types'
import Contacts from './Contacts'

class List extends Component {
  static defaultProps = {
    contacts: PropTypes.array.isRequired
  }
  state = {
    queryString : ""
  }

  filteredListItem = (event) => {
    this.setState({
      queryString:event.target.value
    })
  }
  render() {
    const filterContacts = this.props.contacts.filter(
      contacts => {
        return contacts.name.toLowerCase().indexOf(this.state.queryString.toLowerCase()) !== -1
      }
    );
    return (
      <div className='list-part'>
        <div className='list-area'>
          <div id='filter-input'>
            <input onChange = {this.filteredListItem} value = {this.state.queryString} name='filter' id='filter' placeholder='Filter by name or phone' />
            <div className='list'>
              <ul className='list-contacts'>
                {
                  filterContacts.map(
                    contact =>
                      <li id={contact.phone} key={contact.phone}>
                        <span className='name'>{contact.name}</span>
                        <span className='phone'>{contact.phone}</span>
                      </li>
                  )
                }
              </ul>
            </div>
          </div>
        </div>

      </div>
    )
  }
}

export default List