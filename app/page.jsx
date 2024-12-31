
export default function Home() {
  return (
    <div className="flex flex-col items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20">
      <p className="text-3xl">Welcome Rajat</p>

      <div className="text-xl">
        <ol className="list-decimal pl-6 space-y-2">
          <li>
            After you clone and run this project, make sure to make some changes and push them into your branch.
          </li>
          <li>
            Then, do some research on how to properly structure your folders for better management.
          </li>
          <li>
            Create the UI shown on Excalidraw to enable browsing through the components as discussed.
          </li>
          <li>
            Push the code to GitHub and notify. Once it is checked, you can proceed to build the components.
          </li>
        </ol>

        <div className="flex flex-col mt-10 space-y-1">
          <p className="text-2xl font-semibold">Regards,</p>
          <p className="text-2xl font-semibold">Gourab Majumder</p>
          <p className="text-sm text-gray-300">Lead Software Engineer, Yupcha</p>
        </div>
      </div>


    </div>
  );
}
