import React from 'react';

export default function Button({ label, onClick, variant = 'default', disabled = false }) {
  const variantClass = variant !== 'default' ? ` btn--${variant}` : '';
  return (
    <button className={`btn${variantClass}`} onClick={onClick} disabled={disabled}>
      {label}
    </button>
  );
}
