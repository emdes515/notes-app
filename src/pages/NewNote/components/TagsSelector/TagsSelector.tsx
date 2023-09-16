import React from 'react'
import CreatableRaectSelect from 'react-select/creatable'
import { TagSelectorStyles } from './TagSelectorStyles'
import { type Ioption } from './TagSelector.types'

const createOption = (label: string): Ioption => ({
	label,
	value: label.toLowerCase().replace(/\W/g, ''),
})

console.log(createOption('Two'))

export default function TagsSelector(): React.ReactElement {
	return (
		<CreatableRaectSelect
			isMulti
			closeMenuOnSelect={false}
			unstyled
			classNames={TagSelectorStyles}
			options={[
				createOption('One'),
				createOption('Two'),
				createOption('Three'),
			]}
		/>
	)
}
