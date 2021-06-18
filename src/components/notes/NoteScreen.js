import React from 'react'
import { NotesAppBar } from './NotesAppBar'

export const NoteScreen = () => {
    return (
        <div className="note__main-content">
            <NotesAppBar />
            <div className="note__content">
                <input 
                    type="text"
                    placeholder="Some awesome title"
                    className="note__title-input"
                    autoComplete="off"
                />
                <textarea 
                    placeholder="Wath happened today?"
                    className="note__textarea"
                ></textarea>
                <div className="note__image">
                    <img
                        src="https://www.telesurtv.net/__export/1570659226192/sites/telesur/img/2019/10/09/outer-space-stars-galaxies-planets-background-images.jpg"
                        alt="espacio"
                    />

                </div>
            </div>
        </div>
    )
}
