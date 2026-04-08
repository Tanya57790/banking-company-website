import nodemailer from "nodemailer";

export const transporter = nodemailer.createTransport({
  host: "smtp.gmail.com",
  port: 465,
  secure: true,
  auth: {
    user: process.env.SMTP_USER!,
    pass: process.env.SMTP_PASS!,
  },
});

interface EmailProps {
  to: string;
  subject: string;
  html?: string;
  text?: string;
}

export async function sendEmail({ to, subject, html, text }: EmailProps) {
  if (!process.env.SMTP_USER) {
    throw new Error("SMTP_USER not configured");
  }

  try {
    await transporter.sendMail({
      from: `"${process.env.SENDER_NAME}" <${process.env.SMTP_USER}>`,
      to,
      subject,
      html,
      text,
    });
  } catch (error) {
    console.error(`Email to ${to} failed:`, error);
  }
}
