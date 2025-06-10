import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Background from '../../assets/Bg/Background';
import styles from './auth.module.scss';
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const ProfileSetup: React.FC = () => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    name: '',
    dob: '',
    gender: '',
    motherName: '',
    fatherName: '',
  });

  const [errors, setErrors] = useState<Record<string, string>>({});
  const [loading, setLoading] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const validate = () => {
    const newErrors: Record<string, string> = {};

    if (!formData.name.trim()) newErrors.name = 'Full name is required';
    if (!formData.dob) newErrors.dob = 'Date of birth is required';
    if (!formData.gender) newErrors.gender = 'Gender is required';
    if (!formData.motherName.trim()) newErrors.motherName = 'Mother\'s name is required';
    if (!formData.fatherName.trim()) newErrors.fatherName = 'Father\'s name is required';

    return newErrors;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const validationErrors = validate();

    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
      Object.values(validationErrors).forEach((err) => toast.error(err));
      return;
    }

    setLoading(true);
    setTimeout(() => {
      setLoading(false);
      toast.success('Profile setup complete!');
      navigate('/dashboard');
    }, 1500);
  };

  return (
    <div className={styles.container}>
      <Background />
      <form className={styles.loginForm} onSubmit={handleSubmit}>
        <img src="/logo.svg" alt="App Logo" className={styles.logo} />
        <h1 className={styles.heading}>Complete Your Profile</h1>
        <p className={styles.subheading}>Just a few more details to get started.</p>

        {/* Name */}
        <label htmlFor="name" className={styles.label}>Full Name</label>
        <input
          type="text"
          id="name"
          name="name"
          className={styles.input}
          value={formData.name}
          onChange={handleChange}
          placeholder="Your full name"
          required
        />

        {/* DOB */}
        <label htmlFor="dob" className={styles.label}>Date of Birth</label>
        <input
          type="date"
          id="dob"
          name="dob"
          className={styles.input}
          value={formData.dob}
          onChange={handleChange}
          required
        />

        {/* Gender */}
        <label htmlFor="gender" className={styles.label}>Gender</label>
        <select
          id="gender"
          name="gender"
          className={styles.input}
          value={formData.gender}
          onChange={handleChange}
          required
        >
          <option value="">Select Gender</option>
          <option value="male">Male</option>
          <option value="female">Female</option>
          <option value="other">Other</option>
        </select>

        {/* Mother's Name */}
        <label htmlFor="motherName" className={styles.label}>Mother's Name</label>
        <input
          type="text"
          id="motherName"
          name="motherName"
          className={styles.input}
          value={formData.motherName}
          onChange={handleChange}
          placeholder="Your mother's full name"
          required
        />

        {/* Father's Name */}
        <label htmlFor="fatherName" className={styles.label}>Father's Name</label>
        <input
          type="text"
          id="fatherName"
          name="fatherName"
          className={styles.input}
          value={formData.fatherName}
          onChange={handleChange}
          placeholder="Your father's full name"
          required
        />

        <button type="submit" className={styles.submitBtn} disabled={loading}>
          {loading ? 'Saving...' : 'Finish Setup'}
        </button>
      </form>

      <ToastContainer
        position="top-right"
        autoClose={3000}
        hideProgressBar
        closeButton={false}
        newestOnTop={false}
        closeOnClick
        pauseOnFocusLoss
        draggable
        pauseOnHover
      />
    </div>
  );
};

export default ProfileSetup;
