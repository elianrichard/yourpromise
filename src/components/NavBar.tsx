import {
  motion,
  type AnimationControls,
  type Variants,
  type Transition,
} from "framer-motion";

interface Props {
  animateControl: AnimationControls;
}

const NavBar = ({ animateControl }: Props) => {
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
    <nav className="top-50 fixed left-0 z-50 flex w-screen justify-center py-10 px-14 font-serif text-xl">
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
          />
        ))}
      </motion.ul>
    </nav>
  );
};

export default NavBar;

const NavLink = ({
  label,
  variants,
  transition,
}: {
  label: string;
  variants: Variants;
  transition: Transition;
}) => {
  return (
    <motion.li
      className="group relative cursor-pointer after:absolute after:top-[50%] after:left-[50%] after:-z-10 after:h-0 after:w-0 after:-translate-x-[50%] after:-translate-y-[50%] after:rounded-full after:bg-mainYellow after:opacity-0 after:transition-all after:duration-200 after:ease-in-out hover:after:h-16 hover:after:w-16 hover:after:opacity-100"
      variants={variants}
      transition={transition}
    >
      <span className="transition-all duration-200 ease-in-out group-hover:font-bold group-hover:text-black">
        {label}
      </span>
    </motion.li>
  );
};
