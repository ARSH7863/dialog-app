import React, { useState } from 'react';
import Dialog from '../components/Dialog/Dialog.jsx';

export default function SettingsDialog({ isOpen, onClose }) {
  const [filePath, setFilePath] = useState(null);

  const handlePickFile = async () => {
    if (window.nativeAPI && typeof window.nativeAPI.pickFile === 'function') {
      const result = await window.nativeAPI.pickFile();
      if (!result.canceled && result.filePath) {
        setFilePath(result.filePath);
      }
    } else {
      // Fallback for browser mode: open the native OS file picker
      const input = document.createElement('input');
      input.type = 'file';
      input.onchange = (e) => {
        const file = e.target.files?.[0];
        if (file) {
          setFilePath(file.name);
        }
      };
      input.click();
    }
  };

  const handleSave = async () => {
    if (window.nativeAPI && typeof window.nativeAPI.notify === 'function') {
      await window.nativeAPI.notify('Settings saved', 'Your changes were applied successfully.');
    } else if ('Notification' in window && Notification.permission === 'granted') {
      new Notification('Settings saved', { body: 'Your changes were applied successfully.' });
    } else {
      alert('Settings saved: Your changes were applied successfully.');
    }
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
