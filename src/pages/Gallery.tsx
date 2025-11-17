import React, { useState } from "react";
import Lightbox from "yet-another-react-lightbox";
import "yet-another-react-lightbox/styles.css";
import { galleryData } from "../data/galleryData";
//import type { GalleryItem } from "../data/galleryData";

const Gallery: React.FC = () => {
  const [lightboxIndex, setLightboxIndex] = useState<number | null>(null);
  const [filterText, setFilterText] = useState<string>("");

  // Filter images based on alt text
  const filteredGallery = galleryData.filter((item:any) =>
    item.alt.toLowerCase().includes(filterText.toLowerCase())
  );

  const openLightbox = (index: number) => {
    setLightboxIndex(index);
  };

  const closeLightbox = () => {
    setLightboxIndex(null);
  };

  return (
    <section className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
     <h2 className="section-heading">
       My <span className="highlight"> Gallery</span>
      </h2>
      <input
        type="text"
        placeholder="Search projects..."
        value={filterText}
        onChange={(e) => setFilterText(e.target.value)}
        className="mt-4 mb-6 w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500"
      />

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
        {filteredGallery.map((item:any, index:any) => (
          <div
            key={item.id}
            className="relative cursor-pointer overflow-hidden rounded-lg shadow-md hover:scale-105 transition-transform duration-300"
            onClick={() => openLightbox(index)}
          >
            <img
              src={item.src}
              alt={item.alt}
              className="w-full h-48 object-cover"
            />
            <div className="absolute bottom-0 left-0 right-0 bg-black bg-opacity-50 text-white p-2 text-center">
              {item.alt}
            </div>
          </div>
        ))}
      </div>

      {lightboxIndex !== null && (
        <Lightbox
          open={true}
          index={lightboxIndex}
          close={closeLightbox}
          slides={filteredGallery.map((item:any) => ({
            src: item.src,
            title: item.alt,
          }))}
        />
      )}
    </section>
  );
};

export default Gallery;
