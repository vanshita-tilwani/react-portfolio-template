import { motion } from 'framer-motion';
import '../../main.css';

function Animation({ children }) {
    return (
        <motion.div
            whileHover={{ scale: 1.15 }}
            whileTap={{ scale: 0.8 }}
            initial={{ scale: 0 }}
            animate={{ rotate: 360, scale: 1, repeat: Infinity }}
            transition={{
                type: "spring",
                stiffness: 260,
                damping: 20
            }}>
            {children}
        </motion.div>
    )
}

export default Animation;