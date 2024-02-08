
async function getData() {
  const res = await fetch("https://dummyjson.com/products");
  // The return value is *not* serialized
  // You can return Date, Map, Set, etc.

  if (!res.ok) {
    // This will activate the closest `error.js` Error Boundary
    throw new Error("Failed to fetch data");
  }

  return res.json();
}

const page = async() => {
  const data = await getData()
  console.log(data.products);
  return (
    <div>
      <h1>This is product page</h1>
      <div className=" grid grid-cols-1  md:grid-cols-2 lg:grid-cols-3 gap-5">
        {data?.products?.map((p) => (
          <div
            key={p.id}
            className="max-w-xs p-6 rounded-md shadow-md dark:bg-gray-900 dark:text-gray-50"
          >
            <img
              src={p?.thumbnail}
              alt=""
              className="object-cover object-center w-full rounded-md h-72 dark:bg-gray-500"
            />
            <div className="mt-6 mb-2">
              <span className="block text-xs font-medium tracki uppercase dark:text-violet-400">
                Quisque
              </span>
              <h2 className="text-xl font-semibold tracki">{p?.title}</h2>
            </div>
            <p className="dark:text-gray-100">{p?.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default page;
