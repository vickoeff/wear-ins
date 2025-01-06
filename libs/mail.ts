import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY);

export const sendPasswordResetEmail = async (email: string, token: string) => {
  await resend.emails.send({
    from: "Wear.ins <onboarding@resend.dev>",
    to: email,
    subject: "Wear.ins - Reset password confirmation",
    html: ` <div style="font-family: Arial, sans-serif; max-width: 600px; margin: auto; padding: 20px; border: 1px solid #ddd; border-radius: 10px;">
        <div style="text-align: center; margin-bottom: 20px;">
          <img src="https://res.cloudinary.com/dkqzrblhj/image/upload/wearins//logo-light.png?w=64" alt="Company Logo" style="width: 100px; height: auto;">
        </div>
        <h1 style="color: #333;">Forgot Password</h1>
        <p>Your <b>reset password</b> code:</p>
        <p style="display: inline-block; padding: 10px 20px; color: #fff; background-color: #007BFF; text-decoration: none; border-radius: 5px; margin-top: 10px;">${token}</p>
        <p style="margin-top: 20px;">If you didn't request this, please ignore this email.</p>
        <hr style="margin: 30px 0;">
        <div style="text-align: center; font-size: 12px; color: #777;">
          <p>&copy; ${new Date().getFullYear()} Wear.ins. All rights reserved.</p>
          <p> 
              Stationsplein 45, 4th floor,
              Stationsplein 45, 3013 AK 3013 Rotterdam,
              Netherlands
          </p>
          <p><a href="https://wearins.store/privacy" style="color: #007BFF; text-decoration: none;">Privacy Policy</a> | <a href="https://wearins.store/terms" style="color: #007BFF; text-decoration: none;">Terms of Service</a></p>
        </div>
      </div>`,
  });
};

export const sendVerificationEmail = async (email: string, token: string) => {

  await resend.emails.send({
    from: "Wear.ins <onboarding@resend.dev>",
    to: email,
    subject: "Wear.ins - Verify your email address",
    html: `<div style="font-family: Arial, sans-serif; max-width: 600px; margin: auto; padding: 20px; border: 1px solid #ddd; border-radius: 10px;">
        <div style="text-align: center; margin-bottom: 20px;">
          <img src="https://res.cloudinary.com/dkqzrblhj/image/upload/wearins//logo-light.png?w=64" alt="Company Logo" style="width: 100px; height: auto;">
        </div>
        <h1 style="color: #333;">Verify your email address</h1>
        <p>Your <b>verify email</b> code:</p>
        <p style="display: inline-block; padding: 10px 20px; color: #fff; background-color: #007BFF; text-decoration: none; border-radius: 5px; margin-top: 10px;">${token}</p>
        <p style="margin-top: 20px;">If you didn't request this, please ignore this email.</p>
        <hr style="margin: 30px 0;">
        <div style="text-align: center; font-size: 12px; color: #777;">
          <p>&copy; ${new Date().getFullYear()} Wear.ins. All rights reserved.</p>
          <p> 
              Stationsplein 45, 4th floor,
              Stationsplein 45, 3013 AK 3013 Rotterdam,
              Netherlands
          </p>
          <p><a href="https://wearins.store/privacy" style="color: #007BFF; text-decoration: none;">Privacy Policy</a> | <a href="https://wearins.store/terms" style="color: #007BFF; text-decoration: none;">Terms of Service</a></p>
        </div>
      </div>`,
  });
};