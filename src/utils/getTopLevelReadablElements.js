export const getTopLevelRedableElements = ()=>{
    const readableTags = ["P","H1","H2","H3","H4","H5","H6"];

    const elements = Array.from(document.body.querySelectorAll("*")).filter(e1 =>
        readableTags.includes(e1.tagName) && e1.offsetParent !=null);
        return elements;
}