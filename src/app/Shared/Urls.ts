const BASE_URL = 'http://localhost:3000';

export const ITEMS_URL = BASE_URL + '/api/items';
export const ITEMS_BY_SEARCH_URL = ITEMS_URL + '/search/';
export const ITEMS_BY_ID_URL = BASE_URL + '/items/';
export const ITEMS_BY_ARTICLE = BASE_URL + '/price/:articleId';


export const ARTICLES_URL = BASE_URL + '/api/articles';
export const ARTICLES_BY_SEARCH_URL = ARTICLES_URL + '/search/';
export const ARTICLES_BY_ID_URL = BASE_URL + '/articles/';

export const MATCH_BY_ID_URL = BASE_URL + '/matchs/';

export const USER_LOGIN_URL = BASE_URL + '/api/users/login';

export const USER_REGISTER_URL = BASE_URL + '/api/user/register';

export const USER_ORDER_URL = BASE_URL + '/api/user/order';
