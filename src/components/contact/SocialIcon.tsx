interface ISocialIconProps {
  href: string;
  icon: React.ComponentType<{ size: number; className?: string }>;
  className: string;
  ariaLabel: string;
  size: number;
}

const SocialIcon = ({
  href,
  icon: Icon,
  className,
  ariaLabel,
  size,
}: ISocialIconProps) => {
  return (
    <div className="rounded-full bg-white">
      <a
        href={href}
        target="_blank"
        rel="noopener noreferrer"
        aria-label={ariaLabel}
        className="cursor-pointer shadow-lg border border-slate-200 dark:border-inherit dark:shadow-none flex w-full h-full p-[16px] hover:scale-110 ease-in-out transition-transform duration-300 rounded-full"
      >
        <Icon size={size} className={className} />
      </a>
    </div>
  );
};

export default SocialIcon;
