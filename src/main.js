'use strict';
import {numA} from './a';
import reduce from 'lodash-es/reduce';
//import {reduce, filter} from 'lodash-es';
console.log(reduce([1, 2, 3], (pre, nxt)=> pre + nxt, 0));
//console.log(filter([1, 2, 3], item=> item==1));
console.log(numA());