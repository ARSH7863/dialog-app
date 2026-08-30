import React, { useState } from 'react';
import Dialog from '../components/Dialog/Dialog.jsx';

export default function SettingsDialog({ isOpen, onClose }) {
  const [filePath, setFilePath] = useState(null);

  const handlePickFile = async () => {
    const result = await window.nativeAPI.pickFile();
    if (!result.canceled) setFilePath(result.filePath);
  };

  const handleSave = async () => {
    await window.nativeAPI.notify('Settings saved', 'Your changes were applied successfully.');
  };

  return (
    <Dialog
      isOpen={isOpen}
      onClose={onClose}
      header={{
        icon: '⚙️',
        title: 'Settings',
        buttons: [
          { label: 'Help', onClick: () => window.nativeAPI.notify('Help', 'Settings help goes here.') },
          { label: 'Minimize', onClick: () => {} },
          { label: 'Close', closesDialog: true }
        ]
      }}
      footer={{
        description: 'Changes are applied immediately.',
        buttons: [
          { label: 'Cancel', closesDialog: true },
          { label: 'Apply', variant: 'default', onClick: handleSave },
          { label: 'Save', variant: 'primary', closesDialog: true, onClick: handleSave }
        ]
      }}
    >
      <p>Pick a config file using the native OS file picker:</p>
      <button className="btn" onClick={handlePickFile}>
        Choose File
      </button>
      {filePath && <p style={{ fontSize: 13, color: '#555', marginTop: 8 }}>Selected: {filePath}</p>}
    </Dialog>
  );
}
