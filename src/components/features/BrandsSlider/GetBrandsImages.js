function getBrandsImages(brands = [], imagesCount) {
  const imagesPath = `${window.location.origin}/images/brands/`;

  return brands
    .slice(0, imagesCount)
    .map(brand => `${imagesPath}${brand.description}.jpg`);
}

export default getBrandsImages;
