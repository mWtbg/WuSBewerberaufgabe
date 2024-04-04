export const dynamic = 'force-dynamic' // defaults to auto
//export async function GET(request: Request) {}

import{getVisitorCount} from "@/app/lib/data"

export async function GET(request:Request){
    var count = await getVisitorCount();
    return Response.json(count);
  }