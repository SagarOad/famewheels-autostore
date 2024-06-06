"use client"
import React, { useState, useEffect } from "react";
import axios from "axios";


const BASE_URL = `${process.env.NEXT_PUBLIC_BASE_URL}`;

const MakeModal = ({ selectedMakes, onMakeChange }) => {
  const [makes, setMakes] = useState([]);

  useEffect(() => {
    axios.get(`${BASE_URL}/byMake`)
      .then((response) => {
        setMakes(response.data);
      })
      .catch((error) => {
        console.error("Error fetching makes:", error);
      });
  }, []);

  return (
    <div>
      <div className="p-6">
        <h2 className="text-xl font-bold mb-4">Select Make</h2>
        <div className="mb-4">
          <div className="grid grid-cols-2 h-[500px] overflow-y-scroll p-4 gap-4 mt-2">
            {makes.map((make) => (
              <label key={make.makeId} className="flex items-center space-x-2">
                <input
                  type="checkbox"
                  className="form-checkbox"
                  checked={selectedMakes.includes(make.makeName)}
                  onChange={() => onMakeChange(make.makeName)}
                />
                <span>{make.makeName}</span>
              </label>
            ))}
          </div>
        </div>
        <div className="flex justify-end space-x-4">
          <button className="bg-blue-500 text-white px-4 py-2 rounded-md">
            Search
          </button>
        </div>
      </div>
    </div>
  );
};

export default MakeModal;
