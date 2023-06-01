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
        <span className="absolute -left-2 -top-3 bg-purple-800 rounded-full px-3 py-1 text-sm font-semibold text-gray-100">
          {apiCategory}
        </span>
        <div className="max-w-sm rounded overflow-hidden shadow-lg apiListCard">
          <div className="px-6 py-4">
            <div className="font-bold text-xl mb-2">{apiName}</div>
            <p className="text-base">{apiDescription}</p>
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
