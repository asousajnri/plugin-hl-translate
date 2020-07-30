const translate = target => async word => {
  const key = 'AIzaSyDCBDC0XEnIJ4Pjf5tjp0J0MdweYzV8NgI';
  const response = await fetch(
    `https://translation.googleapis.com/language/translate/v2/?key=${key}`,
    {
      method: 'POST',
      mode: 'cors',
      body: JSON.stringify({
        q: [word],
        target: target,
      }),
    }
  );

  const { data } = await response.json();

  return {
    // sourceLanguage: data.translations[0].detectedSourceLanguage,
    // translatedText: data.translations[0].translatedText,
    sourceLanguage: 'en',
    translatedText: 'God!!!',
  };
};

export default translate;
