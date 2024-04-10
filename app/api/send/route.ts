import { EmailTemplate } from '@/app/lib/emailTemplate'
import { Resend } from 'resend'

const resend = new Resend(
  process.env.NEXT_PUBLIC_RESEND_API_KEY
)

export async function POST() {
  try {
    const data = await resend.emails.send({
      from: 'Acme <onboarding@resend.dev>',
      to: ['eoc.diseno@gmail.com'],
      subject: 'Hello world',
      react: EmailTemplate({ firstName: 'John' }),
      text: ''
    })

    return Response.json(data)
  } catch (error) {
    return Response.json({ error })
  }
}
