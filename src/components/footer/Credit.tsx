import { useTranslation } from "react-i18next";

const Credit = () => {
  const { t } = useTranslation();

  return (
    <footer className="w-full bg-slate-700 dark:bg-primary">
      <section className="h-auto w-full py-2 max-w-[90rem] mx-auto px-4 2xl:px-0 flex flex-col gap-2 ">
        <h3 className="text-gray-light font-semibold text-[14px] sm:text-center">
          {" "}
          {t("credits.title")}
        </h3>
        <div className="flex flex-col sm:flex-row justify-center gap-4 sm:gap-8 text-[12px]">
          <div className="flex flex-col text-gray-light">
            <p>
              {t("credits.model")}{" "}
              <a
                href="https://sketchfab.com/3d-models/stylized-planet-789725db86f547fc9163b00f302c3e70"
                target="_blank"
                className="dark:text-link underline"
              >
                "Stylized Planet"
              </a>{" "}
            </p>
            <p>
              {t("credits.by")}{" "}
              <a
                href="https://sketchfab.com/cmzw"
                target="_blank"
                className="dark:text-link underline"
              >
                cmzw
              </a>
              , {t("credits.under")}{" "}
              <a
                href="http://creativecommons.org/licenses/by/4.0/"
                target="_blank"
                className="dark:text-link underline"
              >
                CC-BY-4.0
              </a>
              .
            </p>
          </div>
        </div>
      </section>
    </footer>
  );
};

export default Credit;
