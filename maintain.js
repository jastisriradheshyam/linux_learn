'use strict';
// Minimum Node JS version is 14.x.x
const fs = require('fs');

const getToolList = async (toolOrSubPath, parentRelativePath, level) => {
    let directoryList = '';
    const toolFileList = await fs.promises.readdir(toolOrSubPath);
    for (let index = 0; index < toolFileList.length; index++) {
        const toolFileDocOrDirName = toolFileList[index];
        const toolSubPath = `${toolOrSubPath}/${toolFileDocOrDirName}`;
        const toolSubPathStat = await fs.promises.stat(toolSubPath);
        const nextParentRelativePath = `${parentRelativePath}/${toolFileDocOrDirName}`;
        const indentationSpaces = '  '.repeat(level);
        if (toolSubPathStat.isDirectory()) {
            directoryList += `${indentationSpaces}- [${toolFileDocOrDirName}](${nextParentRelativePath})\n`;
            directoryList += await getToolList(toolSubPath, `${nextParentRelativePath}`, level + 1);
            continue;
        }
        const toolFileDocOrDirNameSplitted = toolFileDocOrDirName.split('.');
        if (toolFileDocOrDirNameSplitted.lastIndexOf('md') == toolFileDocOrDirNameSplitted.length - 1) {
            directoryList += `${indentationSpaces}- [${toolFileDocOrDirName}](${nextParentRelativePath})\n`;
        }
    }
    return directoryList;
}

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
        directoryList += `- ${toolName}\n`;
        directoryList += await getToolList(toolPath, `./${toolName}`, 1);
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

main().catch(err => {
    console.error("Maintenance script got error during execution: ", err); u
});