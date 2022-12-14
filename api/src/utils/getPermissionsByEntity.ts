export type PermissionTypes = {
  manage?: string;
  read?: string;
  create?: string;
  update?: string;
  delete?: string;
};

export const getPermissionsByEntity = (entityName: string): PermissionTypes => {
  const uppercasedName = entityName.toUpperCase();
  const permissionObj: PermissionTypes = {};
  const types: string[] = ['create', 'read', 'update', 'delete', 'manage'];
  types.forEach(
    (type) => (permissionObj[type] = `${type.toUpperCase()}_${uppercasedName}`),
  );

  return permissionObj;
};
