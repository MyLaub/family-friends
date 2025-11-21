"use server";

export const submitProduct = async (prevState, formData) => {
  const error = {};
  const productName = formData.get("productname");
  const productPrice = formData.get("productprice");

  //   Hvis productname ikke er udfyldt (man submitter et tomt felt) skal der komme en errorbesked, som du ser herunder:
  if (!productName) {
    error.productName = "Feltet skal udfyldes!";
  } else if (productName.length < 5) {
    error.productName = "Produktnavnet skal være mindst 5 tegn langt!";
  }
  if (!productPrice) {
    error.productPrice = "Feltet skal udfyldes!";
  } else if (isNaN(Number(productPrice))) {
    error.productPrice = "indtast gyldig pris!";
  }

  if (Object.keys(error).length > 0) {
    return { error, productName, productPrice };
  }

  return { succes: true };
};
