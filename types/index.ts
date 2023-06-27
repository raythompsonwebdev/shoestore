export interface IUser {
  id?: string
  email?: string
  name?: string | null | undefined
  accessToken?: String
  emailVerified?:String

}

export interface LoginUserParams {
  email: string
  password: string
}
