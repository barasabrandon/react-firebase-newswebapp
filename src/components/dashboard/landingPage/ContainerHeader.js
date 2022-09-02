import React from 'react';

export default function ContainerHeader({ title }) {
  return (
    <div className="bg-bluegray-900 text-gray-100 p-3 flex justify-content-between lg:justify-content-center align-items-center flex-wrap mt-2">
      <div className="font-bold mr-8">🔥{title}!</div>
    </div>
  );
}
