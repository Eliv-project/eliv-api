import { FfmpegQualityConfig } from '../dto/ffmpeg-quality-config.dto';

interface FfmpegQualityConfigs {
  '144p'?: FfmpegQualityConfig;
  '240p'?: FfmpegQualityConfig;
  '360p'?: FfmpegQualityConfig;
  '480p'?: FfmpegQualityConfig;
  '720p'?: FfmpegQualityConfig;
  '1080p'?: FfmpegQualityConfig;
}

export const VideoQualityConfigs: FfmpegQualityConfigs = {
  '144p': {
    size: {
      width: 256,
      height: 144,
    },
    videoBitrate: '200k',
    audioBitrate: '64k',
    fps: 24,
    maxrate: '248k',
    bufsize: '300k',
  },
  '360p': {
    size: {
      width: 640,
      height: 360,
    },
    videoBitrate: '800k',
    audioBitrate: '96k',
    fps: 24,
    maxrate: '856k',
    bufsize: '1200k',
  },
  '480p': {
    size: {
      width: 842,
      height: 480,
    },
    videoBitrate: '1400k',
    audioBitrate: '128k',
    fps: 30,
    maxrate: '1498k',
    bufsize: '2100k',
  },
  '720p': {
    size: {
      width: 1280,
      height: 720,
    },
    videoBitrate: '2800k',
    audioBitrate: '128k',
    fps: 60,
    maxrate: '2996k',
    bufsize: '4200k',
  },
  '1080p': {
    size: {
      width: 1920,
      height: 1080,
    },
    videoBitrate: '5000k',
    audioBitrate: '192k',
    fps: 60,
    maxrate: '5350k',
    bufsize: '7500k',
  },
};
