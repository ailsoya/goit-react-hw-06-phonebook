import { ContactForm } from './Elements/ContactForm'
import { ContactList } from './Elements/ContactList'
import { Filter } from './Elements/Filter'

export const App = () => {
  return (
    <div>
      <h1>Phonebook</h1>
      <ContactForm />

      <h2>Contacts</h2>
      <Filter />
      <ContactList />
    </div>
  )
}