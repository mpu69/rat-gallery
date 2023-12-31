import { motion } from "framer-motion";
import Link from "next/link";

interface Props {
  link: string;
  name: string;
  title: string;
  photo: string;
}

const Card = ({ link, name, title, photo }: Props) => {
  return (
    <Link href={link} target="_blank">
      <motion.div
        initial={{ opacity: 0, y: -10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        whileHover={{ scale: 1.02, transition: { duration: 0.2 } }}
        className="cursor-pointer h-96 w-72 flex flex-col gap-6 text-center justify-center bg-secondary text-accent font-Barlow-Bold text-2xl border border-accent rounded-lg hvr-shadow"
      >
        <div
          id="team"
          className="h-2/3 flex flex-col justify-center items-center gap-4"
        >
          <div className="w-40 h-40 border-2 border-accent rounded-full overflow-hidden">
            <img src={photo} alt="github avatar" />
          </div>
          <h2>{name}</h2>
        </div>
        <h2 className="text-text">{title}</h2>
      </motion.div>
    </Link>
  );
};

export default Card;
