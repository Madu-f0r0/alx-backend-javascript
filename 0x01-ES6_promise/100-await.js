import { uploadPhoto, createUser } from './utils';

export default async function asyncUploadUser() {
  try {
    const uploadPhotoResponse = await uploadPhoto();
    const createUserResponse = await createUser();

    return { photo: uploadPhotoResponse, user: createUserResponse };
  } catch (err) {
    return { photo: null, user: null };
  }
}
