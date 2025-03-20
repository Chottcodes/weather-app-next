'use client'
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
    <div className="w-full h-full flex justify-center items-center" >
      <button onClick={favoriteClick} className="pointer-cursor">
        <img src={clearstar} alt="Like Icon" className={`${isLiked ? 'hidden': 'block'} h-10`} />
      </button>
      <button onClick={removeFavorite} className="pointer-cursor">
        <img src={fullstar} alt="Like Icon" className={`${isLiked ? 'block': 'hidden'} h-10`} />
      </button>
    </div>
  );
};

export default LikeButtonComponent;
