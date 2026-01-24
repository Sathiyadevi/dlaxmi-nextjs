import type { NextRequest } from 'next/server';
import nodemailer from 'nodemailer';
import sendgrid from '@sendgrid/mail';

export async function POST(req: NextRequest) {
  try {
    const data = await req.json();
    const { name, email, message } = data;

    if (!name || !email || !message) {
      return new Response(JSON.stringify({ ok: false, error: 'Missing fields' }), { status: 400 });
    }

    const mailFrom = process.env.MAIL_FROM || 'diladmin@diltech.co.in';
    const mailTo = process.env.MAIL_TO || mailFrom;

    // Prefer SendGrid if configured
    const sendgridKey = process.env.SENDGRID_API_KEY;
    if (sendgridKey) {
      sendgrid.setApiKey(sendgridKey);
      const msg = {
        to: mailTo,
        from: mailFrom,
        subject: `Website Contact: ${name} <${email}>`,
        text: `Name: ${name}\nEmail: ${email}\n\n${message}`,
        html: `<p><strong>Name:</strong> ${name}</p><p><strong>Email:</strong> ${email}</p><p>${message}</p>`
      };
      await sendgrid.send(msg);
      console.log('SendGrid: email sent');
      return new Response(JSON.stringify({ ok: true }), { status: 200 });
    }

    // Fallback to Nodemailer if SMTP configured
    const host = process.env.SMTP_HOST;
    const port = Number(process.env.SMTP_PORT || 587);
    const user = process.env.SMTP_USER;
    const pass = process.env.SMTP_PASS;

    if (!host || !user || !pass) {
      console.warn('No email provider configured. Logging message to server console.');
      console.log('Contact message:', { name, email, message });
      return new Response(JSON.stringify({ ok: true, warning: 'No email provider configured. Message logged to server console.' }), { status: 200 });
    }

    const transporter = nodemailer.createTransport({
      host,
      port,
      secure: port === 465,
      auth: { user, pass }
    });

    const mailOptions = {
      from: `"${name}" <${mailFrom}>`,
      to: mailTo,
      subject: `Website Contact: ${name} <${email}>`,
      text: `Name: ${name}\nEmail: ${email}\n\n${message}`,
      html: `<p><strong>Name:</strong> ${name}</p><p><strong>Email:</strong> ${email}</p><p>${message}</p>`
    };

    const info = await transporter.sendMail(mailOptions);
    console.log('Nodemailer: Email sent:', info.messageId);
    return new Response(JSON.stringify({ ok: true }), { status: 200 });
  } catch (err) {
    console.error('Contact API error', err);
    return new Response(JSON.stringify({ ok: false, error: 'Server error' }), { status: 500 });
  }
}
