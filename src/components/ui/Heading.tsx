import { FC, PropsWithChildren } from 'react'
import cn from 'clsx'

interface IHeading {
	className?: string
}

const Heading: FC<PropsWithChildren<IHeading>> = ({ className, children }) => {
	return <h1 className={cn('font-semibold text-2xl', className)}>{children}</h1>
}

export default Heading
