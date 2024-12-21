'use client';
import React, { useState } from "react";

const ClickMoveZones = () => {
  // State for each zone
  const [zone1Items, setZone1Items] = useState(["بسم  ", "الرحيم ", "Item 3", "Item 4", "Item 5"]);
  const [zone2Items, setZone2Items] = useState([]);

  // Function to handle item click
  const handleItemClick = (item, fromZone) => {
    if (fromZone === "zone1") {
      // Move item from Zone 1 to Zone 2
      setZone1Items((prev) => prev.filter((i) => i !== item)); // Remove from Zone 1
      setZone2Items((prev) => [...prev, item]); // Add to Zone 2
    } else if (fromZone === "zone2") {
      // Move item from Zone 2 to Zone 1
      setZone2Items((prev) => prev.filter((i) => i !== item)); // Remove from Zone 2
      setZone1Items((prev) => [...prev, item]); // Add to Zone 1
    }
  };

  return (
    <div>
      <h3>Zone 1</h3>
      <div style={styles.zone}>
        {zone1Items.map((item) => (
          <div
            key={item}
            style={styles.item}
            onClick={() => handleItemClick(item, "zone1")}
          >
            {item}
          </div>
        ))}
      </div>

      <h3>Zone 2</h3>
      <div style={styles.zone}>
        {zone2Items.map((item) => (
          <div
            key={item}
            style={styles.item}
            onClick={() => handleItemClick(item, "zone2")}
          >
            {item}
          </div>
        ))}
      </div>
    </div>
  );
};

const styles = {
  zone: {
    display: "flex",
    gap: "10px",
    padding: "10px",
    border: "2px dashed gray",
    minHeight: "50px",
    alignItems: "center",
  },
  item: {
    padding: "10px 20px",
    background: "#007BFF",
    color: "white",
    cursor: "pointer",
    borderRadius: "5px",
  },
};

export default ClickMoveZones;
