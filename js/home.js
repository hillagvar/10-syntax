// IMPORT
import { suma } from './components/algebra/suma.js';
import { dalyba } from './components/algebra/dalyba.js';
import { skirtumas } from './components/algebra/skirtumas.js';
import { sandauga } from './components/algebra/sandauga.js';
import { kvadratas } from './components/algebra/kvadratas.js';
import { vidurkis } from './components/algebra/vidurkis.js';

import { vientisasTekstas} from './components/tekstas/vientisasTekstas.js';

// EXECUTION

const a = suma (8,5);
console.log(a);

const b = skirtumas(8,5);
console.log(b);

const c = sandauga(8,5);
console.log(c);

const d = dalyba(8,5);
console.log(d);

const e = kvadratas(8);
console.log(e);

const f = vidurkis([10,8]);
console.log(f);

const s1 = vientisasTekstas(['labas', 'rytas']);
console.log(s1, '->', 'lbsrts');

const s2 = vientisasTekstas(['mano', 'namas', 'yra', 'geltonas']);
console.log(s2, '->', 'maonmsyragts');

const s3 = vientisasTekstas(['as', 'i', 'ten']);
console.log(s3, '->', 'aasiiiten');

const s4 = vientisasTekstas(['']);
console.log(s4, '->', '');

const s5 = vientisasTekstas(['x']);
console.log(s5, '->', 'xxx');