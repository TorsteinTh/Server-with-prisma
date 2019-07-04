import { makePrismaSchema } from "nexus-prisma";
// import { prisma } from "../generated/prisma-client";
import express = require("express");
import cors = require("cors");
import { ApolloServer } from "apollo-server-express";
import { createServer } from "http";





const schema = makePrismaSchema({
    types: Resolvers,
    prisma: {
        datamodelInfo,
        client: prisma
    },
    //Where nexus puts the generated files
    outputs: {
        schema: path.join(__dirname, "./generated/schema.graphql"),
        typegen: path.join(__dirname, "./generated/nexus.ts"),
    },
})

const app = express()


var corsOptions = {
    origin: "http://localhost:3000",
    credentials: true, // <-- REQUIRED backend setting
};
app.use(cors(corsOptions));


const server = new ApolloServer({
    schema,
    context: async ctx => {
        // @ts-ignore
        const { req, connection } = ctx;
        //Set id of user to be logged in as:
        const user = { id: "cjxg57faq00vt0757pz2nyo3e", success: 1 };
        if (connection) {
            return { prisma, user };
        } else {
            // const token = req.headers.authorization || '';
            // const user: any = await getUser(token);
            //Deny access - ikke anbefalt
            // if (!user.success) throw new AuthenticationError('you must be logged in');
            return { prisma, user };
        }
    },
}) as any;


app.use("/uploads", express.static("uploads"));

server.applyMiddleware({ app, path: "/graphql" });


//Make a http server such that subscription websocket thingy can be added to app
const httpServer = createServer(app);
server.installSubscriptionHandlers(httpServer);

httpServer.listen(8383, () => {
    console.log("Started on port 8383");
});
