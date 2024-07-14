// @ts-nocheck
"use client";
import Link from "next/link";
import { useState } from "react";
import { Button } from "~~/components/ui/button";
import { Card, CardDescription, CardFooter, CardHeader, CardTitle } from "~~/components/ui/card";
import { Input } from "~~/components/ui/input";
import { Label } from "~~/components/ui/label";


const SenderForm4 = () => {
  const [isCopied, setIsCopied] = useState(false);
  const handleCopyLink = () => {
    navigator.clipboard.writeText("https://thebox.gift");
    setIsCopied(true);
    setTimeout(() => setIsCopied(false), 2000);
  };
  return (
    <div className="flex-col justify-center items-center min-h-screen">
      <Card className="w-full max-w-md">
        <CardHeader>
          <CardTitle>That&apos;s it! Your package is now waiting for a Deliverer.</CardTitle>
          <CardDescription className="text-sm text-muted-foreground">
            This bounty will be placed in escrow. It will be paid our to your Deliverer after they deliver your package.
            If your delivery is not completed, it will be returned to you.
          </CardDescription>
        </CardHeader>
        <CardHeader>
          <Label htmlFor="bounty-amount">Share a tracking link with your package reciever:</Label>
          <div className="flex w-full max-w-md items-center space-x-2">
            <Input type="text" value="https://thebox.gift/track/0" readOnly className="flex-1" />
            <Button onClick={handleCopyLink}>{isCopied ? "Copied!" : "Copy Link"}</Button>
            {isCopied && <div className="text-sm text-muted-foreground">Link copied to clipboard</div>}
          </div>
        </CardHeader>
        <CardFooter>
        <Link href="/my-packages">
          <Button className="ml-auto mt-10">Track Delivery</Button>
          </Link>
        </CardFooter>
      </Card>
    </div>
  );
};

export default SenderForm4;
