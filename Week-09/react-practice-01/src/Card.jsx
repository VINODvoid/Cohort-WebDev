const Card = ({children}) => {
  return (
    <div style={{
        border:'1px solid black',
        borderRadius:'10px',
        padding:'20px',
        margin:'10px',
        boxShadow:"2px 2px 5px rgba(0,0,0,0.1)"
    }}>{children}</div>
  )
}

export default Card