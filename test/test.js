var simpeEnum = require('../index.js');

require("tape")("simpleEnum", function(t) {
    t.equals(simpeEnum('A', 'B', 'C').A, 0);
    t.equals(simpeEnum('A', 'B', 'C').B, 1);
    t.equals(simpeEnum('A', 'B', 'C').C, 2);
    t.end()
  })