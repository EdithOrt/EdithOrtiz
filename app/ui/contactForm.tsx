'use client'

import styles from '@/app/ui/styles/contact.module.scss'
import Title from './title'
import ButtonAction from './buttons/buttonAction'
import sendEmail from '../lib/sendEmail'
import z from 'zod'
import {
  SubmitHandler,
  useForm
} from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import React, { useState } from 'react'

const schema = z.object({
  name: z
    .string({
      invalid_type_error: 'Invalid name'
    })
    .min(5, { message: 'Name is too short' }),
  email: z
    .string()
    .email({
      message: 'Invalid Email'
    })
    .min(5),
  message: z
    .string({
      invalid_type_error: 'Invalid name'
    })
    .min(30, {
      message:
        'Message must contain at least 30 character(s)'
    })
})

type SchemaType = z.infer<typeof schema>
type MessageApiType = {
  text: string
  type: 'success' | 'error'
}

const ContactForm = () => {
  const [messageAPI, setMessageAPI] =
    useState<MessageApiType>()

  const [loading, setLoading] =
    useState<boolean>(false)

  const {
    register,
    handleSubmit,
    formState: { errors },
    setValue
  } = useForm<SchemaType>({
    resolver: zodResolver(schema)
  })

  const submitData: SubmitHandler<
    SchemaType
  > = async inputsData => {
    setLoading(true)
    const formData = new FormData()

    formData.append('email', inputsData.email)
    formData.append('message', inputsData.message)
    formData.append('name', inputsData.name)

    const response = await sendEmail(formData)

    if (response?.error) {
      setMessageAPI({
        text: 'error sending message',
        type: 'error'
      })

      setTimeout(() => {
        setMessageAPI(undefined)
      }, 2000)
      setLoading(false)
      return
    }

    setValue('name', '')
    setValue('email', '')
    setValue('message', '')

    setMessageAPI({
      text: 'Message sent!',
      type: 'success'
    })

    setTimeout(() => {
      setMessageAPI(undefined)
      setLoading(false)
    }, 2000)
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
          onSubmit={handleSubmit(submitData)}
        >
          <div className={styles.containerInput}>
            <div className={styles.inputBox}>
              <input
                type='text'
                className={styles.input}
                required
                {...register('name')}
              />

              <span className={styles.inputText}>
                Name
              </span>

              <span
                className={styles.inputLine}
              />
            </div>
            {errors.name?.message && (
              <p className={styles.inputError}>
                <>{errors.name?.message}</>
              </p>
            )}
          </div>

          <div className={styles.containerInput}>
            <div className={styles.inputBox}>
              <input
                type='text'
                className={styles.input}
                required
                {...register('email')}
              />

              <span className={styles.inputText}>
                Email
              </span>

              <span
                className={styles.inputLine}
              />
            </div>

            {errors.email?.message && (
              <p className={styles.inputError}>
                <>{errors.email?.message}</>
              </p>
            )}
          </div>

          <div className={styles.containerInput}>
            <div
              className={`${styles.inputBox} ${styles.textarea}`}
            >
              <textarea
                {...register('message')}
                className={`${styles.input} `}
                required
              />

              <span className={styles.inputText}>
                Enter your message here
              </span>

              <span
                className={styles.inputLine}
              />
            </div>
            {errors.message?.message && (
              <p className={styles.inputError}>
                <>{errors.message?.message}</>
              </p>
            )}
          </div>

          <div className={styles.button}>
            <ButtonAction
              text='ENVIAR'
              disable={loading}
              type='submit'
            />
          </div>

          {messageAPI && (
            <div
              className={`${styles.formMessage} ${
                styles[messageAPI.type]
              }`}
            >
              <p>{messageAPI.text}</p>
            </div>
          )}
        </form>
      </div>
    </section>
  )
}

export default ContactForm
