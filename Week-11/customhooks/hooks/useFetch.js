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

export function useFetch(url,interval){
    const [data,setData] = useState(null);
    const [loading, setLoading]= useState(true);
    const [error,setError] = useState(null)
    async function getDetails() {
        setLoading(true);
        try {
            const response = await fetch(url);
            const jsonData = await response.json();
            setData(jsonData);
        } catch (error) {
            setError(error.message)
        }
        finally{
            setLoading(false);
        }
    }
    useEffect(()=>{
        getDetails();
        if(interval != null)
        {
           const timer =  setInterval(() => {
                getDetails();
                console.log("timer is called");
                
            }, interval);
            return () => clearInterval(timer)
        }
    },[url,interval]);
    return {
        data,
        loading,
        error
    };
} 