'use strict';
// Minimum Node JS version is 14.x.x
const fs = require('fs');

// Tools directory
const updateTools = async function () {
    const directoryName = './tools';
    // get the directory list
    const list = await fs.promises.readdir(directoryName);
    // sort in alphabetical order
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
            const toolFileDocNameSplitted = toolFileDocName.split('.');
            if (toolFileDocNameSplitted.lastIndexOf('md') == toolFileDocNameSplitted.length - 1) {
                directoryList += `  - [${toolFileDocName}](./${toolName}/${toolFileDocName})\n`;
            }
        }
    }
    let finalDoc = "# Tools\n\n";
    finalDoc += "## List\n\n";
    finalDoc += directoryList;
    fs.promises.writeFile(`${directoryName}/index.md`, finalDoc, { encoding: 'utf-8' });
};

const main = async function () {
    console.log("Maintenance script started");
    await updateTools();
    console.log("Maintenance script executed successfully");
};

main().catch(err=>{
    console.error("Maintenance script got error during execution: ", err);u
});