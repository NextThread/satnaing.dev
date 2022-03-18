type Props = {
  href: string;
  targetBlank?: boolean;
  outline?: boolean;
  className?: string;
};

const LinkButton: React.FC<Props> = ({
  href,
  targetBlank = false,
  outline = false,
  className = "",
  children,
}) => {
  return (
    <a
      role="button"
      className={`${
        outline
          ? "border border-marrsgreen dark:border-carrigreen text-marrsgreen dark:text-carrigreen"
          : "bg-marrsgreen hover:bg-marrslight active:bg-marrsdark dark:hover:bg-carrilight dark:active:bg-carridark dark:bg-carrigreen text-bglight dark:text-bgdark"
      } py-2 px-3 rounded lg:text-xl ${className} outline-marrsgreen dark:outline-carrigreen focus-visible:outline-double outline-offset-2`}
      href={href}
      target={`${targetBlank ? "_blank" : "_self"}`}
    >
      {children}
    </a>
  );
};

export default LinkButton;