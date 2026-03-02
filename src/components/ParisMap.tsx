"use client";

import { useEffect, useState } from "react";
import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import L from "leaflet";
import "leaflet/dist/leaflet.css";

const projects: { name: string; type: string; address: string; lat: number; lng: number; isHQ?: boolean }[] = [
  // FCS Headquarters
  { name: "FCS — Siège", type: "Siège", address: "13 Av. Charles de Gaulle, 94470 Boissy-Saint-Léger", lat: 48.7490, lng: 2.5103, isHQ: true },
  // Hors IDF
  { name: "Miette à Miette", type: "Boulangerie", address: "Nice (06300)", lat: 43.7009, lng: 7.2742 },
  { name: "Boucherie de l'Angle", type: "Boucherie", address: "Vallauris (06220)", lat: 43.5777, lng: 7.0548 },
  { name: "Chocolaterie de Neuville", type: "Pâtisserie", address: "Ibos (65420)", lat: 43.2298, lng: 0.1282 },
  // 2025
  { name: "L'Asnieroise", type: "Boulangerie", address: "Asnières-sur-Seine (92600)", lat: 48.9142, lng: 2.2871 },
  { name: "Le Pavillon des Pains", type: "Boulangerie", address: "Le Plessis-Robinson (92350)", lat: 48.7811, lng: 2.2636 },
  { name: "Maison Lamarck", type: "Boulangerie", address: "Paris 18e (75018)", lat: 48.8912, lng: 2.3468 },
  { name: "La Valentonnaise", type: "Boulangerie", address: "Valenton (94460)", lat: 48.7453, lng: 2.4614 },
  { name: "Maison Gaïa", type: "Boulangerie", address: "Le Raincy (93340)", lat: 48.8958, lng: 2.5185 },
  // 2024
  { name: "Maison Jebrane II", type: "Boulangerie", address: "Mitry-Mory (77290)", lat: 48.9830, lng: 2.6110 },
  { name: "Takumi — Dauphine", type: "Pâtisserie", address: "Paris 6e (75006)", lat: 48.8530, lng: 2.3359 },
  { name: "Takumi — Pyramides", type: "Pâtisserie", address: "Paris 1er (75001)", lat: 48.8648, lng: 2.3363 },
  { name: "L'Instant Gourmand", type: "Boulangerie", address: "Nanterre (92000)", lat: 48.8924, lng: 2.2069 },
  { name: "La Caravelle", type: "Boulangerie", address: "Villeneuve-la-Garenne (92390)", lat: 48.9372, lng: 2.3264 },
  { name: "La Rose de Tunis", type: "Pâtisserie", address: "Pantin (93500)", lat: 48.8934, lng: 2.4028 },
  // 2023
  { name: "Maison Jebrane", type: "Boulangerie", address: "Villeparisis (77270)", lat: 48.9455, lng: 2.6137 },
  { name: "Pavillon des Pains", type: "Boulangerie", address: "Pontoise (95300)", lat: 49.0506, lng: 2.0965 },
  { name: "Instant d'Envie — Le Bourget", type: "Boulangerie", address: "Le Bourget (93350)", lat: 48.9344, lng: 2.4256 },
  { name: "Maison Beauclair", type: "Boulangerie", address: "Rosny-sous-Bois (93110)", lat: 48.8713, lng: 2.4868 },
  { name: "L'Arc Sportif", type: "Boulangerie", address: "Colombes (92700)", lat: 48.9233, lng: 2.2527 },
  { name: "Instant d'Envie — Sceaux", type: "Boulangerie", address: "Sceaux (92260)", lat: 48.7762, lng: 2.2911 },
  { name: "L'Atelier du Pain", type: "Boulangerie", address: "Aulnay-sous-Bois (93600)", lat: 48.9384, lng: 2.4943 },
  { name: "Le Palacio", type: "Boulangerie", address: "Noisy-le-Grand (93160)", lat: 48.8486, lng: 2.5527 },
  { name: "Sacré Gourmand", type: "Boulangerie", address: "25 Rue Charles Schmidt, Saint-Ouen (93400)", lat: 48.9036, lng: 2.3336 },
  // 2022
  { name: "Pizzeria Valenton", type: "Restauration", address: "Valenton (94460)", lat: 48.7485, lng: 2.4580 },
  { name: "Grain d'Or", type: "Boulangerie", address: "Rueil-Malmaison (92500)", lat: 48.8765, lng: 2.1810 },
  { name: "Maison Ghafif", type: "Boulangerie", address: "Bois-Colombes (92270)", lat: 48.9157, lng: 2.2694 },
  { name: "Maison Gourmandise", type: "Boulangerie", address: "Ivry-sur-Seine (94200)", lat: 48.8116, lng: 2.3800 },
  // 2021
  { name: "Hôtel Thiais", type: "Hôtellerie", address: "Thiais (94320)", lat: 48.7638, lng: 2.3978 },
  { name: "La Rose", type: "Boulangerie", address: "Paris 17e (75017)", lat: 48.8848, lng: 2.3143 },
  { name: "De la Mairie", type: "Boulangerie", address: "Vitry-sur-Seine (94400)", lat: 48.7873, lng: 2.3928 },
  { name: "Boucherie LMDV", type: "Boucherie", address: "38 Av. Gambetta, Bagnolet (93170)", lat: 48.8681, lng: 2.4202 },
  { name: "La Pralinoise", type: "Boulangerie", address: "Kremlin-Bicêtre (94270)", lat: 48.8101, lng: 2.3597 },
  { name: "La Dalle d'Argenteuil", type: "Boulangerie", address: "Argenteuil (95100)", lat: 48.9472, lng: 2.2464 },
];

const logoIcon = new L.DivIcon({
  html: `<div style="
    width: 40px;
    height: 40px;
    border-radius: 50%;
    background: #fff;
    box-shadow: 0 2px 12px rgba(0,0,0,0.18), 0 0 0 3px rgba(0,0,0,0.06);
    display: flex;
    align-items: center;
    justify-content: center;
    position: relative;
  ">
    <img src="/logo-fcs.png" style="width: 28px; height: 28px; border-radius: 50%; object-fit: cover;" />
    <div style="
      position: absolute;
      bottom: -6px;
      left: 50%;
      transform: translateX(-50%);
      width: 0;
      height: 0;
      border-left: 6px solid transparent;
      border-right: 6px solid transparent;
      border-top: 8px solid #fff;
      filter: drop-shadow(0 2px 2px rgba(0,0,0,0.1));
    "></div>
  </div>`,
  className: "",
  iconSize: [40, 48],
  iconAnchor: [20, 48],
  popupAnchor: [0, -48],
});

const hqIcon = new L.DivIcon({
  html: `<div style="
    width: 56px;
    height: 56px;
    border-radius: 50%;
    background: linear-gradient(135deg, #c9a96e, #e2c68a, #b8943e);
    box-shadow: 0 4px 20px rgba(201,169,110,0.45), 0 0 0 4px rgba(201,169,110,0.25), 0 0 0 8px rgba(201,169,110,0.10);
    display: flex;
    align-items: center;
    justify-content: center;
    position: relative;
    animation: hq-pulse 2s ease-in-out infinite;
  ">
    <div style="
      width: 46px;
      height: 46px;
      border-radius: 50%;
      background: #fff;
      display: flex;
      align-items: center;
      justify-content: center;
    ">
      <img src="/logo-fcs.png" style="width: 34px; height: 34px; border-radius: 50%; object-fit: cover;" />
    </div>
    <div style="
      position: absolute;
      bottom: -8px;
      left: 50%;
      transform: translateX(-50%);
      width: 0;
      height: 0;
      border-left: 8px solid transparent;
      border-right: 8px solid transparent;
      border-top: 10px solid #c9a96e;
      filter: drop-shadow(0 2px 4px rgba(201,169,110,0.3));
    "></div>
  </div>
  <style>
    @keyframes hq-pulse {
      0%, 100% { box-shadow: 0 4px 20px rgba(201,169,110,0.45), 0 0 0 4px rgba(201,169,110,0.25), 0 0 0 8px rgba(201,169,110,0.10); }
      50% { box-shadow: 0 4px 24px rgba(201,169,110,0.55), 0 0 0 6px rgba(201,169,110,0.3), 0 0 0 12px rgba(201,169,110,0.15); }
    }
  </style>`,
  className: "",
  iconSize: [56, 64],
  iconAnchor: [28, 64],
  popupAnchor: [0, -64],
});

export default function ParisMap() {
  const [mounted, setMounted] = useState(false);
  const [mapKey, setMapKey] = useState(0);

  useEffect(() => {
    setMounted(true);
    return () => {
      // Remove any lingering Leaflet container references on unmount
      const containers = document.querySelectorAll(".leaflet-container");
      containers.forEach((el) => {
        // @ts-expect-error _leaflet_id is a private Leaflet property
        delete el._leaflet_id;
      });
    };
  }, []);

  useEffect(() => {
    if (mounted) setMapKey((k) => k + 1);
  }, [mounted]);

  if (!mounted) {
    return (
      <div className="w-full h-[500px] md:h-[600px] rounded-[2rem] bg-muted/30 animate-pulse" />
    );
  }

  return (
    <div className="relative w-full h-[500px] md:h-[600px] rounded-[2rem] overflow-hidden border border-border/30 shadow-lg">
      <MapContainer key={mapKey}
        center={[46.8, 3.5]}
        zoom={6}
        scrollWheelZoom={false}
        className="w-full h-full z-0"
        style={{ background: "#f8f8f8" }}
        attributionControl={false}
      >
        <TileLayer
          url="https://{s}.basemaps.cartocdn.com/light_all/{z}/{x}/{y}{r}.png"
        />
        {projects.map((project, i) => (
          <Marker
            key={`${project.name}-${project.address}-${i}`}
            position={[project.lat, project.lng]}
            icon={(project as { isHQ?: boolean }).isHQ ? hqIcon : logoIcon}
            zIndexOffset={(project as { isHQ?: boolean }).isHQ ? 1000 : 0}
          >
            <Popup>
              <div style={{ minWidth: 160, fontFamily: "system-ui, sans-serif" }}>
                <div style={{ fontSize: 14, fontWeight: 600, marginBottom: 2 }}>
                  {project.name}
                </div>
                <div style={{ fontSize: 11, color: (project as { isHQ?: boolean }).isHQ ? "#c9a96e" : "#888", textTransform: "uppercase", letterSpacing: "0.05em", marginBottom: 4, fontWeight: (project as { isHQ?: boolean }).isHQ ? 600 : 400 }}>
                  {project.type}
                </div>
                <div style={{ fontSize: 12, color: "#666" }}>
                  {project.address}
                </div>
              </div>
            </Popup>
          </Marker>
        ))}
      </MapContainer>

      {/* Overlay legend */}
      <div className="absolute bottom-5 left-5 z-[1000] bg-white/90 backdrop-blur-md rounded-2xl px-5 py-4 shadow-lg border border-border/20">
        <div className="flex items-center gap-2 mb-2">
          <div className="w-2 h-2 rounded-full bg-foreground" />
          <span className="text-xs font-medium tracking-wide text-foreground">
            {projects.length} Projets en France
          </span>
        </div>
        <p className="text-[11px] text-muted-foreground leading-relaxed max-w-[180px]">
          Cliquez sur un repère pour voir les détails du projet.
        </p>
      </div>
    </div>
  );
}
