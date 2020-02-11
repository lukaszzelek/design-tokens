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

const largeIcon = (
  <svg width="24" height="24">
    <rect rx="3" ry="3" width="24" height="24" fill="white"/>
  </svg>
);

const mediumIcon = (
  <svg width="20" height="20">
    <rect rx="3" ry="3" width="20" height="20" fill="white"/>
  </svg>
);

const smallIcon = (
  <svg width="16" height="16">
    <rect rx="3" ry="3" width="16" height="16" fill="white"/>
  </svg>
);

export const withIcon = () => (
  <>
    <Button size="x-small" icon={smallIcon}>X-Small Icon After</Button>
    <Button size="x-small" icon={smallIcon} iconPosition="before">X-Small Icon Before</Button>
    <br />
    <Button size="small" icon={smallIcon}>Small Icon After</Button>
    <Button size="small" icon={smallIcon} iconPosition="before">Small Icon Before</Button>
    <br />
    <Button icon={mediumIcon}>Medium Icon After</Button>
    <Button icon={mediumIcon} iconPosition="before">Medium Icon Before</Button>
    <br />
    <Button size="large" icon={mediumIcon}>Large Icon After</Button>
    <Button size="large" icon={mediumIcon} iconPosition="before">Large Icon Before</Button>
    <br />
    <Button size="x-large" icon={largeIcon}>X-Large Icon After</Button>
    <Button size="x-large" icon={largeIcon} iconPosition="before">X-Large Icon Before</Button>
    <br />
  </>
);

export const iconOnly = () => (
  "To do"
);
