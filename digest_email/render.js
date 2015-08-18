import React from 'react';
import ReactDOMServer from 'react-dom/server';
import DigestEmail from './digest_email';
import fs from 'fs';
import juice from 'juice';
import Immutable from 'immutable';
import { jsdom } from 'jsdom';
import { exec } from 'child_process';

function render(callback) {
  const salesStats = Immutable.fromJS(
    JSON.parse(
      fs.readFileSync(__dirname + '/../data/sales_stats.json', { encoding: 'utf8' })
    ).map(parseFloat)
  );

  const css = fs.readFileSync(__dirname + '/styles.css', { encoding: 'utf8' });
  const html = juice.inlineContent(
    ReactDOMServer.renderToStaticMarkup(<DigestEmail salesStats={salesStats}/>),
    css
  );

  const document = jsdom(html);
  const svg = document.querySelector('svg');

  let pngData;
  exec(`echo '${svg.outerHTML}' | rsvg-convert | base64`, (err, stdout, stderr) => {
    pngData = stdout;

    let img = document.createElement('img');
    img.src = 'cid:salessparkline';
    svg.parentNode.replaceChild(img, svg);

    callback(document.querySelector('html').outerHTML, [
      {
        type: 'image/png',
        name: 'salessparkline',
        content: pngData,
      }
    ]);
  });
}

export default render;
