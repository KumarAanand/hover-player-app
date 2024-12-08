import React from "react";
const HoverPlayer = ({targetElement, onPlay})=>{

    if(!targetElement) return null;

    const rect = targetElement.getBoundingClientreact();
    const styles = {
        position:"absolute",
        top:`${rect.top + window.scrollY}px`,
        transform:"translet(-50%,-50%)",
        zIndex:1000,
        backgroundColor:"white",
        border:"1px solid back",
        padding : "5px",
        cursor: "pointer"
    };

    return (
        <div style={styles} onClick={onplay}>Play
        </div>
    );
};

export default HoverPlayer;