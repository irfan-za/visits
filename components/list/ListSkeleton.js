import React from "react";

function ListSkeleton() {
  return (
    <>
      {[...Array(5)].map((_, index) => (
        <div
          key={index}
          className="mb-4 h-24 animate-pulse rounded-lg border border-gray-400 bg-gray-300 px-4 py-2"
        ></div>
      ))}
    </>
  );
}

export default ListSkeleton;
