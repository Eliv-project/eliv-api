import { getPermissionsByEntity } from '../utils/getPermissionsByEntity';

const Permissions = {
  super: 'SUPER',
  user: getPermissionsByEntity('user'),
  video: getPermissionsByEntity('video'),
  liveSession: getPermissionsByEntity('live_session'),
};

export default Permissions;
