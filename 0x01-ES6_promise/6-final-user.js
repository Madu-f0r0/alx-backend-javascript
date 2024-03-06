import signupUser from './4-user-promise';
import uploadPhoto from './5-photo-reject';

export default function handleProfileSignup(firstName, lastName, fileName) {
  return Promise.allSettled([signupUser(firstName, lastName), uploadPhoto(fileName)])
    .then((promises) => {
      const resultArr = [];
      promises.forEach((promise) => {
        if (promise.status === 'fulfilled') {
          resultArr.push({ status: promise.status, value: promise.value });
        } else {
          resultArr.push({ status: promise.status, error: promise.reason });
        }
      });
      return resultArr;
    });
}
