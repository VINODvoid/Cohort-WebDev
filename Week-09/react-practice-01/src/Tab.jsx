import { useEffect, useState } from "react"

function Tab() {
    const[currentTab,setCurrentTab] = useState(1);
    const [data,setData] = useState({});
    const [loading,setLoading] = useState(true);
    useEffect(()=>{
        setLoading(true);
        fetch('https://jsonplaceholder.typicode.com/todos/'+currentTab)
      .then(async response => {
        const json = await response.json()
        setData(json);
        setLoading(false);
    })

    },[currentTab])
  return (
    <div>
        <button onClick={function(){setCurrentTab(1)}} style={{color:currentTab==1?"red":"black"}}>Tab 1</button>
        <button onClick={function(){setCurrentTab(2)}} style={{color:currentTab==2?"red":"black"}}>Tab 2</button>
        <button onClick={function(){setCurrentTab(3)}} style={{color:currentTab==3?"red":"black"}}>Tab 3</button>
        {loading?"Loading ..." :data.title}
    </div>
  )
}

export default Tab