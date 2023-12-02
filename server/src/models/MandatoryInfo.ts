import { GENDER } from "../libs";

  interface MandatoryInfoProps {
    username: string;
    password: string;
    email: string;
    contact_no: string;
    gender: GENDER;
  }


  export class MandatoryInfo {
    private username: string;
    private password: string;
    private email: string;
    private contact_no: string;
    private gender: GENDER;
  
    constructor(props: MandatoryInfoProps) {
      this.username = props.username;
      this.password = props.password;
      this.email = props.email;
      this.contact_no = props.contact_no;
      this.gender = props.gender;
    }

    setUsername(uname: string): void {
      if (uname === '') {
        throw new Error('Invalid username');
      }
      this.username = uname;
    }
  
    setPassword(pass: string): void {
      if (pass === '') {
        throw new Error('Invalid password');
      }
      this.password = pass;
    }
  
    setEmail(mail: string): void {
      if (mail === '') {
        throw new Error('Invalid email');
      }
      this.email = mail;
    }
  
    setGender(gen: GENDER): void {
      this.gender = gen;
    }
  
    setContactNo(contact: string): void {
      if (contact === '') {
        throw new Error('Invalid contact number');
      }
      this.contact_no = contact;
    }
  
    getUsername(): string {
      return this.username;
    }
  
    getPassword(): string {
      return this.password;
    }
  
    getEmail(): string {
      return this.email;
    }
  
    getGender(): GENDER {
      return this.gender;
    }
  
    getContactNo(): string {
      return this.contact_no;
    }
  }