const express = require("express")
const bodyParser = require("body-parser")
const { graphqlExpress, graphiqlExpress } = require("apollo-server-express")
const { makeExecutableSchema } = require("graphql-tools")
const path = require("path")

const typeDefs = require("./server/types")
const resolvers = require("./server/resolvers")
var cors = require("cors")

// Put together a schema
const schema = makeExecutableSchema({
	typeDefs,
	resolvers,
})

// Initialize the app
const app = express()

app.use(cors())

// The Front end
const htmlPath = path.join(__dirname, "build/static/")

app.use("/static", express.static(htmlPath))

app.get("/", function(req, res) {
	res.sendFile(path.join(__dirname, "build", "index.html"))
})

// The GraphQL endpoint
app.use("/graphql", bodyParser.json(), graphqlExpress({ schema }))

// GraphiQL, a visual editor for queries
app.use("/graphiql", graphiqlExpress({ endpointURL: "/graphql" }))

// Start the server
app.listen(8080, () => {
	console.log("Go to http://localhost:8080/graphiql to run queries!")
})
