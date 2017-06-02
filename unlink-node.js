#!/usr/bin/env node

'use strict';


var client = require('seneca')()
  .use('seneca-amqp-transport')
  .client({
    type: 'amqp',
    pin: 'cmd:unlinkNode,cuid:*,unlinkFrom:*',
    url: process.env.AMQP_URL
  });

client.act('cmd:unlinkNode,cuid:ciw6l7ju400093j5nj4w61666,unlinkFrom:ciw6l6rz800063j5nv3zs8gpv', (err, res) => {
  if (err) {
    throw err;
  }
  console.log(res);
  process.exit();
});
