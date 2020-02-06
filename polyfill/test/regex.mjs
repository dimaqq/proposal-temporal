import { absolute, datetime, date, time, timezone, yearmonth, monthday, offset, duration } from '../lib/regex.mjs';

import Demitasse from '@pipobscure/demitasse';
const { describe, it, report } = Demitasse;

import Pretty from '@pipobscure/demitasse-pretty';
const { reporter } = Pretty;

import assert from 'assert';

describe('fromString regex', ()=>{
  describe('absolute', () => {
    test(absolute, '1976-11-18T15:23+01:00[Europe/Vienna]');
    test(absolute, '1976-11-18T15:23:30+01:00[Europe/Vienna]');
    test(absolute, '1976-11-18T15:23:30.123+01:00[Europe/Vienna]');
    test(absolute, '1976-11-18T15:23:30.123456+01:00[Europe/Vienna]');
    test(absolute, '1976-11-18T15:23:30.123456789+01:00[Europe/Vienna]');
    test(absolute, '1976-11-18T15:23+01[Europe/Vienna]');
    test(absolute, '1976-11-18T15:23:30+01[Europe/Vienna]');
    test(absolute, '1976-11-18T15:23:30.123+01[Europe/Vienna]');
    test(absolute, '1976-11-18T15:23:30.123456+01[Europe/Vienna]');
    test(absolute, '1976-11-18T15:23:30.123456789+01[Europe/Vienna]');
    test(absolute, '1976-11-18T15:23+0100[Europe/Vienna]');
    test(absolute, '1976-11-18T15:23:30+0100[Europe/Vienna]');
    test(absolute, '1976-11-18T15:23:30.123+0100[Europe/Vienna]');
    test(absolute, '1976-11-18T15:23:30.123456+0100[Europe/Vienna]');
    test(absolute, '1976-11-18T15:23:30.123456789+0100[Europe/Vienna]');

    test(absolute, '1976-11-18T15:23-04:00');
    test(absolute, '1976-11-18T15:23:30-04:00');
    test(absolute, '1976-11-18T15:23:30.123-04:00');
    test(absolute, '1976-11-18T15:23:30.123456-04:00');
    test(absolute, '1976-11-18T15:23:30.123456789-04:00');
    test(absolute, '1976-11-18T15:23-04');
    test(absolute, '1976-11-18T15:23:30-04');
    test(absolute, '1976-11-18T15:23:30.123-04');
    test(absolute, '1976-11-18T15:23:30.123456-04');
    test(absolute, '1976-11-18T15:23:30.123456789-04');
    test(absolute, '1976-11-18T15:23-0400');
    test(absolute, '1976-11-18T15:23:30-0400');
    test(absolute, '1976-11-18T15:23:30.123-0400');
    test(absolute, '1976-11-18T15:23:30.123456-0400');
    test(absolute, '1976-11-18T15:23:30.123456789-0400');

    test(absolute, '1976-11-18T15:23Z');
    test(absolute, '1976-11-18T15:23:30Z');
    test(absolute, '1976-11-18T15:23:30.123Z');
    test(absolute, '1976-11-18T15:23:30.123456Z');
    test(absolute, '1976-11-18T15:23:30.123456789Z');

    test(absolute, '1976-11-18 15:23+01:00[Europe/Vienna]');
    test(absolute, '1976-11-18 15:23:30+01:00[Europe/Vienna]');
    test(absolute, '1976-11-18 15:23:30.123+01:00[Europe/Vienna]');
    test(absolute, '1976-11-18 15:23:30.123456+01:00[Europe/Vienna]');
    test(absolute, '1976-11-18 15:23:30.123456789+01:00[Europe/Vienna]');
    test(absolute, '1976-11-18 15:23+01[Europe/Vienna]');
    test(absolute, '1976-11-18 15:23:30+01[Europe/Vienna]');
    test(absolute, '1976-11-18 15:23:30.123+01[Europe/Vienna]');
    test(absolute, '1976-11-18 15:23:30.123456+01[Europe/Vienna]');
    test(absolute, '1976-11-18 15:23:30.123456789+01[Europe/Vienna]');
    test(absolute, '1976-11-18 15:23+0100[Europe/Vienna]');
    test(absolute, '1976-11-18 15:23:30+0100[Europe/Vienna]');
    test(absolute, '1976-11-18 15:23:30.123+0100[Europe/Vienna]');
    test(absolute, '1976-11-18 15:23:30.123456+0100[Europe/Vienna]');
    test(absolute, '1976-11-18 15:23:30.123456789+0100[Europe/Vienna]');

    test(absolute, '1976-11-18 15:23-04:00');
    test(absolute, '1976-11-18 15:23:30-04:00');
    test(absolute, '1976-11-18 15:23:30.123-04:00');
    test(absolute, '1976-11-18 15:23:30.123456-04:00');
    test(absolute, '1976-11-18 15:23:30.123456789-04:00');
    test(absolute, '1976-11-18 15:23-04');
    test(absolute, '1976-11-18 15:23:30-04');
    test(absolute, '1976-11-18 15:23:30.123-04');
    test(absolute, '1976-11-18 15:23:30.123456-04');
    test(absolute, '1976-11-18 15:23:30.123456789-04');
    test(absolute, '1976-11-18 15:23-0400');
    test(absolute, '1976-11-18 15:23:30-0400');
    test(absolute, '1976-11-18 15:23:30.123-0400');
    test(absolute, '1976-11-18 15:23:30.123456-0400');
    test(absolute, '1976-11-18 15:23:30.123456789-0400');

    test(absolute, '1976-11-18 15:23Z');
    test(absolute, '1976-11-18 15:23:30Z');
    test(absolute, '1976-11-18 15:23:30.123Z');
    test(absolute, '1976-11-18 15:23:30.123456Z');
    test(absolute, '1976-11-18 15:23:30.123456789Z');
  });

  describe('datetime', () => {
    test(datetime, '1976-11-18T15:23+0100[Europe/Vienna]');
    test(datetime, '1976-11-18T15:23:30+0100[Europe/Vienna]');
    test(datetime, '1976-11-18T15:23:30.123+0100[Europe/Vienna]');
    test(datetime, '1976-11-18T15:23:30.123456+0100[Europe/Vienna]');
    test(datetime, '1976-11-18T15:23:30.123456789+0100[Europe/Vienna]');
    test(datetime, '1976-11-18T15:23-0400');
    test(datetime, '1976-11-18T15:23:30-0400');
    test(datetime, '1976-11-18T15:23:30.123-0400');
    test(datetime, '1976-11-18T15:23:30.123456-0400');
    test(datetime, '1976-11-18T15:23:30.123456789-0400');
    test(datetime, '1976-11-18T15:23');
    test(datetime, '1976-11-18T15:23:30');
    test(datetime, '1976-11-18T15:23:30.123');
    test(datetime, '1976-11-18T15:23:30.123456');
    test(datetime, '1976-11-18T15:23:30.123456789');

    test(datetime, '1976-11-18 15:23+0100[Europe/Vienna]');
    test(datetime, '1976-11-18 15:23:30+0100[Europe/Vienna]');
    test(datetime, '1976-11-18 15:23:30.123+0100[Europe/Vienna]');
    test(datetime, '1976-11-18 15:23:30.123456+0100[Europe/Vienna]');
    test(datetime, '1976-11-18 15:23:30.123456789+0100[Europe/Vienna]');
    test(datetime, '1976-11-18 15:23-0400');
    test(datetime, '1976-11-18 15:23:30-0400');
    test(datetime, '1976-11-18 15:23:30.123-0400');
    test(datetime, '1976-11-18 15:23:30.123456-0400');
    test(datetime, '1976-11-18 15:23:30.123456789-0400');
    test(datetime, '1976-11-18 15:23');
    test(datetime, '1976-11-18 15:23:30');
    test(datetime, '1976-11-18 15:23:30.123');
    test(datetime, '1976-11-18 15:23:30.123456');
    test(datetime, '1976-11-18 15:23:30.123456789');
  });

  describe('date', () => {
    test(date, '1976-11-18T15:23+0100[Europe/Vienna]');
    test(date, '1976-11-18T15:23:30+0100[Europe/Vienna]');
    test(date, '1976-11-18T15:23:30.123+0100[Europe/Vienna]');
    test(date, '1976-11-18T15:23:30.123456+0100[Europe/Vienna]');
    test(date, '1976-11-18T15:23:30.123456789+0100[Europe/Vienna]');
    test(date, '1976-11-18T15:23-0400');
    test(date, '1976-11-18T15:23:30-0400');
    test(date, '1976-11-18T15:23:30.123-0400');
    test(date, '1976-11-18T15:23:30.123456-0400');
    test(date, '1976-11-18T15:23:30.123456789-0400');
    test(date, '1976-11-18T15:23');
    test(date, '1976-11-18T15:23:30');
    test(date, '1976-11-18T15:23:30.123');
    test(date, '1976-11-18T15:23:30.123456');
    test(date, '1976-11-18T15:23:30.123456789');
    test(date, '1976-11-18');
    test(date, '+999999-11-18');
    test(date, '-000300-11-18');
    test(date, '1976-11-18');
    test(date, '1512-11-18');
    test(date, '1976-11-18 15:23+0100[Europe/Vienna]');
    test(date, '1976-11-18 15:23:30+0100[Europe/Vienna]');
    test(date, '1976-11-18 15:23:30.123+0100[Europe/Vienna]');
    test(date, '1976-11-18 15:23:30.123456+0100[Europe/Vienna]');
    test(date, '1976-11-18 15:23:30.123456789+0100[Europe/Vienna]');
    test(date, '1976-11-18 15:23-0400');
    test(date, '1976-11-18 15:23:30-0400');
    test(date, '1976-11-18 15:23:30.123-0400');
    test(date, '1976-11-18 15:23:30.123456-0400');
    test(date, '1976-11-18 15:23:30.123456789-0400');
    test(date, '1976-11-18 15:23');
    test(date, '1976-11-18 15:23:30');
    test(date, '1976-11-18 15:23:30.123');
    test(date, '1976-11-18 15:23:30.123456');
    test(date, '1976-11-18 15:23:30.123456789');
  });

  describe('time', () => {
    test(time, '1976-11-18T15:23+0100[Europe/Vienna]');
    test(time, '1976-11-18T15:23:30+0100[Europe/Vienna]');
    test(time, '1976-11-18T15:23:30.123+0100[Europe/Vienna]');
    test(time, '1976-11-18T15:23:30.123456+0100[Europe/Vienna]');
    test(time, '1976-11-18T15:23:30.123456789+0100[Europe/Vienna]');
    test(time, '1976-11-18T15:23-0400');
    test(time, '1976-11-18T15:23:30-0400');
    test(time, '1976-11-18T15:23:30.123-0400');
    test(time, '1976-11-18T15:23:30.123456-0400');
    test(time, '1976-11-18T15:23:30.123456789-0400');
    test(time, '1976-11-18T15:23');
    test(time, '1976-11-18T15:23:30');
    test(time, '1976-11-18T15:23:30.123');
    test(time, '1976-11-18T15:23:30.123456');
    test(time, '1976-11-18T15:23:30.123456789');
    test(time, '15:23');
    test(time, '15:23:30');
    test(time, '15:23:30.123');
    test(time, '15:23:30.123456');
    test(time, '15:23:30.123456789');
    test(time, '1976-11-18 15:23+0100[Europe/Vienna]');
    test(time, '1976-11-18 15:23:30+0100[Europe/Vienna]');
    test(time, '1976-11-18 15:23:30.123+0100[Europe/Vienna]');
    test(time, '1976-11-18 15:23:30.123456+0100[Europe/Vienna]');
    test(time, '1976-11-18 15:23:30.123456789+0100[Europe/Vienna]');
    test(time, '1976-11-18 15:23-0400');
    test(time, '1976-11-18 15:23:30-0400');
    test(time, '1976-11-18 15:23:30.123-0400');
    test(time, '1976-11-18 15:23:30.123456-0400');
    test(time, '1976-11-18 15:23:30.123456789-0400');
    test(time, '1976-11-18 15:23');
    test(time, '1976-11-18 15:23:30');
    test(time, '1976-11-18 15:23:30.123');
    test(time, '1976-11-18 15:23:30.123456');
    test(time, '1976-11-18 15:23:30.123456789');
  });

  describe('yearmonth', () => {
    test(yearmonth, '1976-11-18T15:23+0100[Europe/Vienna]');
    test(yearmonth, '1976-11-18T15:23:30+0100[Europe/Vienna]');
    test(yearmonth, '1976-11-18T15:23:30.123+0100[Europe/Vienna]');
    test(yearmonth, '1976-11-18T15:23:30.123456+0100[Europe/Vienna]');
    test(yearmonth, '1976-11-18T15:23:30.123456789+0100[Europe/Vienna]');
    test(yearmonth, '1976-11-18T15:23-0400');
    test(yearmonth, '1976-11-18T15:23:30-0400');
    test(yearmonth, '1976-11-18T15:23:30.123-0400');
    test(yearmonth, '1976-11-18T15:23:30.123456-0400');
    test(yearmonth, '1976-11-18T15:23:30.123456789-0400');
    test(yearmonth, '1976-11-18T15:23');
    test(yearmonth, '1976-11-18T15:23:30');
    test(yearmonth, '1976-11-18T15:23:30.123');
    test(yearmonth, '1976-11-18T15:23:30.123456');
    test(yearmonth, '1976-11-18T15:23:30.123456789');
    test(yearmonth, '1976-11-18');
    test(yearmonth, '+999999-11-18');
    test(yearmonth, '-000300-11-18');
    test(yearmonth, '1976-11-18');
    test(yearmonth, '1512-11-18');
    test(yearmonth, '1976-11');
    test(yearmonth, '+999999-11');
    test(yearmonth, '-000300-11');
    test(yearmonth, '1976-11');
    test(yearmonth, '1512-11');
    test(yearmonth, '1976-11-18 15:23+0100[Europe/Vienna]');
    test(yearmonth, '1976-11-18 15:23:30+0100[Europe/Vienna]');
    test(yearmonth, '1976-11-18 15:23:30.123+0100[Europe/Vienna]');
    test(yearmonth, '1976-11-18 15:23:30.123456+0100[Europe/Vienna]');
    test(yearmonth, '1976-11-18 15:23:30.123456789+0100[Europe/Vienna]');
    test(yearmonth, '1976-11-18 15:23-0400');
    test(yearmonth, '1976-11-18 15:23:30-0400');
    test(yearmonth, '1976-11-18 15:23:30.123-0400');
    test(yearmonth, '1976-11-18 15:23:30.123456-0400');
    test(yearmonth, '1976-11-18 15:23:30.123456789-0400');
    test(yearmonth, '1976-11-18 15:23');
    test(yearmonth, '1976-11-18 15:23:30');
    test(yearmonth, '1976-11-18 15:23:30.123');
    test(yearmonth, '1976-11-18 15:23:30.123456');
    test(yearmonth, '1976-11-18 15:23:30.123456789');
  });

  describe('monthday', () => {
    test(monthday, '1976-11-18T15:23+0100[Europe/Vienna]');
    test(monthday, '1976-11-18T15:23:30+0100[Europe/Vienna]');
    test(monthday, '1976-11-18T15:23:30.123+0100[Europe/Vienna]');
    test(monthday, '1976-11-18T15:23:30.123456+0100[Europe/Vienna]');
    test(monthday, '1976-11-18T15:23:30.123456789+0100[Europe/Vienna]');
    test(monthday, '1976-11-18T15:23-0400');
    test(monthday, '1976-11-18T15:23:30-0400');
    test(monthday, '1976-11-18T15:23:30.123-0400');
    test(monthday, '1976-11-18T15:23:30.123456-0400');
    test(monthday, '1976-11-18T15:23:30.123456789-0400');
    test(monthday, '1976-11-18T15:23');
    test(monthday, '1976-11-18T15:23:30');
    test(monthday, '1976-11-18T15:23:30.123');
    test(monthday, '1976-11-18T15:23:30.123456');
    test(monthday, '1976-11-18T15:23:30.123456789');
    test(monthday, '1976-11-18');
    test(monthday, '+999999-11-18');
    test(monthday, '-000300-11-18');
    test(monthday, '1976-11-18');
    test(monthday, '1512-11-18');
    test(monthday, '1976-11-18');
    test(monthday, '11-18');
    test(monthday, '12-13');
    test(monthday, '02-02');
    test(monthday, '01-31');
    test(monthday, '1976-11-18 15:23+0100[Europe/Vienna]');
    test(monthday, '1976-11-18 15:23:30+0100[Europe/Vienna]');
    test(monthday, '1976-11-18 15:23:30.123+0100[Europe/Vienna]');
    test(monthday, '1976-11-18 15:23:30.123456+0100[Europe/Vienna]');
    test(monthday, '1976-11-18 15:23:30.123456789+0100[Europe/Vienna]');
    test(monthday, '1976-11-18 15:23-0400');
    test(monthday, '1976-11-18 15:23:30-0400');
    test(monthday, '1976-11-18 15:23:30.123-0400');
    test(monthday, '1976-11-18 15:23:30.123456-0400');
    test(monthday, '1976-11-18 15:23:30.123456789-0400');
    test(monthday, '1976-11-18 15:23');
    test(monthday, '1976-11-18 15:23:30');
    test(monthday, '1976-11-18 15:23:30.123');
    test(monthday, '1976-11-18 15:23:30.123456');
    test(monthday, '1976-11-18 15:23:30.123456789');
  });

  describe('offset', () => {
    test(offset, '+0000');
    test(offset, '-0000');
    test(offset, '+00:00');
    test(offset, '-00:00');
    test(offset, '+00');
    test(offset, '-00');
    test(offset, '+0300');
    test(offset, '-0300');
    test(offset, '+03:00');
    test(offset, '-03:00');
    test(offset, '+03');
    test(offset, '-03');
  });

  describe('timezone', () => {
    test(timezone, '1976-11-18T15:23+01:00[Europe/Vienna]');
    test(timezone, '1976-11-18T15:23:30+01:00[Europe/Vienna]');
    test(timezone, '1976-11-18T15:23:30.123+01:00[Europe/Vienna]');
    test(timezone, '1976-11-18T15:23:30.123456+01:00[Europe/Vienna]');
    test(timezone, '1976-11-18T15:23:30.123456789+01:00[Europe/Vienna]');
    test(timezone, '1976-11-18T15:23+0100[Europe/Vienna]');
    test(timezone, '1976-11-18T15:23:30+0100[Europe/Vienna]');
    test(timezone, '1976-11-18T15:23:30.123+0100[Europe/Vienna]');
    test(timezone, '1976-11-18T15:23:30.123456+0100[Europe/Vienna]');
    test(timezone, '1976-11-18T15:23:30.123456789+0100[Europe/Vienna]');
    test(timezone, '1976-11-18T15:23+01[Europe/Vienna]');
    test(timezone, '1976-11-18T15:23:30+01[Europe/Vienna]');
    test(timezone, '1976-11-18T15:23:30.123+01[Europe/Vienna]');
    test(timezone, '1976-11-18T15:23:30.123456+01[Europe/Vienna]');
    test(timezone, '1976-11-18T15:23:30.123456789+01[Europe/Vienna]');

    test(timezone, '1976-11-18T15:23-04:00');
    test(timezone, '1976-11-18T15:23:30-04:00');
    test(timezone, '1976-11-18T15:23:30.123-04:00');
    test(timezone, '1976-11-18T15:23:30.123456-04:00');
    test(timezone, '1976-11-18T15:23:30.123456789-04:00');
    test(timezone, '1976-11-18T15:23-0400');
    test(timezone, '1976-11-18T15:23:30-0400');
    test(timezone, '1976-11-18T15:23:30.123-0400');
    test(timezone, '1976-11-18T15:23:30.123456-0400');
    test(timezone, '1976-11-18T15:23:30.123456789-0400');
    test(timezone, '1976-11-18T15:23-04');
    test(timezone, '1976-11-18T15:23:30-04');
    test(timezone, '1976-11-18T15:23:30.123-04');
    test(timezone, '1976-11-18T15:23:30.123456-04');
    test(timezone, '1976-11-18T15:23:30.123456789-04');

    test(timezone, '1976-11-18T15:23Z');
    test(timezone, '1976-11-18T15:23:30Z');
    test(timezone, '1976-11-18T15:23:30.123Z');
    test(timezone, '1976-11-18T15:23:30.123456Z');
    test(timezone, '1976-11-18T15:23:30.123456789Z');

    test(timezone, '1976-11-18 15:23+01:00[Europe/Vienna]');
    test(timezone, '1976-11-18 15:23:30+01:00[Europe/Vienna]');
    test(timezone, '1976-11-18 15:23:30.123+01:00[Europe/Vienna]');
    test(timezone, '1976-11-18 15:23:30.123456+01:00[Europe/Vienna]');
    test(timezone, '1976-11-18 15:23:30.123456789+01:00[Europe/Vienna]');
    test(timezone, '1976-11-18 15:23+0100[Europe/Vienna]');
    test(timezone, '1976-11-18 15:23:30+0100[Europe/Vienna]');
    test(timezone, '1976-11-18 15:23:30.123+0100[Europe/Vienna]');
    test(timezone, '1976-11-18 15:23:30.123456+0100[Europe/Vienna]');
    test(timezone, '1976-11-18 15:23:30.123456789+0100[Europe/Vienna]');
    test(timezone, '1976-11-18 15:23+01[Europe/Vienna]');
    test(timezone, '1976-11-18 15:23:30+01[Europe/Vienna]');
    test(timezone, '1976-11-18 15:23:30.123+01[Europe/Vienna]');
    test(timezone, '1976-11-18 15:23:30.123456+01[Europe/Vienna]');
    test(timezone, '1976-11-18 15:23:30.123456789+01[Europe/Vienna]');

    test(timezone, '1976-11-18 15:23-04:00');
    test(timezone, '1976-11-18 15:23:30-04:00');
    test(timezone, '1976-11-18 15:23:30.123-04:00');
    test(timezone, '1976-11-18 15:23:30.123456-04:00');
    test(timezone, '1976-11-18 15:23:30.123456789-04:00');
    test(timezone, '1976-11-18 15:23-0400');
    test(timezone, '1976-11-18 15:23:30-0400');
    test(timezone, '1976-11-18 15:23:30.123-0400');
    test(timezone, '1976-11-18 15:23:30.123456-0400');
    test(timezone, '1976-11-18 15:23:30.123456789-0400');
    test(timezone, '1976-11-18 15:23-04');
    test(timezone, '1976-11-18 15:23:30-04');
    test(timezone, '1976-11-18 15:23:30.123-04');
    test(timezone, '1976-11-18 15:23:30.123456-04');
    test(timezone, '1976-11-18 15:23:30.123456789-04');

    test(timezone, '1976-11-18 15:23Z');
    test(timezone, '1976-11-18 15:23:30Z');
    test(timezone, '1976-11-18 15:23:30.123Z');
    test(timezone, '1976-11-18 15:23:30.123456Z');
    test(timezone, '1976-11-18 15:23:30.123456789Z');
  });

  describe('duration', () => {
    const day = ['', '1Y', '2M', '3D', '1Y2M', '1Y3D', '2M3D', '1Y2M3D'];
    const times = ['', '4H', '5M', '4H5M'];
    const sec = ['', '6S', '7.123S', '8.123456S', '9.123456789S', '0.123S', '0.123456S', '0.123456789S'];
    const tim = sec.reduce((arr, s) => arr.concat(times.map((p) => `${p}${s}`)), []);

    day.forEach((p) => test(duration, `P${p}`));
    tim.forEach((p) => test(duration, `PT${p}`));
    for (let d of day) {
      for (let t of tim) {
        test(duration, `P${d}T${t}`);
      }
    }
  });
});

function test(reg, str) {
  it(`${str}`, () => assert(!!reg.exec(str)));
}

import { normalize } from 'path';
if (normalize(import.meta.url.slice(8)) === normalize(process.argv[1]))
  report(reporter).then((failed) => process.exit(failed ? 1 : 0));