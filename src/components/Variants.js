import { motion } from 'framer-motion';
import '../main.css';

const container = {
    hidden: { opacity: 1, scale: 0 },
    visible: {
        opacity: 1,
        scale: 1,
        transition: {
            delayChildren: 1,
            staggerChildren: 0.5,
        },
    },
};

const item = {
    hidden: { y: 20, opacity: 0 },
    visible: {
        y: 0,
        opacity: 1,
    },
};

function Variants({ elements }) {

    return (
        <motion.ul
            className="skills-container"
            variants={container}
            initial="hidden"
            animate="visible">
            {elements.map((element) => (
                <motion.li
                    key={element}
                    className="card-details"
                    variants={item}>
                    {element}
                </motion.li>
            ))}
        </motion.ul>
    );
}

export default Variants