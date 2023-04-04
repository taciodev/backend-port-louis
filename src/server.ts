import fastify from "fastify";

const app = fastify();

app.get("/", async (request, reply) => {
  return "Hello World"
});

app.listen({ port: 8080 }, (err, address) => {
  if (err) {
    console.error(err)
    process.exit(1)
  }
  console.log(`Server listening at ${address}`)
})