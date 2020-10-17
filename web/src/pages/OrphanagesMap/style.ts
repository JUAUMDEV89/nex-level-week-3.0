import styled from 'styled-components';

export const Content = styled.div`
   display:flex;
   width:100vw;
   height:100vh;
  
   .add_orphanages{
      display:flex;
      justify-content:center;
      align-items:center;
      width:70px;
      height:70px;
      cursor:pointer;
      background:linear-gradient(329.54deg, #29B601  8%, #8BC7C7 100%);
      color:white;
      position:absolute;
      right:30px;
      bottom:30px;
      border-radius:10px;
      z-index:9999;
   }
   .map--popup .leaflet-popup-content-wrapper{
      background:rgba(255, 255, 255, 8.8);
      border-radius:20px;
      box-shadow:none;
   }

    .map--popup .leaflet-popup-content{
      color:#0089A5;
      font-size:20px;
      font-weight:bold;
      margin: 8px 12px;
      display:flex;
      justify-content:space-between;
      align-items:center;
    }

    .material-icons{
       color:#fff;
       font-size:32px;
    }
    
    .map--popup .leaflet-popup-content a{
       background:#15c3d6;
       width:48px;
       height:48px;
       border-radius:12px;

       display:flex;
       justify-content:center;
       align-items:center;
       cursor:pointer;
    }

    .map--popup .leaflet-popup-tip-container{
       display:none;
    }

   `;

export const Aside = styled.div`
   width:400px;
   background:linear-gradient(329.54deg, #29B601  8%, #8BC7C7 100%);
   height:100vh;
   display:flex;
   flex-direction:column;
   justify-content:space-between;
   
   header{
      padding-left:30px;
      padding-top:30px;
   }

   header img{
      width:100px;
      height:70px;
   }

   header h2{
      width:200px;
      margin-top:60px;
   }

   header p{
      width:250px;
      margin-top:25px;
   }

   footer{
      padding-left:30px;
      margin-bottom:30px;
   }
`;