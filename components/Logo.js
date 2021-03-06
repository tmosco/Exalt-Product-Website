import Image from "next/image";

import React from "react";

const Logo = ({ onClick }) => {
  return (
    <Image
      src="/logo3.png"
      alt="Picture of the author"
      width={63}
      height={63}
      layout="intrinsic"
      onClick={onClick}
    />
  );
};

export default Logo;
