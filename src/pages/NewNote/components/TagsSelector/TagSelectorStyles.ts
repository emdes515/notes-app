import { type ClassNamesConfig } from 'react-select'

export const TagSelectorStyles: ClassNamesConfig = {
	control: () =>
		'input input-lg overflow-scroll noscrollbar input-primary p-2',
	option: () =>
		'my-2 p-1 font-semibold rounded-xl w-56 border-secondary border-2',
	multiValue: () =>
		'bg-secondary text-neutral p-2 m-1 rounded-xl font-semibold text-sm',
	menu: () =>
		'p-2 my-2 rounded-md border-primary border-2 max-w-4xl bg-secondary',
	input: () => 'overflow-hidden',
	indicatorsContainer: () => 'h-full sticky top-0',
	placeholder: () => 'mx-4 text-gray-400',
}
