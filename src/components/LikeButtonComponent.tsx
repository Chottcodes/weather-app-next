'use client'
import Image from "next/image";
import React from "react";
interface LikeButtonProps {
  isLiked: boolean;
    favoriteClick: () => void;
    removeFavorite: () => void;
}
const LikeButtonComponent = (props: LikeButtonProps) => {
  const { isLiked, favoriteClick,removeFavorite } = props;
  const clearstar = "/assets/images/starclear.png";
  const fullstar = "/assets/images/staryellow.png";
  return (
    <div className="w-full h-full flex justify-center items-center transform-all duration-300" >
      <button onClick={favoriteClick} className="pointer-cursor">
        <Image width={100} height={100} src={clearstar} alt="Like Icon" className={`${isLiked ? 'hidden': 'block'} h-6 w-6 md:h-7 md:w-7 lg:h-10 lg:w-10`} />
      </button>
      <button onClick={removeFavorite} className="pointer-cursor">
        <Image width={100} height={100} src={fullstar} alt="Like Icon" className={`${isLiked ? 'block': 'hidden'} h-6 w-6 md:h-7 md:w-7 lg:h-10 lg:w-10`} />
      </button>
    </div>
  );
};

export default LikeButtonComponent;
