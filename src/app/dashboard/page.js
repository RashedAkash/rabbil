const getData = async () => {
  try {
    const res1 = await fetch("https://jsonplaceholder.typicode.com/users")
   
    const res2 = await fetch("https://dummyjson.com/products");
    const data1 = await res1.json()
    const data2 = await res2.json()

    return {data1:data1,data2:data2}
  } catch (error) {
    throw new Error(error)
  }
}

const page = async() => {
  const data = await getData()
  console.log(data);
  return (
    <div>
      <h1>This is Dashboard page</h1>
      
    </div>
  );
};

export default page;