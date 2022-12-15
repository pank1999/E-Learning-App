export interface registerUser {
  Name: string;
  EmailId: string;
  DOB: Date;
  Gender: string;
  Password: string;
}

export interface loginUser {
  EmailId: string;
  Password: string;
}
