const router = require('express').Router();
const sampleData = require('../../data.json');

router.route('/')
  .get((req, res) => {
    res.send(sampleData);
  })
  .post((req, res) => {
    // save credentials
  })
;

module.exports = router;

