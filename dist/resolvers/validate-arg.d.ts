import { ValidatorOptions } from "class-validator";
export declare function validateArg<T extends Object>(arg: T | undefined, globalValidate: boolean | ValidatorOptions, validateOrRejectFn: (object: T, validatorOptions?: ValidatorOptions) => Promise<void>, argValidate?: boolean | ValidatorOptions): Promise<T | undefined>;
