import { useState, useCallback } from "react";
import { IMAGES } from "./mockData";
import "./styles.css";

export default function App() {
  const [selectedImageIndex, setSelectedImageIndex] = useState(0);

  const handleLeftArrowClick = useCallback(() => {
    setSelectedImageIndex(
      (selectedImageIndex - 1 + IMAGES.length) % IMAGES.length,
    );
  }, [selectedImageIndex]);

  const handleRightArrowClick = useCallback(() => {
    setSelectedImageIndex((selectedImageIndex + 1) % IMAGES.length);
  }, [selectedImageIndex]);

  const handleImageSelect = useCallback((imageIndex) => {
    setSelectedImageIndex(imageIndex);
  }, []);

  return (
    <div className="parent-container">
      <div className="row-container">
        <img
          src={IMAGES[selectedImageIndex].image_url}
          className="selected-image"
          alt="selected"
        />
        <div onClick={handleLeftArrowClick} className="arrow-left-container">
          &lt;
        </div>
        <div onClick={handleRightArrowClick} className="arrow-right-container">
          &gt;
        </div>
      </div>
      <div className="image-options-parent-container">
        {IMAGES.map((image, imageIndex) => (
          <div
            key={image.caption}
            className="image-options-container"
            style={{ width: `${100 / IMAGES.length}%` }}
            onClick={() => handleImageSelect(imageIndex)}
          >
            <img
              src={image.image_url}
              className={
                imageIndex === selectedImageIndex
                  ? "image-options selected-image-border"
                  : "image-options"
              }
              alt="options"
            />
          </div>
        ))}
      </div>
    </div>
  );
}
