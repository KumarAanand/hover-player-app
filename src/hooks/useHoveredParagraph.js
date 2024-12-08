import { useState,useEffect } from "react";

export const useHoveredParagraph=()=>{
    const [hoveredElement,setHoveredElement] = useState(null);

    useEffect(()=>{
        const elements = document.querySelectorAll(".readable");
        const handleMouseEnter = (e) => setHoveredElement(e.target);
        const handleMouseLeave = ()=>setHoveredElement(null);

        elements.forEach(e1 =>{
            e1.addEventListener("mouseenter",handleMouseEnter);
            e1.addEventListener("mouseleave", handleMouseLeave);
        });

        return () =>{
            elements.forEach( e1 =>{
                e1.removeEventListener("mouseenter" , handleMouseEnter);
                e1.removeEventListener("mourseleave" ,handleMouseLeave);
            });
        };
    },[])
    return hoveredElement;
}

export default useHoveredParagraph;