#!/usr/bin/env node

'use strict';


var client = require('seneca')()
  .use('seneca-amqp-transport')
  .client({
    type: 'amqp',
    pin: 'cmd:addNode,cuid:*,nodeType:*,nodeTitle:*,nodeAttributes:*,linkOut:*,linkType:*,linkProps:*',
    url: process.env.AMQP_URL
  });

client.act('cmd:addNode,cuid:ciw6l7ju400093j5nj4w61666,nodeType:TestNodeType,nodeTitle:*** Micro$ervice Generated Node ***,nodeAttributes:{attr1:hey,attr2:there},linkOut:ciw6kettv00043j5na9r8v04z,linkType:LINKTYPE,linkProps:{as:test}', (err, res) => {
  if (err) {
    throw err;
  }
  console.log(res);
  process.exit();
});
