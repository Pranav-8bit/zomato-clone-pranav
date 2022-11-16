import React, { useState } from "react";
import ImageViewer from "react-simple-image-viewer";

// components
import PhotoCollection from "./PhotoCollection";

const Photos = () => {
  const [photos, setPhotos] = useState([
    "https://b.zmtcdn.com/data/pictures/chains/9/18438909/947122445d5c54bf7b7898d109beec45.jpg",
    "https://b.zmtcdn.com/data/pictures/chains/9/18438909/e7e5d7fdb3d647f748e5cb8a88ff0d69.jpg",
    "https://b.zmtcdn.com/data/pictures/chains/9/18438909/892e9f52014d340fb956be39090ae509.jpg",
    "https://b.zmtcdn.com/data/pictures/chains/9/18438909/e3a1d5d268228310ec3b0ef72b2f58f9.jpg",
    "https://b.zmtcdn.com/data/pictures/chains/9/18438909/b1a810f35a6fc7846895fcef8b765517.jpg",
  ]);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [currentImage, setCurrentImage] = useState(0);

  const closeViewer = () => setIsMenuOpen(false);
  const openViewer = () => setIsMenuOpen(true);

  return (
    <>
      {isMenuOpen && (
        <ImageViewer
          src={photos}
          currentIndex={currentImage}
          disableScroll={false}
          onClose={closeViewer}
        />
      )}

      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-3">
        {photos.map((photo, index) => (
          <PhotoCollection
            key={index}
            openViewer={openViewer}
            index={index}
            image={photo}
            setCurrentImage={setCurrentImage}
          />
        ))}
      </div>
    </>
  );
};
export default Photos;
