<<<<<<< HEAD
export interface GalleryPhoto {
  image: string;
  id: number;
}

export enum PhotoResp {
  GENERIC = 'CAMERA.FAILED_TO_TAKE_PHOTO',
  INVALID_IMAGE_HOST = 'GENERIC_INVALID_IMAGE_HOST',
}

export enum PhotoEvents {
  TAKE_PHOTO = 'npwd:TakePhoto',
  CAMERA_EXITED = 'npwd:cameraExited',
  NPWD_PHOTO_MODE_STARTED = 'npwd:PhotoModeStarted',
  NPWD_PHOTO_MODE_ENDED = 'npwd:PhotoModeEnded',
  TAKE_PHOTO_SUCCESS = 'npwd:TakePhotoSuccess',
  UPLOAD_PHOTO = 'npwd:UploadPhoto',
  FETCH_PHOTOS = 'npwd:FetchPhotos',
  DELETE_PHOTO = 'npwd:deletePhoto',
}
=======
export interface GalleryPhoto {
  image: string;
  id: number;
}

export enum PhotoResp {
  GENERIC = 'CAMERA.FAILED_TO_TAKE_PHOTO',
  INVALID_IMAGE_HOST = 'GENERIC_INVALID_IMAGE_HOST',
}

export enum PhotoEvents {
  TAKE_PHOTO = 'npwd:TakePhoto',
  CAMERA_EXITED = 'npwd:cameraExited',
  NPWD_PHOTO_MODE_STARTED = 'npwd:PhotoModeStarted',
  NPWD_PHOTO_MODE_ENDED = 'npwd:PhotoModeEnded',
  TAKE_PHOTO_SUCCESS = 'npwd:TakePhotoSuccess',
  UPLOAD_PHOTO = 'npwd:UploadPhoto',
  FETCH_PHOTOS = 'npwd:FetchPhotos',
  DELETE_PHOTO = 'npwd:deletePhoto',
  GET_AUTHORISATION_TOKEN = 'npwd:getAuthToken',
}
>>>>>>> c87ea2f8f34a7577ef4deb39be53c4f7fceb90d9
