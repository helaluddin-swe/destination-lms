

import { useClerk,useUser,UserButton } from '@clerk/clerk-react'
import { assets } from '../../assets/assets'
import { useAppContext } from '../../context/AppContext'

const Navbar = () => {
  const {user}=useUser()
  const {openSignIn}=useClerk()

const isStudentRoute=location.pathname.includes("/course-list")
const {navigate}=useAppContext()

  return (
    <div>
      <div className={`hidden md:flex ${isStudentRoute? "bg-white":"bg-cyan-100/70 border-b"} gap-4 items-center justify-between px-4 py-4 `}> 
      <img src={assets.logo} alt="Logo" className='' onClick={()=>navigate("/")} />
      <div className='flex justify-around items-center gap-8'> <button className='text-2xl font-bold'> Home</button>
      {user? <UserButton/>: <button onClick={()=>openSignIn()} className='bg-blue-500 text-white rounded-full px-7 py-2 hover:bg-blue-400 cursor-pointer'>Create account</button> }
      </div>
      </div>
      

      {/* for mobile tab */}
      <div>  </div>
    </div>
  )
}

export default Navbar
