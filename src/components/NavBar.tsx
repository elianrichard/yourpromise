import {
  motion,
  type AnimationControls,
  type Variants,
  type Transition,
} from "framer-motion";

const NavLink = ({
  label,
  variants,
  transition,
  current,
}: {
  label: string;
  variants: Variants;
  transition: Transition;
  current: string;
}) => {
  const isActive = current === label.toLowerCase();
  return (
    <motion.li
      className={`group relative cursor-pointer after:absolute after:top-[50%] after:left-[50%] after:-z-10 after:h-0 after:w-0 after:-translate-x-[50%] after:-translate-y-[50%] after:rounded-full after:bg-mainYellow after:opacity-0 after:transition-all after:duration-200 after:ease-in-out ${
        isActive
          ? "after:h-16 after:w-16 after:opacity-100"
          : "hover:after:h-16 hover:after:w-16 hover:after:opacity-100"
      }`}
      variants={variants}
      transition={transition}
    >
      <a
        href={`#${label.toLowerCase()}`}
        className={`transition-all duration-200 ease-in-out ${
          isActive
            ? "font-bold text-black"
            : "group-hover:font-bold group-hover:text-black"
        }`}
      >
        {label}
      </a>
    </motion.li>
  );
};

interface Props {
  animateControl: AnimationControls;
  current: string;
}

const NavBar = ({ animateControl, current }: Props) => {
  const navLinks = [
    "Home",
    "Story",
    "Donate",
    "Crew",
    "Merch",
    "BTS",
    "Contact",
  ];

  const containerVar: Variants = {
    show: {
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.5,
      },
    },
  };

  const childrenVar: Variants = {
    hidden: { y: -25, opacity: 0 },
    show: { y: 0, opacity: 1 },
  };

  const childrenTransition = { bounce: 0, duration: 0.5 };

  return (
    <nav className="top-50 after:via-black-30 fixed left-0 z-50 flex w-screen justify-center py-10 px-14 font-serif text-xl after:absolute after:top-0 after:left-0 after:-z-50 after:h-full after:w-full after:bg-gradient-to-b after:from-black/80 after:to-transparent after:opacity-0 after:transition-all after:duration-200 after:ease-out after:hover:opacity-100">
      <motion.ul
        className="flex gap-20"
        variants={containerVar}
        animate={animateControl}
        initial={"hidden"}
      >
        {navLinks.map((el, i) => (
          <NavLink
            label={el}
            key={i}
            variants={childrenVar}
            transition={childrenTransition}
            current={current}
          />
        ))}
      </motion.ul>
    </nav>
  );
};

export default NavBar;
