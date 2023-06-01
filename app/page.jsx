// const fetchApi = async () => {
//   const res = await fetch('https://api.publicapis.org/entries')
//   const data = await res.json()
//   console.log(data.entries)
// }

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <h1 className="text-4xl font-bold text-center">
        Welcome to my API List! This is a list of public APIs that I have found
        and wanted to use to find inspiration for projects. I hope you can also
        find this list useful!
      </h1>
    </main>
  );
}
