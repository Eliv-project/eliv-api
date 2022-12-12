import { getPermissionsByEntity } from '../utils/getPermissionsByEntity';

const Permissions = {
  super: 'SUPER',
  user: getPermissionsByEntity('user'),
};

export default Permissions;
