const { contextBridge, ipcRenderer } = require('electron');

contextBridge.exposeInMainWorld('nativeAPI', {
  notify: (title, body) => ipcRenderer.invoke('native:notify', { title, body }),
  pickFile: () => ipcRenderer.invoke('native:pick-file')
});
