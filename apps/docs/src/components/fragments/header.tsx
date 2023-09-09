import { mdiAppleKeyboardCommand, mdiGithub, mdiMagnify, mdiTwitter } from "@mdi/js";
import type { Component } from "solid-js";
import { Button, Icon, IconButton } from "#components/primitives";
import { discordIcon } from "#assets/icons";

const isAppleDevice = (): boolean => {
  const platform = typeof navigator === "object" ? navigator.platform : "";
  const appleDeviceRegex = /Mac|iPod|iPhone|iPad/;

  return appleDeviceRegex.test(platform);
};
const Header: Component = () => {
  return (
    <div class="top-0 sticky left-0 z-50 items-end justify-center flex-1 w-full hidden md:flex h-8">
      <div class="flex w-full justify-end items-center m-0 rounded-none p-1">
        <IconButton
          path={mdiMagnify}
          label={
            <div class="hidden xl:flex w-full items-center min-w-64">
              <span class="pl-1 flex-1 text-start">Search</span>
              <kbd class="bg-gray-300 dark:bg-gray-700 group-hover:bg-gray-200 dark:group-hover:bg-gray-800 flex justify-center items-center rounded-md px-1 h-5 text-sm">
                {isAppleDevice() ? (
                  <Icon path={mdiAppleKeyboardCommand} class="h-3 w-3" />
                ) : (
                  "Ctrl "
                )}
                K
              </kbd>
            </div>
          }
          text="soft"
          class="@xl:min-w-48 justify-start m-0 bg-gray-200 group"
        />
      </div>
    </div>
  );
};

export { Header };
