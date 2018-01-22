import React from "react"
import ReactDOM from "react-dom"
import App from "./App"
import registerServiceWorker from "./registerServiceWorker"

import { ApolloClient } from "apollo-client"
import { HttpLink } from "apollo-link-http"
import { InMemoryCache } from "apollo-cache-inmemory"
import { ApolloProvider } from "react-apollo"
import { injectGlobal } from "styled-components"
import { Provider } from "rebass"

injectGlobal`
  * { box-sizing: border-box; }
  body { margin: 0; }
  #root { min-height: 100vh }
`

const client = new ApolloClient({
	link: new HttpLink(),
	cache: new InMemoryCache(),
})

ReactDOM.render(
	<Provider>
		<ApolloProvider client={client}>
			<App />
		</ApolloProvider>
	</Provider>,
	document.getElementById("root")
)
registerServiceWorker()
