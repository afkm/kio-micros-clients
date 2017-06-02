#!/usr/bin/env node

'use strict';


var client = require('seneca')()
  .use('seneca-amqp-transport')
  .client({
    type: 'amqp',
    pin: 'cmd:removeNode,cuid:*',
    url: process.env.AMQP_URL
  });

client.act('cmd:removeNode,cuid:ciw6l7ju400093j5nj4w61666', (err, res) => {
  if (err) {
    throw err;
  }
  console.log(res);
  process.exit();
});
