import React from 'react';
import { useLocation } from 'react-router-dom';
import styled from 'styled-components';
import HeartBtn from '../../components/atoms/HeartBtn';
import ShareBtn from '../../components/atoms/ShareBtn';
import UserImage from '../../components/atoms/UserImage';

function Details() {
  const location = useLocation();
  const params = location.pathname.split('/');

  return (
    <DetailsPageStyle>
      <ArtInfo>
        <ImgContainer>
          <img
            src={`https://assets.pokemon.com/assets/cms2/img/pokedex/full/${params[2]}.png`}
            alt={`${params[2]}`}
            className="DetailsArtContainer"
          />
          <div className="icons">
            <HeartBtn size="2em" color="black" />
            <ShareBtn size="2em" color="black" />
          </div>
        </ImgContainer>
        <ArtInfoContainer>
          <div className="detailsTitle">
            Ansicht des Strandes bei Scheveling (1678)
            <br /> Thomas Heeremans (Dutch, 1641–1694)
          </div>
          <div className="description">
            Thomas Heeremans was a Dutch painter and art dealer.
            <br /> He is known for his landscapes of winter scenes, cityscapes, harbor scenes, beach views, river views
            and village scenes.
            <br /> He was influenced by Klaes Molenaer, a slightly older painter also from Haarlem. Heeremans was born
            and died in Haarlem.
            <br />
            <br /> He was in the past sometimes erroneously referred to as Frederik Hendrik Mans, likely because he
            signed his name &#34;THMANS&#34; with the &#34;THM&#34; together, leading dealers to assume his name was
            F.H. Mans.
            <br />
            <br /> Read More
          </div>
          <div className="tagContainer" />
        </ArtInfoContainer>
      </ArtInfo>
      <ArtistInfo>
        <UserImage src={`https://assets.pokemon.com/assets/cms2/img/pokedex/full/${params[2]}.png`} alt="이상해씨" />
        <div className="flexbox">
          <div className="artistName">
            Ansicht des Strandes bei Scheveling (1678)Thomas Heeremans (Dutch, 1641–1694)
          </div>
          <div className="artistDescription">
            Thomas Heeremans was a Dutch painter and art dealer. He is known for his landscapes of winter scenes,
            cityscapes, harbor scenes, beach views, river views and village scenes. He was influenced by Klaes Molenaer,
            a slightly older painter also from Haarlem. Heeremans was born and died in Haarlem. Read More
          </div>
        </div>
      </ArtistInfo>
      <Related>
        <img src="https://assets.pokemon.com/assets/cms2/img/pokedex/full/002.png" alt="002" className="RelatedArt" />
        <img src="https://assets.pokemon.com/assets/cms2/img/pokedex/full/003.png" alt="003" className="RelatedArt" />
        <img src="https://assets.pokemon.com/assets/cms2/img/pokedex/full/004.png" alt="004" className="RelatedArt" />
        <img src="https://assets.pokemon.com/assets/cms2/img/pokedex/full/005.png" alt="005" className="RelatedArt" />
        <img src="https://assets.pokemon.com/assets/cms2/img/pokedex/full/006.png" alt="006" className="RelatedArt" />
        <img src="https://assets.pokemon.com/assets/cms2/img/pokedex/full/007.png" alt="007" className="RelatedArt" />
      </Related>
    </DetailsPageStyle>
  );
}

export default Details;

const DetailsPageStyle = styled.div`
  margin-top: 80px;
  width: 1280px;
  display: flex;
  flex-flow: column;

  .DetailsArtContainer {
    border: 1px solid #000;
  }
`;

const ArtInfo = styled.div`
  display: flex;
  flex-flow: row;
  border: 1px solid #000;
`;

const ImgContainer = styled.div`
  width: 640px;
  height: 420px;
  display: flex;
  flex-flow: column;
  margin: 0 60px 0 1rem;

  img {
    width: 640px;
    height: 420px;
    object-fit: contain;
  }

  .icons {
    width: 640px;
    height: 40px;
    border: 1px solid #000;
    display: flex;
    align-items: center;
    place-content: flex-end;

    svg {
      margin: 0.25rem;
    }
  }
`;

const ArtInfoContainer = styled.div`
  width: 420px;
  height: 420px;
  border: 1px solid #000;
  display: flex;
  flex-flow: column;

  .detailsTitle {
    width: 100%;
    height: 80px;
    padding-left: 1rem;
    border: 1px solid #000;
    font-weight: bold;
    font-size: 1rem;
  }

  .description {
    width: 420px;
    height: 240px;
    border: 1px solid #000;
    padding: 1rem;
    font-size: 0.75rem;
    font-weight: bold;
  }

  .tagContainer {
    width: 420px;
    height: 100px;
    border: 1px solid #000;
  }
`;

const ArtistInfo = styled.div`
  margin-top: 60px;
  width: 1000px;
  height: 100px;
  border: 1px solid #000;
  display: flex;

  img {
    margin: 0.5rem;
    background-color: #ddd;
  }

  .artistName {
    font-weight: bold;
  }

  .flexbox {
    display: flex;
    flex-direction: column;
  }
`;

const Related = styled.div`
  display: grid;
  grid-template-areas: '120px 120px 120px';
  border: 1px solid #000;
  width: 1280px;
  height: 160px;
  margin-top: 60px;
  place-items: center;
  overflow: auto;

  img {
    width: 160px;
    margin: 0 40px;
    object-fit: contain;
  }
`;
