// User.ts
import { randomBytes, scryptSync, timingSafeEqual } from "crypto";
import { BLOOD_GROUP, GENDER, LOGIN_DURATION, MARITAL_STATUS } from "../libs";
import DOB from "./DOB";
import { GeneralInfoProps } from "./GeneralInfo";
import { MandatoryInfoProps } from "./MandatoryInfo";
import UserModel from "./mongodb/userModel";
import jwt from "jsonwebtoken";

interface UserProps extends GeneralInfoProps, MandatoryInfoProps {}
export class User implements GeneralInfoProps, MandatoryInfoProps {
  // GeneralInfoProps properties
  _description?: string;
  _blood_group?: BLOOD_GROUP;
  _height?: number;
  _marital_status?: MARITAL_STATUS;
  _weight?: number;
  _complexion?: string;
  _nationality?: string;
  _date_of_birth?: DOB;

  // MandatoryInfoProps properties
  _username: string;
  _password: string;
  _email: string;
  _contact_no: string;
  _gender: GENDER;

  // Constructor
  constructor(mandatoryInfo: MandatoryInfoProps) {
    // Assigning values from MandatoryInfoProps
    this._username = mandatoryInfo.username;
    this._password = mandatoryInfo.password;
    this._email = mandatoryInfo.email;
    this._contact_no = mandatoryInfo.contact_no;
    this._gender = mandatoryInfo.gender;
  }
  get description(): string | undefined {
    return this._description;
  }
  set description(value: string | undefined) {
    this._description = value;
  }

  get blood_group(): BLOOD_GROUP | undefined {
    return this._blood_group;
  }
  set blood_group(value: BLOOD_GROUP | undefined) {
    this._blood_group = value;
  }

  get height(): number | undefined {
    return this._height;
  }
  set height(value: number | undefined) {
    this._height = value;
  }

  get marital_status(): MARITAL_STATUS | undefined {
    return this._marital_status;
  }
  set marital_status(value: MARITAL_STATUS | undefined) {
    this._marital_status = value;
  }

  get weight(): number | undefined {
    return this._weight;
  }
  set weight(value: number | undefined) {
    this._weight = value;
  }

  get complexion(): string | undefined {
    return this._complexion;
  }
  set complexion(value: string | undefined) {
    this._complexion = value;
  }

  get nationality(): string | undefined {
    return this._nationality;
  }
  set nationality(value: string | undefined) {
    this._nationality = value;
  }

  get date_of_birth(): DOB | undefined {
    return this._date_of_birth;
  }
  set date_of_birth(value: DOB | undefined) {
    this._date_of_birth = value;
  }

  // MandatoryInfoProps getters and setters
  get username(): string {
    return this._username;
  }
  set username(value: string) {
    this._username = value;
  }

  get password(): string {
    return this._password;
  }
  set password(value: string) {
    this._password = value;
  }

  get email(): string {
    return this._email;
  }
  set email(value: string) {
    this._email = value;
  }

  get contact_no(): string {
    return this._contact_no;
  }
  set contact_no(value: string) {
    this._contact_no = value;
  }

  get gender(): GENDER {
    return this._gender;
  }
  set gender(value: GENDER) {
    this._gender = value;
  }
  private hashPassword(password: string) {
    const salt = randomBytes(16).toString("hex");
    const hashedPassword = scryptSync(password, salt, 64).toString("hex");

    return `${salt}:${hashedPassword}`;
  }
  private static checkPasswordMatch(password: string, hashedPassword: string) {
    const [salt, key] = hashedPassword.split(":");
    const hashedBuffer = scryptSync(password, salt, 64);
    const keyBuffer = Buffer.from(key, "hex");
    const match = timingSafeEqual(hashedBuffer, keyBuffer);

    if (match) return true;
    return false;
  }

  public async signUp() {
    if (!this._username || !this._email || !this._password || !this._contact_no)
      throw Error("Missing a mandatory property");
    const user = await UserModel.findOne({ email: this._email });

    if (user) throw Error("An account already exist for this email");

    const password = this.hashPassword(this._password);
    const newUser = new UserModel({
      username: this._username,
      email: this._email,
      contact: this._contact_no,
      gender: this._gender,
      password,
    });
    await newUser.save();
  }

  public static async login(email: string, password: string) {
    if (!email || !password)
      throw Error("Invalid email or password.");
    
    const user = await UserModel.findOne({ email });
    
    if (!user)
      throw Error("Invalid email or password.");
    if (this.checkPasswordMatch(password, user.password)) {
      const userInfo = {
        username: user.username,
        email: user.email,
        gender: user.gender,
        contact: user.contact,
      };

      const token = jwt.sign(userInfo, process.env.JWT_SECRET_KEY as string, {
        expiresIn: LOGIN_DURATION,
      });
      return {token, userInfo};
    } else throw Error("Invalid email or password.");
  }
}

export default User;
