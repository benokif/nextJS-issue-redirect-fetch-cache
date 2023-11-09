async function delayedFetch() {
  const delay = 200;
  await new Promise((resolve) => setTimeout(resolve, delay));

  try {
    const response = await fetch('https://dog.ceo/api/breeds/image/random');
    if (!response.ok) {
      throw new Error();
    }
    const data = await response.json();
    return data;
  } catch (error) {
    console.error("Fetch error:", error);
    throw error;
  }
}

export async function GET(request: Request) {
  const data = await delayedFetch()
  console.log("GET SLOW");
  return Response.json({ data });

}
