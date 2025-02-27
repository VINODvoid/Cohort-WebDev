const Header = () => {
  return (
    <div style={{display:'flex'}}>
        <div style={{flex:0.1,padding:"20px",marginLeft:"50px"}}>
            <img src="https://imgs.search.brave.com/8AdMhKww16_807WkCP_2xKDS8EoGiqXglZjaia0qhK8/rs:fit:500:0:0:0/g:ce/aHR0cHM6Ly9qYWlw/dXIuYWxsZW4uYWMu/aW4vYXNzZXRzL2lt/Zy9qYWlwdXItbG9n/by5wbmc" alt="" width={80} height={60}/>
        </div>
        <div style={{flex:0.8}}>
            <nav>
                <ul style={{display:"flex",listStyle:"none",padding:0,margin:0,justifyContent:"center",alignContent:'center'
                }}>
                    <li>Course</li>
                    <li>Test-Series</li>
                    <li>Scholarships</li>
                    <li>Results</li>
                </ul>
            </nav>

            
        </div>
        <div style={{flex:0.1,backgroundColor:"blue"}}>ther</div>
    </div>
  )
}

export default Header