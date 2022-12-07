// See the Electron documentation for details on how to use preload scripts:
// https://www.electronjs.org/docs/latest/tutorial/process-model#preload-scripts

import { contextBridge, ipcRenderer } from "electron";


contextBridge.exposeInMainWorld('electronApi', {
    getFiles : () => ipcRenderer.invoke('get-files'),
    openFiles : (chemin : string) => ipcRenderer.invoke('open-files', chemin)
});