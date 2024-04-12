import * as React from 'react'

interface EmailTemplateProps {
  name: string
  message: string
  email: string
}

export const EmailTemplate: React.FC<
  Readonly<EmailTemplateProps>
> = ({ name, message, email }) => (
  <div>
    <h1>
      Hello! You have a new message from: {name}
    </h1>

    <p>Message: {message}</p>

    <p>Please contact him/her: {email}</p>
  </div>
)
