import { getRecipes } from '../../utils/api';

export default async function handler(req, res) {
  const {
    query: { term },
    method,
  } = req;
  const results = await getRecipes(term);
  res.status(200).json(results);
}
