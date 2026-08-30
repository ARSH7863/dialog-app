import React from 'react';

export default function IconText({ icon, text }) {
  return (
    <div className="icon-text">
      {icon && <span className="icon-text__icon">{icon}</span>}
      <span className="icon-text__label">{text}</span>
    </div>
  );
}
