// import React, { useState, useRef, useCallback } from "react";
// import MsgButton from "./button";
// import Input from "./input";

// export const Form = ({ onSubmit }) => {
//     const inputRef = useRef(null);

//     const [value, setValue] = useState("");

//     const handleChange = useCallback((event) => {
//         setValue(event.target.value);
//     }, []);

//     const handleSubmit = (e) => {
//         e.preventDefault();
//         onSubmit(value);
//         setValue("");

//         inputRef.current.focus();
//     };


//     return (
//         <form onSubmit={handleSubmit}>
//             <Input
//                 value={value}
//                 onChange={handleChange}
//                 inputRef={inputRef}
//                 type="text"
//                 label="Сообщение"
//                 placeholder="Введите сообщение" />
//             <MsgButton>
//                 {(text) => (
//                     <>
//                         <span>{text}</span>
//                     </>
//                 )}
//             </MsgButton>
//         </form>
//     );
// };