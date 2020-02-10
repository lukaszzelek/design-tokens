import React from 'react';
import Paragraph from './Paragraph';

export default { title: 'Typography' };

export const Paragraphs = () => (
  <>
    <Paragraph>This is a paragraph!</Paragraph>
    <Paragraph>This is a<br />multiline paragraph!<br />This it it's third line!</Paragraph>
  </>

);
