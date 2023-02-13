export default () => ({
  hlsPath: process.env.API_VOD_PATH || '../static/videos/upload',
  uploadPath: process.env.API_TMP_PATH || '../static/videos/tmp',
  recordingPath: process.env.API_RECORD_PATH || '../static/videos/recordings',
});
