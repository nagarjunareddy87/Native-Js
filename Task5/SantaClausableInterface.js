function isSantaClausable(obj) {
  return obj.hasOwnProperty('sayHoHoHo') && obj.hasOwnProperty('distributeGifts')
    && obj.hasOwnProperty('goDownTheChimney');
}