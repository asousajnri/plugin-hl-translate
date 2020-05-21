const googleTranslate = require('google-translate')('AIzaSyDCBDC0XEnIJ4Pjf5tjp0J0MdweYzV8NgI');

const translate = (text, cb) => {
	googleTranslate.detectLanguage(text, (err, detection) => {
		if (detection.language !== 'en') {
			cb('O texto selecionado não é English, é: ', detection.language);
			return;
		};
		
		googleTranslate.translate(text, 'pt', (err, translation) => {
			cb(translation.translatedText);
		});
	});
};

export default translate;