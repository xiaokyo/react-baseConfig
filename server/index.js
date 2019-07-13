const express = require ('express');
const path = require ('path');
const app = express ();
const fs = require ('fs');

const ServerApp = require ('../dist/server/ssrApp.js').default;
const ReactDOMServer = require ('react-dom/server');

app.use ('/', express.static ('dist'));

const AppString = ReactDOMServer.renderToString (ServerApp);
// console.log (AppString);

const htmlTemplate = fs.readFileSync (
  path.join (__dirname, '../dist/app.html'),
  'utf-8'
);

const newHtml = htmlTemplate.replace ('<!-- app -->', AppString);

app.get ('/*', (req, res) => res.send (newHtml));

const port = process.env.PORT || 5000;
app.listen (port, () => console.log (`server on port ${port}`));
