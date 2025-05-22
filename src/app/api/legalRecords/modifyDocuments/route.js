import Document from "@/models/documentModel";
import { NextRequest, NextResponse } from "next/server";

export async function POST(request){
    try{
        const {userId} = await request.json();
        const documents = await Document.find({ modifypermissions: { $in: [userId] } });

        return NextResponse.json(documents);
    } catch(error){
        console.error(error);  // Log the error to the console
        return NextResponse.json({error: "server error"}, {status: 500});
    }
}
