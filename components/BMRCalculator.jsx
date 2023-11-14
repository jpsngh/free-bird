// BMRCalculator.js
"use client"
import React, { useState } from 'react';

const BMRCalculator = ({ onSubmit }) => {
  const [age, setAge] = useState('');
  const [weight, setWeight] = useState('');
  const [height, setHeight] = useState('');
  const [gender, setGender] = useState('male');
  const [activityLevel, setActivityLevel] = useState('sedentary');

  const handleSubmit = (e) => {
    e.preventDefault();
    // Perform BMR calculation here based on the provided inputs
    const bmrData = {
      age,
      weight,
      height,
      gender,
      activityLevel,
    };

    // You can perform additional validation and calculations as needed

    onSubmit(bmrData);
  };

  return (
    <form onSubmit={handleSubmit} className="bg-white p-6 rounded-lg shadow-md">
      <h2 className="text-2xl font-semibold mb-4">BMR Calculator</h2>
      {/* Add your input fields for age, weight, height, gender, and activity level */}
      {/* Example for age */}
      <div className="mb-4">
        <label htmlFor="age" className="block text-sm font-medium text-gray-600">
          Age
        </label>
        <input
          type="number"
          id="age"
          value={age}
          onChange={(e) => setAge(e.target.value)}
          className="mt-1 p-2 w-full border rounded-md"
        />
      </div>
      <div className="mb-4">
        <label htmlFor="weight" className="block text-sm font-medium text-gray-600">
          Weight
        </label>
        <input
          type="number"
          id="age"
          value={weight}
          placeholder='Weight in kgs'
          onChange={(e) => setWeight(e.target.value)}
          className="mt-1 p-2 w-full border rounded-md"
        />
      </div>
      <div className="mb-4">
        <label htmlFor="height" className="block text-sm font-medium text-gray-600">
          Height
        </label>
        <input
          type="number"
          id="age"
          placeholder='height in cms'
          value={height}
          onChange={(e) => setHeight(e.target.value)}
          className="mt-1 p-2 w-full border rounded-md"
        />
      </div>
      <div className="mb-4">
        <label htmlFor="gender" className="block text-sm font-medium text-gray-600">
          Gender
        </label>
       <select value={gender} onChange={(e)=>setGender(e.target.value)}>
        <option value={"male"}> Male </option>
        <option value={"female"}> Female </option>
       </select>
      </div>
      <div className="mb-4">
        <label htmlFor="activity-level" className="block text-sm font-medium text-gray-600">
          Activity Level
        </label>
       <select value={activityLevel} onChange={(e)=>setActivityLevel(e.target.value)}>
       <option value={"sluggish"}> No exercise </option>
        <option value={"moderate"}> Moderate,Exercise 2-3 days </option>
        <option value={"active"}> Active, Exercise 5-6 days </option>
       </select>
      </div>

      {/* Add similar input fields for weight, height, gender, and activity level */}

      <button
        type="submit"
        className="bg-orange-500 text-white py-2 px-4 rounded-md hover:bg-orange-600"
      >
        Calculate BMR
      </button>
    </form>
  );
};

export default BMRCalculator;
