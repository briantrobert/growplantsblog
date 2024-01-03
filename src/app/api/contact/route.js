import { transporter, mailOptions } from "@/config/nodemailer";
import { NextResponse } from "next/server";

export const POST = async(request, {params}) => {
  const data = await request.json();
  if(!data.name || !data.message){
    return NextResponse.json({ status: 400, message: 'Bad request' })
  }
  
  if(request.method === "POST") {
    try {
      await transporter.sendMail({
        ...mailOptions,
        subject: "Nodemailer",
        html:`<h1>From: ${data.name}</h1><h2>${data.message}</h2>`,
      });
     return  NextResponse.json({ status: 200, success: true })
    } catch (error) {
      return NextResponse.json({ status: 400, message: error.message })
    }
    
  }else{
    return NextResponse.json({ status: 400 ,message: 'Bad request' })
  }
  
}
