import { motion } from "framer-motion";
import { FaGithub, FaLinkedinIn } from "react-icons/fa";
import { sectionstyle as styles } from "../../assets/styles";
import { AiOutlineMail } from "react-icons/ai";
import { FaLocationDot } from "react-icons/fa6";
import SocialIcon from "./SocialIcon";
import { useTranslation } from "react-i18next";
import { EarthCanvas } from "../canvas";
import { slideIn } from "../../utils/motion";

const Contact = () => {
  const { t } = useTranslation();

  return (
    <div id="contact" className="py-20 xl:pt-20 pb-20 overflow-hidden">
      <div className="w-full max-w-[90rem] mx-auto px-4 2xl:px-0 flex xl:flex-row flex-col-reverse gap-10">
        {/* Left Side - Contact Info */}
        <motion.div
          variants={slideIn("left", "tween", 0.2, 1)}
          className="flex-[0.75] flex flex-col bg-primary dark:bg-card opacity-95 py-8 px-4 xl:px-6 rounded-2xl"
        >
          <h2 className={styles.sectionHeadText}>{t("contact.title")}</h2>
          <h3 className={styles.sectionSubText}>{t("contact.subtitle")}</h3>

          <div className="my-10">
            <div className="text-primary-foreground flex flex-col gap-1">
              <p>{t("contact.availability")}</p>
              <p>{t("contact.contact_message")}</p>
              <p className="py-4">Rebecka Gamble</p>
            </div>
            <div className="flex flex-col gap-2 text-primary-foreground">
              <p className="flex flex-row items-center">
                <span className="text-purple/90 dark:text-secondary-foreground pr-2">
                  <FaLocationDot size={20} />
                </span>
                {t("contact.location")}
              </p>
              <p className="flex flex-row items-center">
                <span className="text-purple/90 dark:text-secondary-foreground pr-2">
                  <AiOutlineMail className="mt-1" size={20} />
                </span>{" "}
                rebeckagamble@hotmail.com
              </p>
            </div>
          </div>
          <div className="flex flex-col items-center">
            <p className="uppercase text-primary-foreground tracking-wider text-[18px]">
              {t("contact.connect_with_me")}
            </p>
            <div className="flex items-center justify-between py-4 gap-2 sm:gap-4">
              <SocialIcon
                size={28}
                href="https://www.linkedin.com/in/rebecka-gamble-395803198"
                icon={FaLinkedinIn}
                className="fill-purple/90"
                ariaLabel={t("contact.linkedin_aria")}
              />
              <SocialIcon
                size={28}
                href="https://www.github.com/RebeckaGamble"
                icon={FaGithub}
                className="fill-purple/90"
                ariaLabel={t("contact.github_aria")}
              />
              <SocialIcon
                size={28}
                href="mailto:rebeckagamble@hotmail.com"
                icon={AiOutlineMail}
                className="fill-purple/90"
                ariaLabel={t("contact.email_aria")}
              />
            </div>
          </div>
        </motion.div>
        {/* Right Side - Earth Canvas */}
        <motion.div
          variants={slideIn("right", "tween", 0.2, 1)}
          className="xl:flex-1 h-[350px] md:h-[550px] xl:h-auto xl:max-w-[692px]"
        >
          <EarthCanvas />
        </motion.div>
      </div>
    </div>
  );
};
export default Contact;
