function paskutineRaide(text) {
    if (text === '') {
        return '';
    }

    return text[text.length - 1];
}

export { paskutineRaide }