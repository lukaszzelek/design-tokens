import React from 'react';
import Button from './Button';

export default { title: 'Button' };

export const Default = () => (
  <>
    <Button className="primary">Default Button</Button>
    <Button className="primary" disabled>Disabled Button</Button>
    <br />
    <Button className="secondary">Default Button</Button>
    <Button className="secondary" disabled>Disabled Button</Button>
    <br />
    <Button className="tertiary">Default Button</Button>
    <Button className="tertiary" disabled>Disabled Button</Button>
    <br />
    <Button className="subtle">Default Button</Button>
    <Button className="subtle" disabled>Disabled Button</Button>
    <br />
    <Button className="danger">Default Button</Button>
    <Button className="danger" disabled>Disabled Button</Button>
    <br />
  </>
);

export const withIcon = () => (
  "To do"
);

export const iconOnly = () => (
  "To do"
);
