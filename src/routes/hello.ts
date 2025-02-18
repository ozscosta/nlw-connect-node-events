import { FastifyInstance } from "fastify";
import { FastifyPluginAsyncZod } from "fastify-type-provider-zod";

export const hello: FastifyPluginAsyncZod = async (app: FastifyInstance) => {
    app.get('/hello', {
        schema: {
            tags: ['hello'],
        },
    }, async () => "hello world");
}