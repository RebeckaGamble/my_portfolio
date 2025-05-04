import { motion, useAnimation } from "framer-motion";
import { useState, useEffect, useRef } from "react";
import { useTranslation } from "react-i18next";
import { useInView } from "../../hooks/useIntersectionObserver";

type CodeLine = {
  text: string;
  color: string;
};

const AboutCode = () => {
  const { t, i18n } = useTranslation();
  const controls = useAnimation();
  const [lines, setLines] = useState<CodeLine[]>([]);
  const [typedText, setTypedText] = useState("");
  const [currentIndex, setCurrentIndex] = useState(0);
  const [showCursor, setShowCursor] = useState(false);
  const typingRef = useRef<number | null>(null);
  const cursorRef = useRef(null);

  const codeLines = [
    { text: t("aboutCode.line1"), color: "text-white" },
    { text: t("aboutCode.line2"), color: "text-white" },
    { text: t("aboutCode.line3"), color: "text-white" },
    { text: t("aboutCode.line4"), color: "text-white" },
    { text: t("aboutCode.line5"), color: "text-white" },
    { text: t("aboutCode.line6"), color: "text-white" },
    { text: t("aboutCode.line7"), color: "text-white" },
    { text: t("aboutCode.line8"), color: "text-white" },
    { text: t("aboutCode.line9"), color: "text-white" },
    { text: t("aboutCode.line10"), color: "text-white" },
    { text: t("aboutCode.line11"), color: "text-white" },

  ];

  const [codeEditorRef, inView] = useInView<HTMLDivElement>({
    threshold: 0.2,
    triggerOnce: true,
  });

  useEffect(() => {
    if (!inView) return;

    if (currentIndex < codeLines.length) {
      typingRef.current = setTimeout(() => {
        const currentLine = codeLines[currentIndex].text;
        if (typedText.length < currentLine.length) {
          setTypedText((prev) => prev + currentLine[typedText.length]);
        } else {
          setLines((prev) => [
            ...prev,
            { text: typedText, color: codeLines[currentIndex].color },
          ]);
          setCurrentIndex((prev) => prev + 1);
          setTypedText("");
        }
      }, 40);
    } else {
      setShowCursor(true);
    }

    return () => clearTimeout(typingRef.current!);
  }, [typedText, currentIndex, inView]);

  useEffect(() => {
    if (inView && currentIndex < codeLines.length && !typedText) {
      setShowCursor(false);
      typingRef.current = null;
      setTypedText("");
    }
  }, [inView]);

  const variants = {
    hidden: {
      opacity: 0,
      y: 50,
    },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5,
        staggerChildren: 0.2,
      },
    },
  };

  return (
    <motion.div
      variants={variants}
      //   initial="hidden"
      animate={controls}
      className="rounded-lg shadow-xl max-w-[718px]"
    >
      <div
        ref={codeEditorRef}
        className="flex items-center justify-between bg-gray-800 dark:bg-slate-800/90 rounded-t-lg px-4 py-3"
      >
        <div className="flex space-x-2">
          <div className="w-3 h-3 rounded-full bg-red-500"></div>
          <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
          <div className="w-3 h-3 rounded-full bg-green-500"></div>
        </div>
        <div className="text-xs text-white">
          {i18n.language === "en" ? "developer.js" : "utvecklare.js"}
        </div>
      </div>
      {/* Code area */}
      <div className="px-4 pt-4 py-6 overflow-hidden rounded-b-lg bg-slate-900/80">
        {lines.map((line, idx) => (
          <div key={idx} className={`whitespace-pre ${line.color}`}>
            {line.text}
          </div>
        ))}
        <div className="">
          {typedText && (
            <div className={`whitespace-pre ${codeLines[currentIndex]?.color}`}>
              {typedText}
            </div>
          )}
          {showCursor && (
            <div
              ref={cursorRef}
              className="cursor  h-full animate-blink text-white"
            >
              |
            </div>
          )}
        </div>
      </div>
    </motion.div>
  );
};

export default AboutCode;
