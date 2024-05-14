/* eslint-disable @typescript-eslint/no-explicit-any */
import { CommonButtonTypes } from "../../Common/types/types";
export interface ReusableInputs extends CommonButtonTypes {
  name: string;
  placeholder: string | undefined;
  type: string;
  formik: any;
  link?: string;
  height?: string | undefined;
  width?: string | undefined;
  background?: string | undefined;
  beforeLinkText?: string | undefined;
  textLink?: string | undefined;
  defaultValue?: string | undefined;
  fvalue?: string | undefined;
  label?: string | undefined;
  required?: any;
}

export interface InputState {
  showPassword: boolean;
}
