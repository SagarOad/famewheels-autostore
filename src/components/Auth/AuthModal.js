import React from "react";
import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogTrigger,
} from "@/components/ui/alert-dialog";
import { Button } from "@/components/ui/button";
import LoginIn from "./LogIn";
import SignUp from "./SignUp";

const AuthModal = () => {
  return (
    <div>
      <AlertDialog>
        <AlertDialogTrigger asChild>
          <Button variant="outline">Show Dialog</Button>
        </AlertDialogTrigger>
        <AlertDialogContent>
          <LoginIn />
          {/* <SignUp /> */}
          <AlertDialogCancel>Cancel</AlertDialogCancel>
        </AlertDialogContent>
      </AlertDialog>
    </div>
  );
};

export default AuthModal;
