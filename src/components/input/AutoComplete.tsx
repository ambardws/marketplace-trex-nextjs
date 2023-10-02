"use client";
import React, { useState } from "react";
import { FiChevronDown } from "react-icons/fi";

interface AutocompleteProps {
  data: string[];
  label: string
}

export default function Autocomplete({ data, label }: AutocompleteProps): JSX.Element {
  const [searchTerm, setSearchTerm] = useState<string>("");
  const [filteredData, setFilteredData] = useState<string[]>([]);
  const [showList, setShowList] = useState(false);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const term = e.target.value;
    setSearchTerm(term);

    // Filter data sesuai dengan input pengguna
    const filtered = data.filter((item) =>
      item.toLowerCase().includes(term.toLowerCase())
    );

    setFilteredData(filtered);
    setShowList(true);
  };

  return (
    <div>
      <label className="label pl-0 mt-2">
        <span className="label-text">
          {label} <span className="text-primary">*</span>
        </span>
      </label>
      <div className="relative">
        <input
          type="text"
          className="input input-bordered w-full"
          value={searchTerm}
          onChange={handleInputChange}
          onFocus={() => setShowList(true)}
          onBlur={() => {
            setTimeout(() => {
              setShowList(false);
            }, 50);
          }}
        />
        <FiChevronDown
          onClick={() => {
            setShowList(!showList);
          }}
          className="absolute h-5 w-5 right-3 top-4 cursor-pointer"
        />
        {showList && (
          <ul className="absolute left-0 mt-2 py-2 w-full bg-white border border-gray-300 rounded-md shadow-md z-10">
            {filteredData.map((item, index) => (
              <li
                onClick={() => {
                  setSearchTerm(item);
                  setShowList(false);
                }}
                key={index}
                className="px-3 py-1 cursor-pointer hover:bg-gray-200"
              >
                {item ? item : 'No Data'}
              </li>
            ))}
          </ul>
        )}
      </div>
    </div>
  );
}
