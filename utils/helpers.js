export function getIdForRecipe(uri) {
  return uri.split('#recipe_').pop();
}

export function checkIfFavourite(id, arr) {
  const r = arr.filter((r) => r.id === id);
  if (r.length > 0) {
    return true;
  } else {
    return false;
  }
}
