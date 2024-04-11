'use server'

import React from 'react'
import { EmailTemplate } from './emailTemplate'
import { Resend } from 'resend'

const resend = new Resend(
  process.env.RESEND_API_KEY
)

const sendEmail = async (formData: FormData) => {
  const senderEmail = formData.get('senderEmail')
  const message = formData.get('message')

  // here vaidate form
  if (typeof senderEmail !== 'string') {
    return {
      error: 'invalid... '
    }
  }

  if (typeof message !== 'string') {
    return 'invalid...'
  }

  let data

  // try {
  //   data = await resend.emails.send({
  //     from: 'Portfolio Contact Form<onboarding@resend.dev>',
  //     to: 'eoc.diseno@gmail.com',
  //     subject: 'Have a message from Portfolio',
  //     reply_to: senderEmail as string,
  //     react: React.createElement(EmailTemplate, {
  //       firstName: 'John'
  //     })
  //   })
  // } catch (error) {
  //   return (error = error)
  // }

  // return data
}

export default sendEmail
