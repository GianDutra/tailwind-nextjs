/* eslint-disable @next/next/no-img-element */
import { LogOut } from "lucide-react";
import { Button } from "../Button";

export function Profile() {
  return (
    <div className="grid items-center gap-3 grid-cols-profile">
      <img
        src="https://github.com/GianDutra.png"
        className="w-10 h-10 rounded-full"
      />
      <div className="flex flex-col truncate">
        <span className="text-sm font-semibold text-zinc-700">
          Gian Dutra
        </span>
        <span className="text-sm text-zinc-500 truncate">
          giandutra@hotmail.com.br
        </span>
      </div>
      <Button variant="ghost" type="button" className="ml-auto p-2 hover:bg-zinc-50 rounded-md">
        <LogOut className="w-5 h-6 text-zinc-500" />
      </Button>
    </div>
  );
}
