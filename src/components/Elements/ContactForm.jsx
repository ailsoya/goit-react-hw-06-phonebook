import styles from "../Style.module.css"
import { useDispatch } from "react-redux"
import { addContact } from "redux/contactsSlice"

export const ContactForm = () => {
    const dispatch = useDispatch()

    const handleSubmit = (evt) => {
        evt.preventDefault()
        const form = evt.target
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