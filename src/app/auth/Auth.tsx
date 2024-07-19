'use client'

import { NextPage } from 'next'
import Button from '@/ui/button/Button'
import Heading from '@/ui/Heading'
import { useAuth } from '@/hooks/useAuth'
import { useActions } from '@/hooks/useActions'
import { useState } from 'react'
import { SubmitHandler, useForm } from 'react-hook-form'
import { IEmailPassword } from '@/store/user/user.interface'
import Field from '@/ui/input/Field'
import { validEmail } from '@/app/auth/valid-email'
import { useAuthRedirect } from '@/app/auth/useAuthRedirect'
import { LOGIN_METHOD, REGISTER_METHOD } from '@/constants/app.constants'

const Auth: NextPage = () => {
	useAuthRedirect()

	const { isLoading } = useAuth()

	const { login, register } = useActions()

	const [type, setType] = useState<
		typeof LOGIN_METHOD | typeof REGISTER_METHOD
	>(LOGIN_METHOD)

	const {
		register: formRegister,
		handleSubmit,
		formState: { errors },
		reset
	} = useForm<IEmailPassword>({
		mode: 'onChange'
	})

	const onSubmit: SubmitHandler<IEmailPassword> = data => {
		if (type === LOGIN_METHOD) {
			login(data)
		} else {
			register(data)
		}
		reset()
	}

	return (
		<section className='flex h-screen'>
			<form
				onSubmit={handleSubmit(onSubmit)}
				className='rounded-lg bg-white shadow-sm p-8 m-auto min-w-[450px]'
			>
				<Heading className='capitalize text-center mb-4'>{type}</Heading>
				{isLoading ? (
					'Loading...'
				) : (
					<>
						<Field
							{...formRegister('email', {
								required: 'Email is required',
								pattern: {
									value: validEmail,
									message: 'Please enter a valid email address'
								}
							})}
							placeholder='Email'
							error={errors.email?.message}
						/>
						<Field
							{...formRegister('password', {
								required: 'Password is required',
								minLength: {
									value: 6,
									message: 'Min length should more 6 symbols'
								}
							})}
							type='password'
							placeholder='Password'
							error={errors.password?.message}
						/>
						<Button type='submit' variant='orange' className='flex m-auto'>
							{type === LOGIN_METHOD ? 'Sign In' : 'Sign Up'}
						</Button>
						<div>
							<button
								type='button'
								onClick={() =>
									setType(
										type === LOGIN_METHOD ? REGISTER_METHOD : LOGIN_METHOD
									)
								}
								className='inline-block opacity-50 mt-3 w-full text-center'
							>
								{type === LOGIN_METHOD
									? "Let's create an account"
									: "Let's login into the system"}
							</button>
						</div>
					</>
				)}
			</form>
		</section>
	)
}

export default Auth
