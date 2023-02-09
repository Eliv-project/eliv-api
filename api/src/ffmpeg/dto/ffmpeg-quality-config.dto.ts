export interface FfmpegQualityConfig {
  size: {
    width: number;
    height: number;
  };
  videoBitrate: string;
  audioBitrate: string;
  fps?: number;
  maxrate: string;
  bufsize: string;
}
