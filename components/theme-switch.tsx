"use client";

import { FC } from "react";
import { SwitchProps, useSwitch, Switch } from "@nextui-org/switch";
import { useTheme } from "next-themes";
import { useIsSSR } from "@react-aria/ssr";

import { SunFilledIcon, MoonFilledIcon } from "@/components/icons";

export interface ThemeSwitchProps {
  className?: string;
  classNames?: SwitchProps["classNames"];
}

export const ThemeSwitch: FC<ThemeSwitchProps> = ({
  className,
  classNames,
}) => {
  const { theme, setTheme } = useTheme();
  const isSSR = useIsSSR();

  const onChange = () => {
    theme === "light" ? setTheme("dark") : setTheme("light");
  };

  const { isSelected } = useSwitch({
    isSelected: theme === "light" || isSSR,
    "aria-label": `Switch to ${theme === "light" || isSSR ? "dark" : "light"} mode`,
    onChange,
  });

  return (
    <Switch
      className={className}
      classNames={classNames}
      defaultSelected
      size="sm"
      color="primary"
      onChange={onChange}
      thumbIcon={({ isSelected, className }) =>
        isSelected ? (
          <MoonFilledIcon className={className} />
        ) : (
          <SunFilledIcon className={className} />
        )
      }
    >
      {isSelected ? "Light" : "Dark"}
    </Switch>
  );
};
