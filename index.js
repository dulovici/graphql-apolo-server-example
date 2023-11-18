import {ApolloServer} from "@apollo/server";
import {startStandAloneServer} from "@apollo/server/standalone"


//server setup
const server = new ApolloServer({})

const {url} = await startStandAloneServer(server,{
    listen:{port:4000}
})

console.log("Server ready at port",4000);