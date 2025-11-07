import React, { useState } from 'react';
import NextImage, { ImageProps as NextImageProps } from 'next/image';

interface ImageProps extends Omit<NextImageProps, 'src'> {
  src: string;
  alt: string;
  className?: string;
}

export const Image: React.FC<ImageProps> = ({ src, alt, className, ...props }) => {
  const [imageSrc, setImageSrc] = useState(src);
  const [isError, setIsError] = useState(false);

  const handleError = () => {
    setIsError(true);
    // Fallback to a generic business image
    setImageSrc("https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=600&h=400&fit=crop&auto=format");
  };

  if (isError && imageSrc === "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=600&h=400&fit=crop&auto=format") {
    // If even the fallback fails, show a placeholder
    return (
      <div 
        className={`bg-gray-200 flex items-center justify-center ${className}`}
        style={{ minHeight: '250px' }}
      >
        <div className="text-gray-500 text-center p-4">
          <div className="text-2xl mb-2">📷</div>
          <div className="text-sm">Image not available</div>
        </div>
      </div>
    );
  }

  return (
    <NextImage
      src={imageSrc}
      alt={alt}
      className={className}
      onError={handleError}
      {...props}
    />
  );
};