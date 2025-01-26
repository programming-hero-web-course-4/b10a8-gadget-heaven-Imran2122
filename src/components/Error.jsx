import { Link } from "react-router-dom";

const Error = () => {
  return (
    <div className="flex flex-col items-center justify-center h-screen text-center">
      <h1 className="text-5xl font-bold text-red-500">404</h1>
      <p className="text-xl mt-4">Oops! The page you are looking for does not exist.</p>
      <Link to="/" className="mt-6 px-6 py-3 bg-green  rounded-lg shadow-md hover:bg-blue-600">
        Go Home
      </Link>
    </div>
  );
};

export default Error;
