import "./createNoteForm.css";
import {useRef, useState} from "react";
import Button from "../../../entities/button";

export default function CreateNoteForm() {
    const [name, setName] = useState("");
    const inputRef = useRef<HTMLInputElement>();

    function handleCreateNote() {
        
    }

    return (
        <>
            <span className="create-note__span-header" style={{color: "#fff"}}>Новая заметка</span>
            <form className="create-note-form">
                <input ref={inputRef} className="create-note-form__input-name" placeholder="Введите название"></input>
                <span className="create-note-form__span-new-note">Введите заметку</span>
                <textarea className="create-note-form__textarea"></textarea>
                <Button btnName={"Создать"} onClickHandle={(e : MouseEvent) => {e.preventDefault(); console.log(inputRef.current?.value)}} isActive={false}></Button>
            </form>
        </>
    );
}