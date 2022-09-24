import * as React from 'react';
import Icon from '@mui/material/Icon';
import LoopIcon from '@mui/icons-material/Loop';
import {useState} from "react";
import CloseIcon from '@mui/icons-material/Close';
import InvertColorsIcon from '@mui/icons-material/InvertColors';

export default function TwoToneIcons() {

    const[openItem,setOpenItem] = useState(true);
    const[isShown,setIsShown] = useState(true);
    const[closeItem,setCloseItem] = useState(true);
    const [show,setShow] = useState(true);

    const getIcon = () => {

        if(openItem === false ){
            setOpenItem(true)
            setCloseItem(false)
            setShow(true)
            setIsShown(true)
        }else{
            setOpenItem(false)
            setCloseItem(true)
            setShow(false)
            setIsShown(false)
        }

    }






return(
    <div className={`switcher`} >
        <div className={"swither-wheel"}>
         <Icon className={` ${openItem === false ? "openSwıtcher" : "closeNone"}`}   onClick={() => getIcon()} baseClassName="loop"><LoopIcon style={{display:isShown ? "block":"none"}} id={"showSwitcher"} /></Icon>
        </div>
        <Icon id={"hideSwitcher"} style={{display:show ? "none" : "block"}} onClick={() => getIcon() }  baseClassName="loop"><CloseIcon color="primary" /> </Icon>

    </div>

    )



}



