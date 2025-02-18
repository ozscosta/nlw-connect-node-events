import { fastifyCors } from "@fastify/cors";
import { fastify } from "fastify";
import { serializerCompiler, validatorCompiler, ZodTypeProvider } from "fastify-type-provider-zod";

const app = fastify().withTypeProvider<ZodTypeProvider>();

app.register(fastifyCors, {
    origin: true,
});

app.setSerializerCompiler(serializerCompiler);
app.setValidatorCompiler(validatorCompiler);

app.get('/hello', () => "hello world");

app.listen({ port: 3333 }).then(() => {
    console.log("Server is running on port 3333");
});