"use client";

import { Button } from "@/components/ui/button";
import { signIn } from "next-auth/react";

export default function Login() {
  return <Button onClick={() => signIn("google")}>Login with Google</Button>;
}
