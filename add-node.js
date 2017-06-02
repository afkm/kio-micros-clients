#!/usr/bin/env node

'use strict';


var client = require('seneca')()
  .use('seneca-amqp-transport')
  .client({
    type: 'amqp',
    pin: 'cmd:addNode,cuid:*,nodeType:*,nodeTitle:*',
    url: process.env.AMQP_URL
  });

client.act('cmd:addNode,cuid:ciw6l7ju400093j5nj4w61666,nodeType:TestNodeType,nodeTitle:*** Micro$ervice Generated Node ***', (err, res) => {
  if (err) {
    throw err;
  }
  console.log(res);
  process.exit();
});
