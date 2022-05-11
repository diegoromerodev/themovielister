/* eslint-disable no-restricted-syntax */
import { Dispatch, SetStateAction } from "react";
import validator from "validator";
import { DynamicFieldsData } from "../pages/auth/signup";
import { customAxios } from "./hooks/useAxiosInterceptor";
import { UserSchema } from "./types";

export const calculateAge = (dateToCompare: Date): string => {
  const dateRange = new Date().getTime() - dateToCompare.getTime();
  const numberOfDays = dateRange / 8.64e7;
  if (numberOfDays < 1) {
    const ageInHours = Math.round(numberOfDays * 24);
    return `${ageInHours} hour${ageInHours >= 2 || !ageInHours ? "s" : ""}`;
  }
  return `${Math.round(numberOfDays)} day${numberOfDays >= 1.5 ? "s" : ""}`;
};

interface PrevUserFetch {
  userData: UserSchema[];
  age: number;
  debounceId: number;
}

const cachedUsers: PrevUserFetch = {
  userData: null,
  age: null,
  debounceId: null,
};

const isNotDuplicateUsername = async (username: string) => {
  const ageNow = new Date().getTime();
  if (!cachedUsers.userData || ageNow - cachedUsers.age > 5000) {
    const usersRes = await customAxios("/api/users");
    cachedUsers.userData = usersRes.data;
    cachedUsers.age = new Date().getTime();
  }
  return new Promise((resolve) => {
    if (cachedUsers.debounceId) clearTimeout(cachedUsers.debounceId);
    cachedUsers.debounceId = window.setTimeout(() => {
      const foundUser = cachedUsers.userData.find(
        (u) => u.username === username
      );
      if (foundUser) resolve("is already taken.");
      resolve("");
    }, 300);
  });
};

const isNotWithinRange = (max: number, min: number, value: string): string => {
  let result = "";
  if (value.length < min || value.length > max) {
    result = `must be between ${min} and ${max} characters long`;
  }
  return result;
};

const isValidEmail = (value: string): string => {
  if (!validator.isEmail(value)) return "must be a valid email";
  return "";
};

const isValidUrl = (value: string): string => {
  if (!validator.isURL(value)) return "must be a valid url";
  return "";
};

const isAlphaNumeric = (value: string): string => {
  if (!validator.isAlphanumeric(value))
    return "must be a valid alphanumeric value";
  return "";
};

const passwordConstraints = (value: string): string => {
  const regexes: RegExp[] = [/[\W|_]/, /[A-Z]/, /\d/];
  // eslint-disable-next-line no-restricted-syntax
  for (const re of regexes) {
    if (!re.test(value))
      return "must contain at least 1 special character, 1 uppercase letter and 1 number";
  }
  return "";
};

type StringFnNoArgs = () => string | Promise<string>;

const checkAllErrorValidators = async (
  valArr: StringFnNoArgs[],
  fieldName: string
): Promise<string> => {
  // eslint-disable-next-line no-restricted-syntax
  for (const valFn of valArr) {
    // eslint-disable-next-line no-await-in-loop
    const errResult = await valFn();
    if (errResult) return `${fieldName} ${errResult}`;
  }
  return "";
};

export interface IConstraints {
  [key: string]: (value: string, fieldName: string) => Promise<string>;
}

export const UserFormFieldConstraints: IConstraints = Object.freeze({
  async username(value: string, fieldName: string): Promise<string> {
    const errorValidators: StringFnNoArgs[] = [
      isNotWithinRange.bind(this, 20, 3, value),
      isNotDuplicateUsername.bind(this, value),
    ];
    return checkAllErrorValidators(errorValidators, fieldName);
  },
  async avatarURL(value: string, fieldName: string): Promise<string> {
    const errorValidators: StringFnNoArgs[] = [isValidUrl.bind(this, value)];
    return checkAllErrorValidators(errorValidators, fieldName);
  },
  async bio(value: string, fieldName: string): Promise<string> {
    const errorValidators: StringFnNoArgs[] = [
      isNotWithinRange.bind(this, 100, 20, value),
    ];
    return checkAllErrorValidators(errorValidators, fieldName);
  },
  async email(value: string, fieldName: string): Promise<string> {
    const errorValidators: StringFnNoArgs[] = [isValidEmail.bind(this, value)];
    return checkAllErrorValidators(errorValidators, fieldName);
  },
  async password(value: string, fieldName: string): Promise<string> {
    const errorValidators: StringFnNoArgs[] = [
      passwordConstraints.bind(this, value),
      isNotWithinRange.bind(this, 100, 8, value),
    ];
    return checkAllErrorValidators(errorValidators, fieldName);
  },
});

export const CreatePostConstraints: IConstraints = Object.freeze({
  async postTitle(value: string, fieldName: string): Promise<string> {
    const errorValidators: StringFnNoArgs[] = [
      isNotWithinRange.bind(this, 100, 10, value),
    ];
    return checkAllErrorValidators(errorValidators, fieldName);
  },
  async movie(value: string, fieldName: string): Promise<string> {
    const errorValidators: StringFnNoArgs[] = [
      isAlphaNumeric.bind(this, value),
    ];
    return checkAllErrorValidators(errorValidators, fieldName);
  },
});

export const validateRequiredFields = <T,>(
  fields: DynamicFieldsData,
  setState: Dispatch<SetStateAction<T>>
): boolean => {
  let allGood = true;
  const badFields: DynamicFieldsData = { ...fields };
  for (const k of Object.keys(fields)) {
    if (fields[k].error) return false;
    if (!fields[k].value) {
      badFields[k].error = `${fields[k].name} is required.`;
      allGood = false;
    }
  }
  if (!allGood) {
    setState((prevFields) => ({
      ...prevFields,
      ...badFields,
    }));
  }
  return allGood;
};

export interface HandleInputChangeProps<T> {
  name: string;
  readableName: string;
  value: string;
  constraints: IConstraints;
  setState: Dispatch<SetStateAction<T>>;
}

export const handleInputChangeWithErrors = async ({
  name,
  readableName,
  value,
  constraints,
  setState,
}: HandleInputChangeProps<DynamicFieldsData>): Promise<void> => {
  let error;
  if (name in constraints) {
    error = await constraints[name](value, readableName);
  }
  setState((prevData) => {
    const newData = { ...prevData };
    newData[name] = { ...newData[name], value, error };
    return newData;
  });
};
