export default () => ({
  jwt: {
    accessKey: process.env.JWT_ACCESS_KEY || 'eliv_jwt_access',
    refreshKey: process.env.JWT_REFRESH_KEY || 'eliv_jwt_refresh',
    accessKeyExpiration: '1d',
    refreshKeyExpiration: '30d',
  },
});
