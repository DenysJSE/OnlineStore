import { IUser } from '@/types/user.interface'

export interface IReview {
	id: number
	user: IUser
	createdAt: string
	text: string
	rating: number
}
