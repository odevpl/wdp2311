function useGetImages(products = [], imagesCount) {
  const imagesPath = `${window.location.origin}/images/beds/`;
  return products
    .slice(0, imagesCount)
    .map(product => `${imagesPath}${product.name}.jpg`);
}

export default useGetImages;
