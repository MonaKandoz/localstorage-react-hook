import { useEffect, useState } from "react";

function getStorageValue(key, defaultValue){
    if(typeof window !== "undefined"){
        const saved = localStorage.getItem(key);
        const initialValue = saved !== null? JSON.parse(saved): defaultValue;
        return initialValue
    }
}
export const useLocalStorage = (key, defaultValue)=>{
    const [value, setValue] = useState(()=>{
        return getStorageValue(key, defaultValue)
    });

    useEffect(()=>{
        localStorage.setItem(key, JSON.stringify(value))
    },[key, value]);

    return [value, setValue]
}