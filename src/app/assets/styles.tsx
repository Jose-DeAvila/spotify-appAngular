import styled from "styled-components";

const ListPlaylist = styled.ul`
list-style: none;
padding: 0;
display: flex;
flex-wrap: wrap;
justify-content: space-around;
`;

const HomeComponent = styled.main`
    text-align: center;
    font-family: 'Baloo Tammudu 2', cursive;
`;

const PlaylistCard = styled.li`
  min-width: 265px;
  max-width: 265px;
  width: auto;
  background-color: #03414d;
  border-radius: 20px;
  margin-bottom: 25px;
`;

const PlayListText = styled.p`
  width: 90%;
  line-height: 1.5;
  white-space: nowrap;
  text-overflow: ellipsis;
  overflow: hidden;
  margin: 0 auto;
  font-family: 'Baloo Tammudu 2', cursive;
  &.userOwner{
    font-weight: bold;
  }
`;

const ExploreButton = styled.a`
  margin: 10px auto;
  width: 100px;
  display: grid;
  place-items: center;
  height: 35px;
  text-decoration: none;
  font-size: 1.2rem;
  background-color: #72dfd0;
  color: #000;
  border-radius: 10px;
  border: 1px solid transparent;
  transition: .5s ease all;
  font-family: 'Baloo Tammudu 2', cursive;
  &:hover{
    background-color: #03414d;
    color: white;
    border: 1px solid white;
  }
`;

const Figure = styled.figure`
  margin: 0;
`;

const BannerUrl = styled.a`
  width: 100%;
  height: 70%;
  text-decoration: none;
  font-family: 'Baloo Tammudu 2', cursive;
  &:hover img{
      transform: translateY(-10px);
  }
`;


const Caption = styled.figcaption`
    color: white;
    line-height: 1;
    margin-bottom: 10px;
    font-weight: bold;
    font-family: 'Baloo Tammudu 2', cursive;
`;

const TitleStyles = styled.p`
    margin: 0;
    width: 100%;
    line-height: 20px;
    font-family: 'Baloo Tammudu 2', cursive;
    &:first-child{
        font-weight: 900;        
    }
`;


const BannerTrackStyles = styled.img`
    width: 50px;
    height: 50px;
    border-radius: 20px;
    margin-right: 10px;
`;


const BannerImage = styled.img`
  width: 80%;
  height: 200px;
  margin-top: 5px;
  border-radius: 20px;
  object-fit: cover;
  transition: .5s ease all;
`;

const ProfilePhoto = styled.button`
    background-color: transparent;
    border: none;
    outline: none;
    width: 100%;
    position: relative;
    padding: 0;
    img{
        cursor: pointer;
        border-radius: 50%;
        width: 80px;
        height: 80px;
        object-fit: cover;
    }
`;

const Navigation = styled.nav`
    text-align: center;
    display: flex;
    flex-direction: column;
    z-index: 100;
    border: 1px solid white;
    font-family: 'Baloo Tammudu 2', cursive;
    font-family: 
`;

const NavElementLink = styled.a`
    color: white;
    text-decoration: none;
    font-family: 'Baloo Tammudu 2', cursive;
    font-size: 1rem;
`;


const InitMolecule = styled.main`
    width: 100vw;
    height: 100vh;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
`;

const ButtonSpotify = styled.button`
    font-size: 1.2rem;
    display: block;
    background-color: #03414d;
    color: white;
    padding: 15px 40px;
    height: 65px;
    border: none;
    outline: none;
    border-radius: 20px;
    transition: .5s ease all;
    cursor: pointer;
    max-width: 300px;
    font-family: 'Baloo Tammudu 2', cursive;
    &:hover{
        background-color: #013641;
    }
`;

const ListOfSongs = styled.ol`
    width: 80%;
    margin: 0 auto;
    padding: 0;
    list-style: none;
`;

const SongInfo = styled.li`
    display: flex;
    align-items: center;
    background-color: #03414d;
    position: relative;
    width: 100%;
    height: 80px;
    margin: 10px 0;
    padding: 0 15px;
    box-sizing: border-box;
    border-radius: 15px;
    &:nth-child(2n){
        background-color: #02242b;
    }
`;

const SongNumber = styled.p`
    font-size: 1.2rem;
    margin-right: 10px;
    font-weight: bold;
`;

const NoSongs = styled.h1`
    text-align: center;
`;

const NameAndArtist = styled.section`
    margin-right: 50px;
`;

const BtnPlay = styled.a`
    background-color: #72dfd0;
    padding: 10px;
    position: absolute;
    border-radius: 10px;
    color: black;
    right: 20px;
    border: 1px solid transparent;
    transition: .3s ease all;
    &:hover{
        background-color: transparent;
        color: white;
        border-color: white;
    }
`;

const IconSty = styled.i`
    font-size: 2rem;
`;

const HiperToHome = styled.a`
    width: 100%;
    text-align: center;
    &:hover img{
        transform: translateY(-5px);
        box-shadow: 0 0 4px lightgray;
    }
    img{
        transition: .5s ease all;   
        max-width: 200px;
        width: 100%;
    }
`
const LiElement = styled.li`
    transition: .3s ease all;
    padding: 10px 0;
    &:first-child{
        border-radius: 20px 20px 0 0;
    }
    &:last-child{
        border-radius: 0 0 20px 20px;
    }
    &:hover{
        background-color: #022229;
    }
`;

const ListLinks = styled.ul`
    position: absolute;
    background-color: #03414d;
    color: white;
    border-radius: 10px;
    list-style: none;
    top: 100%;
    width: 100%;
    padding: 0;
    transform: translateY(-100px);
    opacity: 0;
    transition: .5s ease all;
    pointer-events: none;
    &:before{
        content: '';
        width: 0px;
        height: 0px;
        position: absolute;
        border: 15px solid;
        border-color: transparent transparent #03414d transparent;
        top: -30px;
        left: 50%;
        transform: translateX(-50%);
        box-sizing: border-box;
    }
    &.active{
        transform: translateY(0);
        opacity: 1;
        pointer-events: auto;
    }
`;

const Container = styled.header`
    display: flex;
    width: 100%;
    align-items: center;
    justify-content: space-between;
    a img{
        width: 120px;
    }
    & > a {
        width: 40%;
    }
    & > nav {
        width: 50%;
    }
`;

const SectionTitle = styled.h2`
    text-align: center;
    font-family: 'Baloo Tammudu 2', cursive;
    margin: 0;
`

export {
    ListPlaylist,
    HomeComponent,
    PlayListText,
    PlaylistCard,
    ExploreButton,
    Figure,
    BannerUrl,
    Caption,
    TitleStyles,
    BannerTrackStyles,
    BannerImage,
    ProfilePhoto,
    Navigation,
    NavElementLink,
    InitMolecule,
    ButtonSpotify,
    ListOfSongs,
    SongInfo,
    SongNumber,
    NoSongs,
    NameAndArtist,
    BtnPlay,
    IconSty,
    HiperToHome,
    LiElement,
    ListLinks,
    Container,
    SectionTitle
}