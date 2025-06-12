import React, { useState } from 'react';
import styles from './Profile.module.scss';
import { FaUser, FaPhone, FaInfoCircle } from 'react-icons/fa';

const Profile: React.FC = () => {
  const [activeTab, setActiveTab] = useState<'basic' | 'contact' | 'additional'>('basic');

  const renderContent = () => {
    switch (activeTab) {
      case 'basic':
        return (
          <div className={styles.sectionContent}>
            <button className={styles.editButton}>Edit</button>
            <div className={styles.fieldGrid}>
              <div className={styles.field}>
                <div className={styles.label}>First Name</div>
                <div className={styles.value}>John</div>
              </div>
              <div className={styles.field}>
                <div className={styles.label}>Middle Name</div>
                <div className={styles.value}>A.</div>
              </div>
              <div className={styles.field}>
                <div className={styles.label}>Last Name</div>
                <div className={styles.value}>Doe</div>
              </div>
              <div className={styles.field}>
                <div className={styles.label}>Gender</div>
                <div className={styles.value}>Male</div>
              </div>
              <div className={styles.field}>
                <div className={styles.label}>Nickname</div>
                <div className={styles.value}>Johnny</div>
              </div>
              <div className={styles.field}>
                <div className={styles.label}>Date of Birth</div>
                <div className={styles.value}>1990-01-01</div>
              </div>
              <div className={styles.field} style={{ gridColumn: 'span 2' }}>
                <div className={styles.label}>Bio</div>
                <div className={styles.value}>Enthusiastic developer and lifelong learner.</div>
              </div>
            </div>
          </div>
        );
      case 'contact':
        return (
          <div className={styles.sectionContent}>
            <button className={styles.editButton}>Edit</button>
            <div className={styles.fieldGrid}>
              <div className={styles.field}>
                <div className={styles.label}>Email</div>
                <div className={styles.value}>john@example.com</div>
              </div>
              <div className={styles.field}>
                <div className={styles.label}>Phone</div>
                <div className={styles.value}>+123456789</div>
              </div>
              <div className={styles.field} style={{ gridColumn: 'span 2' }}>
                <div className={styles.label}>Address</div>
                <div className={styles.value}>123 Main St, Cityville</div>
              </div>
            </div>
          </div>
        );
      case 'additional':
        return (
          <div className={styles.sectionContent}>
            <button className={styles.editButton}>Edit</button>
            <div className={styles.fieldGrid}>
              <div className={styles.field}>
                <div className={styles.label}>Hobbies</div>
                <div className={styles.value}>
                  {['Reading', 'Coding', 'Hiking'].map((hobby) => (
                    <span key={hobby} className={styles.valueTag}>
                      {hobby}
                    </span>
                  ))}
                </div>
              </div>
              <div className={styles.field}>
                <div className={styles.label}>Skills</div>
                <div className={styles.value}>
                  {['React', 'Node.js', 'Python'].map((skill) => (
                    <span key={skill} className={styles.valueTag}>
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>
        );
      default:
        return null;
    }
  };

  return (
    <div className={styles.profilePage}>
      <div className={styles.profileHeader}>
        <img
          src="https://randomuser.me/api/portraits/men/75.jpg"
          alt="Profile"
          className={styles.profileImage}
        />
        <h2 className={styles.profileName}>John Doe</h2>
      </div>

      <div className={styles.profileBody}>
        <aside className={styles.sidebar}>
          <ul className={styles.sidebarList}>
            <li
              onClick={() => setActiveTab('basic')}
              className={`${styles.sidebarItem} ${activeTab === 'basic' ? styles.active : ''}`}
            >
              <FaUser /> <span className={styles.sidebarText}>Basic Information</span>
            </li>
            <li
              onClick={() => setActiveTab('contact')}
              className={`${styles.sidebarItem} ${activeTab === 'contact' ? styles.active : ''}`}
            >
              <FaPhone /> <span className={styles.sidebarText}>Contact</span>
            </li>
            <li
              onClick={() => setActiveTab('additional')}
              className={`${styles.sidebarItem} ${activeTab === 'additional' ? styles.active : ''}`}
            >
              <FaInfoCircle /> <span className={styles.sidebarText}>Additional</span>
            </li>
          </ul>
        </aside>

        <section className={styles.detailsSection}>{renderContent()}</section>
      </div>
    </div>
  );
};

export default Profile;
