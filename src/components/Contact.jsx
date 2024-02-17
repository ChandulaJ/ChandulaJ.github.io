import { SectionWrapper } from "../hoc";
import { motion } from "framer-motion";
import { styles } from "../styles";
import { fadeIn, textVariant } from "../utils/motion";
import { FiMail, FiGithub, FiLinkedin } from "react-icons/fi"; // Import icons from react-icons library

const Contact = () => {
  return (
    <>
      <motion.div variants={textVariant()}>
        <h2 className={`${styles.sectionHeadText}`}>Contact</h2>
      </motion.div>

      <div className="w-full flex items-center">
        <motion.p
          variants={fadeIn("", "", 0.1, 1)}
          className="mt-3 text-secondary text-[17px] max-w-3xl leading-[30px]"
        >
          {/* Email */}
          <div className="flex items-center mr-4 pt-5">
            <FiMail className="text-2xl text-gray-500  mr-2" />
            <span>chandulapamodajayathilake@gmail.com</span>
          </div>

          {/* GitHub */}
          <div className="flex items-center mr-4 pt-5">
            <FiGithub className="text-2xl text-gray-500  mr-2 " />
            <a
              href="https://github.com/ChandulaJ"
              target="_blank"
              rel="noopener noreferrer"
            >
              <span>ChandulaJ</span>
            </a>
          </div>

          {/* LinkedIn */}
          <div className="flex items-center mr-4 pt-5">
            <FiLinkedin className="text-2xl text-gray-500  mr-2" />
            <a
              href="https://www.linkedin.com/in/chandula-jayathilake"
              target="_blank"
              rel="noopener noreferrer"
            >
              <span>ChandulaJayathilake</span>
            </a>
          </div>
        </motion.p>
      </div>
    </>
  );
};

export default SectionWrapper(Contact, "contact");
