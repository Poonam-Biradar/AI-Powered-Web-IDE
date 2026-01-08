"use client";

import React from "react";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
  CardDescription,
} from "@/components/ui/card";
import { Chrome, Github } from "lucide-react";
import { signIn } from "next-auth/react";

const SignInFormClient = () => {
  return (
    <Card className="w-full max-w-md bg-gray-900/60 backdrop-blur-xl text-white shadow-2xl rounded-2xl border border-white/10">
      <CardHeader className="space-y-2 text-center">
        <CardTitle className="text-3xl font-extrabold tracking-wide">
          Welcome Back
        </CardTitle>

        <CardDescription className="text-gray-400 text-sm">
          Login to continue your journey
        </CardDescription>
      </CardHeader>

      <CardContent className="grid gap-5 py-4">

        {/* Google */}
        <Button
          variant="outline"
          className="w-full py-5 rounded-xl flex items-center justify-center gap-3 border-gray-700 bg-gray-800/40 hover:bg-gray-700 transition-all text-gray-200"
          onClick={() => signIn("google")}
        >
          <Chrome className="h-5 w-5 text-orange-400" />
          <span className="font-semibold">Continue with Google</span>
        </Button>

        {/* GitHub */}
        <Button
          variant="outline"
          className="w-full py-5 rounded-xl flex items-center justify-center gap-3 border-gray-700 bg-gray-800/40 hover:bg-gray-700 transition-all text-gray-200"
          onClick={() => signIn("github")}
        >
          <Github className="h-5 w-5 text-orange-400" />
          <span className="font-semibold">Continue with GitHub</span>
        </Button>

      </CardContent>

      <CardFooter>
        <p className="text-center text-gray-500 text-xs w-full leading-relaxed">
          By continuing, you agree to our{" "}
          <a href="#" className="underline hover:text-orange-400">
            Terms of Service
          </a>{" "}
          and{" "}
          <a href="#" className="underline hover:text-orange-400">
            Privacy Policy
          </a>.
        </p>
      </CardFooter>
    </Card>
  );
};

export default SignInFormClient;
