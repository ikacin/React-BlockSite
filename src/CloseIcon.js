import * as React from 'react';
import Icon from '@mui/material/Icon';
import CloseIcon from '@mui/icons-material/Close';
import {useState} from "react";


export default function TwoToneIcons() {

    const[closeItem,setCloseItem] = useState(false);
    const [show,setShow] = useState(true)

    const getClose = () => {

        if(closeItem === false){
            setCloseItem(true)
            setShow(true)
        }else{
            setCloseItem(false)
            setShow(false)
        }
    }
    return(
        <div className={"switcher-close"}>
            <Icon id={"hideSwitcher"} onClick={() => getClose()} className = {`${closeItem === false ? "closeSelect" : "closeSelect"}`} baseClassName="loop"><CloseIcon/></Icon>
        </div>
    )



}