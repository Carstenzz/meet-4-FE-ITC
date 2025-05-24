import { useEffect, useState } from "react";
import "./Button.css";

const Button = () => {
	// let action = "button belom di klik";
	const [action, setAction] = useState("button belom di klik");
	//index 0 -> variabel utamanya
	//index 1 -> function penggantinya

	const handleClick = () => {
		console.log("Button di klik");
		// action = "button telah di klik";
		setAction("button telah di klik");
	};

	useEffect(
        () => {
            console.log("page render atau rerender");
            //ganti placeholdernya pake data yang habis di fetch
        }
    , 
        [action]
    );

	return <button onClick={handleClick}>{action}</button>;
};

export default Button;
