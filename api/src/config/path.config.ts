export default () => ({
  hlsPath: process.env.PATH_HLS || '/eliv/upload/hls',
  uploadPath: process.env.PATH_TMP || '/eliv/upload/tmp',
  recordingPath: process.env.PATH_RECORD || '/eliv/upload/recordings',
});
