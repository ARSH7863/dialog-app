import React from 'react';
import Dialog from '../components/Dialog/Dialog.jsx';

export default function ConfirmDialog({ isOpen, onClose, onConfirm }) {
  return (
    <Dialog
      isOpen={isOpen}
      onClose={onClose}
      header={{
        icon: '⚠️',
        title: 'Confirmation',
        buttons: []
      }}
      footer={{
        description: 'This action cannot be undone.',
        buttons: [
          { label: 'Reject', variant: 'default', closesDialog: true },
          {
            label: 'Confirm',
            variant: 'danger',
            closesDialog: true,
            onClick: () => onConfirm?.()
          }
        ]
      }}
    >
      <p>Are you sure you want to proceed with this action?</p>
    </Dialog>
  );
}
