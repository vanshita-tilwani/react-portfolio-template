import { motion } from 'framer-motion';

const container = {
    hidden: { opacity: 1, scale: 0 },
    visible: {
        opacity: 1,
        scale: 1,
        transition: {
            delayChildren: 0.3,
            staggerChildren: 0.2,
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
                    displayName={"hi"}
                    key={element}
                    value="Hiii"
                    className="item"
                    variants={item}
                >
                    {element}
                </motion.li>
            ))}
        </motion.ul>
    );
}

export default Variants