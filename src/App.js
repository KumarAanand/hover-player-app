import './App.css';
import React ,{useEffect} from "react";
import { getTopLevelRedableElements } from './utils/getTopLevelReadablElements';
import useHoveredParagrhaph from './hooks/useHoveredParagraph';
import HoverPlayer from './components/HoverPlayer';

function App() {
  const hoveredElement = useHoveredParagrhaph();

  useEffect(()=>{
    const readableElements = getTopLevelRedableElements();
    readableElements.forEach(el=>  el.classList.add("readable"));
  },[]);

  const handlePlay =()=>{
    if(hoveredElement){
      const textContent = hoveredElement.textContent;

      window.speechSynthesis.speak(new SpeechSynthesisUtterance(textContent))
    }
  };
  return (
   <>
      <HoverPlayer targetElement={hoveredElement}  onplay={handlePlay} />
   </>
  );
}

export default App;
