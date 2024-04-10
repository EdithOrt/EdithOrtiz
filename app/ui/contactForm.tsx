'use client'

import styles from '@/app/ui/styles/contact.module.scss'
import Title from './title'
import ButtonAction from './buttons/buttonAction'
import sendEmail from '../lib/sendEmail'

const ContactForm = () => {
  const submitData = async () => {
    console.log('entra aquí')
    const formData = new FormData()

    formData.append(
      'senderEmail',
      'eoc.diseno@gmail.com'
    )
    formData.append(
      'message',
      'Hi!, this is a init text'
    )

    const { data, error } = await sendEmail(
      formData
    )

    if (error) {
      console.log({ error })
      return
    }

    console.log({ data })
  }
  return (
    <section
      className={styles.main}
      id='contact'
    >
      <div className={styles.container}>
        <div className={styles.title}>
          <Title text='TRABAJEMOS JUNTOS(AS)' />
        </div>

        <form
          className={styles.form}
          action={() => {
            submitData()
          }}
        >
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
            <ButtonAction text='ENVIAR' />
          </div>
        </form>
      </div>
    </section>
  )
}

export default ContactForm
