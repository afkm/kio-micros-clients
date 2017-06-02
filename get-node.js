#!/usr/bin/env node

'use strict';


var client = require('seneca')()
  .use('seneca-amqp-transport')
  .client({
    type: 'amqp',
    pin: 'cmd:getNode,cuid:*',
    url: process.env.AMQP_URL
  });

client.act('cmd:getNode,cuid:cizr1mdh0001mols953xtfqlu', (err, res) => {
  if (err) {
    throw err;
  }
  console.log(res);
  process.exit();
});
