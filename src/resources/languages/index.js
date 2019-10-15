import I18n from 'react-native-i18n';
import * as vi from './vi.json';
import * as en from './en.json';

I18n.fallbacks = true;

I18n.translations = {
  en,
  vi,
};

export default I18n; 