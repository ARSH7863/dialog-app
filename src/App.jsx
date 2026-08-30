import React, { useState } from 'react';
import InfoDialog from './dialogs/InfoDialog.jsx';
import ConfirmDialog from './dialogs/ConfirmDialog.jsx';
import SettingsDialog from './dialogs/SettingsDialog.jsx';

export default function App() {
  const [openDialog, setOpenDialog] = useState(null);

  return (
    <div className="app">
      <h1>Dialog System Demo</h1>
      <p>Three independently configured dialogs, all built from the same 7 sub-components.</p>

      <div className="app__launchers">
        <button className="btn btn--primary" onClick={() => setOpenDialog('info')}>
          Open Info
        </button>
        <button className="btn btn--primary" onClick={() => setOpenDialog('confirm')}>
          Open Confirm
        </button>
        <button className="btn btn--primary" onClick={() => setOpenDialog('settings')}>
          Open Settings
        </button>
      </div>

      <InfoDialog isOpen={openDialog === 'info'} onClose={() => setOpenDialog(null)} />

      <ConfirmDialog
        isOpen={openDialog === 'confirm'}
        onClose={() => setOpenDialog(null)}
        onConfirm={() => console.log('Confirmed!')}
      />

      <SettingsDialog isOpen={openDialog === 'settings'} onClose={() => setOpenDialog(null)} />
    </div>
  );
}
