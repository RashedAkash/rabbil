import Demo from "@/components/Demo";

async function getData() {
  const res = await fetch("https://jsonplaceholder.typicode.com/users");
  // The return value is *not* serialized
  // You can return Date, Map, Set, etc.

  if (!res.ok) {
    // This will activate the closest `error.js` Error Boundary
    throw new Error("Failed to fetch data");
  }

  return res.json();
}

const page = () => {
  const data = getData()

  return (
    <div>
      <h1>This is Home page</h1>
      <Demo data={data} />
    </div>
  );
};

export default page;
