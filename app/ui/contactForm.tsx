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
          <div className={styles.containerInput}>
            <div className={styles.inputBox}>
              <input
                type='text'
                className={styles.input}
                required
              />

              <span className={styles.inputText}>
                Nombre
              </span>

              <span
                className={styles.inputLine}
              />
            </div>
          </div>

          <div className={styles.containerInput}>
            <div className={styles.inputBox}>
              <input
                type='email'
                className={styles.input}
                required
              />

              <span className={styles.inputText}>
                Email
              </span>

              <span
                className={styles.inputLine}
              />
            </div>
          </div>

          <div className={styles.containerInput}>
            <div className={styles.inputBox}>
              <textarea
                className={styles.input}
                required
              />

              <span className={styles.inputText}>
                Enter your message here
              </span>

              <span
                className={styles.inputLine}
              />
            </div>
          </div>

          <div className={styles.button}>
            <ButtonAction text='ENVIAR' />
          </div>
        </form>
      </div>
    </section>
  )
}

export default ContactForm
