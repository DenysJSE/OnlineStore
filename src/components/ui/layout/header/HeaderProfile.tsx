import { FC } from 'react'
import { useProfile } from '@/hooks/useProfile'
import Image from 'next/image'

const HeaderProfile: FC = () => {
	const { profile } = useProfile()

	return (
		<div>
			{profile?.avatarPath && (
				<Image
					src={profile?.avatarPath}
					alt={'profile'}
					width={43}
					height={43}
					className='rounded-full border-primary border border-solid animate-opacity'
				/>
			)}
		</div>
	)
}

export default HeaderProfile
