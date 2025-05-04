import React, { useState, useEffect } from "react";
import Places from "./Places.jsx";
import ErrorPage from "./ErrorPage.jsx";
import { sortPlacesByDistance } from "../loc.js";
import { fetchAvailablePlaces } from "../http.js";
export default function AvailablePlaces({ onSelectPlace }) {
  const [availablePlaces, setAvailablePlaces] = useState([]);
  const [isFetching, setIsFetching] = useState(false);
  const [error, setError] = useState(null);

  const fetchPlaces = async () => {
    setIsFetching(true);
    try {
      const places = await fetchAvailablePlaces();
      navigator.geolocation.getCurrentPosition((position) => {
        const sortedPlaces = sortPlacesByDistance(
          places,
          position.coords.latitude,
          position.coords.longitude
        );
        setAvailablePlaces(sortedPlaces);
        setIsFetching(false);
      });
    } catch (error) {
      setError({
        message:
          error.message || "Could not fetch places. please try again later.",
      });
      setIsFetching(false);
    }
  };
  useEffect(() => {
    fetchPlaces();
  }, []);

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
