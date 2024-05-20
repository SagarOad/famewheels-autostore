"use client";


export default function SignUp() {
  return (
    <>
      <section class="bg-gray-50 ">
        <div class="flex flex-col items-center justify-center mx-auto lg:py-0">
          <a
            href="#"
            class="flex items-center mb-6 text-2xl font-semibold  "
          ></a>
          <div class="w-full bg-white rounded-lg shadow dark:border md:mt-0 sm:max-w-md xl:p-0 dark:bg-gray-800 ">
            <div class="p-6 space-y-4 md:space-y-6 sm:p-2">
              <h1 class="text-xl font-bold leading-tight tracking-tight  md:text-2xl ">
                Create an account
              </h1>
              <form class="space-y-4 md:space-y-6" action="#">
                <div>
                  <label for="email" class="block mb-2 text-sm font-medium  ">
                    Your email
                  </label>
                  <input
                    type="email"
                    name="email"
                    id="email"
                    class="darkbg-gray-50 border border-gray-300 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-4 "
                    placeholder="name@company.com"
                    required=""
                  />
                </div>
                <div>
                  <label
                    for="password"
                    class="block mb-2 text-sm font-medium  "
                  >
                    Password
                  </label>
                  <input
                    type="password"
                    name="password"
                    id="password"
                    placeholder="••••••••"
                    class="bg-gray-50 border border-gray-300  sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-4 "
                    required=""
                  />
                </div>
                <div>
                  <label
                    for="confirm-password"
                    class="block mb-2 text-sm font-medium  "
                  >
                    Confirm password
                  </label>
                  <input
                    type="confirm-password"
                    name="confirm-password"
                    id="confirm-password"
                    placeholder="••••••••"
                    class="bg-gray-50 border border-gray-300 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-4"
                    required=""
                  />
                </div>
                <div class="flex items-start">
                  <div class="flex items-center h-5">
                    <input
                      id="terms"
                      aria-describedby="terms"
                      type="checkbox"
                      class="w-4 h-4 border border-gray-300 rounded bg-gray-50 focus:ring-3 focus:ring-primary-300 "
                      required=""
                    />
                  </div>
                  <div class="ml-3 text-sm">
                    <label
                      for="terms"
                      class="font-light text-gray-500 dark:text-gray-300"
                    >
                      I accept the{" "}
                      <a
                        class="font-medium text-primary-600 hover:underline dark:text-primary-500"
                        href="#"
                      >
                        Terms and Conditions
                      </a>
                    </label>
                  </div>
                </div>
                <button
                  type="submit"
                  class="w-full bg-[#20409a] text-white focus:ring-4 focus:outline-none focus:ring-primary-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center"
                >
                  Create an account
                </button>

                <div>
                  <button
                    type="button"
                    class="text-white w-full  bg-[#4285F4] hover:bg-[#4285F4]/90 focus:ring-4 focus:outline-none focus:ring-[#4285F4]/50 font-medium rounded-lg text-sm px-5 py-2.5 text-center inline-flex items-center justify-between mr-2 mb-2"
                  >
                    <svg
                      class="mr-2 -ml-1 w-4 h-4"
                      aria-hidden="true"
                      focusable="false"
                      data-prefix="fab"
                      data-icon="google"
                      role="img"
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 488 512"
                    >
                      <path
                        fill="currentColor"
                        d="M488 261.8C488 403.3 391.1 504 248 504 110.8 504 0 393.2 0 256S110.8 8 248 8c66.8 0 123 24.5 166.3 64.9l-67.5 64.9C258.5 52.6 94.3 116.6 94.3 256c0 86.5 69.1 156.6 153.7 156.6 98.2 0 135-70.4 140.8-106.9H248v-85.3h236.1c2.3 12.7 3.9 24.9 3.9 41.4z"
                      ></path>
                    </svg>
                    Sign up with Google<div></div>
                  </button>
                </div>
                <p class="text-sm font-light text-gray-500 dark:text-gray-400">
                  Already have an account?{" "}
                  <a
                    href="#"
                    class="font-medium text-primary-600 hover:underline dark:text-primary-500"
                  >
                    Login here
                  </a>
                </p>
              </form>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
