import React from "react"
import { Flex, Heading, PanelFooter, Container, Box } from "rebass"

import Sidebar from "./sidebar"
import Plugins from "./packages"

export default () => (
	<Container>
		<Box p={4}>
			<Heading style={{ textAlign: "center" }}> Babel Plugins </Heading>
		</Box>
		<Flex>
			<Flex column style={{ flexShrink: 0 }} pr={4}>
				<Sidebar />
			</Flex>
			<Flex wrap>
				<Plugins />
			</Flex>
		</Flex>
		<PanelFooter>Footer</PanelFooter>
	</Container>
)
