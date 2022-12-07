

/**
 * This file will automatically be loaded by webpack and run in the "renderer" context.
 * To learn more about the differences between the "main" and the "renderer" context in
 * Electron, visit:
 *
 * https://electronjs.org/docs/latest/tutorial/process-model
 *
 * By default, Node.js integration in this file is disabled. When enabling Node.js integration
 * in a renderer process, please be aware of potential security implications. You can read
 * more about security risks here:
 *
 * https://electronjs.org/docs/tutorial/security
 *
 * To enable Node.js integration in this file, open up `main.js` and enable the `nodeIntegration`
 * flag:
 *
 * ```
 *  // Create the browser window.
 *  mainWindow = new BrowserWindow({
 *    width: 800,
 *    height: 600,
 *    webPreferences: {
 *      nodeIntegration: true
 *    }
 *  });
 * ```
 */

import './index.css';

console.log('👋 This message is being logged by "renderer.js", included via webpack');


async function onLoad(chemin = 0) {
    const files = await window.electronApi.getFiles();
    console.log(files);
    const body = document.querySelector('body');

    const ul = document.createElement('ul')

    for (const file of files[1]) {



        console.log(file);

        const li = document.createElement('li');


        const chemin = files[0] + "/" + file + "/";

        li.id = chemin;

        console.log(chemin);

        li.textContent = file;

        console.log(li);
        ul.appendChild(li);

        li.addEventListener("click", () => {
            reponse = true;
            onLoad(reponse);

        });


    }

    body.appendChild(ul);
}





onLoad(false);