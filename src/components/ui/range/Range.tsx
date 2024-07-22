import { FC, useEffect, useState } from 'react'
import { useDebounce } from '@/hooks/useDebounce'
import styles from './Range.module.scss'

interface IRange {
	min?: number
	max?: number
	fromInitialValue?: string
	toInitialValue?: string
	onChangeFromValue: (value: string) => void
	onChangeToValue: (value: string) => void
}

const Range: FC<IRange> = ({
	min = 0,
	max,
	onChangeFromValue,
	onChangeToValue,
	fromInitialValue,
	toInitialValue
}) => {
	const [fromValue, setFromValue] = useState(fromInitialValue || '')
	const [toValue, setToValue] = useState(toInitialValue || '')

	const debounceFromValue = useDebounce(fromValue, 500)
	const debounceToValue = useDebounce(toValue, 500)

	useEffect(() => {
		onChangeFromValue(debounceFromValue)
	}, [debounceFromValue])

	useEffect(() => {
		onChangeToValue(debounceToValue)
	}, [debounceToValue])

	return (
		<div className={styles.range}>
			<input
				type='number'
				min={min}
				max={max}
				placeholder='From'
				value={fromValue}
				onChange={e => setFromValue(e.target.value)}
			/>
			{' - '}
			<input
				type='number'
				min={min}
				max={max}
				placeholder='To'
				value={toValue}
				onChange={e => setToValue(e.target.value)}
			/>
		</div>
	)
}

export default Range
