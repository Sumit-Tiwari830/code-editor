import React from "react";
import { Button } from "@/components/ui/button";
import {
    Card,
    CardContent,
    CardDescription,
    CardFooter,
    CardHeader,
    CardTitle,
} from "@/components/ui/card";
import { FcGoogle } from "react-icons/fc";
import { FaGithub, FaCode } from "react-icons/fa";
import { signIn } from "@/auth";

async function handleGoogleSignIn() {
    "use server";
    await signIn("google");
}

async function handleGithubSignIn() {
    "use server";
    await signIn("github");
}

const SignInFormClient = () => {
    return (
        <Card className="w-full max-w-md border-neutral-800/60 bg-neutral-950/60 backdrop-blur-xl shadow-2xl shadow-blue-900/5 relative overflow-hidden">
            {/* Top glowing accent line */}
            <div className="absolute top-0 left-0 w-full h-[2px] bg-gradient-to-r from-transparent via-blue-500 to-transparent opacity-80"></div>

            <CardHeader className="space-y-3 pb-6 pt-8">
                {/* Mobile-only mini icon */}
                <div className="flex justify-center mb-2 lg:hidden">
                    <div className="p-3 bg-blue-500/10 rounded-xl border border-blue-500/20 shadow-[0_0_15px_rgba(0,149,255,0.15)]">
                        <FaCode className="text-blue-500 text-2xl" />
                    </div>
                </div>

                <CardTitle className="text-center text-3xl font-bold tracking-tight text-white">
                    Welcome Back
                </CardTitle>

                <CardDescription className="text-center text-neutral-400 text-base">
                    Sign in to continue using <span className="font-semibold text-blue-400">FlexIDE</span>
                </CardDescription>
            </CardHeader>

            <CardContent className="space-y-4 px-8">
                <form action={handleGoogleSignIn}>
                    <Button
                        type="submit"
                        variant="outline"
                        className="w-full h-12 bg-neutral-900/50 border-neutral-700 hover:bg-neutral-800 hover:border-neutral-500 text-neutral-200 transition-all duration-200 group"
                    >
                        <FcGoogle className="mr-3 h-5 w-5 transition-transform group-hover:scale-110" />
                        <span className="font-medium">Continue with Google</span>
                    </Button>
                </form>

                <form action={handleGithubSignIn}>
                    <Button
                        type="submit"
                        variant="outline"
                        className="w-full h-12 bg-neutral-900/50 border-neutral-700 hover:bg-neutral-800 hover:border-neutral-500 text-neutral-200 transition-all duration-200 group"
                    >
                        <FaGithub className="mr-3 h-5 w-5 transition-transform group-hover:scale-110" />
                        <span className="font-medium">Continue with GitHub</span>
                    </Button>
                </form>
            </CardContent>

            <CardFooter className="px-8 pb-8 pt-4">
                <p className="w-full text-center text-sm text-neutral-500">
                    By signing in, you agree to our{" "}
                    <a href="#" className="text-blue-400 hover:text-blue-300 transition-colors underline underline-offset-4">
                        Terms of Service
                    </a>{" "}
                    and{" "}
                    <a href="#" className="text-blue-400 hover:text-blue-300 transition-colors underline underline-offset-4">
                        Privacy Policy
                    </a>.
                </p>
            </CardFooter>
        </Card>
    );
};

export default SignInFormClient;