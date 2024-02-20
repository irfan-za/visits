import React from "react";

function Card({ title, description, icon }) {
  return (
    <div className="mx-auto flex w-40 max-w-lg flex-col items-center justify-center rounded-xl border border-gray-100 bg-gray-400 bg-opacity-10 bg-clip-padding px-1 py-2 backdrop-blur-sm backdrop-filter sm:w-60 sm:rounded-3xl sm:px-2 sm:py-4">
      <div className="relative h-4 w-4 sm:h-10 sm:w-10">{icon}</div>
      <div className="my-1 text-center text-sm font-medium sm:my-3 sm:text-base">
        {title}
      </div>
      <div className="mt-1 text-center text-xs font-light sm:mb-3  sm:text-sm">
        {description}
      </div>
    </div>
  );
}

export default Card;
