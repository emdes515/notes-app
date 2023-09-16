import { type ClassNamesConfig } from 'react-select'

export const TagSelectorStyles: ClassNamesConfig = {
	control: () =>
		'input sm:input-lg overflow-scroll noscrollbar input-primary p-2',
	option: () => 'bg-secondary my-2 p-1 font-semibold rounded-xl w-56',
	multiValue: () =>
		'bg-secondary text-neutral p-1 m-1 rounded-xl font-semibold text-sm',
	menu: () => 'p-2 my-2 rounded-md border-primary border-2 max-w-4xl',
	input: () => 'overflow-hidden',
	indicatorsContainer: () => 'h-full sticky top-0',
}
