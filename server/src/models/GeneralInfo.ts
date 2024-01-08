import { BLOOD_GROUP, MARITAL_STATUS } from "../libs";
import Address from "./Address";

  export interface GeneralInfoProps {
    _description?: string;
    _blood_group?: BLOOD_GROUP;
    _height?: number;
    _marital_status?: MARITAL_STATUS;
    _weight?: number;
    _complexion?: string;
    _nationality?: string;
    _date_of_birth?: Date;
    _present_address?: Address;
    _permanent_address?: Address;
  }
  
  // export abstract class GeneralInfo {
  //   private description: string;
  //   private blood_group: BLOOD_GROUP;
  //   private height: number;
  //   private marital_status;
  //   private weight: number;
  //   private complexion: string;
  //   private nationality: string;
  //   private date_of_birth:DOB;
  
  //   constructor(props:GeneralInfoProps) {
  //     this.description = props.description;
  //     this.blood_group = props.blood_group;
  //     this.height = props.height;
  //     this.marital_status = props.marital_status;
  //     this.weight = props.weight;
  //     this.complexion = props.complexion;
  //     this.nationality = props.nationality;
  //     this.date_of_birth = props.date_of_birth;
  //   }

  //   // Setters and getters for GeneralInfo
  //   public setDescription(desc: string): void {
  //     this.description = desc;
  //   }
  
  //   public setBloodGroup(bg: BLOOD_GROUP): void {
  //     this.blood_group = bg;
  //   }
  
  //   public setHeight(h: number): void {
  //     if (h < 0) {
  //       throw new Error("Height cannot be negative");
  //     }
  //     this.height = h;
  //   }
  
  //   public setMaritalStatus(ms: MARITAL_STATUS): void {
  //     this.marital_status = ms;
  //   }
  
  //   public setWeight(w: number): void {
  //     if (w < 0) {
  //       throw new Error("Weight cannot be negative");
  //     }
  //     this.weight = w;
  //   }
  
  //   public setComplexion(comp: string): void {
  //     this.complexion = comp;
  //   }
  
  //   public setNationality(nat: string): void {
  //     this.nationality = nat;
  //   }
  
  //   public setDOB(dob: DOB): void {
  //     this.date_of_birth = dob;
  //   }
  
  //   public getDescription(): string {
  //     return this.description;
  //   }
  
  //   public getBloodGroup(): BLOOD_GROUP {
  //     return this.blood_group;
  //   }
  
  //   public getHeight(): number {
  //     return this.height;
  //   }
  
  //   public getMaritalStatus(): MARITAL_STATUS {
  //     return this.marital_status;
  //   }
  
  //   public getWeight(): number {
  //     return this.weight;
  //   }
  
  //   public getComplexion(): string {
  //     return this.complexion;
  //   }
  
  //   public getNationality(): string {
  //     return this.nationality;
  //   }
  
  //   public getDOB(): DOB {
  //     return this.date_of_birth;
  //   }
  // }
  