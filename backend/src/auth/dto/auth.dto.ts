export class AuthDto {
  uid: string;
  email: string;
  provider_id: string;
  firebase: {
    sign_in_provider: string;
  };
}
