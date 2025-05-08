import React from "react";
import Places from "./Places.jsx";
import ErrorPage from "./ErrorPage.jsx";
import { sortPlacesByDistance } from "../loc.js";
import { fetchAvailablePlaces } from "../http.js";
import { useFetch } from "../hooks/useFetch.js";

// navigator.geolocation.getCurrentPosition((position) => {
//   const sortedPlaces = sortPlacesByDistance(
//     places,
//     position.coords.latitude,
//     position.coords.longitude
//   );
//   setAvailablePlaces(sortedPlaces);
//   setIsFetching(false);
// });

const fetchSortedPlaces = async () => {
  const places = await fetchAvailablePlaces();
  return new Promise((resolve, reject) => {
    navigator.geolocation.getCurrentPosition(
      (position) => {
        const sortedPlaces = sortPlacesByDistance(
          places,
          position.coords.latitude,
          position.coords.longitude
        );
        resolve(sortedPlaces);
      },
      (error) => {
        reject(error);
      }
    );
  });
};

export default function AvailablePlaces({ onSelectPlace }) {
  const {
    isFetching,
    error,
    fetchedData: availablePlaces,
  } = useFetch(fetchSortedPlaces, []);

  if (error) {
    return <ErrorPage title="An error occured" message={error.message} />;
  }

  return (
    <Places
      title="Available Places"
      isLoading={isFetching}
      loadingText={"Fetching available places..."}
      places={availablePlaces}
      fallbackText="No places available."
      onSelectPlace={onSelectPlace}
    />
  );
}
