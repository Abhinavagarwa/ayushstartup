import React, { useEffect, useState } from 'react';
import Navbar from '../components/navbar/Navbar';
import './Application.css'; 

function Application() {
  const current_theme = localStorage.getItem('current_theme');
  const [theme, setTheme] = useState(current_theme ? current_theme : 'light');

  // Track which page of the form the user is on
  const [page, setPage] = useState(1);

  // Store form data
  const [formData, setFormData] = useState({
    startupName: '',
    founderName: '',
    email: '',
    phoneNumber: '',
    website: '',
    description: '',
    ayushDomain: '',
    dateOfIncorporation: '',
    address: '',
    businessModel: '',
    uploadDocuments: null,
  });

  // Handle input changes
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  // Handle file input changes
  const handleFileChange = (e) => {
    setFormData({
      ...formData,
      uploadDocuments: e.target.files[0],
    });
  };

  // Save theme to localStorage
  useEffect(() => {
    localStorage.setItem('current_theme', theme);
  }, [theme]);

  // Function to move to next page
  const nextPage = () => setPage(page + 1);

  // Function to move to previous page
  const prevPage = () => setPage(page - 1);

  // Page 1: Basic Information
  const Page1 = () => (
    <div>
      <h2>Basic Information</h2>
      <label>Startup Name*</label>
      <input type="text" name="startupName" value={formData.startupName} onChange={handleChange} />

      <label>Founder Name*</label>
      <input type="text" name="founderName" value={formData.founderName} onChange={handleChange} />

      <label>Email Address*</label>
      <input type="email" name="email" value={formData.email} onChange={handleChange} />

      <label>Phone Number*</label>
      <input type="tel" name="phoneNumber" value={formData.phoneNumber} onChange={handleChange} />

      <label>Website</label>
      <input type="url" name="website" value={formData.website} onChange={handleChange} />

      <button type="button" onClick={nextPage}>Next</button>
    </div>
  );

  // Page 2: Business Information
  const Page2 = () => (
    <div>
      <h2>Business Information</h2>
      <label>Description of your Startup*</label>
      <textarea name="description" value={formData.description} onChange={handleChange} />

      <label>AYUSH Domain*</label>
      <select name="ayushDomain" value={formData.ayushDomain} onChange={handleChange}>
        <option value="">Select Domain</option>
        <option value="Ayurveda">Ayurveda</option>
        <option value="Yoga">Yoga</option>
        <option value="Naturopathy">Naturopathy</option>
        <option value="Unani">Unani</option>
        <option value="Siddha">Siddha</option>
        <option value="Homeopathy">Homeopathy</option>
      </select>

      <label>Date of Incorporation*</label>
      <input type="date" name="dateOfIncorporation" value={formData.dateOfIncorporation} onChange={handleChange} />

      <label>Business Model*</label>
      <select name="businessModel" value={formData.businessModel} onChange={handleChange}>
        <option value="">Select Model</option>
        <option value="B2B">B2B</option>
        <option value="B2C">B2C</option>
        <option value="D2C">D2C</option>
      </select>

      <button type="button" onClick={prevPage}>Previous</button>
      <button type="button" onClick={nextPage}>Next</button>
    </div>
  );

  // Page 3: Document Upload
  const Page3 = () => (
    <div>
      <h2>Upload Documents</h2>
      <label>Upload Business Documents*</label>
      <input type="file" name="uploadDocuments" onChange={handleFileChange} />

      <button type="button" onClick={prevPage}>Previous</button>
      <button type="submit">Submit</button>
    </div>
  );

  // Submit the form data
  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission logic here
    console.log(formData);
  };

  return (
    <div className={`container ${theme}`}>
      <Navbar theme={theme} setTheme={setTheme} />
      
      <form onSubmit={handleSubmit}>
        {/* Conditional rendering of pages */}
        {page === 1 && <Page1 />}
        {page === 2 && <Page2 />}
        {page === 3 && <Page3 />}
      </form>
    </div>
  );
}

export default Application;
