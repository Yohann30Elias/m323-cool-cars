"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";

export default function CarForm({ onClose }) {
  const [brand, setBrand] = useState("");
  const [model, setModel] = useState("");
  const [horsePower, setHorsePower] = useState("");
  const router = useRouter();

  const handleSubmit = async (e) => {
    e.preventDefault();
    const carData = { brand, model, horsePower: parseInt(horsePower, 10) };

    try {
      const response = await fetch("http://localhost:8080/cars", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(carData),
      });

      if (response.ok) {
        alert("Car added successfully!");
        router.push("/"); // Redirect to the home page
      } else {
        alert("Failed to add car. Please try again.");
      }
    } catch (error) {
      console.error("Error:", error);
      alert("An error occurred. Please try again.");
    }
  };

  return (
      <div className="overlay">
        <div className="form-container">
          <button className="close-btn" onClick={onClose}>
            ×
          </button>
          <h1>Car Form</h1>
          <h2>Add a Car!</h2>
          <form onSubmit={handleSubmit}>
            <div className="form-group">
              <label htmlFor="brand">Brand:</label>
              <input
                  type="text"
                  id="brand"
                  value={brand}
                  onChange={(e) => setBrand(e.target.value)}
                  required
              />
            </div>
            <div className="form-group">
              <label htmlFor="model">Model:</label>
              <input
                  type="text"
                  id="model"
                  value={model}
                  onChange={(e) => setModel(e.target.value)}
                  required
              />
            </div>
            <div className="form-group">
              <label htmlFor="horsePower">Horsepower:</label>
              <input
                  type="number"
                  id="horsePower"
                  value={horsePower}
                  onChange={(e) => setHorsePower(e.target.value)}
                  required
              />
            </div>
            <button type="submit">Add Car</button>
          </form>
        </div>
      </div>
  );
}
