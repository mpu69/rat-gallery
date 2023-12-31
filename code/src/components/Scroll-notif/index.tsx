import { motion } from "framer-motion";
import Or from "./or";
import Notification from "./notification";

const ScrollNotif = () => {
  return (
    <motion.div
      initial={{ opacity: 0, y: -25 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, delay: 2 }}
      className="h-28 w-64 flex flex-col justify-between items-center z-30"
    >
      <Or />
      <Notification />
    </motion.div>
  );
};

export default ScrollNotif;
