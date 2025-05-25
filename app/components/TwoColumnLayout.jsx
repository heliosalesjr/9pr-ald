"use client";
import Image from 'next/image';
import ResourceCards from './ResourcesCards';

const TwoColumnLayout = () => {
  return (
    <div className="relative h-[100vh] md:h-[95vh] flex items-center justify-center bg-gradient-to-br from-yellow-700 to-green-300 z-0">
      
      
      <ResourceCards className="z-100 "/>
    </div>
  );
};

export default TwoColumnLayout;





