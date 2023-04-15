export interface RegisterUser {
  Name: string;
  EmailId: string;
  DOB: Date;
  Gender: string;
  Role: string;
  Password: string;
}

export interface LoginUser {
  EmailId: string;
  Password: string;
}

export interface LocalLoggedInUser {
  user: LoginUser;
  token: string;
}
export interface LoggedInUserDetails {
  id: number;
  Name: string;
  EmailId: string;
  DOB: Date;
  Gender: string;
  role: string;
  Password: string;
}
