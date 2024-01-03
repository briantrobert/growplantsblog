import nodemailer from "nodemailer";

const email = process.env.EMAIL;
const pass = process.env.EMAIL_PASSWORD;

export const transporter = nodemailer.createTransport({
    service: 'Gmail',
    // host: "smtp.gmail.com",
    // port: 465,
    auth: {
        user: email,
        pass: pass,
    },
})

export const mailOptions = {
    from: email,
    to: email,
}