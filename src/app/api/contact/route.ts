import { Resend } from 'resend'
import { NextResponse } from 'next/server'

export const dynamic = 'force-dynamic'

export async function POST(request: Request) {
  try {
    const resend = new Resend(process.env.RESEND_API_KEY)
    const { name, business, phone, email, message } = await request.json()

    if (!name || !email || !message) {
      return NextResponse.json(
        { error: 'Name, email, and message are required.' },
        { status: 400 }
      )
    }

    await resend.emails.send({
      from: 'Astor Website <onboarding@resend.dev>',
      to: 'peyton@tryastor.com',
      subject: `New inquiry from ${name}${business ? ` (${business})` : ''}`,
      replyTo: email,
      text: [
        `Name: ${name}`,
        business && `Business: ${business}`,
        phone && `Phone: ${phone}`,
        `Email: ${email}`,
        '',
        `Message:`,
        message,
      ]
        .filter(Boolean)
        .join('\n'),
    })

    return NextResponse.json({ success: true })
  } catch {
    return NextResponse.json(
      { error: 'Failed to send message. Please try again.' },
      { status: 500 }
    )
  }
}
