import React from 'react';
import IconText from '../IconText/IconText.jsx';
import ButtonGroup from '../ButtonGroup/ButtonGroup.jsx';

export default function Header({ icon, title, buttons = [] }) {
  return (
    <div className="dialog__header">
      <IconText icon={icon} text={title} />
      <ButtonGroup buttons={buttons} />
    </div>
  );
}
