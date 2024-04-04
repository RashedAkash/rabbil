const getData = async () => {
  try {
    const res = await fetch("https://jsonplaceholder.typicode.com/users")
   
    // const res2 = await fetch("https://dummyjson.com/products");
    // const data1 = await res1.json()
    // const data2 = await res2.json()
    const body = await res.json()
    const headers = res.headers.get("X-Ratelimit-Reset");
    const status = res.status;

    return {body:body,headers:headers,status:status}
  } catch (error) {
    throw new Error(error)
  }
}

const page = async() => {
  const data = await getData()
 
  return (
    <div>
      <h1>This is Dashboard page</h1>
      <h1>{JSON.stringify(data["headers"])}</h1>
    </div>
  );
};

export default page;