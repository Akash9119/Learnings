import {motion} from 'framer-motion'

const PulsingButton = () => {
  return (
    <div className='flex justify-center items-center h-screen bg-black text-white'>
        <motion.button className='px-5 py-2 bg-green-500 text-2xl text-black cursor-pointer rounded-xl' animate={{scale:[1,1.5,1], backgroundColor:[ "#3bf286", "#dbf8f8" , "#3bf286"] }} transition={{ repeat: Infinity, duration: 2}}>Click Here</motion.button>
    </div>
  )
}

export default PulsingButton