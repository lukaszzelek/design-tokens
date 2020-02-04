import React from 'react';
import Header from './Header';

export default { title: 'Typography' };

export const Headers = () => (
  <>
    <Header size="1">This is a H1</Header>
    <Header size="2">This is a H2</Header>
    <Header size="3">This is a H3</Header>
    <Header size="4">This is a H4</Header>
    <Header size="5">This is a H5</Header>
    <Header size="6">This is a H6</Header>
  </>
);
