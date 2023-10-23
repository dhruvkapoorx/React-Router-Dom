import { useParams } from "react-router-dom"


const User = () => {
    const {userid} = useParams()
  return (
    <div className=" flex justify-center bg-[#212121] text-[#ffd] text-3xl  p-4 capitalize ">User : {userid}</div>
  )
}

export default User