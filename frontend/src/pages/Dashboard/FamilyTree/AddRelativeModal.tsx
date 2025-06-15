import React, { useState } from "react";
import styles from "./AddRelativeModal.module.scss";

interface Person {
  id: string;
  name: string;
  status: string;
  dob?: string;
  [key: string]: any;
}

interface AddRelativeModalProps {
  person: Person;
  onClose: () => void;
}

const AddRelativeModal: React.FC<AddRelativeModalProps> = ({ person, onClose }) => {
  const [status, setStatus] = useState("Alive");

  return (
    <div
      className={styles.modalBackdrop}
      role="dialog"
      aria-modal="true"
      aria-labelledby="modalTitle"
      tabIndex={-1}
    >
      <div className={styles.modalContent}>
        {/* Close button */}
        <button
          aria-label="Close modal"
          onClick={onClose}
          className={styles.closeButton}
          type="button"
        >
          &times;
        </button>

        <form className={styles.form}>
          <label className={styles.label}>
            Select Relation:
            <select name="relation" className={styles.select}>
              <option value="">-- Select Relation --</option>
              <option value="Father">Father</option>
              <option value="Mother">Mother</option>
              <option value="Brother">Brother</option>
              <option value="Sister">Sister</option>
              <option value="Uncle">Uncle</option>
              <option value="Aunt">Aunt</option>
              <option value="Son">Son</option>
              <option value="Daughter">Daughter</option>
              <option value="Cousin">Cousin</option>
              <option value="Grandfather">Grandfather</option>
              <option value="Grandmother">Grandmother</option>
            </select>
          </label>

          <label className={styles.label}>
            First Name:
            <input type="text" name="firstName" className={styles.input} />
          </label>

          <label className={styles.label}>
            Middle Name:
            <input type="text" name="middleName" className={styles.input} />
          </label>

          <label className={styles.label}>
            Last Name:
            <input type="text" name="lastName" className={styles.input} />
          </label>

          <label className={styles.label}>
            Age:
            <input type="number" name="age" className={styles.input} />
          </label>

          {/* Toggle for Living Status */}
          <div className={styles.toggleWrapper}>
            <span className={styles.toggleLabel}>Living Status:</span>

            <span className={styles.toggleTextLeft}>Alive</span>

            <div
              className={`${styles.toggleSwitch} ${
                status === "Alive" ? styles.active : ""
              }`}
              onClick={() => setStatus(status === "Alive" ? "Demised" : "Alive")}
              role="switch"
              aria-checked={status === "Alive"}
              tabIndex={0}
              onKeyDown={(e) => {
                if (e.key === "Enter" || e.key === " ") {
                  e.preventDefault();
                  setStatus(status === "Alive" ? "Demised" : "Alive");
                }
              }}
            >
              <div className={styles.toggleKnob} />
            </div>

            <span className={styles.toggleTextRight}>Demised</span>

            {/* Hidden input to capture value in form */}
            <input type="hidden" name="status" value={status} />
          </div>

          <div className={styles.modalButtons}>
            <button
              type="button"
              onClick={onClose}
              className={styles.btnCancel}
            >
              Cancel
            </button>
            <button type="submit" className={styles.btnSubmit}>
              Add Member
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default AddRelativeModal;
