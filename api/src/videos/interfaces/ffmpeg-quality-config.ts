export interface FfmpegQualityConfig {
  id?: number;
  rendition: {
    resolution: string;
    videoBitrate: string;
    audioBitrate: string;
  };
}

export interface FfmpegQualityConfigs {
  '360p': FfmpegQualityConfig;
  '480p': FfmpegQualityConfig;
  '720p': FfmpegQualityConfig;
  '1080p': FfmpegQualityConfig;
}
