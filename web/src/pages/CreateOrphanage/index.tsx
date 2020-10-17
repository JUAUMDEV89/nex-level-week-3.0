import React, { useState, FormEvent, ChangeEvent } from "react";
import { Map, Marker, TileLayer } from 'react-leaflet';
import L from 'leaflet';
import { useHistory } from "react-router-dom";

import { LeafletMouseEvent } from 'leaflet';

import { FiArrowLeft, FiPlus } from "react-icons/fi";

import mapMarkerImg from '../../images/Local.svg';

import Aside from '../../components/AsideComponent';

import api from '../../services/api';

import'./style.css';

const happyMapIcon = L.icon({
  iconUrl: mapMarkerImg,

  iconSize: [58, 68],
  iconAnchor: [29, 68],
  popupAnchor: [0, -60]
})

export default function CreateOrphanage() {

  const history = useHistory();

  const { goBack } = useHistory();
  const [position, setPosition] = useState({ latitude: 0, longitude: 0 });
  const [name, setName] = useState('');
  const [about, setAbout] = useState('');
  const [instruction, setInstructons] = useState('');
  const [opening_hours, setOpenHours] = useState('');
  const [open_on_weekends, setOpenOnWeekends] = useState(true);  
  const [images, setImages] = useState<File[]>([]);
  const [previewImage, setPreviewImage] = useState<string[]>([]);

  const { latitude, longitude } = position;

  function handleMapClick(event: LeafletMouseEvent){
      
      const { lat, lng } = event.latlng;

      setPosition({
         latitude: lat,
         longitude: lng
      });
  }

  async function handleCreateOrphanate (event: FormEvent){
     event.preventDefault();

     const data =new FormData();

     data.append('name', name);
     data.append('about', about);
     data.append('instructions', instruction);
     data.append('opening_hours', opening_hours);
     data.append('latitude', String(latitude));
     data.append('longitude', String( longitude));
     data.append('open_on_weekends', String(open_on_weekends));
     images.forEach(image => {
      data.append('images', image);
     })

     await api.post('/orphanages', data);
     alert('cadatro realizado com sucesso!');

     history.push('/app');
  }

  function handleSelectedImages(event: ChangeEvent<HTMLInputElement>){
        
        if(!event.target.files){
          return;
        }

        const SelectedImages = Array.from(event.target.files); 

        setImages(SelectedImages);

        const SelectedImagesPreview = previewImage.map(image => {
          return  URL.createObjectURL(image);      
        });

        setPreviewImage(SelectedImagesPreview);
  }

  return (
    <div id="page-create-orphanage">
      
      <Aside />

      <main>
        <form className="create-orphanage-form" onSubmit={handleCreateOrphanate}>
          <fieldset>
            <legend>Dados</legend>

            <Map 
              center={[-27.2092052,-49.6401092]} 
              style={{ width: '100%', height: 280 }}
              zoom={15}
              onClick={handleMapClick}
            >
              <TileLayer 
                url={`https://api.mapbox.com/styles/v1/mapbox/light-v10/tiles/256/{z}/{x}/{y}@2x?access_token=${process.env.REACT_APP_MAPBOX_TOKEN}`}
              />

              {
                position.latitude !== 0 && (
                    <Marker interactive={false} icon={happyMapIcon} position={[position.latitude, position.longitude]} />
                )
              }

            </Map>

            <div className="input-block">
              <label htmlFor="name">Nome</label>
              <input
               id="name"
               value={name}
               onChange={event => { setName(event.target.value) }
               }
              />
            </div>

            <div className="input-block">
              <label htmlFor="about">Sobre <span>Máximo de 300 caracteres</span></label>
              <textarea 
              id="name"
              maxLength={300}
              value={about}
              onChange={event => {setAbout(event.target.value)}} 
              />
            </div>

            <div className="input-block">
              <label htmlFor="images">Fotos</label>

              <div className="images-container">
                  {previewImage.map(image=>{
                       return(
                         <img key={image} src={image} alt={name} />
                       )
                       })}

                  <label className="new-image">
                    <FiPlus size={24} color="#15b6d6" />
                  </label>
                  <input multiple onChange={handleSelectedImages} type="file" id="image[]" />
              </div>

            </div>
          </fieldset>

          <fieldset>
            <legend>Visitação</legend>

            <div className="input-block">
              <label htmlFor="instructions">Instruções</label>
              <textarea
               id="instructions"
               value={instruction}
               onChange={event => {setInstructons(event.target.value)}}
              />
            </div>

            <div className="input-block">
              <label htmlFor="opening_hours">Nome</label>
              <input
               id="opening_hours"
               value={opening_hours}
               onChange={event => {setOpenHours(event.target.value)}}
                />
            </div>

            <div className="input-block">
              <label htmlFor="open_on_weekends">Atende fim de semana</label>

              <div className="button-select">
                <button type="button" onClick={()=>{setOpenOnWeekends(true)}} className={open_on_weekends ? 'active' : ''}>Sim</button>
                <button type="button" onClick={()=>{setOpenOnWeekends(false)}} className={!open_on_weekends ? 'active' : ''}>Não</button>
              </div>
            </div>
          </fieldset>

          <button className="confirm-button" type="submit">
            Confirmar
          </button>
        </form>
      </main>
    </div>
  );
}


