import React from 'react';
import styled from 'styled-components';

function ArchiveSkeleton() {
  function ArtContainerSkeleton() {
    const addSkeleton = [];
    for (let i = 0; i < 16; i += 1) {
      addSkeleton.push(i);
    }
    return addSkeleton.map((i: number) => {
      return <ArtContainerSkeletonStyle key={i} />;
    });
  }
  return <ArchiveSkeletonStyle>{ArtContainerSkeleton()}</ArchiveSkeletonStyle>;
}

export default ArchiveSkeleton;

const ArchiveSkeletonStyle = styled.div`
  display: grid;
  grid-template-areas: 'a a a a';
  width: 100%;
  height: auto;
`;

const ArtContainerSkeletonStyle = styled.div`
  margin: 2rem;
  width: 250px;
  height: 250px;
  border-radius: 5px;
  cursor: progress;
  background: linear-gradient(0.25turn, transparent, #fff, transparent), linear-gradient(#eee, #eee),
    radial-gradient(38px circle at 19px 19px, #eee 50%, transparent 51%), linear-gradient(#eee, #eee);
  background-repeat: no-repeat;
  animation: loading 2s infinite;
  @keyframes loading {
    to {
      background-position: 250px 0, 0 0, 0 250px, 50px 250px;
    }
  }
`;
