import React from 'react';
import ButtonGroup from '../ButtonGroup/ButtonGroup.jsx';

export default function Footer({ description, buttons = [] }) {
  return (
    <div className="dialog__footer">
      {description ? (
        <span className="dialog__footer-description">{description}</span>
      ) : (
        <span />
      )}
      <ButtonGroup buttons={buttons} />
    </div>
  );
}
