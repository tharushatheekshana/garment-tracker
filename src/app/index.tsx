import { Image } from 'expo-image';
import { Pressable, ScrollView, StyleSheet, Text, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

import { ShipmentRowCard } from '@/components/shipment-row-card';
import { StatusChip } from '@/components/status-chip';
import { TabBar } from '@/components/tab-bar';
import { FontFamily, Palette } from '@/constants/theme';

// shortcut: static sample data from the Figma mock; replace with the dispatch API.
const STATS = [
  { label: 'Created', value: 6 },
  { label: 'At the gate', value: 2 },
  { label: 'Flagged', value: 1, danger: true },
];

const DISPATCHES = [
  { id: 'TRF-2610-0421', subtitle: '→ Embroidery Sub. · WP NB-7810 · 600 pcs', status: 'neutral', statusLabel: 'Awaiting exit' },
  { id: 'TRF-2610-0419', subtitle: '→ Finishing Kandy · WP LH-2290 · 1,240 pcs', status: 'info', statusLabel: 'In transit' },
  { id: 'TRF-2610-0418', subtitle: '→ Washing Plant · WP LB-4521 · 1,480/1,500', status: 'danger', statusLabel: 'Short 20' },
] as const;

export default function DispatchHomeScreen() {
  return (
    <View style={styles.page}>
      <SafeAreaView edges={['top']} style={styles.page}>
        <ScrollView contentContainerStyle={styles.content}>
          <View style={styles.greeting}>
            <View style={styles.greetingText}>
              <Text style={styles.label} numberOfLines={1}>
                Dispatch · Sewing Plant Biyagama
              </Text>
              <Text style={styles.heading} numberOfLines={1}>
                Good morning, Sachini
              </Text>
            </View>
            <View style={styles.avatar}>
              <Text style={styles.avatarText}>SF</Text>
            </View>
          </View>

          <View style={styles.chips}>
            <StatusChip label="Online" status="success" dot />
            <StatusChip label="Role: Dispatch" status="neutral" />
          </View>

          <View style={styles.body}>
            <Pressable style={({ pressed }) => [styles.cta, pressed && { opacity: 0.85 }]} accessibilityRole="button">
              <View style={styles.ctaIconBox}>
                <Image source={require('@/assets/images/dispatch/scan.svg')} style={styles.ctaIcon} />
              </View>
              <View style={styles.ctaText}>
                <Text style={styles.ctaTitle}>NEW DISPATCH</Text>
                <Text style={styles.ctaSubtitle}>Create consignment & Master QR pass</Text>
              </View>
            </Pressable>

            <View style={styles.stats}>
              {STATS.map(({ label, value, danger }) => (
                <View key={label} style={[styles.stat, danger && styles.statDanger]}>
                  <Text style={[styles.label, danger && styles.dangerText]} numberOfLines={1}>
                    {label}
                  </Text>
                  <Text style={[styles.statValue, danger && styles.dangerText]}>{value}</Text>
                </View>
              ))}
            </View>

            <View style={styles.sectionHeader}>
              <Text style={styles.sectionTitle}>Today&apos;s dispatches</Text>
              <Pressable accessibilityRole="link" hitSlop={8}>
                <Text style={styles.seeAll}>See all</Text>
              </Pressable>
            </View>

            {DISPATCHES.map((d) => (
              <ShipmentRowCard key={d.id} {...d} />
            ))}
          </View>
        </ScrollView>
      </SafeAreaView>
      <TabBar active="Home" />
    </View>
  );
}

const styles = StyleSheet.create({
  page: { flex: 1, backgroundColor: Palette.bgPage },
  content: { gap: 14, paddingTop: 6, paddingBottom: 16 },
  greeting: { flexDirection: 'row', alignItems: 'center', gap: 12, paddingHorizontal: 20 },
  greetingText: { flex: 1, gap: 2 },
  label: {
    fontFamily: FontFamily.body,
    fontSize: 12,
    letterSpacing: 0.9,
    textTransform: 'uppercase',
    color: Palette.textMuted,
  },
  heading: { fontFamily: FontFamily.display, fontSize: 24, letterSpacing: 0.3, color: Palette.textPrimary },
  avatar: {
    width: 48,
    height: 48,
    borderRadius: 24,
    backgroundColor: Palette.bgInverse,
    alignItems: 'center',
    justifyContent: 'center',
  },
  avatarText: { fontFamily: FontFamily.body, fontSize: 14, color: Palette.textAccent },
  chips: { flexDirection: 'row', gap: 8, paddingHorizontal: 20 },
  body: { gap: 14, paddingHorizontal: 20 },
  cta: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 16,
    padding: 20,
    backgroundColor: Palette.bgAccent,
    borderWidth: 2.4,
    borderColor: Palette.borderStrong,
    borderRadius: 20,
  },
  ctaIconBox: {
    width: 64,
    height: 64,
    borderRadius: 16,
    backgroundColor: Palette.bgInverse,
    alignItems: 'center',
    justifyContent: 'center',
  },
  ctaIcon: { width: 34, height: 34 },
  ctaText: { flex: 1 },
  ctaTitle: { fontFamily: FontFamily.display, fontSize: 28, lineHeight: 28, color: Palette.textPrimary },
  ctaSubtitle: { fontFamily: FontFamily.bodySemiBold, fontSize: 16, paddingTop: 4, color: Palette.textOnAccentMuted },
  stats: { flexDirection: 'row', gap: 10 },
  stat: {
    flex: 1,
    gap: 2,
    paddingHorizontal: 12,
    paddingVertical: 10,
    backgroundColor: Palette.bgSurface,
    borderWidth: 1.5,
    borderColor: Palette.borderDefault,
    borderRadius: 14,
  },
  statDanger: { backgroundColor: Palette.status.danger.bg, borderColor: Palette.status.danger.fg },
  dangerText: { color: Palette.status.danger.fg },
  statValue: { fontFamily: FontFamily.display, fontSize: 28, letterSpacing: 0.3, color: Palette.textPrimary },
  sectionHeader: { flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between' },
  sectionTitle: {
    fontFamily: FontFamily.display,
    fontSize: 19,
    letterSpacing: 0.5,
    textTransform: 'uppercase',
    color: Palette.textPrimary,
  },
  seeAll: { fontFamily: FontFamily.body, fontSize: 13, textDecorationLine: 'underline', color: Palette.textPrimary },
});
