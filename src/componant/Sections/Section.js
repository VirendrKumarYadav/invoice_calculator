import React from "react";

const Section = () => {
  return (
    <main>
      <div className="py-6 text-2xl font-bold font-sans">
        Invoice Calculator
      </div>
      <div className="flex flex-col gap-2">
        <div className="grid grid-cols-5  gap-2 bg-gray-300 mx-40 border border-gray-200/25 rounded-md">
          <div className="border border-gray-200/25 p-2">DESCRIPTION</div>
          <div className=" p-2">RATE, USD</div>
          <div className=" p-2">QTY/HRS</div>
          <div className=" p-2">TAX</div>
          <div className=" p-2">AMOUNT, USD</div>
        </div>

        <div className="grid grid-cols-5 gap-2   mx-40  rounded-lg">
          <div>
            <input
              className="border-gray-200 border-2 rounded-lg px-3 py-2 font-mono text-lg"
              placeholder="Title"
            />
          </div>
          <div>
            <input
              className=" border-gray-200 border-2 w-28 rounded-lg px-3 py-2 text-end font-mono text-lg"
              type="number"
              placeholder="0.0"
            />
          </div>
          <div>
            <input
              className=" border-gray-200 border-2 w-28 rounded-lg px-3 py-2 text-end font-mono text-lg"
              type="number"
              placeholder="0.0"
            />
          </div>
          <div>
            <input
              className="border-gray-200 border-2 w-28 rounded-lg px-1 py-2 text-end font-mono text-lg"
              type="number"
              placeholder="0.0%"
            />
          </div>
          <div>0.0</div>
        </div>
      </div>
      <div className=" text-start mx-40 my-3 flex gap-4">
        <button className=" bg-green-500 text-white px-4 py-2 rounded font-mono font-bold hover:text-green-500 hover:bg-white hover:border-2 hover:border-dashed">
          +New Item
        </button>
        <button
          className="border-2 border-dashed text-green-500 px-4 py-2 rounded font-mono font-bold hover:text-white hover:bg-green-500
        "
        >
          Clear All
        </button>
      </div>
      <hr></hr>
      <div className="flex flex-row justify-between mx-40 my-3">
        <div className="left">
          <button className=" bg-green-500 text-white px-4 py-2 rounded font-mono font-bold hover:text-green-500 hover:bg-white hover:border-2 hover:border-dashed">
            Transfer Data To Invoice Generator
          </button>
        </div>
        <div className="right min-w-96 font-mono font-bold text-gray-600">
          <div className="flex justify-between">
            <label>Subtotal</label>
            <span>$0.0</span>
          </div>
          <div className="flex justify-between">
            <label>Taxes</label>
            <span>$0.0</span>
          </div>
          <hr></hr>
          <div className="flex justify-between">
            <label>Balance </label>
            <span>$2000.0</span>
          </div>
          <div className="flex justify-between">
            <label>Balance Due </label>
            <span>$0.0</span>
          </div>
        </div>
      </div>
    </main>
  );
};

export default Section;
