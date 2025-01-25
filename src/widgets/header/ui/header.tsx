import "./header.css"
import "../config/buttonsConfig"
import buttonsConfig from "../config/buttonsConfig"
import { useState } from "react"

type buttonType = 'main' | 'search' | 'profile' | null;

const Button = ({btnName, onClickHandle, isActive} : {btnName:string, onClickHandle: () => void, isActive : boolean}) =>{
    return (
        <button className={isActive ? "active" : ""} onClick={onClickHandle}>{btnName}</button>
    )
}



const Header = () => {
    const [clicked, setClicked] = useState<buttonType>(null);
    const [active, setActive] = useState(false);
    const clickHandle = (btnType : buttonType) => {
        setClicked(btnType);
        setActive(true);
    }

    return (
        <>
            <div className="header" style={{color: "#fff"}}>
                <span className="header__span">Это мой календарь</span>
                <div className="navigation-buttons">
                    
                    <Button {...buttonsConfig[0]} onClickHandle = {() => clickHandle("main")} isActive={clicked === "main"} />
                    <Button {...buttonsConfig[1]} onClickHandle = {() => clickHandle("search")} isActive={clicked === "search"} />
                    <Button {...buttonsConfig[2]} onClickHandle = {() => clickHandle("profile")} isActive={clicked === "profile"} />
                </div>
            </div>
            <p style={{color: "#fff"}}>{clicked}</p>
        </>
    );

};

export default Header;