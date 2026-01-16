import React from 'react';
import { Modal, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import Svg, { Rect } from 'react-native-svg';
import { SafeRoute } from '../data/routes';

type Props = {
  visible: boolean;
  route: SafeRoute | null;
  onClose: () => void;
};

const BAR_MAX = 100;
const BAR_WIDTH = 240;

const ScoreBreakdownModal: React.FC<Props> = ({ visible, route, onClose }) => {
  if (!route) return null;

  const rows = [
    { label: 'Lighting Quality', value: route.stats.lighting, color: '#0ea5e9' },
    { label: 'Crime Historical Data', value: 100 - route.stats.crime_rate, color: '#22c55e' },
    { label: 'Pedestrian Density', value: route.stats.foot_traffic, color: '#f59e0b' },
  ];

  return (
    <Modal visible={visible} transparent={true} animationType="slide">
      <View style={styles.overlay}>
        <View style={styles.card}>
          <Text style={styles.title}>Safety Score Breakdown</Text>
          <Text style={styles.routeLabel}>{route.label}</Text>
          <View style={styles.chart}>
            {rows.map((row) => {
              const width = (row.value / BAR_MAX) * BAR_WIDTH;
              return (
                <View key={row.label} style={styles.barRow}>
                  <Text style={styles.barLabel}>{row.label}</Text>
                  <Svg width={BAR_WIDTH} height={10}>
                    <Rect x={0} y={0} width={BAR_WIDTH} height={10} rx={5} fill="#e2e8f0" />
                    <Rect x={0} y={0} width={width} height={10} rx={5} fill={row.color} />
                  </Svg>
                  <Text style={styles.barValue}>{row.value}</Text>
                </View>
              );
            })}
          </View>
          <Text style={styles.summary}>
            This route maximizes main streets with high lighting and active foot traffic.
          </Text>
          <TouchableOpacity style={styles.closeButton} onPress={onClose}>
            <Text style={styles.closeText}>Close</Text>
          </TouchableOpacity>
        </View>
      </View>
    </Modal>
  );
};

const styles = StyleSheet.create({
  overlay: {
    flex: 1,
    backgroundColor: 'rgba(0,0,0,0.35)',
    alignItems: 'center',
    justifyContent: 'center',
    paddingHorizontal: 16,
  },
  card: {
    width: '100%',
    backgroundColor: '#fff',
    borderRadius: 16,
    padding: 20,
  },
  title: {
    fontSize: 18,
    fontWeight: '700',
    color: '#0f172a',
  },
  routeLabel: {
    marginTop: 4,
    color: '#475569',
  },
  chart: {
    marginTop: 16,
    gap: 12,
  },
  barRow: {
    gap: 6,
  },
  barLabel: {
    fontSize: 14,
    color: '#0f172a',
  },
  barValue: {
    fontSize: 12,
    color: '#475569',
  },
  summary: {
    marginTop: 16,
    color: '#334155',
    lineHeight: 20,
  },
  closeButton: {
    marginTop: 18,
    backgroundColor: '#0ea5e9',
    paddingVertical: 12,
    borderRadius: 12,
    alignItems: 'center',
  },
  closeText: {
    color: '#fff',
    fontWeight: '700',
  },
});

export default ScoreBreakdownModal;
