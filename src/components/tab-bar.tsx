import { Image } from 'expo-image';
import { Pressable, StyleSheet, Text, View } from 'react-native';
import { useSafeAreaInsets } from 'react-native-safe-area-context';

import { FontFamily, Palette } from '@/constants/theme';

const TABS = [
  { label: 'Home', icon: require('@/assets/images/dispatch/tab-home.svg') },
  { label: 'Shipments', icon: require('@/assets/images/dispatch/tab-shipments.svg') },
  null, // central scan button
  { label: 'Alerts', icon: require('@/assets/images/dispatch/tab-alerts.svg') },
  { label: 'Profile', icon: require('@/assets/images/dispatch/tab-profile.svg') },
];

// shortcut: only Home is a real route; other tabs and Scan are inert until those screens exist.
export function TabBar({ active = 'Home' }: { active?: string }) {
  const { bottom } = useSafeAreaInsets();
  return (
    <View style={[styles.bar, { paddingBottom: Math.max(bottom, 22) }]}>
      {TABS.map((tab) =>
        tab ? (
          <Pressable
            key={tab.label}
            style={styles.item}
            accessibilityRole="tab"
            accessibilityState={{ selected: tab.label === active }}>
            {tab.label === active && <View style={styles.indicator} />}
            <Image source={tab.icon} style={styles.icon} />
            <Text style={[styles.label, tab.label === active && styles.labelActive]}>{tab.label}</Text>
          </Pressable>
        ) : (
          <View key="scan" style={styles.item}>
            <Pressable style={styles.scan} accessibilityRole="button" accessibilityLabel="Scan">
              <Image source={require('@/assets/images/dispatch/tab-scan.svg')} style={styles.scanIcon} />
            </Pressable>
          </View>
        ),
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  bar: {
    flexDirection: 'row',
    backgroundColor: Palette.bgSurface,
    borderTopWidth: 0.8,
    borderTopColor: Palette.borderDefault,
    paddingTop: 8,
    paddingHorizontal: 8,
  },
  item: { flex: 1, height: 54, alignItems: 'center', justifyContent: 'center', gap: 3 },
  indicator: {
    position: 'absolute',
    top: -8,
    width: 36,
    height: 4,
    backgroundColor: Palette.bgAccent,
    borderBottomLeftRadius: 4,
    borderBottomRightRadius: 4,
  },
  icon: { width: 24, height: 24 },
  label: { fontFamily: FontFamily.body, fontSize: 12, color: Palette.textMuted },
  labelActive: { color: Palette.textPrimary },
  scan: {
    position: 'absolute',
    top: -30,
    width: 64,
    height: 64,
    borderRadius: 20,
    borderWidth: 2.4,
    borderColor: Palette.borderStrong,
    backgroundColor: Palette.bgAccent,
    alignItems: 'center',
    justifyContent: 'center',
  },
  scanIcon: { width: 30, height: 30 },
});
