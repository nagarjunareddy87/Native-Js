var priceForDay = 40;

function rentalCarCost(d) {
  var discountPrice = 0;
  if(d >= 7)
  {
  discountPrice = 50;
  }
  else if(d >= 3)
  {
  discountPrice = 20;
  }
  return (d * priceForDay - discountPrice);
}