import { motion } from "framer-motion";
import Backdrop from "../Backdrop";

interface Props {
  modalOpen: boolean;
  handleClose: () => void;
  header: string;
}

const dropIn = {
  hidden: { y: "-100vh", opacity: 0 },
  visible: {
    y: "100vh",
    opacity: 1,
    transition: { duration: 0.1, type: "string", damping: 25, stiffness: 500 },
  },
  exit: { y: "200vh", opacity: 0 },
};

//WHAT TO ADD WHEN APPLYING MODAL
//{modalOpen && <Modal header="TEAM" handleClose={closeModal} />}
//        <AnimatePresence initial={false} mode="wait"></AnimatePresence>
// const [modalOpen, setModalOpen] = useState(false); const closeModal = () => setModalOpen(false); const openModal = () => setModalOpen(true);
//close={closeModal} open={openModal} state={modalOpen}
//onClick={() => (state ? close() : open())} text="About"
//<Card /><Card />

export default function Modal({ handleClose, header }: Props) {
  return (
    <Backdrop onClick={handleClose}>
      <motion.div
        className="w-1/2 h-1/2 bg-primary text-text rounded-lg flex flex-col justify-center text-center gap-4"
        onClick={(e) => e.stopPropagation()}
        variants={dropIn}
        initial="hidden"
        animate="visible"
        exit="exit"
      >
        <h1 className="text-7xl font-semibold font-Berlin">{header}</h1>
        <div className="bg-red-400 w-full h-80 flex justify-around items-center"></div>
      </motion.div>
    </Backdrop>
  );
}
