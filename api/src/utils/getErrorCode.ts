import { errorCodes } from 'src/constants/errorCodes';

export function getErrorCode(code: string): string {
  return errorCodes[code] || code;
}
