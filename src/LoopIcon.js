import * as React from 'react';
import Icon from '@mui/material/Icon';
import LoopIcon from '@mui/icons-material/Loop';
import {useState} from "react";


export default function TwoToneIcons() {

    const[openItem,setOpenItem] = useState(true);
    const[isShown,setIsShown] = useState(true);

    const getIcon = () => {

        if(openItem === false ){
            setOpenItem(true)
            setIsShown(true)

        }else{
            setOpenItem(false)
            setIsShown(false)
        }
    }
return(
    <div className={"switcher"}>
         <Icon id={"showSwitcher"} onClick={() => getIcon()} className={`${openItem === false ? "openSwıtcher" : "closeSwıtcher"}`} baseClassName="loop"><LoopIcon style={{display:isShown ? "block" : "none" }}/></Icon>
    </div>
    )



}