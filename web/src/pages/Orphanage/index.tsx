import React, {useEffect, useState} from "react";
import { FaWhatsapp } from "react-icons/fa";
import { FiClock, FiInfo, FiArrowLeft } from "react-icons/fi";
import { Map, Marker, TileLayer } from "react-leaflet";
import { useHistory, useParams } from 'react-router-dom';
import L from 'leaflet';
import api from '../../services/api'

import Aside from '../../components/AsideComponent';

import mapMarkerImg from '../../images/Local.svg';

import './style.css';

const happyMapIcon = L.icon({
  iconUrl: mapMarkerImg,

  iconSize: [58, 68],
  iconAnchor: [29, 68],
  popupAnchor: [0, -60]
});

interface Orphanage{
  id:number,
  longitude:number,
  latitude:number,
  name:string,
  about:string,
  instructions:string,
  opening_hours:string,
  open_on_weekends:string,
  images:Array<{
    url:string,
    id:number,
    index:number,
  }>
}

interface OrphanageParams{
  id:string,
}

export default function Orphanage() {
  
  const params = useParams<OrphanageParams>();
  const [orphanage, setOrphanage] = useState<Orphanage>();
  const [activeImageIndex, setActiveImageIndex] = useState(0);

  useEffect(()=>{
    api.get(`/orphanages/${params.id}`).then(response => {
      const data = response.data;

      console.log(data);
      setOrphanage(data);
    })
  }, [params.id]);

  if(!orphanage){
    return <p>Carregando...</p>
  }

  return (
    <div id="page-orphanage">
     
     <Aside />
 
      <main>
        <div className="orphanage-details">
          <img src={orphanage.images[activeImageIndex].url} alt={orphanage.name} />
          <div className="images--content">
         {
           orphanage.images.map((image, index) => {
             return (
              
                <div className="images" key={image.id}>
                    <button
                     className={activeImageIndex === index ? 'active' : ''}
                     onClick={()=>{setActiveImageIndex(index)}}
                     type="button">
                    <img src={image.url} alt={orphanage.name} />
                    </button>
                </div>
             )
           })
         }
         </div>
          
          <div className="orphanage-details-content">
            <h1>{orphanage.name}</h1>
            <p>{orphanage.about}</p>

            <div className="map-container">
              <Map 
                center={[orphanage.latitude, orphanage.longitude]} 
                zoom={16} 
                style={{ width: '100%', height: 280 }}
                dragging={false}
                touchZoom={false}
                zoomControl={false}
                scrollWheelZoom={false}
                doubleClickZoom={false}
              >
                <TileLayer 
                  url={`https://api.mapbox.com/styles/v1/mapbox/light-v10/tiles/256/{z}/{x}/{y}@2x?access_token=${process.env.REACT_APP_MAPBOX_TOKEN}`}
                />
                <Marker interactive={false} icon={happyMapIcon} position={[orphanage.latitude, orphanage.longitude]} />
              </Map>

              <footer>
                <a href={`https://www.google.com/maps/dir/?api=1&destination=${orphanage.latitude},${orphanage.longitude}`}>Ver rotas no Google Maps</a>
              </footer>
            </div>

            <hr />

            <h2>Instruções para visita</h2>
            <p>{orphanage.instructions}</p>

            <div className="open-details">
              <div className="hour">
                <FiClock size={32} color="#15B6D6" />
                Segunda à Sexta <br />
                {orphanage.opening_hours}
              </div>
              {
                orphanage.open_on_weekends ? (
                  <div className="open-on-weekends">
                     <FiInfo size={32} color="#39CC83" />
                     Atendemos <br />
                     fim de semana
                  </div>
                ) : (
                  <div className="open-on-weekends dont-open">
                    <FiInfo size={32} color="#FF6690" />
                     Não atendemos <br />
                     fim de semana
                  </div>
                )
              }
            </div>

            <button type="button" className="contact-button">
              <FaWhatsapp size={20} color="#FFF" />
              Entrar em contato
            </button>
          </div>
        </div>
      </main>
    </div>
  );
}