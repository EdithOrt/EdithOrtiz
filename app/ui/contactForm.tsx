import styles from '@/app/ui/styles/contact.module.scss'
import Title from './title'
import ButtonAction from './buttons/buttonAction'

const ContactForm = () => {
  return (
    <div className={styles.main}>
      <div className={styles.container}>
        <div className={styles.title}>
          <Title text='TRABAJEMOS JUNTOS(AS)' />
        </div>

        <form className={styles.form}>
          <input
            type='text'
            placeholder='Name'
          />
          <input
            type='email'
            placeholder='Email'
          />
          <textarea placeholder='Enter your message here' />

          <div className={styles.button}>
            <ButtonAction />
          </div>
        </form>
      </div>
    </div>
  )
}

export default ContactForm
