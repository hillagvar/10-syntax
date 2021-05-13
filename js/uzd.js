
/* parasyti funkcija:
duoto zodzio pirma raide
duoto zodio vidurine raide
duoto zodzio paskutine raide
ar duoto zodzio N-oji raide yra didzioji? true/false
ar duoto zodzio N-oji raide yra mazoji? true/false
*/

const pirmaRaide2 = zodis => zodis[0];

export { pirmaRaide2 }


function didziojiRaide(zodis,n) {

    if (zodis[n - 1] === zodis[n - 1].toUpperCase()) {
    return true;
    }

    return false;
}

export { didziojiRaide }