const showdown = require('showdown');
const fs = require('fs');
const path = require('path');

const mdPath = path.join(__dirname, '../README.md');
const mdContent = fs.readFileSync(mdPath, 'utf8');
const mdConvert = new showdown.Converter({ tables: true, metadata: true });
const mdHtml = mdConvert.makeHtml(mdContent).replace(/\{/g, () => '&#123;');
const docHtmlPath = path.join(__dirname, '../src/app/docs/docs.component.html');
fs.writeFileSync(docHtmlPath, mdHtml, 'utf8');
