
import Link from 'next/link';

// Next.js hooks
import { usePathname } from 'next/navigation';

// Framer Motion
import { motion } from 'framer-motion';

const links = [
  { path: '/', name: 'home' },
  { path: '/projects', name: 'my projects' },
  { path: '/contact', name: 'contact' },
];

interface NavProps {
  containerStyles?: string;
  linkStyles?: string;
  underlineStyles?: string;
}

const Nav: React.FC<NavProps> = ({
  containerStyles = '',
  linkStyles = '',
  underlineStyles = ''
}) => {
  const path = usePathname();

  return (
    <nav className={`relative ${containerStyles}`}>
      {links.map((link, index) => (
        <Link
          href={link.path}
          key={index}
          className={`capitalize ${linkStyles}`}
        >
          {link.name}
          {link.path === path && (
            <motion.span
              initial={{ y: '-100%' }}
              animate={{ y: 0 }}
              transition={{ type: 'tween' }}
              layoutId="underline"
              className={`${underlineStyles}`}
            />
          )}
        </Link>
      ))}
    </nav>
  );
};

export default Nav;
