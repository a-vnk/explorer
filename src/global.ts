

export interface IElectronAPI {
  getFiles: () => Promise<string[]>,
  openFiles: (chemin:string) => Promise<string>
}
declare global {
  interface Window {
    electronApi: IElectronAPI
  }
}