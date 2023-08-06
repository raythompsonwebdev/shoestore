import { signIn } from 'next-auth/react'
import { LoginUserParams } from '../types'

export const loginUser = async ({ email, password }: LoginUserParams) => {
  const result = await signIn('credentials', {
    redirect: false,
    email,
    password,
    callbackUrl: '/',
  })

  return result
}

export const formatPrice = (price: number) => {
  if(!price){
    return "number is needed"
  }
    const result = new Intl.NumberFormat('en-GB', { style: 'currency', currency: 'GBP' }).format(price);
    return result;
}
