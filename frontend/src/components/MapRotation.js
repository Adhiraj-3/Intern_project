import React from 'react';

function MapRotation({ maps }) {
  // Split maps into chunks of 4
  const chunkSize = 4;
  const mapChunks = [];
  for (let i = 0; i < maps.length; i += chunkSize) {
    mapChunks.push(maps.slice(i, i + chunkSize));
  }

  return (
    <div>
      <h3 className="uppercase text-[10px] font-semibold tracking-widest mb-2 select-none">
        map rotation
      </h3>

      <div className="flex flex-col space-y-4 py-2">
        {mapChunks.map((chunk, chunkIndex) => (
          <div key={chunkIndex} className="flex space-x-4">
            {chunk.map(({ filename, title }, idx) => (
              <div
                key={idx}
                className="w-[200px] flex-shrink-0 overflow-hidden bg-transparent"
              >
                {/* Top Half: Map image (80px tall) */}
                <img
                  src={`/images/${filename}`}
                  alt={title}
                  className="w-full h-[80px] object-cover"
                />

                {/* Bottom Half: Dark strip (80px tall) with the uppercase title */}
                <div className="bg-black/20 backdrop-blur-sm h-[80px] flex items-center justify-center">
                  <span className="text-[11px] uppercase font-semibold text-white tracking-widest text-left px-2">
                    {title}
                  </span>
                </div>
              </div>
            ))}
          </div>
        ))}
      </div>
    </div>
  );
}

export default MapRotation;
