import { FfmpegQualityConfigs } from 'src/videos/interfaces/ffmpeg-quality-config';

export const VideoQualityConfigs: FfmpegQualityConfigs = {
  '360p': {
    id: 0,
    rendition: {
      resolution: '640x360',
      videoBitrate: '800k',
      audioBitrate: '96k',
    },
  },
  '480p': {
    id: 1,
    rendition: {
      resolution: '842x480',
      videoBitrate: '1400k',
      audioBitrate: '128k',
    },
  },
  '720p': {
    id: 2,
    rendition: {
      resolution: '1280x720',
      videoBitrate: '2800k',
      audioBitrate: '128k',
    },
  },
  '1080p': {
    rendition: {
      resolution: '1920x1080',
      videoBitrate: '5000k',
      audioBitrate: '192k',
    },
  },
};
