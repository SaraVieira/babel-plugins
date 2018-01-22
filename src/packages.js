import React, { Fragment } from "react"
import { graphql } from "react-apollo"
import gql from "graphql-tag"
import Loader from "./loader"
import Plugin from "./plugin"

const Packages = ({ plugins, loading }) => (
	<Fragment>
		<Loader loading={loading} />
		{plugins &&
			plugins.map(plugin => (
				<Plugin key={plugin.id} plugin={plugin} pkg={plugin.package} />
			))}
	</Fragment>
)

export default graphql(
	gql`
		query PluginsQuery {
			plugins {
				id
				package {
					name
					version
					description
				}
				searchScore
			}
		}
	`,
	{
		props: ({ ownProps, data: { loading, plugins } }) => ({
			loading,
			plugins,
		}),
	}
)(Packages)
