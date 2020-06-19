const Express = require('express');
const App = Express();
const BodyParser = require('body-parser');
const PORT = 8001;
const resumeData = require("./resumeData");

// Express Configuration
App.use(BodyParser.urlencoded({ extended: false }));
App.use(Express.static('public'));

// Sample GET route
App.get('/api/data', (req, res) => res.json({
  data: resumeData
})
);

App.listen(PORT, () => {
  // eslint-disable-next-line no-console
  console.log(`Express seems to be listening on port ${PORT} so that's pretty good 👍`);
});