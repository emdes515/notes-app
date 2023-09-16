import React from 'react'
import NoteForm from './components/NoteForm'

export default function NewNote(): React.ReactElement {
	return (
		<>
			<h1 className="my-10 text-center text-5xl font-bold">New Note</h1>
			<NoteForm />
		</>
	)
}
