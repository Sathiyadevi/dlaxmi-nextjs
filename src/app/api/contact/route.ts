import { NextResponse } from "next/server";
import nodemailer from "nodemailer";

export async function POST(request: Request) {
  try {
    const body = await request.json();

    const { name, email, organization, enquiryType, message } = body;

    if (!name || !email || !enquiryType || !message) {
      return NextResponse.json(
        { message: "Please complete all required fields." },
        { status: 400 }
      );
    }

    const transporter = nodemailer.createTransport({
      service: "gmail",
      auth: {
        user: process.env.GMAIL_USER,
        pass: process.env.GMAIL_APP_PASSWORD,
      },
    });

    await transporter.sendMail({
      from: `"DLAXMI Website" <${process.env.GMAIL_USER}>`,
      to: process.env.GMAIL_USER,

      replyTo: email,

      subject: `Website Enquiry: ${enquiryType}`,

      text: `
New enquiry received from the DLAXMI INFOTECH LLP website.

Name: ${name}
Email: ${email}
Organization: ${organization || "Not provided"}
Enquiry Type: ${enquiryType}

Message:
${message}
      `,
    });

    return NextResponse.json(
      { message: "Enquiry sent successfully." },
      { status: 200 }
    );
  } catch (error) {
    console.error("Contact email error:", error);

    return NextResponse.json(
      { message: "Unable to send enquiry." },
      { status: 500 }
    );
  }
}