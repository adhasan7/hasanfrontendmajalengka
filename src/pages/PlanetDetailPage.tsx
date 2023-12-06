import React, { useState } from "react";
import { useParams } from "react-router-dom";
import { useQuery } from "react-query";
import { fetchPlanetDetails } from "../services/api";

const PlanetDetailPage: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const [wishlist, setWishlist] = useState<string[]>([]); // State untuk menyimpan ID planet di dalam wishlist

  const {
    data: planetData,
    isLoading,
    isError,
  } = useQuery(["planet", id], () => fetchPlanetDetails(id), {
    // Tambahkan opsi fetchMore jika diperlukan
  });

  if (isLoading) {
    return <div>Loading...</div>;
  }

  if (isError) {
    return <div>Error fetching data</div>;
  }

  const planet = planetData;

  const addToWishlist = () => {
    // Tambahkan logika untuk menambahkan planet ke wishlist di sini
    // Misalnya, kita akan menambahkan ID planet ke dalam state wishlist
    setWishlist((prevWishlist) => [...prevWishlist, planet.id]);

    console.log("Added to Wishlist:", planet.name);
  };

  return (
    <div>
      <h1>{planet.name}</h1>
      <p>Climate: {planet.climate}</p>
      {/* Render detailed planet information */}
      {/* Add more details as needed */}
      <button onClick={addToWishlist}>Add to Wishlist</button>
    </div>
  );
};

export default PlanetDetailPage;
