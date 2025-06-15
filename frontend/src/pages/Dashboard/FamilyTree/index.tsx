import React, { useState, useRef } from "react";
import PersonNode from "./PersonNode";
import AddRelativeModal from "./AddRelativeModal";
import styles from "./FamilyTree.module.scss";
import { initialFamily } from "./familyData";

const FamilyTree: React.FC = () => {
  const [family] = useState(initialFamily);
  const [showModal, setShowModal] = useState(false);
  const [selectedPerson, setSelectedPerson] = useState<typeof initialFamily | null>(null);

  const [zoom, setZoom] = useState(1);
  const [pan, setPan] = useState({ x: 0, y: 0 });
  const containerRef = useRef<HTMLDivElement>(null);

  const isDragging = useRef(false);
  const lastMousePos = useRef<{ x: number; y: number } | null>(null);

  const handleAddRelative = (person: typeof initialFamily) => {
    setSelectedPerson(person);
    setShowModal(true);
  };

  const handleModalClose = () => {
    setShowModal(false);
    setSelectedPerson(null);
  };

  const handleWheel = (e: React.WheelEvent) => {
    e.preventDefault();
    e.stopPropagation();

    if (!containerRef.current) return;

    const rect = containerRef.current.getBoundingClientRect();

    const offsetX = e.clientX - rect.left;
    const offsetY = e.clientY - rect.top;

    const zoomStep = 0.1;
    let newZoom = zoom - e.deltaY * zoomStep * 0.01;
    newZoom = Math.min(Math.max(newZoom, 0.5), 3);

    const dx = (offsetX - pan.x) / zoom;
    const dy = (offsetY - pan.y) / zoom;

    const newPanX = offsetX - dx * newZoom;
    const newPanY = offsetY - dy * newZoom;

    setZoom(newZoom);
    setPan({ x: newPanX, y: newPanY });
  };

  const handleMouseDown = (e: React.MouseEvent) => {
    e.preventDefault();
    e.stopPropagation();
    isDragging.current = true;
    lastMousePos.current = { x: e.clientX, y: e.clientY };
  };

  const handleMouseMove = (e: React.MouseEvent) => {
    if (!isDragging.current || !lastMousePos.current) return;

    e.preventDefault();
    e.stopPropagation();

    const dx = e.clientX - lastMousePos.current.x;
    const dy = e.clientY - lastMousePos.current.y;

    setPan((prev) => ({
      x: prev.x + dx,
      y: prev.y + dy,
    }));

    lastMousePos.current = { x: e.clientX, y: e.clientY };
  };

  const handleMouseUp = (e: React.MouseEvent) => {
    e.preventDefault();
    e.stopPropagation();

    isDragging.current = false;
    lastMousePos.current = null;
  };

  const handleMouseLeave = (e: React.MouseEvent) => {
    e.preventDefault();
    e.stopPropagation();

    isDragging.current = false;
    lastMousePos.current = null;
  };

  return (
    <div className={styles.familyTreeContainer}>
      <div
        className={styles.zoomPanContainer}
        ref={containerRef}
        onWheel={handleWheel}
        onMouseDown={handleMouseDown}
        onMouseMove={handleMouseMove}
        onMouseUp={handleMouseUp}
        onMouseLeave={handleMouseLeave}
      >
        <div
          className={styles.tree}
          style={{
            transform: `translate(${pan.x}px, ${pan.y}px) scale(${zoom})`,
            transformOrigin: "0 0",
            position: "absolute",
            top: 0,
            left: 0,
          }}
        >
          <PersonNode person={family} onAddRelative={handleAddRelative} />
          <div className={styles.parentContainer}>
            {family.parents.map((parent) => (
              <PersonNode
                key={parent.id}
                person={parent}
                onAddRelative={handleAddRelative}
              />
            ))}
          </div>
        </div>
      </div>

      {showModal && selectedPerson && (
        <AddRelativeModal person={selectedPerson} onClose={handleModalClose} />
      )}
    </div>
  );
};

export default FamilyTree;
