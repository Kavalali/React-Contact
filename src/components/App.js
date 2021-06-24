import React, { Component } from 'react'
import Contacts from './Contacts'

class App extends Component {
  state = {
    contactsPeople: [
      {
        'name': 'xxxxxx',
        'phone': '0000000'
      },
      {
        'name': 'yyyyyy',
        'phone': '111111'
      },
      {
        'name': 'zzzzz',
        'phone': '2222222'
      }
    ]
  }

  addContact = (contact) => {
    this.state.contactsPeople.push(contact);
    this.setState({ 
      contactsPeople:this.state.contactsPeople
    })
  }
  render() {
    return (
      <div>
        <Contacts
          contacts={this.state.contactsPeople}
          addContact={this.addContact} />
      </div>
    )
  }
}

export default App
