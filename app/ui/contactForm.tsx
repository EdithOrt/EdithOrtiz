import styles from '@/app/ui/styles/contact.module.scss'
import Title from './title'

const ContactForm = () => {
  return (
    <div className={styles.main}>
      <Title text='TRABAJEMOS JUNTOS(AS)' />

      <form>
        <input
          type='text'
          placeholder='Name'
        />
        <input
          type='email'
          placeholder='Email'
        />
        <textarea placeholder='Enter your message here' />
      </form>
    </div>
  )
}

export default ContactForm
