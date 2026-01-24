'use client';
import React, { useState, FC } from 'react';

type Props = {
  src?: string;
  alt?: string;
  size?: string;
  className?: string;
};

const Logo: FC<Props> = ({ src = '/logo.png', alt = 'DLAXMI INFOTECH LLP', size = 'w-12 h-12', className = '' }) => {
  const [errored, setErrored] = useState(false);

  if (errored) {
    return (
      <div className={`${size} rounded-full bg-dlaxmi-500 flex items-center justify-center ${className}`}>
        <span className="text-white font-bold">DL</span>
      </div>
    );
  }

  return (
    <img
      src={src}
      alt={alt}
      onError={() => setErrored(true)}
      className={`${size} object-contain ${className}`}
    />
  );
};

export default Logo;
