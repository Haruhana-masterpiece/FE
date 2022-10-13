import React, { useMemo, useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import styled from 'styled-components';
import HeartBtn from '../../components/atoms/HeartBtn';
import ShareBtn from '../../components/atoms/ShareBtn';
import UserImage from '../../components/atoms/UserImage';
import SoundBtn from '../../components/details/SoundBtn';
import TagBtn from '../../components/details/TagBtn';
import ArtModal from './ArtModal';

const contents = `Thomas Heeremans was a Dutch painter and art dealer.
\n He is known for his landscapes of winter scenes, cityscapes, harbor scenes, beach views, river views
and village scenes.
\n He was influenced by Klaes Molenaer, a slightly older painter also from Haarlem. Heeremans was born
and died in Haarlem.
\n
\n He was in the past sometimes erroneously referred to as Frederik Hendrik Mans, likely because he
signed his name 'THMANS' with the 'THM' together, leading dealers to assume his name was
F.H. Mans.
\n
Heeremans was baptized in the Reformed Church of Haarlem on 29 May 1641. He became a member of the Haarlem
Guild of St. Luke in 1664. He may have been a pupil of Caesar van Everdingen. Heeremans married Trijntje
Claesdr (who was originally from Leiden) on 4 December 1663 in Haarlem. The couple had five children between
1664 and 1673, who were baptized in the Reformed Church. His first wife was buried on 26 September 1680. The
artist then married Sibilla Juriaensdr., a woman from Marck county in Germany, with whom he had a son,
Gijsbert. The exact date of death of the artist is not known. It is recorded he was buried at the
Noorderkerkhof on 24 January 1694. He is primarily known for his winter landscapes, cityscapes, harbor
scenes, beach views, river views and village scenes. He frequently returned to painting the beach at
Scheveningen and the village, beach and ruins of Egmond. His pictures frequently go in pairs. His earliest
dated work is from 1660 while last dated work is from 1695. No influence of his presumed master Caesar van
Everdingen is visible in the work of Heeremans as he was purely a landscape artist and not a figure painter.
His style was rather influenced by Klaes Molenaer particularly in his depiction of winter landscapes and
river scenes. Heeremans' works are distinguished from the rather melancholic scenes of Molenaer by the
use of a brighter palette and the introduction of more lively movement in the scenes, which are populated by
many villagers engaged in various activities such as skating, sledging, fishing and talking.
\n `;

function Details() {
  const [isReadMore, setIsReadMore] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);

  // eslint-disable-next-line consistent-return
  const description = useMemo(() => {
    const shorts = contents.slice(0, 200);

    if (contents.length > 200) {
      if (isReadMore) {
        return contents;
      }
      return `${shorts}...`;
    }
  }, [isReadMore]);

  const location = useLocation();
  const params = location.pathname.split('/');

  return (
    <DetailsPageStyle>
      {isModalOpen && (
        <ArtModal
          url={`https://assets.pokemon.com/assets/cms2/img/pokedex/full/${params[2]}.png`}
          setIsModalOpen={setIsModalOpen}
        />
      )}
      <ArtInfo>
        <ImgContainer>
          <button type="button" onClick={() => setIsModalOpen(true)}>
            <img
              src={`https://assets.pokemon.com/assets/cms2/img/pokedex/full/${params[2]}.png`}
              alt={`${params[2]}`}
              className="DetailsArtContainer"
            />
          </button>
          <div className="icons">
            <HeartBtn size="2em" color="black" />
            <ShareBtn size="2em" color="black" />
          </div>
        </ImgContainer>
        <ArtInfoContainer>
          <div className="detailsTitle">
            Ansicht des Strandes bei Scheveling (1678)
            <br /> Thomas Heeremans (Dutch, 1641–1694)
            <SoundBtn />
          </div>
          <div className="description">
            {description}
            <button
              type="button"
              className="readMoreBtn"
              onClick={() => {
                setIsReadMore(!isReadMore);
              }}
            >
              {contents.length > 200 && (isReadMore ? 'Close' : 'Read More')}
            </button>
          </div>
          <div className="tagContainer">
            <TagBtn value="pokemon" />
          </div>
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
            a slightly older painter also from Haarlem. Heeremans was born and died in Haarlem.
          </div>
        </div>
      </ArtistInfo>
      <Related>
        <Link to="/details/002">
          <img src="https://assets.pokemon.com/assets/cms2/img/pokedex/full/002.png" alt="002" className="RelatedArt" />
        </Link>
        <Link to="/details/003">
          <img src="https://assets.pokemon.com/assets/cms2/img/pokedex/full/003.png" alt="003" className="RelatedArt" />
        </Link>
        <Link to="/details/004">
          <img src="https://assets.pokemon.com/assets/cms2/img/pokedex/full/004.png" alt="004" className="RelatedArt" />
        </Link>
        <Link to="/details/005">
          <img src="https://assets.pokemon.com/assets/cms2/img/pokedex/full/005.png" alt="005" className="RelatedArt" />
        </Link>
        <Link to="/details/006">
          <img src="https://assets.pokemon.com/assets/cms2/img/pokedex/full/006.png" alt="006" className="RelatedArt" />
        </Link>
        <Link to="/details/007">
          <img src="https://assets.pokemon.com/assets/cms2/img/pokedex/full/007.png" alt="007" className="RelatedArt" />
        </Link>
      </Related>
    </DetailsPageStyle>
  );
}

export default Details;

const DetailsPageStyle = styled.div`
  margin-top: 100px;
  width: 1280px;
  display: flex;
  flex-flow: column;

  .DetailsArtContainer {
    // border: 1px solid #000;
  }
`;

const ArtInfo = styled.div`
  display: flex;
  flex-flow: row;
  // border: 1px solid #000;
`;

const ImgContainer = styled.div`
  width: 600px;
  height: 420px;
  display: flex;
  flex-flow: column;
  margin: 0 60px 0 1rem;
  border: 1px solid #ddd;

  img {
    width: 600px;
    height: 420px;
    object-fit: contain;
  }

  .icons {
    width: 600px;
    height: 40px;
    // border: 1px solid #000;
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
  // border: 1px solid #000;
  block-size: auto;
  display: flex;
  flex-flow: column;

  .detailsTitle {
    width: 100%;
    height: 80px;
    padding: 1rem;
    // border: 1px solid #000;
    font-weight: bold;
    font-size: 1rem;
  }

  .description {
    width: 420px;
    height: 240px;
    line-height: 1.5rem;
    // border: 1px solid #000;
    padding: 1rem;
    font-size: 0.8rem;
    object-fit: contain;
    block-size: auto;
  }

  .tagContainer {
    width: 420px;
    height: 100px;
    padding: 1rem;
    // border: 1px solid #000;
  }

  .readMoreBtn {
    border: none;
    background-color: transparents;
    font-weight: bold;
    font-size: 1rem;
  }
`;

const ArtistInfo = styled.div`
  margin: 80px 0 0 40px;
  width: 1000px;
  height: 100px;
  // border: 1px solid #000;
  display: flex;

  img {
    margin: 0 0.5rem;
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
  // border: 1px solid #000;
  width: 1280px;
  height: 160px;
  margin-top: 40px;
  place-items: center;
  overflow: auto;
  -ms-overflow-style: none; /* IE and Edge */
  scrollbar-width: none; /* Firefox */

  img {
    width: 160px;
    margin: 0 40px;
    object-fit: contain;
  }

  ::-webkit-scrollbar {
    display: none; /* Chrome, Safari, Opera*/
  }
`;
