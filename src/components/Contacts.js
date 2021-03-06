
import List from './List'
import Form from './Form'
import PropTypes from 'prop-types'

function Contacts(props) {
  return (
    <div>
      <List contacts={props.contacts} />
      <Form addContact={props.addContact} />
    </div>
  )
}



Contacts.propTypes = {
  contacts: PropTypes.array.isRequired,
  addContact: PropTypes.func.isRequired
}
export default Contacts