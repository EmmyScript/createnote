import { useEffect, useState } from "react"


export const DateTime = () => {

    const[date, setDate] = useState(new Date())

    useEffect(() =>{
const timer = setInterval(() => setDate(new Date()), 1000)

return function cleanup(){
    clearInterval(timer)
}
    })
  return(
    <div> 

        <p>Date: {date.toLocaleDateString()}</p>
    
    </div>


  )
}

export default DateTime

/* 
const [date, setDate] =(useState(new Date())

ueEffect(()=>{
  const timer = setInterval(()=> setDate(new Date()), 1000)
  return fuction clearup(){
    clearINTERVAL(timer)
  }
})
*/