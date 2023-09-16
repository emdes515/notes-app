import React from 'react'
import TagsSelector from './TagsSelector/TagsSelector'

export default function NoteForm(): React.ReactElement {
	return (
		<form action="">
			<div className="grid w-full grid-cols-2 place-items-stretch justify-between gap-2 sm:gap-4 sm:px-5">
				<div>
					<label className="label font-bold">
						<span className="label-text">Title</span>
					</label>

					<input
						type="text"
						name="title"
						id="title"
						placeholder="Type here"
						className="invalid:[&:not(:placeholder-shown):not(:focus)]:select-errordf peer input input-bordered input-primary w-full sm:input-lg"
						required
						pattern="[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,}$"
					/>
					<span className="mt-2 hidden text-sm text-red-500 peer-[&:not(:placeholder-shown):not(:focus):invalid]:block">
						Please enter a valid email address
					</span>
				</div>

				<div>
					<label className="label">
						<span className="label-text">Title</span>
					</label>
					<TagsSelector />
				</div>
			</div>
		</form>
	)
}
