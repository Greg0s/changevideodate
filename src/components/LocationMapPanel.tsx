import * as L from "leaflet";
import "leaflet/dist/leaflet.css";
import markerIcon2x from "leaflet/dist/images/marker-icon-2x.png";
import markerIcon from "leaflet/dist/images/marker-icon.png";
import markerShadow from "leaflet/dist/images/marker-shadow.png";
import { useEffect, useRef } from "react";
import type { Theme } from "../lib/types";

const DEFAULT_ZOOM = 11;
const TILE_URL = "https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png";
const TILE_ATTRIBUTION =
  '&copy; <a href="https://www.openstreetmap.org/copyright" target="_blank" rel="noopener noreferrer">OpenStreetMap</a> contributors';
const DARK_TILE_FILTER = "invert(1) hue-rotate(180deg) brightness(0.95) contrast(0.9)";

const markerIconInstance = new L.Icon({
  iconUrl: markerIcon,
  iconRetinaUrl: markerIcon2x,
  shadowUrl: markerShadow,
  iconSize: [25, 41],
  iconAnchor: [12, 41],
  popupAnchor: [1, -34],
  shadowSize: [41, 41],
});

function parseCoord(value: string): number | null {
  const n = Number(value);
  return value.trim() !== "" && Number.isFinite(n) ? n : null;
}

interface LocationMapPanelProps {
  theme: Theme;
  isDark: boolean;
  lat: string;
  lon: string;
  onLatChange: (value: string) => void;
  onLonChange: (value: string) => void;
}

export function LocationMapPanel({ theme, isDark, lat, lon, onLatChange, onLonChange }: LocationMapPanelProps) {
  const containerRef = useRef<HTMLDivElement | null>(null);
  const mapRef = useRef<L.Map | null>(null);
  const markerRef = useRef<L.Marker | null>(null);
  const skipNextSyncRef = useRef(false);

  // Mounts the Leaflet map once; the effect below keeps the marker in sync with
  // lat/lon changes that come from outside the map (the text inputs).
  useEffect(() => {
    if (!containerRef.current) return;

    const parsedLat = parseCoord(lat);
    const parsedLon = parseCoord(lon);
    const initialCenter: L.LatLngTuple = [parsedLat ?? 0, parsedLon ?? 0];

    const map = L.map(containerRef.current, { center: initialCenter, zoom: DEFAULT_ZOOM });
    L.tileLayer(TILE_URL, { maxZoom: 19, attribution: TILE_ATTRIBUTION }).addTo(map);
    const marker = L.marker(initialCenter, { icon: markerIconInstance, draggable: true }).addTo(map);

    function applyLatLng(latlng: L.LatLng) {
      marker.setLatLng(latlng);
      skipNextSyncRef.current = true;
      onLatChange(latlng.lat.toFixed(6));
      onLonChange(latlng.lng.toFixed(6));
    }

    marker.on("dragend", () => applyLatLng(marker.getLatLng()));
    map.on("click", (e: L.LeafletMouseEvent) => applyLatLng(e.latlng));

    mapRef.current = map;
    markerRef.current = marker;

    return () => {
      map.remove();
      mapRef.current = null;
      markerRef.current = null;
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  useEffect(() => {
    const pane = mapRef.current?.getPane("tilePane");
    if (pane) pane.style.filter = isDark ? DARK_TILE_FILTER : "";
  }, [isDark]);

  useEffect(() => {
    if (skipNextSyncRef.current) {
      skipNextSyncRef.current = false;
      return;
    }
    const map = mapRef.current;
    const marker = markerRef.current;
    const parsedLat = parseCoord(lat);
    const parsedLon = parseCoord(lon);
    if (!map || !marker || parsedLat === null || parsedLon === null) return;
    const next: L.LatLngTuple = [parsedLat, parsedLon];
    marker.setLatLng(next);
    map.setView(next, Math.max(map.getZoom(), DEFAULT_ZOOM));
  }, [lat, lon]);

  return <div ref={containerRef} style={{ height: 280, background: theme.inputBg }} className="w-full" />;
}
