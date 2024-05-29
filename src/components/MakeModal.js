import React from "react";

const MakeModal = () => {

  const brands = [
    { name: "PakWheels Car Care", count: 14 },
    { name: "Maxxis", count: 4 },
    { name: "Slime", count: 3 },
    { name: "Turtle", count: 29 },
    { name: "3M", count: 1 },
    { name: "ABRO", count: 60 },
    { name: "AREON", count: 53 },
    { name: "Airpro", count: 13 },
    { name: "Aiteli", count: 1 },
    { name: "Amsoil", count: 89 },
    { name: "ArmorAll", count: 23 },
    { name: "Asian", count: 2 },
    { name: "Asuki Advanced", count: 533 },
    { name: "AutoGlym", count: 21 },
    { name: "7CF", count: 17 },
    { name: "AGS", count: 3 },
    { name: "Addinol", count: 34 },
    { name: "Aisin", count: 52 },
    { name: "Aroma", count: 92 },
    { name: "Asuki", count: 702 },
    { name: "Audio Quart", count: 4 },
    { name: "BOSCH", count: 54 },
    { name: "AutoGlym", count: 21 },
    { name: "7CF", count: 17 },
    { name: "AGS", count: 3 },
    { name: "Addinol", count: 34 },
    { name: "Aisin", count: 52 },
    { name: "Aroma", count: 92 },
    { name: "Asuki", count: 702 },
    { name: "Audio Quart", count: 4 },
    { name: "BOSCH", count: 54 },
    // Add more brands as needed
  ];
  return (
    <div>
      <div className="p-6">
        <h2 className="text-xl font-bold mb-4">Select Brand</h2>
        <div className="mb-4">
          <div className="grid grid-cols-2 h-[500px] overflow-y-scroll p-4 gap-4 mt-2">
            {brands.map((brand, index) => (
              <label key={index} className="flex items-center space-x-2">
                <input type="checkbox" className="form-checkbox" />
                <span>{brand.name}</span>
                <span className="text-gray-500">({brand.count})</span>
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
