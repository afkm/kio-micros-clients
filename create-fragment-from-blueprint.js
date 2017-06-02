#!/usr/bin/env node

'use strict';


var client = require('seneca')()
  .use('seneca-amqp-transport')
  .client({
    type: 'amqp',
    pin: 'cmd:createFragment,fromBlueprint:*,asChildOf:*,title:*,isStartNode:*',
    url: process.env.AMQP_URL
  });

client.act('cmd:createFragment,fromBlueprint:lrtr1mdh2301mols98d9tfuwn,asChildOf:ciw6l6rz800063j5nv3zs8gpv,title:Fragment-Blueprint Test,isStartNode:true', (err, res) => {
  if (err) {
    throw err;
  }
  console.log(res);
  process.exit();
});
