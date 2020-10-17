import React, { useEffect, useState } from 'react';
import { Map, TileLayer, Marker, Popup } from 'react-leaflet'; 

import { Link, useParams } from 'react-router-dom';

import { Content, Aside } from './style';
import Leaflet from 'leaflet';

import Icon_map from '../../images/Local.svg';

import 'leaflet/dist/leaflet.css';

import api from '../../services/api';

const mapIcon = Leaflet.icon({
  iconUrl: Icon_map,
  iconSize:[58,68],
  iconAnchor:[29, 68],
  popupAnchor:[170,2]
})

interface Orphanage{
  id:number,
  longitude:number,
  latitude:number,
  name:string,
}

const OrphanagesMap = ()=>{

    const [orphanages, setOrphanages] = useState<Orphanage[]>([]);

    useEffect(()=>{
      api.get('/orphanages').then(response => {
        const data = response.data;

        console.log(data);
        setOrphanages(data);
      })
    }, []);

  

    return(
      <Content>
        <Link to="/orphanage/create" className="add_orphanages">
         <i className="material-icons">add</i>
        </Link>
         <Aside>
           <header>
             <img src={Icon_map} alt="Happy" />
             <h2>Escolha um Orfanato no Mapa</h2>
             <p>Muitas crianças estão esperando a sua visita :)</p>
           </header>
           <footer>
             <strong>Quixeramobim</strong>
             <p>Ceará</p>
           </footer>
         </Aside>

         <Map
          center={[-5.189238,-39.2919397]} 
          zoom={15}
          style={{ width:'100%', height:'100%' }}
         >
         <TileLayer url="https://a.tile.openstreetmap.org/{z}/{x}/{y}.png" />

        {
          orphanages.map(orphanage => {
            return(
             
              <Marker 
              icon={mapIcon}
              position={[orphanage.latitude, orphanage.longitude]}
              key={orphanage.id}
              >

             <Popup closeButton={false} minWidth={240} maxWidth={240} className="map--popup">
                {orphanage.name}
                <Link to={`/orphanage/${orphanage.id}`}><i className="material-icons">arrow_forward</i></Link>
             </Popup>

        
             </Marker>


            )
          })
        }

        </Map>

      </Content>
      
    )
      
}


export default OrphanagesMap;