import React from 'react';
import {Link} from 'react-router-dom';
import { FiPlus} from 'react-icons/fi';
import { Map, TileLayer} from 'react-leaflet';
import 'leaflet/dist/leaflet.css';

import mapMarkerImg from '../img/map-marker.svg';
import '../styles/pages/orphanages.css';

function Orphanages() {
    return (
        <div id="page-map">
            <aside>
                <header>
                    <img src={mapMarkerImg} alt="MapMarker"/>
                    <h2>Escolha um Orfanato no mapa</h2>
                    <p>Muitas crianças estão esperando a sua visita :)</p>
                </header>
                <footer>
                    <strong>Ceará</strong>
                    <span>Fortaleza</span>
                </footer>
            </aside>

            <Map
                center={[-3.7055833,-38.5821546]}
                zoom={15}
                style={{width:'100%', height:'100%'}}
            >
                <TileLayer url="https://a.tile.openstreetmap.org/{z}/{x}/{y}.png"/>
            </Map>

            <Link to="" className="create-orphanage">
                <FiPlus size={32} color="#FFF"/>
            </Link>
        </div>
    )
}

export default Orphanages;