import React from 'react'
import TagsSelector from './TagsSelector/TagsSelector'

export default function NoteForm(): React.ReactElement {
	return (
		<form
			action=""
			className="flex justify-center"
		>
			<div className="grid w-full max-w-4xl grid-cols-2 place-items-stretch justify-between gap-2 sm:gap-4">
				<div className="col-span-2 sm:col-span-1">
					<label
						className="label font-bold"
						htmlFor="title"
					>
						<span className="label-text">Title</span>
					</label>

					<input
						type="text"
						name="title"
						id="title"
						placeholder="Type here"
						className="peer input input-bordered input-primary input-lg w-full"
						required
						pattern="[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,}$"
					/>
				</div>

				<div className="col-span-2 sm:col-span-1">
					<label
						className="label font-bold"
						htmlFor="tagSelector"
					>
						<span className="label-text">Tags</span>
					</label>
					<TagsSelector />
				</div>

				<div className="col-span-2">
					<label
						htmlFor="Body"
						className="label font-bold"
					>
						<span className="label-text">Body</span>
					</label>
					<textarea
						id="body"
						name="body"
						placeholder="Body"
						className="textarea textarea-bordered textarea-primary textarea-lg h-80 w-full"
						required
					></textarea>
				</div>

				<button className="btn btn-primary btn-outline">Submit</button>
				<button className="btn btn-error btn-outline">Cancel</button>
			</div>
		</form>
	)
}
