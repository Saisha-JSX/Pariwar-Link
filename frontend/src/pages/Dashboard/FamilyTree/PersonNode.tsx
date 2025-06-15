import React, { useState } from "react";
import styles from "./PersonNode.module.scss";

const PersonNode = ({ person, onAddRelative }) => {
  const [hovered, setHovered] = useState(false);
  const imageSrc =
    person.photo || "https://via.placeholder.com/60x80?text=Profile";

  return (
    <div
      className={styles.personNode}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
      <div className={styles.topRow}>
        <img src={imageSrc} alt={person.name} className={styles.photo} />
        <div className={styles.infoBlock}>
          <h3 className={styles.name}>{person.name}</h3>
          <p className={styles.status}>{person.status}</p>
          <p className={styles.dob}>{person.dob}</p>
        </div>
        {hovered && (
          <button
            className={styles.addButton}
            onClick={() => onAddRelative(person)}
            aria-label="Add relative"
            title="Add relative"
          >
            ➕
          </button>
        )}
      </div>
    </div>
  );
};

export default PersonNode;
