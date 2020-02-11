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
    <Button variant="tertiary">Tertiary Button</Button>
    <Button variant="tertiary" disabled>Tertiary Button Disabled</Button>
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

const icon = (
  <svg width="20" height="20">
    <rect rx="3" ry="3" width="100%" height="100%" fill="white"/>
  </svg>
);

export const withIcon = () => (
  <>
    <Button size="x-small" icon={icon}>X-Small Icon After</Button>
    <Button size="x-small" icon={icon} iconPosition="before">X-Small Icon Before</Button>
    <br />
    <Button size="small" icon={icon}>Small Icon After</Button>
    <Button size="small" icon={icon} iconPosition="before">Small Icon Before</Button>
    <br />
    <Button icon={icon}>Medium Icon After</Button>
    <Button icon={icon} iconPosition="before">Medium Icon Before</Button>
    <br />
    <Button size="large" icon={icon}>Large Icon After</Button>
    <Button size="large" icon={icon} iconPosition="before">Large Icon Before</Button>
    <br />
    <Button size="x-large" icon={icon}>X-Large Icon After</Button>
    <Button size="x-large" icon={icon} iconPosition="before">X-Large Icon Before</Button>
    <br />
  </>
);

export const iconOnly = () => (
  "To do"
);
