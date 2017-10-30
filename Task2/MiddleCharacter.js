function getMiddle(s) {
    var start;
    var end;
    if (s.length % 2 == 1) {
        start = s.length / 2;
        end = start + 1;
    } else {
        start = s.length / 2 - 1;
        end = start + 2;
    }
    return s.substring(start, end);
}