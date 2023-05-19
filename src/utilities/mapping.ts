import _ from 'lodash';
import { IPagination, ObjectAny } from '../interfaces';

export const assignIfHasKey = <T, B>(assignedObj: T, obj: B) => {
  Object.entries(obj).forEach(([key, value]) => {
    if (key) assignedObj[key] = value;
  });
};

export const myMapOmit = <T>(data: T[] | any, toOmit: string[]) => {
  return _.compact(_.map(data, (item) => (item ? _.omit(item, toOmit) : null)));
};

export const myMapPick = <T>(data: T[], toPick: string[]): any => {
  return _.compact(_.map(data, (item) => (item ? _.pick(item, toPick) : null)));
};

export const numberInputs = (
  input: any = {},
): {
  [key: string]: number;
} =>
  Object.keys(input).reduce((acc: any, val: any) => {
    acc[val] = +input[val] as number;
    return acc;
  }, {});

export const genPagination = (page: number, perPage: number, arrayLength: number): IPagination => {
  return {
    page: page,
    perPage: perPage,
    totalPages: Math.ceil(arrayLength / perPage),
    totalItems: arrayLength,
  };
};
