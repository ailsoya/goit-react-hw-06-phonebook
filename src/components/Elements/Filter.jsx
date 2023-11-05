import styles from "../Style.module.css"
import { useSelector, useDispatch } from "react-redux"
import { getFilter } from "redux/selectors"
import { setFilter } from "redux/filterSlice"

export const Filter = () => {
    const dispatch = useDispatch()
    const value = useSelector(getFilter).value

    const handleChange = evt => {
        const filter = evt.target.value
        dispatch(setFilter(filter))
    }
    
    return (
        <label className={styles.Filter}>
            Find contacts by name
            <input onChange={evt => handleChange(evt)} type="text" name="filter" value={value} />
        </label>
    )
}