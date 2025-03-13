import { useEffect, useState } from "react";

export function usePosts(){
    const [post,setPost] = useState({});
    async function getPosts()
    {
        const response = await fetch('https://jsonplaceholder.typicode.com/todos/1');
        const json = await response.json();
        setPost(json);
    }
    useEffect(()=>{
        getPosts();
    },[])

    return post;
}

export function useFetch(url){
    const [data,setData] = useState({});
    const [loading, setLoading]= useState(true);

    async function getDetails() {
        setLoading(true);
        const response = await fetch(url);
        const jsonData = await response.json();
        setData(jsonData);
        setLoading(false);
    }
    useEffect(()=>{
        getDetails()
    },[url]);
    return {
        data,
        loading

    };
} 