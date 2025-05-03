type IconProps = React.ComponentType<{ size: number; className?: string }>;

type IconType = {
  href: string;
  icon: IconProps;
  className: string;
  ariaLabel: string;
  size: number;
};

const SocialIcon = ({ href, icon: Icon, className, ariaLabel, size }:IconType) => {
    return (
      <div className="rounded-full  ">
        <a
          href={href}
          target="_blank"
          rel="noopener noreferrer"
          aria-label={ariaLabel}
          className="cursor-pointe border shadow-sm shadow-violet-400 flex w-full h-full p-[18px] hover:scale-110 ease-in duration-300 rounded-full"
        >
          <Icon size={size} className={className} />
        </a>
      </div>
    );
  };
  
  export default SocialIcon;
  