import React from "react"
import { Card, Box, Flex, Subhead, Small, Badge } from "rebass"

import { formatName } from "./utils"

export default ({ plugin = {}, pkg = {} }) => (
	<Box width={[1, 1 / 2, 1 / 3]} p={2}>
		<Card>
			<Box p={2}>
				<Flex align="start">
					<Subhead fontSize={18} pb={1}>
						{pkg.name && formatName(pkg.name)}
					</Subhead>
					<Badge style={{ textAlign: "center" }}>
						{plugin.searchScore.toFixed(2)}
					</Badge>
				</Flex>
				<Small>{pkg.description}</Small>
				<Small>{pkg.version}</Small>
			</Box>
		</Card>
	</Box>
)
