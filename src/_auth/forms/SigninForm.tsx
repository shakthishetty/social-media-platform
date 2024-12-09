import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { Link, useNavigate } from "react-router-dom";
import * as z from "zod";

import Loader from "@/components/shared/Loader";
import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { useToast } from "@/components/ui/use-toast";

import { useUserContext } from "@/context/AuthContext";
import { useSignInAccount } from "@/lib/react-query/queries";
import { SigninValidation } from "@/lib/validation";

const SigninForm = () => {
  const { toast } = useToast();
  const navigate = useNavigate();
  const { checkAuthUser, isLoading: isUserLoading } = useUserContext();

  // Query
  const { mutateAsync: signInAccount, isLoading } = useSignInAccount();

  const form = useForm<z.infer<typeof SigninValidation>>({
    resolver: zodResolver(SigninValidation),
    defaultValues: {
      email: "",
      password: "",
    },
  });

  const handleSignin = async (user: z.infer<typeof SigninValidation>) => {
    const session = await signInAccount(user);

    if (!session) {
      toast({ title: "Login failed. Please try again." });
      return;
    }

    const isLoggedIn = await checkAuthUser();

    if (isLoggedIn) {
      form.reset();
      navigate("/");
    } else {
      toast({ title: "Login failed. Please try again." });
      return;
    }
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-black">
      {/* Form Container */}
      <Form {...form}>
        <div className="flex flex-col items-center w-full max-w-sm px-4 py-8 mx-auto bg-gray-900 rounded-lg shadow-lg sm:px-8 md:max-w-md lg:max-w-lg">
          <img
            src="/assets/images/logo.svg"
            alt="logo"
            className="w-16 h-16 sm:w-20 sm:h-20"
          />

          <h2 className="text-xl font-bold text-white sm:text-2xl md:text-3xl pt-4 text-center">
            Log in to your account
          </h2>
          <p className="text-sm text-gray-400 mt-2 text-center">
            Welcome back! Please enter your details.
          </p>

          <form
            onSubmit={form.handleSubmit(handleSignin)}
            className="flex flex-col gap-4 w-full mt-6"
          >
            {/* Email */}
            <FormField
              control={form.control}
              name="email"
              render={({ field }) => (
                <FormItem>
                  <FormLabel className="text-sm text-gray-300">Email</FormLabel>
                  <FormControl>
                    <Input
                      type="text"
                      className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-primary-500 bg-gray-800 text-white placeholder-gray-500"
                      placeholder="Enter your email"
                      {...field}
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            {/* Password */}
            <FormField
              control={form.control}
              name="password"
              render={({ field }) => (
                <FormItem>
                  <FormLabel className="text-sm text-gray-300">Password</FormLabel>
                  <FormControl>
                    <Input
                      type="password"
                      className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-primary-500 bg-gray-800 text-white placeholder-gray-500"
                      placeholder="Enter your password"
                      {...field}
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            {/* Submit Button */}
            <Button
              type="submit"
              className="w-full py-2 text-white bg-primary-500 rounded-md hover:bg-primary-600 flex items-center justify-center"
            >
              {isLoading || isUserLoading ? (
                <div className="flex items-center gap-2">
                  <Loader /> Loading...
                </div>
              ) : (
                "Log in"
              )}
            </Button>

            {/* Sign Up Link */}
            <p className="text-center text-sm text-gray-400 mt-4">
              Don&apos;t have an account?{" "}
              <Link
                to="/sign-up"
                className="text-primary-500 font-semibold hover:underline"
              >
                Sign up
              </Link>
            </p>
          </form>
        </div>
      </Form>
    </div>
  );
};

export default SigninForm;
