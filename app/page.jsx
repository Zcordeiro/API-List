
export default function Home() {
  return (
    <main className="flex flex-col items-center justify-between p-10">
      <h1 className="text-4xl font-bold text-center m-5">
        Welcome to my API List! This is a list of public APIs that I have found
        and wanted to use to find inspiration for projects. I hope you can also
        find this list useful!
      </h1>
      <div className="flex flex-col items-center justify-center">
        <h2 className="text-2xl font-bold text-center text-orange-700">
          This site is still under construction, but feel free to look around!
        </h2>
        <h2 className="text-2xl font-bold text-center text-blue-900 italic">
          I am currently working on the following:
        </h2>
        <ul className="list-disc text-blue-900 italic">
          <li>Adding a search bar</li>
          <li>Adding a filter</li>
          <li>Adding a sort</li>
          <li>Adding a random API button</li>
          <li>Adding a random category button</li>
        </ul>
      </div>

    </main>
  );
}
