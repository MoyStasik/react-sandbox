import "./button.css"

const Button = ({btnName, onClickHandle, isActive} : {btnName:string, onClickHandle: () => void, isActive : boolean}) =>{
    return (
        <button className={isActive ? "active" : ""} onClick={onClickHandle}>{btnName}</button>
    )
}

export default Button;