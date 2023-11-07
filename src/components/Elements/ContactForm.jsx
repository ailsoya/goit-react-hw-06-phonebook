import styles from "../Style.module.css"
import { useDispatch, useSelector } from "react-redux"
import { getContacts } from "redux/selectors"
import { addContact } from "redux/contactsSlice"

export const ContactForm = () => {
    const dispatch = useDispatch()
    const contacts  = useSelector(getContacts)

    const handleSubmit = (evt) => {
        const form = evt.target
        evt.preventDefault()
        for (const contact of contacts) {
            if (contact.name === form.name.value) {
                alert(`${contact.name} is already in contacts`)
                return
            }
        }
        dispatch(addContact(form.name.value, form.number.value))
        form.reset()
    }

    return (
        <form onSubmit={evt => handleSubmit(evt)} className={styles.Form}>
            <label className={styles.Label}>
                Name
                <input type="text" name="name" required />
            </label>
            <label className={styles.Label}>
                Number
                <input type="tel" name="number" required />
            </label>
            <button type='submit' className={styles.SubmitButton}>Add contact</button>
        </form>
    )
}