"use server";

import { Resend } from 'resend';
import { getErrorMessage, validateString } from '@lib/utils';
import ContactFormEmail from '@/email/contact-form-email';
import React from 'react';

const resend = new Resend(process.env.RESEND_API_KEY);

export async function sendEmail(formData: FormData) {

  const message = formData.get("message");
  const senderEmail = formData.get("senderEmail");

    console.log("Running on server")
    console.log(formData.get("senderEmail"))
    console.log(formData.get("message"))

    if (!validateString(senderEmail, 80)) {
      return {
        error: "Invalid sender Email"
      }
    }
    if (!validateString(message, 5000)) {
      return {
        error: "Invalid Message"
      }
    }
    let data;
    try {
      data = await resend.emails.send({
        from: 'Contact Form <onboarding@resend.dev>',
        to: 'dimitrisgiannoulis.jg@gmail.com',
        subject: 'Message from contact form',
        reply_to: senderEmail as string,
        // text: message as string,
        react: React.createElement(ContactFormEmail, {
          message: message as string,
          senderEmail: senderEmail as string,
        })
      })
    } catch (error: unknown) {
      return {
        error: getErrorMessage(error)
      }
    }

    return {
      data,
    }
  }

