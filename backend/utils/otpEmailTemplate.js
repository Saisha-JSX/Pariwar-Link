// utils/otpEmailTemplate.js

module.exports = function otpEmailTemplate(otpCode) {
  const supportEmail = process.env.GMAIL_USER;

  return `
  <!DOCTYPE html>
  <html lang="en">
  <head>
    <meta charset="UTF-8" />
    <title>PariwarLink OTP Code</title>
  </head>
  <body style="margin: 0; padding: 40px 0; background-color: #f9f9f9; font-family: Arial, sans-serif; color: #333;">
    <table style="max-width: 600px; margin: auto; background-color: #ffffff; border-radius: 8px; padding: 0; box-shadow: 0 0 15px rgba(0, 0, 0, 0.08);">
      <tr>
        <td style="background-color: #007BFF; padding: 20px; text-align: center; color: white;">
          <h2 style="margin: 0; font-size: 24px;">PariwarLink</h2>
          <p style="margin: 5px 0 0; font-size: 14px;"> Email Verification</p>
        </td>
      </tr>
      <tr>
        <td style="padding: 30px;">
          <p style="font-size: 16px;">Hi there,</p>
          <p style="font-size: 16px;">Thank you for signing up with <strong>PariwarLink</strong>. Please use the OTP below to verify your email address:</p>
          <div style="font-size: 32px; font-weight: bold; color: #007BFF; text-align: center; margin: 30px 0;">
            ${otpCode}
          </div>
          <p style="font-size: 15px; color: #555;">This code is valid for the next <strong>5 minutes</strong>.</p>
          <p style="font-size: 14px; color: #666; margin-top: 20px;">
            If you did not request this OTP, you can safely ignore this email. Your account will remain unchanged.
          </p>
        </td>
      </tr>
      <tr>
        <td style="text-align: center; font-size: 12px; color: #aaa; padding: 20px;">
          Need help? Contact us at <a href="mailto:${supportEmail}" style="color: #007BFF;">${supportEmail}</a><br/>
          &copy; ${new Date().getFullYear()} PariwarLink. All rights reserved.
        </td>
      </tr>
    </table>
  </body>
  </html>
  `;
};
