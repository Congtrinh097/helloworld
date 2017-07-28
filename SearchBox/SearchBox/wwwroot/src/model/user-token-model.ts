export interface UserInfoModel {
  Id?:number,
  userId: number,
  token: string,
  lastLoginDated: Date,
  expiredDated: Date,
  isRememberMe: boolean

}
