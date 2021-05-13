function vidurineRaide(text) {
    if (text === '') {
        return '';
    }

    const ilgis = text.length;
    const vidurinesRaidesPozicija = Math.ceil(ilgis / 2 - 1);
    return text[vidurinesRaidesPozicija];
}

export { vidurineRaide }



/* tetis -> t 
1.5

mano -> a
1

*/