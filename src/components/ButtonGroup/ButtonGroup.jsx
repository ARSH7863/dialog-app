import React from 'react';
import Button from '../Button/Button.jsx';

export default function ButtonGroup({ buttons = [] }) {
  if (buttons.length === 0) return null;

  return (
    <div className="btn-group">
      {buttons.map((btn, i) => (
        <Button
          key={btn.key ?? `${btn.label}-${i}`}
          label={btn.label}
          onClick={btn.onClick}
          variant={btn.variant}
          disabled={btn.disabled}
        />
      ))}
    </div>
  );
}
