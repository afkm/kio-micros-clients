#!/usr/bin/env node

'use strict';


var client = require('seneca')()
  .use('seneca-amqp-transport')
  .client({
    type: 'amqp',
    pin: 'cmd:updateNode,cuid:*,nodeTitle:*,nodeAttributes:*',
    url: process.env.AMQP_URL
  });

client.act('cmd:updateNode,cuid:cgsr1mdh2301mols953xtfrwl,nodeTitle:TestRoute,nodeAttributes:{path:/happyPub/}', (err, res) => {
  if (err) {
    throw err;
  }
  console.log(res);
  process.exit();
});
