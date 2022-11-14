import React, {useState} from "react";
import {InputText} from './style';

export const SearchBox = (props) => {
    const [texto, setTexto] = useState('');
    const [time, setTime] = useState('');

    
    
    
    
    const handleKeyUP = (e) => {
        if (texto !== '') {
            if (e.keyCode === 13) {
                let final = `You have this task: ${texto}, scheduled at : ${time}`
                
                if (props.onEnter) {
                    props.onEnter(final);
                }
                setTexto('');
            }
        }
    };

    const guardarItem = (e) => {
        setTexto(e.target.value);
    };
    const guardartime = (e) => {
        setTime(e.target.value);
    };

    return (
        <>
        <InputText
            type="text"
            value={texto}
            onChange={guardarItem}
            onKeyUp={handleKeyUP}
            placeholder={props.frasePadrao ?? "What task are you doing today ?"}
            />
        <InputText
            type="time"
            value={time}
            onChange={guardartime}
            onKeyUp={handleKeyUP}
            placeholder={props.frasePadrao ?? "Time"}
            />
        </>
        
    )
};