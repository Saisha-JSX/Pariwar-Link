import React, { useState } from 'react';
import styles from './Profile.module.scss';
import { FaUser, FaPhoneAlt , FaInfoCircle } from 'react-icons/fa';

const Profile: React.FC = () => {
  const [activeTab, setActiveTab] = useState<'basic' | 'contact' | 'additional'>('basic');
  const [editMode, setEditMode] = useState(false);
  const [profileData, setProfileData] = useState({
    firstName: 'John',
    middleName: 'A.',
    lastName: 'Doe',
    gender: 'Male',
    nickname: 'Johnny',
    dob: '1990-01-01',
    bio: 'Enthusiastic developer and lifelong learner.',
    email: 'john@example.com',
    phone: '+123456789',
    address: '123 Main St, Cityville',
    hobbies: ['Reading', 'Coding', 'Hiking'],
    skills: ['React', 'Node.js', 'Python'],
  });

  const handleChange = (field: string, value: any) => {
    setProfileData((prev) => ({ ...prev, [field]: value }));
  };

  const handleListChange = (field: 'hobbies' | 'skills', value: string) => {
    setProfileData((prev) => ({
      ...prev,
      [field]: value.split(',').map((v) => v.trim()),
    }));
  };

  const renderContent = () => {
    switch (activeTab) {
      case 'basic':
        return (
          <div className={styles.sectionContent}>
            {!editMode && (
              <button className={styles.editButton} onClick={() => setEditMode(true)}>
                Edit
              </button>
            )}
            <div className={styles.fieldGrid}>
              {['firstName', 'middleName', 'lastName', 'gender', 'nickname', 'dob'].map((key) => (
                <div className={styles.field} key={key}>
                  <div className={styles.label}>{key.replace(/^\w/, (c) => c.toUpperCase())}</div>
                  {editMode ? (
                    <input
                      className={styles.input}
                      value={(profileData as any)[key]}
                      onChange={(e) => handleChange(key, e.target.value)}
                    />
                  ) : (
                    <div className={styles.value}>{(profileData as any)[key]}</div>
                  )}
                </div>
              ))}
              <div className={styles.field} style={{ gridColumn: 'span 2' }}>
                <div className={styles.label}>Bio</div>
                {editMode ? (
                  <textarea
                    className={styles.textarea}
                    value={profileData.bio}
                    onChange={(e) => handleChange('bio', e.target.value)}
                  />
                ) : (
                  <div className={styles.value}>{profileData.bio}</div>
                )}
              </div>
            </div>
            {editMode && (
              <div className={styles.buttonGroup}>
                <button className={styles.saveButton} onClick={() => setEditMode(false)}>
                  Save
                </button>
                <button className={styles.cancelButton} onClick={() => setEditMode(false)}>
                  Cancel
                </button>
              </div>
            )}
          </div>
        );
      case 'contact':
        return (
          <div className={styles.sectionContent}>
            {!editMode && (
              <button className={styles.editButton} onClick={() => setEditMode(true)}>
                Edit
              </button>
            )}
            <div className={styles.fieldGrid}>
              {['email', 'phone'].map((key) => (
                <div className={styles.field} key={key}>
                  <div className={styles.label}>{key.replace(/^\w/, (c) => c.toUpperCase())}</div>
                  {editMode ? (
                    <input
                      className={styles.input}
                      value={(profileData as any)[key]}
                      onChange={(e) => handleChange(key, e.target.value)}
                    />
                  ) : (
                    <div className={styles.value}>{(profileData as any)[key]}</div>
                  )}
                </div>
              ))}
              <div className={styles.field} style={{ gridColumn: 'span 2' }}>
                <div className={styles.label}>Address</div>
                {editMode ? (
                  <input
                    className={styles.input}
                    value={profileData.address}
                    onChange={(e) => handleChange('address', e.target.value)}
                  />
                ) : (
                  <div className={styles.value}>{profileData.address}</div>
                )}
              </div>
            </div>
            {editMode && (
              <div className={styles.buttonGroup}>
                <button className={styles.saveButton} onClick={() => setEditMode(false)}>
                  Save
                </button>
                <button className={styles.cancelButton} onClick={() => setEditMode(false)}>
                  Cancel
                </button>
              </div>
            )}
          </div>
        );
      case 'additional':
        return (
          <div className={styles.sectionContent}>
            {!editMode && (
              <button className={styles.editButton} onClick={() => setEditMode(true)}>
                Edit
              </button>
            )}
            <div className={styles.fieldGrid}>
              <div className={styles.field}>
                <div className={styles.label}>Hobbies</div>
                {editMode ? (
                  <input
                    className={styles.input}
                    value={profileData.hobbies.join(', ')}
                    onChange={(e) => handleListChange('hobbies', e.target.value)}
                  />
                ) : (
                  <div className={styles.value}>
                    {profileData.hobbies.map((hobby) => (
                      <span key={hobby} className={styles.valueTag}>
                        {hobby}
                      </span>
                    ))}
                  </div>
                )}
              </div>
              <div className={styles.field}>
                <div className={styles.label}>Skills</div>
                {editMode ? (
                  <input
                    className={styles.input}
                    value={profileData.skills.join(', ')}
                    onChange={(e) => handleListChange('skills', e.target.value)}
                  />
                ) : (
                  <div className={styles.value}>
                    {profileData.skills.map((skill) => (
                      <span key={skill} className={styles.valueTag}>
                        {skill}
                      </span>
                    ))}
                  </div>
                )}
              </div>
            </div>
            {editMode && (
              <div className={styles.buttonGroup}>
                <button className={styles.saveButton} onClick={() => setEditMode(false)}>
                  Save
                </button>
                <button className={styles.cancelButton} onClick={() => setEditMode(false)}>
                  Cancel
                </button>
              </div>
            )}
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
              <FaPhoneAlt  /> <span className={styles.sidebarText}>Contact</span>
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
