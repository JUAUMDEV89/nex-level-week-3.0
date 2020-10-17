import styled from 'styled-components';

export const Landing_page = styled.div`
  height:100vh;
  width:100%;
  display:flex;
  justify-content:center;
  align-items:center;
  background:linear-gradient(329.54deg, #29B601  8%, #8BC7C7 100%);

   @media(max-width:750px){
    display:flex:
    flex-direction:column;
    justify-content:center;
    align-items:center;
  }
`;

export const Container = styled.div`
  display:flex;
  justify-content:space-between;
  width:1300px;
  height:600px;
  background: url('../../images/landing.svg') no-repeat center;

  .landing--logo img{
    width:200px;
    height:100px;
  }

  .landing{
    position:absolute;
    margin-left:350px;
    margin-top:55px;
    width:660px;
    height:500px;
  }

  .landing--left{
    display:flex;
    flex-direction:column;
    justify-content:space-between;
    padding:70px;

  }

 .landing--text{
   margin-bottom:10px;
   line-height:60px;
 }

.landing--location a{
  text-decoration:none;
  color:white;
}

  .landing--text h1{
    font-weight:bold;
    width:200px;
    font-size:50px;
    margin-bottom:20px;
  }

.landing--text p{
  width:300px;
  line-height:20px;
}

  .landing--right{
    display:flex;
    flex-direction:column;
    justify-content:space-between;
    padding:70px;
  }

  .landing--right .featured--button{
    background-color:yellow;
    color:black;
    width:50px;
    height:50px;
    border-radius:5px;
    display:flex;
    justify-content:center;
    align-items:center;
    margin-bottom:40px;
  }

  .landing--right .featured--button:hover{
    background-color:yellowgreen;
    cursor: pointer;
  }

  @media(max-width:1000px){

    display:flex;
    flex-direction:column;

    .landing{
      display:none;
    }
  }

`; 