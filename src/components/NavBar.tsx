import HamburgerIcon from "@/assets/svgs/icons/HamburgerIcon";
import {
  motion,
  type AnimationControls,
  type Variants,
  type Transition,
} from "framer-motion";
import { type Dispatch, type SetStateAction, useState } from "react";

const NavLink = ({
  label,
  variants,
  transition,
  current,
  setNav,
}: {
  label: string;
  variants: Variants;
  transition: Transition;
  current: string;
  setNav: Dispatch<SetStateAction<boolean>>;
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
        onClick={() => setNav(false)}
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
  const [navOpen, setNavOpen] = useState<boolean>(false);

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
    <nav
      className={`fixed left-0 z-50 flex h-20 w-screen max-w-[100%] items-center justify-center px-14 py-10 font-serif text-xl after:absolute after:top-0 after:left-0 after:-z-50 after:h-full after:w-full after:bg-transparent after:from-black/80 after:to-transparent after:opacity-100 after:transition-all after:duration-200 after:ease-out after:hover:opacity-100 lg:h-fit lg:after:bg-gradient-to-b lg:after:opacity-0`}
    >
      <div className="absolute right-5 top-5 z-10 block font-sans lg:hidden">
        <button
          onClick={() => setNavOpen((navOpen) => !navOpen)}
          className="w-10"
        >
          <HamburgerIcon />
        </button>
      </div>
      <motion.ul
        className={`absolute top-0 left-0 z-0 flex h-screen w-full flex-col items-center justify-between bg-mainBlue py-20 transition-opacity duration-200 ease-out lg:static lg:h-full lg:flex-row lg:justify-center lg:gap-20 lg:bg-transparent lg:py-0 ${
          navOpen
            ? "opacity-100"
            : "pointer-events-none opacity-0 lg:pointer-events-auto lg:opacity-100"
        }`}
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
            setNav={setNavOpen}
          />
        ))}
      </motion.ul>
    </nav>
  );
};

export default NavBar;
