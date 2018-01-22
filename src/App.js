import React from "react"
import { graphql } from "react-apollo"
import gql from "graphql-tag"

const App = ({ plugins, loading }) => (
	<div className="App">
		<header className="App-header">
			<h1 className="App-title">Welcome to Babel Plugins</h1>
		</header>
		<ul>
		{loading && 'loading'}
			{plugins &&
				plugins.map(plugin => <li key={plugin.id}>{plugin.package.name}</li>)}
		</ul>
	</div>
)

export default graphql(
	gql`
		query PluginsQuery {
			plugins {
				id
				package {
					name
				}
			}
		}
	`,
	{
		props: ({ ownProps, data: { loading, plugins } }) => ({
			loading,
			plugins,
		}),
	}
)(App)
