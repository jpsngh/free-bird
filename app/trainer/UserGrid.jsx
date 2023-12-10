"use client"
import React from 'react';

const UserGrid = ({ trainerClients }) => {
  return (
    <div className="rounded-full  grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 ">
      {trainerClients.map((client) => (
        <div key={client.id} className="flex items-center gap-4">
      
      
        <div>
          <h3 className="text-lg/tight font-medium text-gray-900"> {client.firstName}</h3>
      
          <p className="mt-0.5 text-gray-700">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptates voluptas distinctio
            nesciunt quas non animi.
          </p>
        </div>
      </div>
      ))}
    </div>
  );
};

export default UserGrid;