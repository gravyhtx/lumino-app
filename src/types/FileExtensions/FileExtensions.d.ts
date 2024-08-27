/**
 * Image file extensions
 */
export type ImageFormat =
  | 'jpg'
  | 'jpeg'
  | 'png'
  | 'apng'
  | 'gif'
  | 'webp'
  | 'bmp'
  | 'tiff'
  | 'svg'
  | 'ico'
  | 'heic'
  | 'heif'
  | 'avif';

/**
 * Image MIME types
 */
export type ImageMIMEType =
  | 'image/jpeg'
  | 'image/png'
  | 'image/apng'
  | 'image/gif'
  | 'image/webp'
  | 'image/bmp'
  | 'image/tiff'
  | 'image/svg+xml'
  | 'image/x-icon'
  | 'image/heic'
  | 'image/heif'
  | 'image/avif';

/**
 * Audio file extensions
 */
export type AudioFormat =
  | 'mp3'
  | 'wav'
  | 'aac'
  | 'ogg'
  | 'flac'
  | 'alac'
  | 'aiff'
  | 'wma'
  | 'm4a'
  | 'opus'
  | 'weba';

/**
 * Audio MIME types
 */
export type AudioMIMEType =
  | 'audio/mpeg'
  | 'audio/wav'
  | 'audio/aac'
  | 'audio/ogg'
  | 'audio/flac'
  | 'audio/x-m4a'
  | 'audio/aiff'
  | 'audio/x-ms-wma'
  | 'audio/opus'
  | 'audio/webm';

/**
 * Video file extensions
 */
export type VideoFormat =
  | 'mp4'
  | 'mov'
  | 'avi'
  | 'wmv'
  | 'flv'
  | 'mkv'
  | 'webm'
  | '3gp'
  | '3g2'
  | 'ts';

/**  
 * Video MIME types
 */
export type VideoMIMEType =
  | 'video/mp4'
  | 'video/quicktime'
  | 'video/x-msvideo'
  | 'video/x-ms-wmv'
  | 'video/x-flv'
  | 'video/x-matroska'
  | 'video/webm'
  | 'video/3gpp'
  | 'video/3gpp2'
  | 'video/mp2t';

/**
 * Document file extensions
 */
export type DocumentFormat =
  | 'pdf'
  | 'doc'
  | 'docx'
  | 'xls'
  | 'xlsx'
  | 'ppt'
  | 'pptx'
  | 'txt'
  | 'rtf'
  | 'csv'
  | 'epub'
  | 'azw'
  | 'ods'
  | 'odt'
  | 'odp';

/**
 * Document MIME types
 */ 
export type DocumentMIMEType =
  | 'application/pdf'
  | 'application/msword'
  | 'application/vnd.openxmlformats-officedocument.wordprocessingml.document'
  | 'application/vnd.ms-excel'
  | 'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet'
  | 'application/vnd.ms-powerpoint'
  | 'application/vnd.openxmlformats-officedocument.presentationml.presentation'
  | 'text/plain'
  | 'application/rtf'
  | 'text/csv'
  | 'application/epub+zip'
  | 'application/vnd.amazon.ebook'
  | 'application/vnd.oasis.opendocument.spreadsheet'
  | 'application/vnd.oasis.opendocument.text'
  | 'application/vnd.oasis.opendocument.presentation';
  
/**
 * Compressed file extensions
 */  
export type CompressedFormat =
  | 'gz'
  | '7z'
  | 'bz'
  | 'bz2'
  | 'rar'
  | 'tar'
  | 'zip'

/** 
 * Compressed MIME types
 */
export type CompressedMIMEType =
  | 'application/gzip'
  | 'application/vnd.rar'
  | 'application/x-7z-compressed'
  | 'application/x-tar'
  | 'application/x-bzip'
  | 'application/x-bzip2'
  | 'application/zip';
  
/**
 * File types  
 */
export type FileTypes =
  | 'images'
  | 'video'
  | 'audio'
  | 'documents'
  | 'compressed';