import { StyleSheet, Text, View } from 'react-native';

import { FontFamily, Palette } from '@/constants/theme';

export type ChipStatus = keyof typeof Palette.status;

export function StatusChip({ label, status, dot }: { label: string; status: ChipStatus; dot?: boolean }) {
  const { bg, fg } = Palette.status[status];
  return (
    <View style={[styles.chip, { backgroundColor: bg }]}>
      {dot && <View style={[styles.dot, { backgroundColor: fg }]} />}
      <Text style={[styles.label, { color: fg }]}>{label}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  chip: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 6,
    paddingHorizontal: 10,
    paddingVertical: 5,
    borderRadius: 999,
  },
  dot: { width: 8, height: 8, borderRadius: 4 },
  label: {
    fontFamily: FontFamily.body,
    fontSize: 12,
    letterSpacing: 0.6,
    textTransform: 'uppercase',
  },
});
