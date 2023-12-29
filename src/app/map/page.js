"use client";

import React, { useRef, useEffect, useState } from "react";
import mapboxgl from "!mapbox-gl";

mapboxgl.accessToken =
  "pk.eyJ1Ijoic2FnYXIxOXZhZ2hlbGEiLCJhIjoiY2xxcDAxb2R3MHVhMTJrc2JrcjNlOHUweSJ9.t9XmVbDJLtV--Lpb9pcDOA";

export default function Map() {
  const mapContainer = useRef(null);
  const map = useRef(null);
  const [lng, setLng] = useState(-70.9);
  const [lat, setLat] = useState(42.35);
  const [zoom, setZoom] = useState(9);

  useEffect(() => {
    if (map.current) return; // initialize map only once
    map.current = new mapboxgl.Map({
      container: mapContainer.current,
      style: "mapbox://styles/mapbox/streets-v12",
      center: [lng, lat],
      zoom: zoom,
    });

    map.current.on("move", () => {
      setLng(map.current.getCenter().lng.toFixed(4));
      setLat(map.current.getCenter().lat.toFixed(4));
      setZoom(map.current.getZoom().toFixed(2));
    });

    // Load GeoJSON data
    map.current.on("load", () => {
      // Example Point GeoJSON
      map.current.addSource("points", {
        type: "geojson",
        data: {
          type: "FeatureCollection",
          features: [
            {
              type: "Feature",
              geometry: {
                type: "Point",
                coordinates: [lng, lat],
              },
              properties: {
                title: "Marker",
                icon: "marker",
              },
            },
            // Add more Point features as needed
          ],
        },
      });

      // Example Line GeoJSON
      map.current.addSource("lines", {
        type: "geojson",
        data: {
          type: "FeatureCollection",
          features: [
            {
              type: "Feature",
              geometry: {
                type: "LineString",
                coordinates: [
                  [lng - 0.25, lat + 0.15],
                  [lng + 0.25, lat + 0.15],
                ],
              },
            },
            // Add more Line features as needed
          ],
        },
      });

      // Example Polygon GeoJSON
      map.current.addSource("polygons", {
        type: "geojson",
        data: {
          type: "FeatureCollection",
          features: [
            {
              type: "Feature",
              geometry: {
                type: "Polygon",
                coordinates: [
                  [
                    [lng - 0.1, lat - 0.1],
                    [lng - 0.15, lat + 0.007],
                    [lng + 0, lat + 0.1],
                    [lng + 0.15, lat + 0.007],
                    [lng + 0.1, lat - 0.1],
                    [lng - 0.1, lat - 0.1],
                  ],
                ],
              },
            },
            // Add more Polygon features as needed
          ],
        },
      });

      // Add layers for each GeoJSON type with proper styling
      map.current.addLayer({
        id: "points",
        type: "symbol",
        source: "points",
        layout: {
          "icon-image": "{icon}-15",
          "icon-allow-overlap": true,
        },
      });

      map.current.addLayer({
        id: "lines",
        type: "line",
        source: "lines",
        paint: {
          "line-color": "#888",
          "line-width": 3,
        },
      });

      map.current.addLayer({
        id: "polygons",
        type: "fill",
        source: "polygons",
        paint: {
          "fill-color": "#57f",
          "fill-opacity": 0.4,
        },
      });
      map.current.addLayer({
        id: "polygons-outline",
        type: "line",
        source: "polygons",
        paint: {
          "line-color": "#888",
          "line-width": 3,
        },
      });
    });
  }, [lng, lat, zoom]);

  return (
    <div>
      <div className="sidebar absolute top-14 left-1/2 -translate-x-1/2 font-[monospace]">
        Longitude: {lng} | Latitude: {lat} | Zoom: {zoom}
      </div>
      <div ref={mapContainer} className="h-[680px]" />
    </div>
  );
}
