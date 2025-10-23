import { motion } from "motion/react"

const App = () => {
  return (
    <div>
      {/* Simple Animaiton Properties */}
      <motion.div className="box" animate={{x:20}} />
      <motion.div className="square" animate={{rotate: 20}} />
      <motion.div className="square" animate={{scale: 1.2}} />
      <motion.div className="square" animate={{skewX: 20}} />

      {/* Transitions in Framer Motion */}
      <motion.div className="box" initial={{x:0}} animate={{x: 300}} transition={{duration: 5, ease:"backIn"}} />
      <motion.div className="box" animate={{scale: [1,2,4,2,1]}} transition={{duration: 4}} />
    </div>
  )
}

export default App