#!/usr/bin/env node

'use strict';


var client = require('seneca')()
  .use('seneca-amqp-transport')
  .client({
    type: 'amqp',
    pin: 'cmd:getNode,route:*',
    url: process.env.AMQP_URL
  });

client.act('cmd:getNode,route:cgsr1mdh2301mols953xtfrwl', (err, res) => {
  if (err) {
    throw err;
  }
  console.log(res);
  process.exit();
});
