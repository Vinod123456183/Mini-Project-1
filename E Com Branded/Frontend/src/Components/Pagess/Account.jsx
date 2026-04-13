import React from "react";

const Account = () => {
  return (
    <>
      <div className="text-center mt-10 mb-5">
        <span className="font-encode text-5xl md:text-6xl lg:text-7xl">
          Account
        </span>
      </div>

      <div className="mb-20 font-medium text-center">
        <p className="text-gray-600 font-poppins text-lg md:text-xl">
          <span className="flex items-center justify-center">
            Home
            <span className="px-3 text-xl">&gt;</span>
            <span>Account</span>
          </span>
        </p>
      </div>

      <div className="flex items-start m-32  flex-col md:flex-row justify-center mx-auto  gap-14 md:gap-20 b-red-600">
        <div className=" flex font-nunito items-center flex-col justify-center max-w-md  p-6 bg-card rounded-lg shadow-2xl">
          <h2 className="text-[18px]  text-gray-600 font-bold m-4 mb-7">
            Member Login
          </h2>
          <form className="px-4">
            <div className="mb-3">
              <label
                className="block text-sm font-medium text-muted-foreground"
                htmlFor="username"
              >
                Username or email address *
              </label>
              <input
                className="mt-1 block w-full text-[12px] p-2 border border-border rounded-sm focus:ring focus:ring-ring"
                type="text"
                id="username"
                placeholder="Enter your username"
                required
              />
            </div>

            <div className="mb-3">
              <label
                className="block text-[12.5px] font-medium text-muted-foreground"
                htmlFor="password"
              >
                Password*
              </label>
              <input
                className=" text-[12px] mt-1 block w-full p-2 border border-border rounded-sm "
                type="password"
                id="password"
                placeholder="Enter your password"
                required
              />
            </div>

            <div className=" mt-5  flex md:gap-10 p-14 pt-2 pb-5 text-[12px]">
              <div>
                {/* <Box /> */}
                <p>Remember Me</p>
              </div>

              <div>
                <p className="border-b-[1px] border-gray-300">
                  Forget Your Password
                </p>
              </div>
            </div>

            <button
              type="submit"
              className="w-full  bg-black text-destructive-foreground p-2 text-white "
            >
              Register
            </button>
          </form>
        </div>

        <div className=" flex font-nunito items-center flex-col justify-center max-w-md   p-6 bg-card rounded-lg shadow-2xl">
          <h2 className="text-[18px] text-gray-600 font-bold mb-4">
            Create an account
          </h2>
          <form className="px-4">
            <div className="mb-3">
              <label
                className="block text-sm font-medium text-muted-foreground"
                htmlFor="username"
              >
                Username
              </label>
              <input
                className="mt-1 block w-full text-[12px] p-2 border border-border rounded-sm focus:ring focus:ring-ring"
                type="text"
                id="username"
                placeholder="Enter your username"
                required
              />
            </div>
            <div className="mb-3">
              <label
                className="text-[12.5px] font-medium text-muted-foreground"
                htmlFor="email"
              >
                Email address*
              </label>
              <input
                className=" text-[12px] mt-1 block w-full p-2 border border-border rounded-sm focus:ring focus:ring-ring"
                type="email"
                id="email"
                placeholder="Enter your email"
                required
              />
            </div>

            <div className="mb-3">
              <label
                className=" block text-[12.5px] font-medium text-muted-foreground"
                htmlFor="password"
              >
                Password*
              </label>
              <input
                className=" text-[12px] mt-1 block w-full p-2 border border-border rounded-sm "
                type="password"
                id="password"
                placeholder="Enter your password"
                required
              />
            </div>

            <p className=" mt-4 mb-7 text-[10.8px]  text-gray-400 ">
              Your personal undefined will be used to support your experience
              throughout this website, to manage access to your account, and for
              other purposes described in our{" "}
              <a href="#" className="text-primary hover:underline">
                privacy policy
              </a>
              .
            </p>

            <button
              type="submit"
              className="w-full  bg-black text-destructive-foreground p-2 text-white "
            >
              Register
            </button>
          </form>
        </div>
      </div>
    </>
  );
};

export default Account;
