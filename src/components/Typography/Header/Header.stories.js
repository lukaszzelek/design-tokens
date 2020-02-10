import React from 'react';
import Header from './Header';

export default { title: 'Typography' };

export const Headers = () => (
  <>
    <Header size="xxl">This is a H1</Header>
    <Header size="xl">This is a H2</Header>
    <Header size="l">This is a H3</Header>
    <Header size="m">This is a H4</Header>
    <Header size="s">This is a H5</Header>
    <Header size="xs">This is a H6</Header>
  </>
);
