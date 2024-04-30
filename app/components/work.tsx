import Link, { LinkProps } from "next/link";
import React from "react";

export const WorkContainer: React.FC<{ children: any }> = ({
  children,
}: any) => {
  return (
    <div className="md:grid flex-col flex md:grid-cols-2 w-full m-auto md:min-h-screen work-container">
      {children}
    </div>
  );
};

export const WorkBackground: React.FC = () => {
  return (
    <div className="md:grid flex flex-col md:grid-cols-2 w-full min-h-screen top-0 sticky">
      <div className="bg-orange m-auto h-[30vh] md:h-auto"></div>
      <div className="bg-orange m-auto h-[70vh] md:min-h-screen"></div>
    </div>
  );
};

export const WorkLeft: React.FC<{
  progress: number;
  children: React.ReactNode;
}> = ({ children, progress }) => {
  let translateY = Math.max(0, 50 - progress * 3 * 50);
  if (progress > 0.85) translateY = Math.max(-50, -(progress - 0.85) * 2 * 50);
  return (
    <div
      className="flex flex-col items-center justify-center md:text-3xl text-xl md:h-auto mx-auto md:mt-8 mb-8 z-10"
      style={
        {
          // transform: `translateY(${translateY}px)`,
        }
      }
    >
      <div className="leading-10">{children}</div>
    </div>
  );
};

export const WorkRight: React.FC<{
  children: React.ReactNode;
  progress: number;
}> = ({ children, progress }) => {
  let translateY = Math.max(-50, -(progress - 0.5) * 40);
  return (
    <div
      className="flex md:flex-1 md:items-center justify-center md:h-screen mb-8 absolute md:relative z-0"
      style={{
        transform: `translateY(${translateY}px)`,
      }}
    >
      <div className="w-full md:max-w-md md:pt-0 md:px-0 p-0">{children}</div>
    </div>
  );
};

export const WorkLink: React.FC<{
  href: string;
  children: React.ReactNode;
}> = ({ href, children }) => (
  <Link
    href={href}
    target="_blank"
    rel="noreferrer"
    className="underline underline-offset-8 decoration-1"
  >
    {children}
  </Link>
);
