import React from 'react'

function Calendar() {
  return (
    <div className="mx-[5rem] my-[5rem]">
      <div className="flex">
        {/* Left Column (1/3 of the screen) */}
        <div className="w-1/3 bg- p-4">
          <div className="mb-4">
            <button className="bg-cgreen hover:bg-cbrown hover:text-cwhite font-bold h-12 w-full rounded">
              Monday
            </button>
          </div>
          <div className="mb-4">
            <button className="bg-cgreen hover:bg-cbrown hover:text-cwhite font-bold h-12 w-full rounded">
              Tuesday
            </button>
          </div>
          <div className="mb-4">
            <button className="bg-cgreen hover:bg-cbrown hover:text-cwhite font-bold h-12 w-full rounded">
              Wednesday
            </button>
          </div>
          <div className="mb-4">
            <button className="bg-cgreen hover:bg-cbrown hover:text-cwhite font-bold h-12 w-full rounded">
              Thursday
            </button>
          </div>
          <div className="mb-4">
            <button className="bg-cgreen hover:bg-cbrown hover:text-cwhite font-bold h-12 w-full rounded">
              Friday
            </button>
          </div>
          <div className="mb-4">
            <button className="bg-cgreen hover:bg-cbrown hover:text-cwhite font-bold h-12 w-full rounded">
              Saturday
            </button>
          </div>
          <div>
            <button className="bg-cgreen hover:bg-cbrown hover:text-cwhite font-bold h-12 w-full rounded">
              Sunday
            </button>
          </div>
        </div>
        {/* Right Column (2/3 of the screen) */}
        <div className="w-2/3 bg-white p-4">{/* Menu Cards Go Here */}</div>
      </div>
    </div>
  );
}

export default Calendar