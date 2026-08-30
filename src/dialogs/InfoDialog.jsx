import React from 'react';
import Dialog from '../components/Dialog/Dialog.jsx';

export default function InfoDialog({ isOpen, onClose }) {
  return (
    <Dialog
      isOpen={isOpen}
      onClose={onClose}
      header={{
        icon: 'ℹ️',
        title: 'Information',
        buttons: [{ label: 'Close', closesDialog: true }]
      }}
      footer={{
        buttons: []
      }}
    >
      <p>This is a simple informational message with no footer actions.</p>
    </Dialog>
  );
}
