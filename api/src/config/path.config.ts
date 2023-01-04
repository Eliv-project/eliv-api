export default () => ({
  hlsPath: process.env.PATH_HLS || '/upload/hls',
  uploadPath: process.env.PATH_TMP || '/upload/tmp',
});
