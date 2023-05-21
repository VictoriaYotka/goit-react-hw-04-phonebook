import PropTypes from 'prop-types';
import css from './ContactForm.module.css'

export function ContactForm({handleSubmit}) {
    return (
        <>

        <form onSubmit={handleSubmit} className={css.form}>
    <label htmlFor="name" className={css.label}>Name</label>
<input
className={css.input}
  type="text"
  name="name"
  id="name"
  pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
  title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
  required
/>

<label htmlFor="number" className={css.label}>Number</label>
<input
className={css.input}
  type="tel"
  name="number"
  id="number"
  pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
  title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
  required
/>

<button type="submit" className={css.button}>Add contact</button>
</form>
</>
    )
}

ContactForm.propTypes = {
  handleSubmit: PropTypes.func,
}


