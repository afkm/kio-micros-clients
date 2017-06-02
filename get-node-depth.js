#!/usr/bin/env node

'use strict';


var client = require('seneca')()
  .use('seneca-amqp-transport')
  .client({
    type: 'amqp',
    pin: 'cmd:getNode,cuid:*,depth:*',
    url: process.env.AMQP_URL
  });

client.act('cmd:getNode,cuid:cizr1mdh0001mols953xtfqlu,depth:2', (err, res) => {
  if (err) {
    throw err;
  }
  console.log(JSON.stringify(res));
  process.exit();
});
