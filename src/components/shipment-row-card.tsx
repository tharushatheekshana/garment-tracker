import { StyleSheet, Text, View } from 'react-native';

import { type ChipStatus, StatusChip } from '@/components/status-chip';
import { FontFamily, Palette } from '@/constants/theme';

type Props = { id: string; subtitle: string; status: ChipStatus; statusLabel: string };

export function ShipmentRowCard({ id, subtitle, status, statusLabel }: Props) {
  return (
    <View style={styles.card}>
      <View style={styles.text}>
        <Text style={styles.id}>{id}</Text>
        <Text style={styles.subtitle}>{subtitle}</Text>
      </View>
      <StatusChip label={statusLabel} status={status} />
    </View>
  );
}

const styles = StyleSheet.create({
  card: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 12,
    padding: 14,
    backgroundColor: Palette.bgSurface,
    borderWidth: 1.5,
    borderColor: Palette.borderDefault,
    borderRadius: 14,
  },
  text: { flex: 1, gap: 2 },
  id: { fontFamily: FontFamily.mono, fontSize: 14, color: Palette.textPrimary },
  subtitle: { fontFamily: FontFamily.bodyRegular, fontSize: 14, color: Palette.textMuted },
});
