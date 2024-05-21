export const REST_API_KEY = '9ba19fb699msh1e3906b7f1105cdp10a880jsn455716c61272';
export const REST_API_HOST = 'amazon-product-reviews-keywords.p.rapidapi.com';
export const REST_API_BASE_URL = 'https://amazon-product-reviews-keywords.p.rapidapi.com';

export const prepareHeaders = () => ({
  'X-RapidAPI-Key': REST_API_KEY,
  'X-RapidAPI-Host': REST_API_HOST,
});

export const availableCategories = [
  { name: 'alexa-skills', value: 'alexa-skills' },
  { name: 'amazon-devices', value: 'amazon-devices' },
  { name: 'amazonfresh', value: 'amazonfresh' },
  { name: 'appliances', value: 'appliances' },
  { name: 'automotive', value: 'automotive' },
  { name: 'apps', value: 'apps' },
];
