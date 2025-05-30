// src/components/AvatarList.js
import React from 'react';

function AvatarList({ avatars, size = 40, rounded = false }) {
  return (
    <>
      {avatars.map((filename, index) => (
        <img
          key={index}
          // Prefix with /avatars/ so React will look into public/avatars/
          src={`/images/${filename}`}
          alt={`Player avatar ${index + 1}`}
          width={size}
          height={size}
          className={`${rounded ? 'rounded-sm' : ''} cursor-pointer 
                      hover:shadow-[0_0_15px_5px_rgba(255,215,0,0.6)] transition`}
        />
      ))}
    </>
  );
}

export default AvatarList;
