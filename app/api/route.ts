export const dynamic = 'force-dynamic' // defaults to auto
//export async function GET(request: Request) {}

import{createUsers, getUsers} from "@/app/lib/data"

export async function GET(request:Request){
    createUsers();
    return Response.json({helloText: "helo there", secondtext: "hi"})
  }