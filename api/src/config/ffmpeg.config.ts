export default () => ({
  threadCount: process.env.FFMPEG_THREADS || 0,
  withFfmpegAcceleration: process.env.FFMPEG_ACCELERATION,
});
