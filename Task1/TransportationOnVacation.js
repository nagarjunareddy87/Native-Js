function rentalCarCost(noOfDays) {
	var pricePerDay = 40, discountPrice = 0;
	if (noOfDays >= 7) {
		discountPrice = 50;
	} else if (noOfDays >= 3) {
		discountPrice = 20;
	}
	return ((noOfDays * pricePerDay) - discountPrice);
}