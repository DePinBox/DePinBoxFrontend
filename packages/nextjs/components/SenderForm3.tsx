// @ts-nocheck
"use client";
import { Button } from "~~/components/ui/button";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "~~/components/ui/card";
import { Label } from "~~/components/ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "~~/components/ui/select";
import { Slider } from "~~/components/ui/slider";

const SenderForm3 = () => {
  return (
    <div className="bg-red-600 flex-col justify-start items-center min-h-screen">
      <Card className="bg-green-600 w-full max-w-md">
        <CardHeader>
          <CardTitle>Put your package in The Box.</CardTitle>
          <CardDescription className="text-sm text-muted-foreground">
            The Box is now unlocked. Please place your package inside The Box. Please close The Box when you are done.
          </CardDescription>
        </CardHeader>
        <CardContent>
          <form className="grid gap-4">
            <div className="grid gap-1.5">
              <Label htmlFor="bounty-amount">What amount will you pay your Deliverer to transport your package?</Label>
              <Slider defaultValue={[10]} max={44} step={1} />
              <div className="flex justify-between">
                <span>5 USDC</span>
                <span>44 USDC</span>
              </div>
            </div>
            <div className="grid gap-1.5">
              <Label htmlFor="chain">What chain will your payment be made on?</Label>
              <Select>
                <SelectTrigger className="w-[180px]">
                  <SelectValue placeholder="The Best Chain" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="polygon">Polygon</SelectItem>
                  <SelectItem value="morph">Morph</SelectItem>
                  <SelectItem value="gnosis">Gnosis Chain</SelectItem>
                  <SelectItem value="base">Base</SelectItem>
                  <SelectItem value="zerion">Zero</SelectItem>
                  <SelectItem value="celo">Celo</SelectItem>
                  <SelectItem value="zitcut">Zircut</SelectItem>
                  <SelectItem value="arbitrum">Arbitrum</SelectItem>
                  <SelectItem value="rootstock">Rootstock</SelectItem>
                  <SelectItem value="neon">Neon</SelectItem>
                  <SelectItem value="vara">Vara</SelectItem>
                </SelectContent>
              </Select>
            </div>
            <div className="grid gap-1.5">
              <Label htmlFor="token">What token will you pay in?</Label>
              <Select>
                <SelectTrigger className="w-[180px]">
                  <SelectValue placeholder="BOX" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="usdc">USDC</SelectItem>
                  <SelectItem value="box">BOX</SelectItem>
                  <SelectItem value="usdt">USDT</SelectItem>
                  <SelectItem value="eth">ETH</SelectItem>
                </SelectContent>
              </Select>
            </div>
          </form>
        </CardContent>
        <CardFooter>
          <Button className="ml-auto">Process payment</Button>
        </CardFooter>
      </Card>
    </div>
  );
};

export default SenderForm3;
