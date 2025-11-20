"use server";

export const submitProduct = async (prevState, formData) => {
  const error = {};
  const productName = formData.get("productname");

  //   Hvis productname ikke er udfyldt (man submitter et tomt felt) skal der komme en errorbesked, som du ser herunder:
  if (!productName) {
    error.productName = "Feltet skal udfyldes!";
  } else if (productName.length < 5) {
    error.productName = "Produktnavnet skal være mindst 5 tegn langt!";
  }

  return { error, productName };
};
