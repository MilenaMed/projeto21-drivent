import { ApplicationError } from '@/protocols';

export function BadRequest(): ApplicationError {
  return {
    name: 'BadRequest',
    message: 'Invalid data',
  };
}