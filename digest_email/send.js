import React from 'react';
import ReactDOMServer from 'react-dom/server';
import DigestEmail from './digest_email';
import fs from 'fs';
import juice from 'juice';
import mandrill from 'mandrill-api/mandrill';

const mandrillClient = new mandrill.Mandrill(process.env.STOREKEEPER_MANDRIL_KEY);

const css = fs.readFileSync(__dirname + '/styles.css', { encoding: 'utf8' });
const html = juice.inlineContent(
  ReactDOMServer.renderToStaticMarkup(<DigestEmail />),
  css
);

const message = {
  "html": html,
  "subject": "Storekeeper Digest",
  "from_email": "r.hackr+storekeeper@gmail.com",
  "from_name": "Storekeeper",
  "to": [{
    "email": "r.hackr+storekeeper@gmail.com",
    "name": "Simon Hoejberg",
    "type": "to"
  }]
};

mandrillClient.messages.send({ message: message }, (result) => {
  console.log("Email sent");
});
