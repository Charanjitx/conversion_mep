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

    await new Promise(( res , rej ) => {
        transporter.sendMail(mailOptions, (err,info)=>{
            if (err)
                rej(err)
            else
                res(info)
        })
    })

    return NextResponse.json({status:200})
}
