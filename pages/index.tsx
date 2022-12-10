export default function Home() {
  return (
    <div className="flex flex-col min-h-screen">
      <header className="flex items-center justify-between p-4 bg-gray-800 text-gray-200 shadow-lg">
        <h1 className="text-gray-50 text-2xl">GamingCopter</h1>
        <form className="bg-gray-200 text-gray-700 py-2 px-4 rounded focus-within:outline outline-gray-400">
          <input className="bg-transparent outline-none" type="text" name="search" id="search" />
          <button>Buscar</button>
        </form>
        <div>Profile Icon or future register</div>
      </header>
      <main className="flex-auto px-4 bg-gray-300">
        <section className="flex-col container w-full mt-20 mx-auto p-4 bg-gray-600 rounded-xl shadow-lg">
          <input className="p-1 mb-4 rounded" type="text" name="listSearch" id="listSearch" />
          <div className="overflow-x-auto">
            <table className="min-w-full">
              <thead className="bg-gray-900">
                <tr>
                  <th scope="col" className="text-sm font-medium text-gray-50 px-6 py-2 text-left">Name</th>
                  <th scope="col" className="text-sm font-medium text-gray-50 px-6 py-2 text-left">Status</th>
                  <th scope="col" className="text-sm font-medium text-gray-50 px-6 py-2 text-left">Platform</th>
                  <th scope="col" className="text-sm font-medium text-gray-50 px-6 py-2 text-left">Priority</th>
                  <th scope="col" className="text-sm font-medium text-gray-50 px-6 py-2 text-left">Started</th>
                  <th scope="col" className="text-sm font-medium text-gray-50 px-6 py-2 text-left">Finished</th>
                  <th scope="col" className="text-sm font-medium text-gray-50 px-6 py-2 text-left">Notes</th>
                </tr>
              </thead>
              <tbody>
                <tr className="border-b border-gray-700">
                  <td className="text-sm font-light text-gray-50 px-6 py-2 whitespace-nowrap">Cell</td>
                  <td className="text-sm font-light text-gray-50 px-6 py-2 whitespace-nowrap">Cell</td>
                  <td className="text-sm font-light text-gray-50 px-6 py-2 whitespace-nowrap">Cell</td>
                  <td className="text-sm font-light text-gray-50 px-6 py-2 whitespace-nowrap">Cell</td>
                  <td className="text-sm font-light text-gray-50 px-6 py-2 whitespace-nowrap">Cell</td>
                  <td className="text-sm font-light text-gray-50 px-6 py-2 whitespace-nowrap">Cell</td>
                  <td className="text-sm font-light text-gray-50 px-6 py-2 whitespace-nowrap">Cell</td>
                </tr>
                <tr className="border-b border-gray-700">
                  <td className="text-sm font-light text-gray-50 px-6 py-2 whitespace-nowrap">Cell</td>
                  <td className="text-sm font-light text-gray-50 px-6 py-2 whitespace-nowrap">Cell</td>
                  <td className="text-sm font-light text-gray-50 px-6 py-2 whitespace-nowrap">Cell</td>
                  <td className="text-sm font-light text-gray-50 px-6 py-2 whitespace-nowrap">Cell</td>
                  <td className="text-sm font-light text-gray-50 px-6 py-2 whitespace-nowrap">Cell</td>
                  <td className="text-sm font-light text-gray-50 px-6 py-2 whitespace-nowrap">Cell</td>
                  <td className="text-sm font-light text-gray-50 px-6 py-2 whitespace-nowrap">Cell</td>
                </tr>
                <tr className="border-b border-gray-700">
                  <td className="text-sm font-light text-gray-50 px-6 py-2 whitespace-nowrap">Cell</td>
                  <td className="text-sm font-light text-gray-50 px-6 py-2 whitespace-nowrap">Cell</td>
                  <td className="text-sm font-light text-gray-50 px-6 py-2 whitespace-nowrap">Cell</td>
                  <td className="text-sm font-light text-gray-50 px-6 py-2 whitespace-nowrap">Cell</td>
                  <td className="text-sm font-light text-gray-50 px-6 py-2 whitespace-nowrap">Cell</td>
                  <td className="text-sm font-light text-gray-50 px-6 py-2 whitespace-nowrap">Cell</td>
                  <td className="text-sm font-light text-gray-50 px-6 py-2 whitespace-nowrap">Cell</td>
                </tr>
              </tbody>
            </table>
          </div>
        </section>
      </main>
      <footer className="flex items-center justify-center p-4 bg-gray-800 text-gray-200 shadow-lg">
        Todos direitos reservados.
      </footer>
    </div>
  )
}
