let express = require('express');
let lottoController = require('./controller/lotto.controller');

let router = express();
router.listen(8000, () => {
    console.log('Server is running.')
});

router.get('/', (req, res) => {
    res.send('Hello, Node.js');
});

router.route("/lotto/")
    .get(lottoController.getLotto);

router.route("/lotto/:number")
    .get(lottoController.getLotto);
