import PropTypes from 'prop-types';
import css from './Filter.module.css'

export function Filter({handleChange}) {
    return (
        <>
        <label htmlFor="filter" className={css.label}>Find contacts by name:</label>
        <input 
        className={css.input}
        type="text"
        name="filter"
        id="filter"
        onChange={handleChange}
        />
  </>
    )
}

Filter.propTypes = {
    handleChange: PropTypes.func,
}