export default function Card(props){
    const item = props.item
    return <div className="card">
    <h2>{item.name}</h2> 
      <div className="tags">
        <div className="tag">teste1</div>
        <div className="tag">teste2</div>            
        <div className="tag">teste3</div>    
        </div> 
    <img src ={item.imageUrl}/>
  </div>  
}