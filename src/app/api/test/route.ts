export  async function GET(req: Request){
  return Response.json('this is test get')
}

export  async function POST(req: Request){
  const data = await req.json()
  return Response.json({msg:'this is test post',data:data})
}