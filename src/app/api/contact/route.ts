import { NextResponse } from "next/server";
import nodemailer from "nodemailer";
function escapeHtml(value: string) {
  return value
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#039;");
}


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

    const safeName = escapeHtml(String(name));
    const safeEnquiryType = escapeHtml(String(enquiryType));
    const safeMessage = escapeHtml(String(message));
    const safeOrganization = escapeHtml(String(organization ?? ""));

    const emailPattern = /^[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Za-z]{2,}$/;
    const normalizedEmail = email.trim().toLowerCase();
    
    if (!normalizedEmail) {
      return NextResponse.json(
        { message: "Email address is required." },
        { status: 400 }
      );
    }

    if (!emailPattern.test(normalizedEmail)) {
      return NextResponse.json(
        { message: "Please enter a valid email address." },
        { status: 400 }
      );
    }
    
    const blockedDomains = [
      "mailinator.com",
      "10minutemail.com",
      "guerrillamail.com",
      "tempmail.com",
    ];

     const domain = normalizedEmail.split("@")[1];

    if (blockedDomains.includes(domain)) {
      return NextResponse.json(
        { message: "Temporary email addresses are not allowed." },
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

      subject: `Website Enquiry: ${safeEnquiryType}`,

      text: `
      New enquiry received from the DLAXMI INFOTECH LLP website.

      Name: ${safeName}
      Email: ${email}
      Organization: ${safeOrganization || "Not provided"}
      Enquiry Type: ${safeEnquiryType}

      Message:
      ${message}
      `,
          });

          // Send acknowledgement email to the visitor
      await transporter.sendMail({
        from: `"DLAXMI INFOTECH LLP" <${process.env.GMAIL_USER}>`,
        to: email,

        subject: "Thank you for contacting DLAXMI INFOTECH LLP",

        html: `
        <div style="
          margin:0;
          padding:40px 20px;
          background:#f8fafc;
          font-family:Arial,Helvetica,sans-serif;
          color:#334155;
        ">
        <div style="
          max-width:600px;
          margin:0 auto;
          background:#ffffff;
          border:1px solid #e2e8f0;
          border-radius:16px;
          overflow:hidden;
        ">

      <!-- Header -->
      <div style="
        padding:28px 32px;
        background:#0f172a;
        text-align:center;
      ">
        <div style="
          font-size:22px;
          font-weight:700;
          color:#ffffff;
        ">
          DLAXMI INFOTECH LLP
        </div>

        <div style="
          margin-top:7px;
          font-size:12px;
          letter-spacing:2px;
          color:#a78bfa;
        ">
          RESEARCH • INNOVATION • TECHNOLOGY
        </div>
      </div>

      <!-- Content -->
      <div style="padding:32px;">

        <h2 style="
          margin:0 0 20px;
          font-size:22px;
          color:#0f172a;
        ">
          Thank you for contacting us
        </h2>

        <p style="margin:0 0 16px; line-height:1.7;">
          Dear ${safeName},
        </p>

        <p style="margin:0 0 16px; line-height:1.7;">
          Thank you for contacting <strong>DLAXMI INFOTECH LLP</strong>.
          We have successfully received your enquiry.
        </p>

        <p style="margin:0 0 24px; line-height:1.7;">
          Our team will review the information you have shared and
          respond if further discussion or clarification is required.
        </p>

        <!-- Enquiry summary -->
        <div style="
          padding:20px;
          background:#f8fafc;
          border-left:4px solid #7c3aed;
          border-radius:8px;
        ">
          <div style="
            margin-bottom:8px;
            font-size:12px;
            font-weight:700;
            letter-spacing:1px;
            color:#7c3aed;
          ">
            YOUR ENQUIRY
          </div>

          <div style="
            margin-bottom:12px;
            font-weight:600;
            color:#0f172a;
          ">
            ${safeEnquiryType}
          </div>

          <div style="
            font-size:14px;
            line-height:1.7;
            color:#475569;
            white-space:pre-line;
          ">
            ${safeMessage}
          </div>
        </div>

        <p style="
          margin:24px 0 0;
          line-height:1.7;
        ">
          Regards,<br>
          <strong>DLAXMI INFOTECH LLP</strong>
        </p>

      </div>

      <!-- Footer -->
      <div style="
        padding:20px 32px;
        border-top:1px solid #e2e8f0;
        background:#f8fafc;
        text-align:center;
        font-size:12px;
        line-height:1.7;
        color:#64748b;
      ">
        This is an automatic acknowledgement of your website enquiry.<br>
        dlaxmiinfotech@gmail.com
      </div>

    </div>
  </div>
`,

});

// *********************************************************************//

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