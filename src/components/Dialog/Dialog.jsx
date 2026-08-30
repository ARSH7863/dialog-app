import React from 'react';
import Header from '../Header/Header.jsx';
import Content from '../Content/Content.jsx';
import Footer from '../Footer/Footer.jsx';

export default function Dialog({ isOpen, onClose, header, footer, children }) {
  if (!isOpen) return null;

  const wrapClosing = (buttons = []) =>
    buttons.map((btn) => ({
      ...btn,
      onClick: () => {
        btn.onClick?.();
        if (btn.closesDialog) onClose?.();
      }
    }));

  return (
    <div className="dialog-overlay" onMouseDown={(e) => e.target === e.currentTarget && onClose?.()}>
      <div className="dialog" role="dialog" aria-modal="true" aria-label={header?.title}>
        <Header icon={header?.icon} title={header?.title} buttons={wrapClosing(header?.buttons)} />
        <Content>{children}</Content>
        <Footer description={footer?.description} buttons={wrapClosing(footer?.buttons)} />
      </div>
    </div>
  );
}
