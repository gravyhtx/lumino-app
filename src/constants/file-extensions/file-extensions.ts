import type {
  ImageFormat,
  ImageMIMEType,
  AudioFormat,
  AudioMIMEType,
  VideoFormat,
  VideoMIMEType,
  DocumentFormat,
  DocumentMIMEType,
  CompressedFormat,
  CompressedMIMEType,
} from '../../types/FileExtensions';

const fileExtensions = {
  image: {
    ext: [
      'jpg', // 'jpeg' is also supported
      'png',
      'apng',
      'gif',
      'webp',
      'bmp',
      'tiff',
      'svg',
      'ico',
      'heic',
      'heif',
      'avif',
    ] as ImageFormat[],
    mime: [
      'image/jpeg',
      'image/png',
      'image/apng',
      'image/gif',
      'image/webp',
      'image/bmp',
      'image/tiff',
      'image/svg+xml',
      'image/x-icon',
      'image/heic',
      'image/heif',
      'image/avif',
    ] as ImageMIMEType[],
  },
  audio: {
    ext: ['mp3', 'wav', 'aac', 'ogg', 'flac', 'alac', 'aiff', 'wma', 'm4a', 'opus', 'weba'] as AudioFormat[],
    mime: [
      'audio/mpeg',
      'audio/wav',
      'audio/aac',
      'audio/ogg',
      'audio/flac',
      'audio/alac',
      'audio/aiff',
      'audio/x-ms-wma',
      'audio/x-m4a',
      'audio/x-opus',
      'audio/webm',
    ] as AudioMIMEType[],
  },
  video: {
    ext: ['mp4', 'mov', 'avi', 'wmv', 'flv', 'mkv', 'webm', '3gp', '3g2', 'ts'] as VideoFormat[],
    mime: [
      'video/mp4',
      'video/quicktime',
      'video/x-msvideo',
      'video/x-ms-wmv',
      'video/x-flv',
      'video/x-matroska',
      'video/webm',
      'video/3gpp',
      'video/3gpp2',
      'video/mp2t',
    ] as VideoMIMEType[],
  },
  document: {
    ext: ['pdf', 'doc', 'docx', 'xls', 'xlsx', 'ppt', 'pptx', 'txt', 'rtf', 'abw', 'arc', 'azq', 'ods', 'odt', 'odp'] as DocumentFormat[],
    mime: [
      'application/pdf',
      'application/msword',
      'application/vnd.openxmlformats-officedocument.wordprocessingml.document',
      'application/vnd.ms-excel',
      'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet',
      'application/vnd.ms-powerpoint',
      'application/vnd.openxmlformats-officedocument.presentationml.presentation',
      'text/plain',
      'application/rtf',
      'application/x-abiword',
      'application/x-freearc',
      'application/vnd.amazon.ebook',
      'application/vnd.oasis.opendocument.spreadsheet',
      'application/vnd.oasis.opendocument.text',
      'application/vnd.oasis.opendocument.presentation',
    ] as DocumentMIMEType[],
  },
  compressed: {
    ext: ['gz', '7z', 'bz', 'bz2', 'rar', 'tar', 'zip'] as CompressedFormat[],
    mime: [
      'application/gzip',
      'application/x-7z-compressed',
      'application/x-bzip',
      'application/x-bzip2',
      'application/x-rar-compressed',
      'application/x-tar',
      'application/zip',
    ] as CompressedMIMEType[],
  },
} as const;

const allExtensions = [
  ...fileExtensions.image.ext,
  ...fileExtensions.audio.ext,
  ...fileExtensions.video.ext,
  ...fileExtensions.document.ext,
  ...fileExtensions.compressed.ext,
] as const;

const allMIMETypes = [
  ...fileExtensions.image.mime,
  ...fileExtensions.audio.mime,
  ...fileExtensions.video.mime,
  ...fileExtensions.document.mime,
  ...fileExtensions.compressed.mime,
] as const;

const imageExtensionsRegex = new RegExp(`\\.(${fileExtensions.image.ext.join('|')})$`, 'i');
const audioExtensionsRegex = new RegExp(`\\.(${fileExtensions.audio.ext.join('|')})$`, 'i');
const videoExtensionsRegex = new RegExp(`\\.(${fileExtensions.video.ext.join('|')})$`, 'i');
const documentExtensionsRegex = new RegExp(`\\.(${fileExtensions.document.ext.join('|')})$`, 'i');
const compressedExtensionsRegex = new RegExp(`\\.(${fileExtensions.compressed.ext.join('|')})$`, 'i');
const allExtensionsRegex = new RegExp(`\\.(${allExtensions.join('|')})$`, 'i');

const imageMIMETypesRegex = new RegExp(`(${fileExtensions.image.mime.join('|')})`, 'i');
const audioMIMETypesRegex = new RegExp(`(${fileExtensions.audio.mime.join('|')})`, 'i');
const videoMIMETypesRegex = new RegExp(`(${fileExtensions.video.mime.join('|')})`, 'i');
const documentMIMETypesRegex = new RegExp(`(${fileExtensions.document.mime.join('|')})`, 'i');
const compressedMIMETypesRegex = new RegExp(`(${fileExtensions.compressed.mime.join('|')})`, 'i');
const allMIMETypesRegex = new RegExp(`(${allMIMETypes.join('|')})`, 'i');

export const FILE_EXTENSIONS_REGEX = {
  ALL: allExtensionsRegex,
  IMAGES: imageExtensionsRegex,
  AUDIO: audioExtensionsRegex,
  VIDEO: videoExtensionsRegex,
  DOCUMENTS: documentExtensionsRegex,
  COMPRESSED: compressedExtensionsRegex,
} as const;

export const FILE_MIME_TYPES_REGEX = {
  ALL: allMIMETypesRegex,
  IMAGES: imageMIMETypesRegex,
  AUDIO: audioMIMETypesRegex,
  VIDEO: videoMIMETypesRegex,
  DOCUMENTS: documentMIMETypesRegex,
  COMPRESSED: compressedMIMETypesRegex,
} as const;

export const FILE_EXTENSIONS = {
  ALL: allExtensions,
  IMAGES: fileExtensions.image.ext,
  AUDIO: fileExtensions.audio.ext,
  VIDEO: fileExtensions.video.ext,
  DOCUMENTS: fileExtensions.document.ext,
  COMPRESSED: fileExtensions.compressed.ext,
} as const;

export const FILE_MIME_TYPES = {
  ALL: allMIMETypes,
  IMAGES: fileExtensions.image.mime,
  AUDIO: fileExtensions.audio.mime,
  VIDEO: fileExtensions.video.mime,
  DOCUMENTS: fileExtensions.document.mime,
  COMPRESSED: fileExtensions.compressed.mime,
} as const;