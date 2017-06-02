#!/usr/bin/env node

'use strict';


var client = require('seneca')()
  .use('seneca-amqp-transport')
  .client({
    type: 'amqp',
    pin: 'cmd:linkNode,cuid:*,linkTo:*,linkType:*,linkProps:*',
    url: process.env.AMQP_URL
  });

client.act('cmd:linkNode,cuid:cgsr1mdh2301mols953xtfrwl,linkTo:ciw6l6rz800063j5nv3zs8gpv,linkType:ROUTES_TO,linkProps:{}', (err, res) => {
  if (err) {
    throw err;
  }
  console.log(res);
  process.exit();
});
