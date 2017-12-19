export const CartCalculate = {
	getTotalAmount(cart) {
		return cart.reduce((currentValue, item) => currentValue + (item.prize * item.amount), 0);
	}
}
