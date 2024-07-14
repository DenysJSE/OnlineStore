import { forwardRef } from 'react'
import { IField } from '@/ui/input/field.interface'
import cn from 'clsx'

const Field = forwardRef<HTMLInputElement, IField>(
	(
		{ placeholder, error, className, type = 'text', style, Icon, ...rest },
		ref
	) => {
		return (
			<div className={cn('mb-4', className)} style={style}>
				<label>
					{Icon && <Icon className='mr-3' />}
					<span className='mb-1 block'>{placeholder}</span>
					<input
						ref={ref}
						type={type}
						placeholder={placeholder}
						{...rest}
						className={cn(
							'px-4 py-2 w-full outline-none border border-gray border-solid focus:border-primary transition-all rounded-lg placeholder:opacity-50',
							{
								'border-red': !!error
							}
						)}
					/>
				</label>
				{error && <div className='text-red mt-1'>{error}</div>}
			</div>
		)
	}
)

// Field.displayName = 'Field'

export default Field
