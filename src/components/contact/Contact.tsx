import { motion } from "framer-motion";
import { FaGithub, FaLinkedinIn } from "react-icons/fa";
import { sectionstyle as styles } from "../../assets/styles";
import { AiOutlineMail } from "react-icons/ai";
import { FaLocationDot } from "react-icons/fa6";
import SocialIcon from "./SocialIcon";
import { useTranslation } from "react-i18next";

const Contact = () => {
  const { t } = useTranslation();

  return (
    // xl:flex-row flex-col-reverse flex gap-10 pb-20 xl:pt-20 overflow-hidden
    <div id="contact" className="bg-purple-50 py-20 dark:bg-[#050816]">
      <div className="w-full max-w-[90rem] mx-auto px-4 2xl:px-0">
        <motion.div className="w-full flex flex-col bg-purple-200 dark:bg-tertiary opacity-95 py-8 px-4 xl:px-6 rounded-2xl xl:min-w-[440px] xl:max-w-[640px]">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="flex flex-col items-start mb-12"
          >
            <h2 className={styles.sectionHeadText}>{t("contact.title")}</h2>
            <h3 className={styles.sectionSubText}>{t("contact.subtitle")}</h3>
          </motion.div>
          <div className="mb-10">
            <div className="text-black dark:text-white flex flex-col gap-1">
              <p>{t("contact.availability")}</p>
              <p>{t("contact.contact_message")}</p>
              <p className="py-4">Rebecka Gamble</p>
            </div>
            <div className="flex flex-col gap-2 text-slate-900 dark:text-white">
              <p className="flex flex-row items-center">
                <span className="text-[#9E2DA8] pr-2">
                  <FaLocationDot size={20} />
                </span>
                {t("contact.location")}
              </p>
              <p className="flex flex-row items-center">
                <span className="text-[#9E2DA8] pr-2">
                  <AiOutlineMail size={20} />
                </span>{" "}
                rebeckagamble@hotmail.com
              </p>
            </div>
          </div>
          <div className="flex flex-col items-center">
            <p className="uppercase text-slate-900 dark:text-white tracking-wider text-[18px]">
              {t("contact.connect_with_me")}
            </p>
            <div className="flex items-center justify-between py-4 gap-2 sm:gap-4 ">
                <SocialIcon
                  size={28}
                  href="https://www.linkedin.com/in/rebecka-gamble-395803198"
                  icon={FaLinkedinIn}
                  className="fill-[#9E2DA8]"
                  ariaLabel={t("contact.linkedin_aria")}
                />
                <SocialIcon
                  size={28}
                  href="https://www.github.com/RebeckaGamble"
                  icon={FaGithub}
                  className="fill-[#9E2DA8]"
                  ariaLabel={t("contact.github_aria")}
                />
                <SocialIcon
                  size={28}
                  href="mailto:rebeckagamble@hotmail.com"
                  icon={AiOutlineMail}
                  className="fill-[#9E2DA8]"
                  ariaLabel={t("contact.email_aria")}
                />
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default Contact;
