import { uploadPhoto, createUser } from './utils';

export default function handleProfileSignup() {
  let profilePhoto;
  let firstName;
  let lastName;

  uploadPhoto()
    .then((data) => {
      profilePhoto = data.body;
    })
    .catch(() => console.log('Signup system offline'));

  createUser()
    .then((data) => {
      firstName = data.firstName;
      lastName = data.lastName;
      console.log(`${profilePhoto} ${firstName} ${lastName}`);
    })
    .catch(() => console.log('Signup system offline'));
}
