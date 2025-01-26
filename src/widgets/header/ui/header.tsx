import "./header.css"
import "../config/buttonsConfig"
import buttonsConfig from "../config/buttonsConfig"
import { useState } from "react"
import CreateNoteForm from "../../createNoteForm";
import Button from "../../../entities/button/";

type buttonType = string | null;


const Header = () => {
    const [clicked, setClicked] = useState<buttonType>(null);
    const [newNote, setNewNote] = useState(false);
    const clickHandle = (btnType : string) => {
        setClicked(btnType);
        setNewNote(false);
    }

    function handleNewNote() {
        setNewNote(true);
        setClicked("new");
    }

    return (
        <>
            <div className="header" style={{color: "#fff"}}>
                <span className="header__span">Мои заметки</span>
                <div className="navigation-buttons">
                    {buttonsConfig.map((element) => <Button key={element.btnType} {...element} onClickHandle={() => 
                        {
                            if (element.btnType !== "new") {
                                return clickHandle(element.btnType);
                            }
                            setClicked(element.btnType);
                            return handleNewNote();
                        }}
                         isActive={clicked === element.btnType} />)}
                </div>
            </div>
            {newNote && <CreateNoteForm /> }
        </>
    );

};

export default Header;