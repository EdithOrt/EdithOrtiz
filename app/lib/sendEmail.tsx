'use server'

import React from 'react'
import { EmailTemplate } from './emailTemplate'
import { Resend } from 'resend'

const resend = new Resend(
  process.env.RESEND_API_KEY
)

type SendEmailType = {
  data?: object
  error?: string
}

const sendEmail = async (
  formData: FormData
): Promise<SendEmailType> => {
  const email = formData.get('email')
  const name = formData.get('name')
  const message = formData.get('message')

  let data

  try {
    data = await resend.emails.send({
      from: 'Portfolio Contact Form<eoc.diseno@gmail.com>',
      to: 'eoc.diseno@gmail.com',
      subject: 'Have a message from Portfolio',
      reply_to: email as string,
      react: React.createElement(EmailTemplate, {
        name: name as string,
        message: message as string,
        email: email as string
      })
    })
  } catch (error) {
    return { error: `${error}` }
  }

  return { data }
}

export default sendEmail
