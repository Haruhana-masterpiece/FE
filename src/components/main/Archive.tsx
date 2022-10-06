import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import ArchiveSkeleton from './ArchiveSkeleton';
import ArtContainer from '../organism/ArtContainer';

function Archive() {
  const [poke, setPoke] = useState<string[]>([]);
  const [isLoaded, setIsLoaded] = useState(false);
  const [target, setTarget] = useState(null);

  function onIntersect([entry]: IntersectionObserverEntry[], observer: IntersectionObserver) {
    if (entry.isIntersecting && !isLoaded) {
      observer.unobserve(entry.target);
      setIsLoaded(true);
      const numberList: string[] = [];

      for (let i = 1; i <= 9; i += 1) {
        numberList.push(`00${i}`);
      }
      for (let i = 10; i <= 99; i += 1) {
        numberList.push(`0${i}`);
      }
      for (let i = 100; i <= 900; i += 1) {
        numberList.push(`${i}`);
      }
      setPoke((p) => p.concat(numberList.slice(0, 16)));
      setTimeout(() => {
        setIsLoaded(false);
        observer.observe(entry.target);
      }, 1000);
    }
  }

  useEffect(() => {
    let observer: IntersectionObserver;
    if (target) {
      observer = new IntersectionObserver(onIntersect, {
        threshold: 0.3,
      });
      observer.observe(target);
    }
    return () => observer && observer.disconnect();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [target]);

  return (
    <ArchiveStyle>
      <div className="archive">
        {isLoaded ? (
          <ArchiveSkeleton />
        ) : (
          poke.map((data) => {
            return (
              <ArtContainer
                key={Math.random()}
                url={`https://assets.pokemon.com/assets/cms2/img/pokedex/full/${data}.png`}
                data={data}
              />
            );
          })
        )}
      </div>
      <div ref={setTarget} className="target" />
    </ArchiveStyle>
  );
}

export default Archive;

const ArchiveStyle = styled.div`
  .archive {
    display: grid;
    grid-template-areas: 'a a a a';
    width: 100%;
    height: auto;
  }
  .target {
    width: 200px;
    height: 100px;
  }

  .linkToDetail {
    width: 250px;
    height: 200px;
    margin: 4rem;
  }
`;
