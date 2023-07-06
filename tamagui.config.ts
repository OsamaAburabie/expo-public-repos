import { createAnimations } from "@tamagui/animations-react-native";

import { createInterFont } from "@tamagui/font-inter";

import { createMedia } from "@tamagui/react-native-media-driver";

import { shorthands } from "@tamagui/shorthands";

import { themes, tokens } from "@tamagui/themes";

import { createTamagui, createTheme } from "tamagui";

export const myTokens = {
  ...tokens,
  color: {
    white: "#FFFFFF",
    white2: "#F2F2F2",
    white3: "#F4F4F4",
    black: "#000000",
    lightBlack: "#131313",
    background: "#1E1E1E",
    primary: "#ED5151",
    primaryDimmed: "#FFF5EE",
    secondary: "#222222",
    primary_text: "#FFFFFF",
    secondary_text: "#CCCCCC",
    border: "#EAEAEA",
    green: "#36C07E",
    red: "#ED5151",
    gray: "#808080",
    gray2: "#B7B7B7",
    gray3: "#DDD",
  },
  size: {
    sm: 10,
    md: 15,
    true: 10,
    lg: 25,
  },
  zIndex: {
    sm: 10,
    md: 15,
    true: 10,
    lg: 25,
  },
};

const dark = createTheme({
  white: myTokens.color.white,
  white2: myTokens.color.white2,
  white3: myTokens.color.white3,
  black: myTokens.color.black,
  lightBlack: myTokens.color.lightBlack,
  background: myTokens.color.background,
  primary: myTokens.color.primary,
  primaryDimmed: myTokens.color.primaryDimmed,
  secondary: myTokens.color.secondary,
  color: myTokens.color.primary_text,
  color2: myTokens.color.secondary_text,
  border: myTokens.color.border,
  green: myTokens.color.green,
  red: myTokens.color.red,
  gray: myTokens.color.gray,
  gray2: myTokens.color.gray2,
  gray3: myTokens.color.gray3,
});

const light = createTheme({
  ...dark,
});

const myThemes = {
  ...themes,
  dark,
  light,
};

const animations = createAnimations({
  bouncy: {
    type: "spring",

    damping: 10,

    mass: 0.9,

    stiffness: 100,
  },

  lazy: {
    type: "spring",

    damping: 20,

    stiffness: 60,
  },

  quick: {
    type: "spring",

    damping: 20,

    mass: 1.2,

    stiffness: 250,
  },
});
const headingFont = createInterFont();

const bodyFont = createInterFont();

const config = createTamagui({
  animations,

  defaultTheme: "dark",

  shouldAddPrefersColorThemes: false,

  themeClassNameOnRoot: false,

  shorthands,

  fonts: {
    heading: headingFont,

    body: bodyFont,
  },

  defaultFont: "body",

  themes: myThemes,

  tokens: myTokens,

  media: createMedia({
    xs: { maxWidth: 660 },

    sm: { maxWidth: 800 },

    md: { maxWidth: 1020 },

    lg: { maxWidth: 1280 },

    xl: { maxWidth: 1420 },

    xxl: { maxWidth: 1600 },

    gtXs: { minWidth: 660 + 1 },

    gtSm: { minWidth: 800 + 1 },

    gtMd: { minWidth: 1020 + 1 },

    gtLg: { minWidth: 1280 + 1 },

    short: { maxHeight: 820 },

    tall: { minHeight: 820 },

    hoverNone: { hover: "none" },

    pointerCoarse: { pointer: "coarse" },
  }),
});
export type AppConfig = typeof config;
declare module "tamagui" {
  // overrides TamaguiCustomConfig so your custom types

  // work everywhere you import `tamagui`

  interface TamaguiCustomConfig extends AppConfig {}
}
export default config;
