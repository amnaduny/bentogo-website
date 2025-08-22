"use client";

import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import type { LatLngExpression } from "leaflet";
import "leaflet/dist/leaflet.css";

import { poppins, happyMonkey, chewy } from '../fonts';

type MapProps = {
    position?: LatLngExpression;
    zoom?: number;
};

export default function LocationMap({
    position = [50.0647, 19.9450],
    zoom = 15,
}: MapProps) {
    return (
        <section className="w-full bg-page-custom pb-16 pt-16 px-4 md:px-32 xl:px-64">
            <div className="max-w-7xl mx-auto mb-2">
                <h2 className={`${chewy.className} text-5xl text-center mb-2 text-white`}>
                    Our Location
                </h2>
                <p className={`${poppins.className} text-center text-xl text-white`}>
                    Visit us at our cozy spot in the heart of Kraków!
                </p>
            </div>
            <div className="w-full h-125 rounded-xl overflow-hidden shadow-lg">
                <MapContainer
                    center={position}
                    zoom={zoom}
                    scrollWheelZoom={false}
                    className="w-full h-full z-0"
                >
                    <TileLayer
                        attribution={
                            '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
                        }
                        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                    />
                    <Marker position={position}>
                        <Popup>
                            BentoGo! <br /> Krakow, Poland
                        </Popup>
                    </Marker>
                </MapContainer>
            </div>
        </section>
    );
}
