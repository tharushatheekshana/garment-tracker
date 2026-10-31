/**
 * Below are the colors that are used in the app. The colors are defined in the light and dark mode.
 * There are many other ways to style your app. For example, [Nativewind](https://www.nativewind.dev/), [Tamagui](https://tamagui.dev/), [unistyles](https://unistyl.es/), etc.
 */

import '@/global.css';

import { Platform } from 'react-native';

export const Colors = {
  light: {
    text: '#000000',
    background: '#ffffff',
    backgroundElement: '#F0F0F3',
    backgroundSelected: '#E0E1E6',
    textSecondary: '#60646C',
  },
  dark: {
    text: '#ffffff',
    background: '#000000',
    backgroundElement: '#212225',
    backgroundSelected: '#2E3135',
    textSecondary: '#B0B4BA',
  },
} as const;

export type ThemeColor = keyof typeof Colors.light & keyof typeof Colors.dark;

export const Fonts = Platform.select({
  ios: {
    /** iOS `UIFontDescriptorSystemDesignDefault` */
    sans: 'system-ui',
    /** iOS `UIFontDescriptorSystemDesignSerif` */
    serif: 'ui-serif',
    /** iOS `UIFontDescriptorSystemDesignRounded` */
    rounded: 'ui-rounded',
    /** iOS `UIFontDescriptorSystemDesignMonospaced` */
    mono: 'ui-monospace',
  },
  default: {
    sans: 'normal',
    serif: 'serif',
    rounded: 'normal',
    mono: 'monospace',
  },
  web: {
    sans: 'var(--font-display)',
    serif: 'var(--font-serif)',
    rounded: 'var(--font-rounded)',
    mono: 'var(--font-mono)',
  },
});

// TrendyPass design tokens (Figma: TrendyPass – Gate Officer Mobile UI). Light only.
export const Palette = {
  bgPage: '#f3f1ea',
  bgSurface: '#ffffff',
  bgAccent: '#ffc629',
  bgInverse: '#101317',
  borderDefault: '#d9d5cb',
  borderStrong: '#101317',
  textPrimary: '#101317',
  textMuted: '#6b7280',
  textAccent: '#ffc629',
  textOnAccentMuted: '#3a2e00',
  status: {
    info: { bg: '#e3ecfd', fg: '#1d5fe0' },
    success: { bg: '#ddf3e6', fg: '#14864a' },
    neutral: { bg: '#eceae3', fg: '#2b3038' },
    danger: { bg: '#fde4e1', fg: '#d2281e' },
  },
} as const;

// Family names match the keys loaded with useFonts in src/app/_layout.tsx.
export const FontFamily = {
  body: 'Barlow_700Bold',
  bodyRegular: 'Barlow_400Regular',
  bodySemiBold: 'Barlow_600SemiBold',
  display: 'BarlowCondensed_800ExtraBold',
  mono: 'JetBrainsMono_700Bold',
} as const;

export const Spacing = {
  half: 2,
  one: 4,
  two: 8,
  three: 16,
  four: 24,
  five: 32,
  six: 64,
} as const;

export const BottomTabInset = Platform.select({ ios: 50, android: 80 }) ?? 0;
export const MaxContentWidth = 800;
