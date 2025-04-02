import { useEffect,useState } from "react"

// export const useDeBounce = (originalfn) =>{
//     const  currentClock = useRef();
//     const fn = () =>{
//         clearTimeout(currentClock.current);
//         currentClock.current = setTimeout(originalfn,200);
//     }

//     return fn;
// }


export const useDebounce = (value, delay) => {
    const [debouncedValue, setDebouncedValue] = useState(value);

    useEffect(() => {
        const handler = setTimeout(() => {
            setDebouncedValue(value);
        }, delay);

        return () => {
            clearTimeout(handler);
        };
    }, [value, delay]);

    return debouncedValue;
};
