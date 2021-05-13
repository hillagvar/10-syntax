/*
duodamas array of strings
gauti vientisa string, kuris sudarytas is
-zodzio pirmos raides
-zodzio vidurines raides
-zodzio paskutines raides

TESTAI:
vientisasTekstas(['labas', 'rytas']) ---> lbsrts
vientisasTekstas(['mano', 'namas', 'yra', 'geltonas']) ---> maonmsyragts
vientisasTekstas(['as', 'i', 'ten']) ---> aasiiiten

FUNKCIJOS:
function vientisasTekstas - sujungia array i vientisa string
function pirmaRaide('labas') --> l
function vidurineRaide('labas') --> b
function paskutineRaide('labas') -- s

*/

import { pirmaRaide } from './pirmaRaide.js';
import { vidurineRaide } from './vidurineRaide.js';
import { paskutineRaide } from './paskutineRaide.js';


function vientisasTekstas(textList) {
    let answer = '';

    for (let i = 0; i < textList.length; i++) {
        const text = textList[i];
        answer += pirmaRaide(text);
        answer += vidurineRaide(text);
        answer += paskutineRaide(text);
    }

    return answer;
}

export { vientisasTekstas }