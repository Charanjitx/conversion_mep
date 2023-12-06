import { transporter } from "@/lib/transporter";
import { NextResponse } from "next/server";

export async function POST( req : Request ) {

    const { email , name , phone , mess } = await req.json()

    const mailOptions = {
        from : process.env.EMAIL,
        to : email,
        cc : email,
        html : `<div>${name} ${phone} ${mess}</div>`
    }

    transporter.sendMail(mailOptions, (err,info)=>{
        if (err)
            console.log(err)
    })

    return NextResponse.json({hello:"world"})
}
