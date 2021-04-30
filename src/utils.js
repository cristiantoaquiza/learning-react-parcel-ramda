import { concat, pathOr, pipe, trim } from 'ramda';

const baseUrl =
  'https://en.wikipedia.org/w/api.php?origin=*&action=opensearch&search=';

export const sanitizeInput = pipe(pathOr('', ['target', 'value']), trim);

export const buildWikipediaSearchUrl = concat(baseUrl);
