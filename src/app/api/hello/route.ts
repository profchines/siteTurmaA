import { NextResponse } from "next/server"

export async function GET(req: Request) {

    console.log('Rota do backend')
    return NextResponse.json({message: 'Hello World back'})
}