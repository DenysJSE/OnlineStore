import { FC } from 'react'
import { useProfile } from '@/hooks/useProfile'
import Image from 'next/image'
import { useOutside } from '@/hooks/useOutside'
import Link from 'next/link'

const HeaderProfile: FC = () => {
	const { profile } = useProfile()
	const { isShow, setIsShow, ref } = useOutside(false)

	if (!profile?.avatarPath) return null

	return (
		<div className='relative' ref={ref}>
			<button onClick={() => setIsShow(!isShow)}>
				<Image
					src={profile?.avatarPath}
					alt={'profile'}
					width={43}
					height={43}
					className='rounded-full border-primary border border-solid animate-opacity'
				/>
			</button>
			{isShow && (
				<div
					className='absolute w-40 right-2 z-20'
					style={{ top: 'calc(100% + 1rem)' }}
				>
					<Link
						href='/my-orders'
						className='bg-white shadow py-2 px-4 block w-full rounded-md hover:text-primary duration-300 transition-colors'
					>
						My orders
					</Link>
				</div>
			)}
		</div>
	)
}

export default HeaderProfile
