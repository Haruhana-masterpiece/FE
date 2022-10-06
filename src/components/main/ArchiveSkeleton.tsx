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
  background-color: #bbb;
`;
