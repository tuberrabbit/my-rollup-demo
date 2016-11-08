'use strict';
import {numA} from './a';
import _ from 'lodash';
//import {reduce, filter} from 'lodash-es';
console.log(_.reduce([1, 2, 3], (pre, nxt)=> pre + nxt, 0));
console.log(_.filter([1, 2, 3], item=> item > 1));
console.log(_.map([1, 2, 3], item=> item));
//console.log(filter([1, 2, 3], item=> item==1));
console.log(numA());