// User.ts
import { GENDER } from "../libs";
import { GeneralInfo, GeneralInfoProps } from "./GeneralInfo";
import { MandatoryInfo, MandatoryInfoProps } from "./MandatoryInfo";

interface UserProps extends GeneralInfoProps, MandatoryInfoProps {}

class UserBase implements GeneralInfoProps, MandatoryInfoProps {
  private username: string;
  private password: string;
  private email: string;
  private contact_no: string;
  private gender: GENDER;

  constructor(props: UserProps) {
    this.username = props.username;
    this.password = props.password;
    this.email = props.email;
    this.contact_no = props.contact_no;
    this.gender = props.gender;
  }

  public signUp(): void {
  }

  public login(email: string, password: string) {
   
  }

  public Biodata(): void {
    // Display other biodata information as needed
  }

  public updateBiodata(): void {
    // Update user's biodata
  }

  public deleteBiodata(): void {
    // Delete user's biodata
  }
}

class User extends UserBase {
  public sign(): void {
    console.log("User signed up successfully!");
  }

  // Additional methods for User
  // ...
}

export default User;
