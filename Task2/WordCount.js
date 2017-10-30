function countWords(str) {
    if (str.length == 0) {
        return 0;
    }
    else {
        return str
            .trim().replace(/\s+/gi, ' ').split(' ').length;
    }
}