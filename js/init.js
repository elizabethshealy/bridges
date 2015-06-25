'use strict';

var $ = require('jquery');

$.ajax({
  url: 'data/bridges.data',
  method: 'GET'
})
  .then(function (data) {
    console.log (data);
});
