'use strict';
// Minimum Node JS version is 14.x.x
const fs = require('fs');

// Tools directory
const updateTools = async function () {
    const directoryName = './tools';
    // get the directory list
    const list = await fs.promises.readdir(directoryName);
    // sort in alpabatical order
    list.sort();
    let directoryList = "";
    for (let index = 0; index < list.length; index++) {
        const toolName = list[index];
        const toolPath = `${directoryName}/${toolName}`;
        const toolPathStat = await fs.promises.stat(toolPath);
        if (!toolPathStat.isDirectory()) continue;
        const toolFileList = await fs.promises.readdir(toolPath);
        directoryList += `- ${toolName}\n`;
        for (let index = 0; index < toolFileList.length; index++) {
            const toolFileDocName = toolFileList[index];
            const toolFileDocNameSplited = toolFileDocName.split('.');
            if (toolFileDocNameSplited.lastIndexOf('md') == toolFileDocNameSplited.length - 1) {
                directoryList += `  - [${toolFileDocName}](./${toolName}/${toolFileDocName})\n`;
            }
        }
    }
    let finalDoc = "# Tools\n\n";
    finalDoc += "## List\n\n";
    finalDoc += directoryList;
    fs.promises.writeFile(`${directoryName}/index.md`, finalDoc, { encoding: 'utf-8' });
};

const main = function () {
    console.log("Maintance script started");
    updateTools();
};

main();