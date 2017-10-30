function partitionOn(pred, items) {
    evens = [], odds = [];
    for (n in items) {
        pred(items[n]) ? evens.push(items[n]) : odds.push(items[n]);
    }
    resultarray = odds.concat(evens);
    for (i = 0; i < items.length; i++) {
        items[i] = resultarray[i];
    }
    return odds.length;
}