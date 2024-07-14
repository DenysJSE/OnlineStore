export type LeaveReviewDataType = {
	rating: number
	text: string
}

export type UpdateUserProfileDataType = {
	email: string
	password?: string
	name?: string
	avatarPath?: string
	phone?: string
}

export type TypeStatisticResponse = {
	name: string
	value: number
}[]
