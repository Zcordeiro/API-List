const ApiCard = ({
  apiName,
  apiDescription,
  apiAuth,
  apiHttps,
  apiCors,
  apiLink,
  apiCategory,
}) => {
  if (apiHttps === true) {
    apiHttps = "✅";
  } else {
    apiHttps = "❌";
  }

  if (apiCors === "yes") {
    apiCors = "✅";
  }
  if (apiCors === "no") {
    apiCors = "❌";
  }

  if (apiAuth === "") {
    apiAuth = "❌";
  }
  if (apiAuth === "apiKey") {
    apiAuth = "API 🔑";
  }

  return (
    <>
      <a className="relative" href={apiLink} target="_blank">

        <div className="max-w-sm rounded overflow-hidden shadow-lg apiListCard bg-gradient-to-bl from-gray-300 to-gray-600 bg-gradient-to-r">

          <span className="absolute -left-0 -top-0 bg-stone-800 rounded-lg p-1 text-sm font-semibold text-gray-100">
            {apiCategory}
          </span>

          <div className="px-6 py-4">
            <div className="font-bold text-xl m-6">{apiName}</div>
            <p className="text-base px-6">{apiDescription}</p>
          </div>

          <div className="px-6 pt-4 pb-2 text-center">
            <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">
              Authentication: {apiAuth}
            </span>
            <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">
              HTTPS: {apiHttps}
            </span>
            <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">
              CORS: {apiCors}
            </span>
          </div>
        </div>
      </a>
    </>
  );
};

export default ApiCard;
