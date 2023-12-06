import React from "react";
import { useQuery } from "react-query";
import { fetchWishlist } from "../services/api";

const WishlistPage: React.FC = () => {
  const {
    data: wishlistData,
    isLoading,
    isError,
  } = useQuery("wishlist", fetchWishlist);

  if (isLoading) {
    return <div>Loading...</div>;
  }

  if (isError) {
    return <div>Error fetching wishlist data</div>;
  }

  const wishlist = wishlistData || [];

  return (
    <div>
      <h1>Wishlist</h1>
      {/* Render wishlist of planets with pagination */}
      <ul>
        {wishlist.map((planet) => (
          <li key={planet.id}>{planet.name}</li>
        ))}
      </ul>
      {/* Add pagination logic here if needed */}
    </div>
  );
};

export default WishlistPage;
