import { useRef } from "react"

export const useDeBounce = (originalfn) =>{
    const  currentClock = useRef();
    const fn = () =>{
        clearTimeout(currentClock.current);
        currentClock.current = setTimeout(originalfn,200);
    }

    return fn;
}