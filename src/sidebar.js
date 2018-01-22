import React, { Fragment } from "react"
import { Flex, Label, Input, Slider, Checkbox } from "rebass"

export default () => (
	<Fragment>
		<Flex column>
			<Label>Search for a plugin</Label>
			<Input placeholder="decorators" />
		</Flex>
		<Flex column>
			<Label> Min Score </Label>
			<Slider onChange={e => console.log(e.target.value)} />
		</Flex>
		<Flex column>
			<Label>
				<Checkbox />
				Only Official Plugins
			</Label>
		</Flex>
	</Fragment>
)
