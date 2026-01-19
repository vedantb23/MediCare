// utils/sendEmail.js
console.log("RUNTIME:", typeof window, process.release?.name);

import nodemailer from "nodemailer";

export const sendEmail = async (to, subject, html) => {
  const transporter = nodemailer.createTransport({
    service: "gmail",
    auth: {
      user: process.env.EMAIL_USER,
      pass: process.env.EMAIL_PASS,
    },
  });

  try {
    // const mailOptions = {

    // };

    await transporter.sendMail({
      from: `"MediCare" <${process.env.EMAIL_USER}>`,
      to,
      subject,
      html,
    });
    console.log("✅ Email sent");
  } catch (error) {
    console.error("❌ Email failed:", error?.response || error);
  }
};

// sendEmail(bhavsarvedant9@gmail.com,Test,)
// await sendEmail(
//   "bhavsarvedant9@gmail.com",
//   "Test Email from MediCare",
//   "<h2>Hello</h2><p>This is a test email.</p>"
// );
