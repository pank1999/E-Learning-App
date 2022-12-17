export interface RegisterUser {
  Name: string;
  EmailId: string;
  DOB: Date;
  Gender: string;
  Password: string;
}

export interface LoginUser {
  EmailId: string;
  Password: string;
}
