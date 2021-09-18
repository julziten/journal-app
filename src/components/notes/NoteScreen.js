import React from 'react'
import { NotesAppBar } from './NotesAppBar'

export const NoteScreen = () => {
    return (
        <div className="notes__main-content">

            <NotesAppBar />

            <div className="notes__content">

                <input
                    type="text"
                    placeholder="Some Awesome Title"
                    className="notes__title-input" 
                    autoComplete="off"
                />

                <textarea
                    placeholder="What happened today"
                    className="notes__textarea"
                >
                </textarea>

                <div className="notes__image">
                    <img 
                        src="https://prod-discovery.edx-cdn.org/media/course/image/93f11b63-0c29-4472-964e-c6db1cc574e8-61863a8d0d90.small.jpg"
                        alt="Landscape"
                    />
                </div>
            </div>
            
        </div>
    )
}
