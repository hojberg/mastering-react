/* @flow */
var numeral = require('numeral');
var moment = require('moment');
var Moment = moment().constructor;

function toMoney(num: number) : string {
  return numeral(num).format('$0,0.00');
};

function toDateTime(mom: Moment) : string {
  return mom.format('MMM D, h:mma');
};

function toTitleCase(str: string) : string {
  return str.replace(/\w\S*/g, (txt) => {
    return txt.charAt(0).toUpperCase() + txt.substr(1).toLowerCase();
  });
};

module.exports = { toMoney, toDateTime, toTitleCase };
