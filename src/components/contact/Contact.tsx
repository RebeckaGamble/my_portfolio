import { motion } from "framer-motion";
import { FaGithub, FaLinkedinIn } from "react-icons/fa";
import { AiOutlineMail } from "react-icons/ai";
import { FaLocationDot } from "react-icons/fa6";
import SocialIcon from "./SocialIcon";
import { useTranslation } from "react-i18next";

const Contact = () => {
  const { t } = useTranslation();

  return (
    <div id="contact" className="xl:flex-row flex-col-reverse flex gap-10 pb-20 xl:pt-20 overflow-hidden">
      <motion.div
        className="w-full flex flex-col bg-black opacity-95 py-8 px-4 xl:px-6 rounded-2xl xl:min-w-[440px] xl:max-w-[640px]"
      >
        <p >
          {t("contact.get_in_touch")}
        </p>
        <h3>{t("contact.contact")}</h3>
        <div className="my-10">
          <div className="text-white flex flex-col gap-1">
            <p>{t("contact.availability")}</p>
            <p>{t("contact.contact_message")}</p>
            <p className="py-4">Rebecka Gamble</p>
          </div>
          <div className="flex flex-col gap-2 text-white">
            <p className="flex flex-row items-center">
              <span className="text-[#9E2DA8] pr-2">
                <FaLocationDot size={20} />
              </span>
              Stockholm
            </p>
            <p className="flex flex-row items-center">
              <span className="text-[#9E2DA8] pr-2">
                <AiOutlineMail size={20} />
              </span>{" "}
              rebeckagamble@hotmail.com
            </p>
          </div>
        </div>
        <div className="flex flex-col  items-center pt-6">
          <p className="uppercase text-white tracking-wider text-[18px]">
            {t("contact.connect_with_me")}
          </p>
          <div className="flex items-center justify-between py-4 gap-2 sm:gap-4 ">
            <div className="flex gap-4">
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
        </div>
      </motion.div>
   
    </div>
  );
};

export default Contact
