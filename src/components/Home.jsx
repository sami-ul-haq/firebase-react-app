import { Link } from "react-router-dom";

const Home = ({ user }) => {
  return (
    <div className="h-full flex-center">
      {!user ? (
        <div className="space-x-3">
          <Link to={"/login"}>
            <button className="bg-indigo-600 rounded-md text-white px-4 py-2 hover:bg-indigo-900">
              Login
            </button>
          </Link>
          <Link to={"/signup"}>
            <button className="bg-indigo-600 rounded-md text-white px-4 py-2 hover:bg-indigo-900">
              Signup
            </button>
          </Link>
        </div>
      ) : (
        <h1 className="text-3xl text-center font-bold text-white">
          Welcome To the App
        </h1>
      )}
    </div>
  );
};

export default Home;
