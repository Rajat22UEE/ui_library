export default function Home() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen p-8 pb-20 gap-16 sm:p-20 bg-gray-900">
      <p className="text-4xl font-bold text-white">Welcome, Rajat</p>

      <div className="text-lg text-gray-300">
        <ol className="list-decimal pl-6 space-y-4">
          <li>
            <span className="font-medium text-white">Clone and Run:</span> After cloning and running this project, make sure to make changes and push them into your branch.
          </li>
          <li>
            <span className="font-medium text-white">Research Folder Structure:</span> Do some research on how to properly structure your folders for better project management.
          </li>
          <li>
            <span className="font-medium text-white">UI Implementation:</span> Create the UI shown on Excalidraw to enable browsing through the components as discussed.
          </li>
          <li>
            <span className="font-medium text-white">Push Code:</span> Push the updated code to GitHub and notify. Once it is reviewed, proceed to build the components.
          </li>
        </ol>

        <div className="flex flex-col mt-12 space-y-2">
          <p className="text-2xl font-semibold text-white">Best Regards,</p>
          <p className="text-2xl font-semibold text-white">Gourab Majumder</p>
          <p className="text-sm text-gray-500">Lead Software Engineer, Yupcha</p>
        </div>
      </div>
    </div>
  );
}
