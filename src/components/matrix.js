import React,{useState,useEffect} from 'react'
import './style.css'

function Matrix() {
    const [counter, setcounter] = useState(1)
    const [box1, setbox1] = useState("")
    const [box2, setbox2] = useState("")
    const [click, setclick]  = useState(0)

    
    
    const changehandler =(e)=>{
        if(counter<=16)
        {
            if(click===0 || click===2){
        
                try{
                    console.log(e.target.id)
                    document.getElementById(`div${e.target.id}`).style.backgroundColor='red'
                    document.getElementById(`${e.target.id}`).style.color='white'
                    document.getElementById(`${e.target.id}`).innerHTML=`#box${counter}`
                }catch(e){
                    
                    console.log(e,'try')
                }
                
    
              
                
        
                
                if(box1)
                {
                    
                    try{
                        document.getElementById(`div${box1}`).style.backgroundColor='blue'
    
                    }
                    catch(e){
                        
                        console.log(e,'try')
                    }
    
                }
                
                
                setbox1(`${e.target.id}`)
                
                setclick(1)
                const count=counter+1
            
                setcounter(count)
    
            }
            if(click===1){
                
                document.getElementById(`div${e.target.id}`).style.backgroundColor='red'
                document.getElementById(`${e.target.id}`).style.color='white'
                document.getElementById(`${e.target.id}`).innerHTML=`#box${counter}`
            
    
                if(box2 )
                {
                    
                    try{
                        document.getElementById(`div${box2}`).style.backgroundColor='blue'
    
                    }
                    catch(e){
                        
                        console.log(e,'try')
                    }
    
                }
                
                setbox2(`${e.target.id}`)
                setclick(2)
                setcounter(counter+1)
    
            }
        }
      
    }
  return (
    <div id="container">
        <div style={{display: 'flex', }}>
        <div onClick={(e)=>{changehandler(e)}} id="div1" className="box">
    <p id="1" className="contents">1</p>
  </div>
  <div onClick={(e)=>{changehandler(e)}} id="div2" className="box">

    <p id="2" className="contents">2</p>
  </div>
  <div onClick={(e)=>{changehandler(e)}} id="div3" className="box">

    <p id="3" className="contents">3</p>
  </div>
  <div onClick={(e)=>{changehandler(e)}} id="div4" className="box">

    <p id="4" className="contents">4</p>
  </div>
        </div>
  

        <div style={{display: 'flex', }}>
        <div onClick={(e)=>{changehandler(e)}} id="div5" className="box">
    <p id="5" className="contents">5</p>
  </div>
  <div onClick={(e)=>{changehandler(e)}} id="div6" className="box">

    <p id="6" className="contents">6</p>
  </div>
  <div onClick={(e)=>{changehandler(e)}} id="div7" className="box">

    <p id="7" className="contents">7</p>
  </div>
  <div onClick={(e)=>{changehandler(e)}} id="div8" className="box">

    <p id="8" className="contents">8</p>
  </div>
        </div>

        <div style={{display: 'flex', }}>
  <div onClick={(e)=>{changehandler(e)}} id="div9" className="box">
    <p id="9" className="contents">9</p>
  </div>
  <div onClick={(e)=>{changehandler(e)}} id="div10" className="box">

    <p id="10" className="contents">10</p>
  </div>
  <div onClick={(e)=>{changehandler(e)}} id="div11" className="box">

    <p id="11" className="contents">11</p>
  </div>
  <div onClick={(e)=>{changehandler(e)}} id="div12" className="box">

    <p id="12" className="contents">12</p>
  </div>
        </div>

        <div style={{display: 'flex', }}>
<div onClick={(e)=>{changehandler(e)}} id="div13" className="box">
    <p id="13" className="contents">13</p>
  </div>
  <div onClick={(e)=>{changehandler(e)}} id="div14" className="box">

    <p id="14" className="contents">14</p>
  </div>
  <div onClick={(e)=>{changehandler(e)}} id="div15" className="box">

    <p  id="15" className="contents">15</p>
  </div>
  <div onClick={(e)=>{changehandler(e)}} id="div16" className="box">

    <p id="16" className="contents">16</p>
  </div>
        </div>
</div>
  )
}

export default Matrix