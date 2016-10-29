'use strict';
import {numA} from './a';
import reduce from 'lodash/reduce';
console.log(reduce([1, 2, 3], (pre, nxt)=> pre + nxt, 0));
console.log(numA());