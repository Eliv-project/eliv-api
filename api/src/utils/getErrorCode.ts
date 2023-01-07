import { errorCodes } from 'src/common/constants/errorCodes';

export function getErrorCode(code: string): string {
  return errorCodes[code] || code;
}
