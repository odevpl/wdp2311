export const getImage = product => {
  const imagesPath = `${window.location.origin}/images/`;
  return `${imagesPath}/${product.category}s/${product.name}.jpg`;
};

function useGetImages(products = [], imagesCount) {
  return products.slice(0, imagesCount).map(product => getImage(product));
}

export default useGetImages;
