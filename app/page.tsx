"use client"
import Image from "next/image";
import React, { useState } from 'react';
    

type Variant = {
  color: string;
  size: string;
  price: number;
  available: number;
};

const Variants: React.FC = () => {
  const [variants, setVariants] = useState<Variant[]>([
    { color: 'blue', size: 'small', price: 345.30, available: 20 },
    { color: 'red', size: 'small', price: 345.30, available: 20 },
    { color: 'blue', size: 'medium', price: 23.00, available: 20 },
    { color: 'red', size: 'medium', price: 45.00, available: 20 },
  ]);

  const [col, setCol] = useState([]);
  const [sz, setSz] = useState([])
  const [groupBy, setGroupBy] = useState<string>('Size');
  const colorHandler = () =>{
    const col=prompt("Color");
    setCol((prev) => [...prev, col]);
  }
  const sizeHandler = () =>{
    const sz=prompt("Size");
    setSz((prev) => [...prev, sz]);
  }


  return (
    <div className="p-4">
      <div className="mb-4">
        <h2 className="font-bold">Variants</h2>
        <div className="mb-2">
          <h3 className="font-semibold">COLOR</h3>
          {col?.map((i) => (
            <button className={`px-4 py-2 mr-2 bg-${i}-600 text-white rounded`}>{i}</button>
          ))}
          
          <button onClick={colorHandler} className="px-4 py-2 border rounded">Add colour</button>
        </div>
        <div>
          <h3 className="font-semibold">SIZE</h3>
          {sz?.map((i) => (
            <button className="px-4 py-2 mr-2 bg-gray-200 rounded">{i}</button>
          ))}
          
          <button onClick={sizeHandler} className="px-4 py-2 border rounded">Add size</button>
        </div>
      </div>
      <div className="mb-4">
        <label className="block mb-2 font-semibold">Group by:</label>
        <select
          className="px-4 py-2 border rounded"
          value={groupBy}
          onChange={(e) => setGroupBy(e.target.value)}
        >
          <option value="Size">Size</option>
          <option value="Color">Color</option>
        </select>
      </div>
      <table className="w-full border-collapse">
        <thead>
          <tr>
            <th className="border p-2">Variants</th>
            <th className="border p-2">Price</th>
            <th className="border p-2">Available</th>
          </tr>
        </thead>
        <tbody>
          {groupBy === 'Size' &&
            ['small', 'medium'].map((size) => (
              <React.Fragment key={size}>
                <tr>
                  <td className="border p-2 font-semibold" colSpan={3}>
                    {size.charAt(0).toUpperCase() + size.slice(1)}
                  </td>
                </tr>
                {variants
                  .filter((variant) => variant.size === size)
                  .map((variant) => (
                    <tr key={`${variant.size}-${variant.color}`}>
                      <td className="border p-2">{`${variant.size} | ${variant.color}`}</td>
                      <td className="border p-2">${variant.price.toFixed(2)}</td>
                      <td className="border p-2">{variant.available}</td>
                    </tr>
                  ))}
              </React.Fragment>
            ))}
        </tbody>
      </table>
      <div className="mt-4">
        <button className="px-4 py-2 bg-black text-white rounded">Save</button>
      </div>
    </div>
  );
};

export default Variants;
