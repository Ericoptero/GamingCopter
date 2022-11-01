interface ResizeImagesProps {
  url: string;
  size: '200' | '640' | '1280' | '1920';
}

export function resizeImages({url, size}: ResizeImagesProps) {
  const urlSuffix = url.split('/media/')[1];

  const result = `https://media.rawg.io/media/resize/${size}/-/${urlSuffix}`;

  return result;
}