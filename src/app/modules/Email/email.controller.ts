import config from "../../../config";
import nodemailer from "nodemailer";

import { Request, Response } from "express";
import emailData from "./email";
interface Email {
    email: string;
    subject: string;
    message: string;
}

const sendEmail = async (req: Request, res: Response) => {
    const { email, subject, message }: Email = req.body as unknown as Email;
    console.log(email, subject, message);
    const transporter = nodemailer.createTransport({
        host: 'smtp.gmail.com',
        port: 587,
        secure: false, // Set to false for TLS
        auth: {
            user: config.sender_email,
            pass: config.sender_password,
        },
    });

    const options = {
        from: config.sender_email,
        to: email,
        subject: subject,
        html:emailData
    };
    

    transporter.sendMail(options, (err, info) => {
        if (err) {
            console.log(err);
            return res.send({
                message: 'Internal server error',
            });
        }
    });
};

export const EmailController = {
    sendEmail,
};
