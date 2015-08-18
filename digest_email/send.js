import mandrill from 'mandrill-api/mandrill';
import render from './render';

const mandrillClient = new mandrill.Mandrill(process.env.STOREKEEPER_MANDRIL_KEY);

render((html, images) => {
  const message = {
    "html": html,
    "subject": "Storekeeper Digest",
    "from_email": "r.hackr+storekeeper@gmail.com",
    "from_name": "Storekeeper",
    "to": [{
      "email": "r.hackr+storekeeper@gmail.com",
      "name": "Simon Hoejberg",
      "type": "to"
    }],
    'images': images
  };

  mandrillClient.messages.send({ message: message }, (result) => {
    console.log("Email sent");
  });
});
