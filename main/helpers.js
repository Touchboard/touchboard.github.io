const helpers = {
	map(value, aMin, aMax, bMin, bMax, clamp) {
		var x =
			clamp == true
				? value < aMin
					? aMin
					: value > aMax
					? aMax
					: value
				: value
		return ((x - aMin) / (aMax - aMin)) * (bMax - bMin) + bMin
	},
}
