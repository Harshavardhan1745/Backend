import { useState } from "react"


const Toggle = () => {

    const [togglelist,setToggle] = useState(false)

    const clicktochange = () =>{
        setToggle((prev)=>!prev)
    }
  return (
    <>
    <div>
        
    </div>
    </>
  )
}

export default Toggle