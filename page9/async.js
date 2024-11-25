// promises
getUserPreferences().then((preference) => {
  return getMusicPromise(preference.theme);
});

async function getTheme() {
  //await 키워드를 추가해 프람스를 반환한다는 것을 알려줌
  const { theme } = await getUserPreferences();
  return theme;
}

getTheme().then((theme) => {
  console.log(theme);
});

async function getArtistByPreference() {
  const { theme } = await getUserPreferences();
  const { album } = await getMusic(theme);
  const { artist } = await getArtistByPreference(album);
  return artist;
}

getArtistByPreference()
  .then((artist) => {
    console.log(artist);
  })
  .catch((e) => {
    console.log(e);
  });
