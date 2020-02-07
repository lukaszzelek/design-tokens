import React from 'react';
import Button from './Button';

export default { title: 'Button' };

export const Variants = () => (
  <>
    <Button>Primary Button</Button>
    <Button disabled>Primary Button Disabled</Button>
    <br />
    <Button variant="secondary">Secondary Button</Button>
    <Button variant="secondary" disabled>Secondary Button Disabled</Button>
    <br />
    <Button variant="tertiary">Teriary Button</Button>
    <Button variant="tertiary" disabled>Teriary Button Disabled</Button>
    <br />
    <Button variant="subtle">Subtle Button</Button>
    <Button variant="subtle" disabled>Subtle Button Disabled</Button>
    <br />
    <Button variant="danger">Danger Button</Button>
    <Button variant="danger" disabled>Danger Button Disabled</Button>
    <br />
  </>
);

export const sizes = () => (
  <>
    <Button size="x-small">X-small Button</Button>
    <br />
    <Button size="small">Small Button</Button>
    <br />
    <Button>Medium Button</Button>
    <br />
    <Button size="large">Large Button</Button>
    <br />
    <Button size="x-large">X-large Button</Button>
    <br />
  </>
);

export const withIcon = () => (
  "To do"
);

export const iconOnly = () => (
  "To do"
);
