// src/pages/PlanetListPage.tsx
import React, { useState } from "react";
import { useQuery } from "react-query";
import { fetchPlanets } from "../services/api";
import InfiniteScroll from "react-infinite-scroll-component";
import { FixedSizeList } from "react-window";

const PlanetListPage: React.FC = () => {
  const [page, setPage] = useState(1);

  const {
    data: planetsData,
    fetchNextPage,
    hasNextPage,
    isLoading,
    isError,
  } = useQuery(["planets", page], () => fetchPlanets(page), {
    keepPreviousData: true,
    getNextPageParam: (lastPage) => (lastPage.next ? page + 1 : undefined),
  });

  if (isLoading) {
    return <div>Loading...</div>;
  }

  if (isError) {
    return <div>Error fetching data</div>;
  }

  const planets = planetsData?.pages.flatMap((page) => page.results) || [];

  const Row = ({ index, style }: any) => {
    const planet = planets[index];
    return <div style={style}>{planet.name}</div>;
  };

  return (
    <div>
      <h1>Planet List</h1>
      <InfiniteScroll
        dataLength={planets.length}
        next={() => fetchNextPage()}
        hasMore={hasNextPage}
        loader={<h4>Loading...</h4>}
        endMessage={<p>No more planets</p>}
      >
        <FixedSizeList
          height={400}
          width={300}
          itemCount={planets.length}
          itemSize={50}
        >
          {Row}
        </FixedSizeList>
      </InfiniteScroll>
    </div>
  );
};

export default PlanetListPage;
