// function getUserPreferences(cb) {
//   return setTimeout(() => {
//     cb({
//       theme: 'dusk',
//     });
//   }, 1000);
// }

// function log(value) {
//   return console.log(value);
// }

// console.log(log('starting'));

// getUserPreferences((preferences) => {
//   return log(preferences.theme.toUpperCase());
// });

// console.log(log('ending?'));

// function getMusic(theme, cb) {
//   return setTimeout(() => {
//     if (theme === 'dusk') {
//       return cb({
//         album: 'music for airports',
//       });
//     }
//     return cb({
//       album: 'kind of blue',
//     });
//   }, 1000);
// }

// getUserPreferences((preferences) => {
//   return getMusic(preferences.theme, (music) => {
//     console.log(music.album);
//   });
// });

// 프로미스 성공
// function getUserPreferences() {
//   const preferences = new Promise((reslove, reject) => {
//     reslove({
//       theme: 'dusk',
//     });
//   });
//   return preferences;
// }

// getUserPreferences().then((preferences) => {
//   console.log(preferences.theme);
// });

//프로미스 실패
function failUserPreference() {
  const finder = new Promise((resolve, reject) => {
    reject({
      type: '접근 거부됨',
    });
  });
  return finder;
}

failUserPreference()
  .then((preferences) => {
    console.log(preferences.theme);
  })
  .catch((error) => {
    console.error(`실패: ${error.type}`);
  });

//   function getMusic(theme, cb) {
//     return setTimeout(() => {
//       if (theme === 'dusk') {
//         return cb({
//           album: 'music for airports',
//         });
//       }
//       return cb({
//         album: 'kind of blue',
//       });
//     }, 1000);
//   }

//프로미스 성공
function getUserPreferences() {
  const preferences = new Promise((reslove, reject) => {
    reslove({
      theme: 'dusk',
    });
  });
  return preferences;
}

function getMusicPromise(theme, cb) {
  if (theme === 'dusk') {
    return Promise.resolve({
      album: 'music for airports',
    });
  }
  return Promise.resolve({
    album: 'kind of blue',
  });
}

getUserPreferences()
  .then((preference) => {
    return getMusicPromise(preference.theme);
  })
  .then((music) => {
    return getMusicPromise(music.album);
  });
