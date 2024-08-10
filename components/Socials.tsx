import { RiYoutubeFill, RiLinkedinFill, RiGithubFill, RiInstagramFill } from "react-icons/ri";
import Link from "next/link";

const icons = [
  {
    path: 'https://www.youtube.com/', 
    name: <RiYoutubeFill />,
  },
  {
    path: 'https://www.linkedin.com/', 
    name: <RiLinkedinFill />,
  },
  {
    path: 'https://github.com/', 
    name: <RiGithubFill />,
  },
  {
    path: 'https://www.instagram.com/', 
    name: <RiInstagramFill />,
  },
];

interface SocialsProps {
  containerStyles?: string; // ? indicates that this prop is optional
  iconsStyles?: string;
}

const Socials: React.FC<SocialsProps> = ({ containerStyles = '', iconsStyles = '' }) => {
  return (
    <div className={containerStyles}>
      {icons.map((icon, index) => {
        return (
          <Link href={icon.path} key={index} target="_blank" rel="noopener noreferrer">
            <div className={iconsStyles}>{icon.name}</div>
          </Link>
        );
      })}
    </div>
  );
}

export default Socials;
