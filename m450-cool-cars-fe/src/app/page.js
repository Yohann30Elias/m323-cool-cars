"use client"

import { useState, useEffect } from "react";
import './page.css';
import Link from "next/link";

export default function Home() {
  const [cars, setCars] = useState([]);
  const [filteredCars, setFilteredCars] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [carsPerPage] = useState(10);
  const [searchTerm, setSearchTerm] = useState("");
  const [filterBrand, setFilterBrand] = useState("");

  useEffect(() => {
    buttonHandler();
  }, []);

  function buttonHandler() {
    fetch("http://localhost:8080/cars")
      .then(response => response.json())
      .then(data => {
        setCars(data);
        setFilteredCars(data);
      });
  }

  function selectHandler(event) {
    const selection = event.target.value;
    let sortedCars = [...filteredCars];

    switch (selection) {
      case "brandAsc":
        sortedCars.sort((c1, c2) => c1.brand.localeCompare(c2.brand));
        break;
      case "brandDesc":
        sortedCars.sort((c1, c2) => c2.brand.localeCompare(c1.brand));
        break;
      case "modelAsc":
        sortedCars.sort((c1, c2) => c1.model.localeCompare(c2.model));
        break;
      case "modelDesc":
        sortedCars.sort((c1, c2) => c2.model.localeCompare(c1.model));
        break;
      case "powerAsc":
        sortedCars.sort((c1, c2) => c1.horsePower - c2.horsePower);
        break;
      case "powerDesc":
        sortedCars.sort((c1, c2) => c2.horsePower - c1.horsePower);
        break;
      default:
        break;
    }

    setFilteredCars(sortedCars);
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
  }

  const indexOfLastCar = currentPage * carsPerPage;
  const indexOfFirstCar = indexOfLastCar - carsPerPage;
  const currentCars = filteredCars.slice(indexOfFirstCar, indexOfLastCar);

  const paginate = (pageNumber) => setCurrentPage(pageNumber);

  const uniqueBrands = [...new Set(cars.map(car => car.brand))];

  return (
    <div className="App">
      <h1>Cool Cars List</h1>
      <h2>try the filters!</h2>
      <button onClick={buttonHandler}>load cars</button>
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
              <select onChange={(event) => selectHandler(event)}>
                <option value="empty"></option>
                <option value="brandAsc">Aufsteigend</option>
                <option value="brandDesc">Absteigend</option>
              </select>
            </th>
            <th>
              Model
              <select onChange={(event) => selectHandler(event)}>
                <option value="empty"></option>
                <option value="modelAsc">Aufsteigend</option>
                <option value="modelDesc">Absteigend</option>
              </select>
            </th>
            <th>
              Horsepower
              <select onChange={(event) => selectHandler(event)}>
                <option value="empty"></option>
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
        {Array.from({ length: Math.ceil(filteredCars.length / carsPerPage) }, (_, i) => (
          <button key={i} onClick={() => paginate(i + 1)}>
            {i + 1}
          </button>
        ))}
      </div>
      <Link href="/carform">add a new car</Link>
    </div>
  )
}