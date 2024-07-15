import { FC } from 'react'
import { useProfile } from '@/hooks/useProfile'
import { useMutation, useQueryClient } from '@tanstack/react-query'
import { UserService } from '@/services/user.service'
import { AiFillHeart, AiOutlineHeart } from 'react-icons/ai'

const FavoriteButton: FC<{ productId: number }> = ({ productId }) => {
	const { profile } = useProfile()

	const queryClient = useQueryClient()

	const { mutate } = useMutation({
		mutationKey: ['toggle favorite'],
		mutationFn: () => UserService.toggleFavorite(productId),
		onSuccess: () => {
			queryClient.invalidateQueries({ queryKey: ['get profile'] })
		}
	})

	if (!profile) return null

	const isExist = profile.favorites.some(favorite => favorite.id === productId)

	return (
		<div>
			<button onClick={() => mutate()} className='text-primary'>
				{isExist ? <AiFillHeart /> : <AiOutlineHeart />}
			</button>
		</div>
	)
}

export default FavoriteButton
