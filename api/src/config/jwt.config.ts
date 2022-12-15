export default () => ({
  jwt: {
    accessKey: process.env.JWT_ACCESS_KEY || 'eliv_jwt_access',
    refreshKey: process.env.JWT_REFRESH_KEY || 'eliv_jwt_refresh',
    accessKeyExpiry: 60 * 15,
    refreshKeyExpiry: 60 * 60 * 24 * 30,
  },
});
