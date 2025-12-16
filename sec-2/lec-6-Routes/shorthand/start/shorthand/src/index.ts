import fastify from 'fastify'

const server = fastify()

server.get("/", async (req, rep) => {
  return "hello world"
})

server.get<{
  Headers: {myheader: number}
  Querystring: { id: number}
  Reply: {
    200: { status: string },
    500: { code: number }
  }
}>("/employee", async (req, rep) => {
  // return req.headers.myheader
  // return `you passed ${req.query.id}`

  return rep.status(200).send({ status: "success" })
})

server.post<{
  Body: { userName: string}
}>("/employee", async (req, rep) => {
   return `userName is ${req.body.userName}`
})

server.get<{ Params: { id: string }}>("/employee/:id", async (req, rep) => {
  return `id is ${req.params.id}`
})

server.listen({port: 8080, host: "::1"}, (err, address) => {
  if (err) {
    console.log("err", err)
    process.exit(1)
  }
  console.log(`server is a ready on ${address}`)
})
