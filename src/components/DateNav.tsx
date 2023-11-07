import { useState , useEffect} from "react"


const DateNav = () => {
    const[date, setDate] = useState(new  Date())

     useEffect (() =>{

        const timer = setInterval(() =>setDate(new Date()), 1000)
        return function cleanup(){
            return
            clearInterval(timer)
        }
    })
  return (

    <div>
        <p>Time:{date.toLocaleTimeString()}</p>
    </div>
  )
}

export default DateNav