import { FC } from 'react'
import { useActions } from '@/hooks/useActions'
import styles from './Carousel.module.scss'
import { BsCaretLeftSquare, BsCaretRightSquare } from 'react-icons/bs'

const CarouselNavigation: FC = () => {
	const { nextSlide, prevSlide } = useActions()

	return (
		<div className={styles.nav}>
			<button onClick={() => prevSlide}>
				<BsCaretLeftSquare />
			</button>
			<button onClick={() => nextSlide({ carouselLength: 2 })}>
				<BsCaretRightSquare />
			</button>
		</div>
	)
}

export default CarouselNavigation
