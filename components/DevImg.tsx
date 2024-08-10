import Image from "next/image";
import React from "react"; // Make sure to import React if you're using TypeScript with JSX

// Define the types for the props
interface DevImgProps {
  containerStyles?: string; // containerStyles is optional
  imgSrc: string;           // imgSrc is required
}

const DevImg: React.FC<DevImgProps> = ({ containerStyles = "", imgSrc }) => {
  return (
    <div className={containerStyles}>
      <Image src={imgSrc} fill priority alt="" />
    </div>
  );
};

export default DevImg;
