import axios from 'axios';

export async function getRecipes(term) {
  const res = await axios.get('https://api.edamam.com/api/recipes/v2', {
    headers: { 'Content-Type': 'application/json' },
    params: {
      type: 'public',
      q: term,
      app_id: process.env.EDAMAM_APP_ID,
      app_key: process.env.EDAMAM_APP_KEY,
    },
  });
  const result = await res.data.hits;
  return result;
}

export async function getSpecificRecipe(id) {
  const res = await axios.get(`https://api.edamam.com/api/recipes/v2/${id}`, {
    headers: { 'Content-Type': 'application/json' },
    params: {
      type: 'public',
      app_id: process.env.EDAMAM_APP_ID,
      app_key: process.env.EDAMAM_APP_KEY,
    },
  });
  const results = await res.data;
  return results;
}
