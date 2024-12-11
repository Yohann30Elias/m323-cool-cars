"use client";

import { useState, useEffect } from "react";
import CarForm from "./carform/page";
import './page.css';

export default function Home() {
  const [cars, setCars] = useState([]);
  const [filteredCars, setFilteredCars] = useState([]);
  const [publicCars, setPublicCars] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [carsPerPage] = useState(5);
  const [searchTerm, setSearchTerm] = useState("");
  const [filterBrand, setFilterBrand] = useState("");
  const [showForm, setShowForm] = useState(false);
  const brandSelectElement = document.getElementById('brandSelect');
  const modelSelectElement = document.getElementById('modelSelect');
  const horsepowerSelectElement = document.getElementById('horsepowerSelect');

  useEffect(() => {
    buttonHandler();
  }, []);

  function buttonHandler() {
    fetch("http://localhost:8080/cars")
        .then(response => response.json())
        .then(data => {
          setCars(data);
          setFilteredCars(data);
          setPublicCars(data);
        });
  }

  function selectHandler(event) {
    const selection = event.target.value;
    let sortedCars = [...filteredCars];

    switch (selection) {
      case "brandAsc":
        sortedCars.sort((c1, c2) => c1.brand.localeCompare(c2.brand));
        modelSelectElement.setValue("empty");
        horsepowerSelectElement.setValue("empty");
        break;
      case "brandDesc":
        sortedCars.sort((c1, c2) => c2.brand.localeCompare(c1.brand));
        modelSelectElement.setValue("empty");
        horsepowerSelectElement.setValue("empty");
        break;
      case "modelAsc":
        sortedCars.sort((c1, c2) => c1.model.localeCompare(c2.model));
        brandSelectElement.setValue("empty");
        horsepowerSelectElement.setValue("empty");
        break;
      case "modelDesc":
        sortedCars.sort((c1, c2) => c2.model.localeCompare(c1.model));
        brandSelectElement.setValue("empty");
        horsepowerSelectElement.setValue("empty");
        break;
      case "powerAsc":
        sortedCars.sort((c1, c2) => c1.horsePower - c2.horsePower);
        modelSelectElement.setValue("empty");
        brandSelectElement.setValue("empty");
        break;
      case "powerDesc":
        sortedCars.sort((c1, c2) => c2.horsePower - c1.horsePower);
        modelSelectElement.setValue("empty");
        brandSelectElement.setValue("empty");
        break;
      default:
        break;
    }

    setPublicCars(sortedCars);
  }

  function handleSearch(event) {
    const searchTerm = event.target.value.toLowerCase();
    setSearchTerm(searchTerm);
    filterCars(searchTerm, filterBrand);
  }

  function handleFilterBrand(event) {
    const brand = event.target.value;
    setFilterBrand(brand);
    filterCars(searchTerm, brand);
  }

  function filterCars(search, brand) {
    let filtered = cars.filter(car =>
        car.brand.toLowerCase().includes(search) ||
        car.model.toLowerCase().includes(search) ||
        car.horsePower.toString().includes(search)
    );

    if (brand) {
      filtered = filtered.filter(car => car.brand === brand);
    }

    setFilteredCars(filtered);
    setCurrentPage(1);

    setPublicCars(filtered);
  }

  const indexOfLastCar = currentPage * carsPerPage;
  const indexOfFirstCar = indexOfLastCar - carsPerPage;
  const currentCars = publicCars.slice(indexOfFirstCar, indexOfLastCar);

  const paginate = (pageNumber) => setCurrentPage(pageNumber);

  const uniqueBrands = [...new Set(cars.map(car => car.brand))];

  return (
      <div className="App">
        <h1>Cool Cars List</h1>
        <br/>
        <input
            type="text"
            placeholder="Search..."
            onChange={handleSearch}
        />
        <select onChange={handleFilterBrand}>
          <option value="">All Brands</option>
          {uniqueBrands.map(brand => (
              <option key={brand} value={brand}>{brand}</option>
          ))}
        </select>
        <table>
          <thead>
          <tr>
            <th>
              Brand
              <select id='brandSelect' onChange={(event) => selectHandler(event)}>
                <option value="empty">Standard</option>
                <option value="brandAsc">Aufsteigend</option>
                <option value="brandDesc">Absteigend</option>
              </select>
            </th>
            <th>
              Model
              <select id='modelSelect' onChange={(event) => selectHandler(event)}>
                <option value="empty">Standard</option>
                <option value="modelAsc">Aufsteigend</option>
                <option value="modelDesc">Absteigend</option>
              </select>
            </th>
            <th>
              Horsepower
              <select id='horsepowerSelect' onChange={(event) => selectHandler(event)}>
                <option value="empty">Standard</option>
                <option value="powerAsc">Aufsteigend</option>
                <option value="powerDesc">Absteigend</option>
              </select>
            </th>
          </tr>
          </thead>
          <tbody>
          {currentCars.map((car, index) =>
              <tr key={index}>
                <td>{car.brand}</td>
                <td>{car.model}</td>
                <td>{car.horsePower}</td>
              </tr>
          )}
          </tbody>
        </table>
        <div>
          {Array.from({length: Math.ceil(publicCars.length / carsPerPage)}, (_, i) => (
              <button key={i} onClick={() => paginate(i + 1)}>
                {i + 1}
              </button>
          ))}
        </div>
        <button onClick={() => setShowForm(true)}>Add a New Car</button>
        <button onClick={buttonHandler}>load new cars</button>
        {showForm && (
            <div className="overlay">
              <CarForm onClose={() => setShowForm(false)}/>
            </div>
        )}
      </div>
  );
}