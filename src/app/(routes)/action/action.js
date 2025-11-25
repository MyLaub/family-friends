"use server";

export const submitProduct = async (prevState, formData) => {
  const error = {};
  const productName = formData.get("productname");
  const productPrice = formData.get("productprice");

  const state = {
    succes: null,
    error: {},
    field: { productName, productPrice },
  };

  //   Hvis productname ikke er udfyldt (man submitter et tomt felt) skal der komme en errorbesked, som du ser herunder:
  if (!productName) {
    state.error.productName = "Feltet skal udfyldes!";
  } else if (productName.length < 5) {
    state.error.productName = "Produktnavnet skal være mindst 5 tegn langt!";
  }
  if (!productPrice) {
    state.error.productPrice = "Feltet skal udfyldes!";
  } else if (isNaN(Number(productPrice))) {
    state.error.productPrice = "indtast gyldig pris!";
  }

  if (Object.keys(state.error).length > 0) {
    return state;
  }
//for at se loading state (pending)
  // await new Promise((resolve) => setTimeout(resolve, 2000));
  const response = await fetch("https://dummyjson.com/products/add", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      title: productName,
      Price: productPrice,
    }),
  });

  console.log(response);

  state.succes = response.ok;
  return state;
};
