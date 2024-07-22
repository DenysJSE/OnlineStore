export function updateRatingsQuery(
	currentRatings: string | undefined,
	newRating: string
) {
	const ratingsArray = currentRatings ? String(currentRatings).split('|') : []

	const ratingIndex = ratingsArray.indexOf(newRating)

	if (ratingIndex === -1) {
		ratingsArray.push(newRating)
	} else {
		ratingsArray.slice(ratingIndex, 1)
	}

	return ratingsArray.join('|')
}
