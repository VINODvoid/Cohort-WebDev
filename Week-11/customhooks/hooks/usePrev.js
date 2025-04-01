import { useEffect, useRef } from "react"

export const usePrev = (value) => {
    const ref = useRef();
    console.log("rerendered with new valuer"+value);
    
    useEffect(()=>{
        console.log("updated ref to new value "+value);
        
        ref.current = value;

    },[value])
    console.log("returned"+ref.current);
    return ref.current;
}