import React from 'react';
import NextImage, { ImageProps as NextImageProps } from 'next/image';

interface ImageProps extends Omit<NextImageProps, 'src'> {
  src: string;
  alt: string;
  className?: string;
}

export const Image: React.FC<ImageProps> = ({ src, alt, className, ...props }) => {
  return (
    <NextImage
      src={src}
      alt={alt}
      className={className}
      {...props}
    />
  );
};