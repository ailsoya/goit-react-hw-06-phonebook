import styles from "../Style.module.css"
import { getContacts, getFilter } from "redux/selectors"
import { useSelector, useDispatch } from "react-redux"
import { deleteContact } from "redux/contactsSlice"

const getFilteredContacts = (contacts, filter) => {
    if(filter==='') {
        return contacts
    } else {
        const normFilter = filter.toLowerCase()
        const filteredContacts = contacts.filter(contact =>
          contact.name.toLowerCase().includes(normFilter)
        )
        return filteredContacts
    }
}

export const ContactList = () => {
    const contacts = useSelector(getContacts)
    const filter = useSelector(getFilter).value
    const dispatch = useDispatch()
    const filteredContacts = getFilteredContacts(contacts, filter)

    const handleDelete = id => {
        dispatch(deleteContact(id))
    }

    return (
        <>
            {filteredContacts.length > 0 && (
                <ul>  
                {filteredContacts.map(contact => (
                    <li key={contact.id} className={styles.ContactLi}>{contact.name}: {contact.number} <button onClick={() => handleDelete(contact.id)}>Delete</button></li>
                ))}
            </ul>
            )}
        </>
    )
}