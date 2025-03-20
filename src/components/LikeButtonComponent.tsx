import React from "react";
interface LikeButtonProps {
  isLiked: boolean;
    onClick: () => void;
}
const LikeButtonComponent = (props: LikeButtonProps) => {
  const { isLiked, onClick } = props;
  const clearstar = "/assets/images/starclear.png";
  const fullstar = "/assets/images/staryellow.png";
  return (
    <div className="w-full h-full flex justify-center items-center" >
      <button onClick={onClick} className="pointer-cursor">
        <img src={isLiked ? fullstar : clearstar} alt="Like Icon" className="h-10" />
      </button>
    </div>
  );
};

export default LikeButtonComponent;
