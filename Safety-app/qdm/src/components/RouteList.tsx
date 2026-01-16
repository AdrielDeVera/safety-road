import React from 'react';
import { FlatList, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { SafeRoute } from '../data/routes';

type Props = {
  routes: SafeRoute[];
  selectedRouteId?: string;
  onSelect: (routeId: string) => void;
  onShowBreakdown: (routeId: string) => void;
};

const RouteList: React.FC<Props> = ({ routes, selectedRouteId, onSelect, onShowBreakdown }) => {
  return (
    <View style={styles.sheet}>
      <View style={styles.grabber} />
      <FlatList
        data={routes}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => {
          const isSelected = item.id === selectedRouteId;
          return (
            <TouchableOpacity
              style={[styles.card, isSelected && styles.cardSelected]}
              onPress={() => onSelect(item.id)}
              activeOpacity={0.9}
            >
              <View style={styles.cardHeader}>
                <Text style={styles.label}>{item.label}</Text>
                <TouchableOpacity
                  style={styles.scoreBadge}
                  onPress={() => onShowBreakdown(item.id)}
                >
                  <Ionicons name="shield-checkmark" size={18} color="#0ea5e9" />
                  <Text style={styles.scoreText}>{item.score}</Text>
                </TouchableOpacity>
              </View>
              <View style={styles.statsRow}>
                <View style={styles.statItem}>
                  <Text style={styles.statValue}>{item.etaMinutes} min</Text>
                  <Text style={styles.statLabel}>Time</Text>
                </View>
                <View style={styles.statItem}>
                  <Text style={styles.statValue}>{item.distanceKm.toFixed(1)} km</Text>
                  <Text style={styles.statLabel}>Distance</Text>
                </View>
                <View style={styles.statItem}>
                  <View style={[styles.colorDot, { backgroundColor: item.color }]} />
                  <Text style={styles.statLabel}>Safety</Text>
                </View>
              </View>
            </TouchableOpacity>
          );
        }}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  sheet: {
    position: 'absolute',
    left: 0,
    right: 0,
    bottom: 0,
    backgroundColor: '#fff',
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
    paddingHorizontal: 16,
    paddingTop: 10,
    paddingBottom: 24,
    shadowColor: '#000',
    shadowOpacity: 0.08,
    shadowRadius: 12,
    shadowOffset: { width: 0, height: -2 },
    elevation: 8,
  },
  grabber: {
    alignSelf: 'center',
    width: 48,
    height: 5,
    borderRadius: 10,
    backgroundColor: '#e2e8f0',
    marginBottom: 12,
  },
  card: {
    backgroundColor: '#f8fafc',
    borderRadius: 14,
    padding: 14,
    marginBottom: 12,
    borderWidth: 1,
    borderColor: '#e2e8f0',
  },
  cardSelected: {
    borderColor: '#0ea5e9',
    backgroundColor: '#e0f2fe',
  },
  cardHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  label: {
    fontSize: 16,
    fontWeight: '700',
    color: '#0f172a',
    flex: 1,
    paddingRight: 12,
  },
  scoreBadge: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#e0f2fe',
    paddingHorizontal: 10,
    paddingVertical: 6,
    borderRadius: 12,
  },
  scoreText: {
    marginLeft: 6,
    fontWeight: '700',
    color: '#0ea5e9',
  },
  statsRow: {
    flexDirection: 'row',
    marginTop: 12,
    justifyContent: 'space-between',
  },
  statItem: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  statValue: {
    fontSize: 14,
    fontWeight: '700',
    color: '#0f172a',
  },
  statLabel: {
    marginLeft: 6,
    fontSize: 13,
    color: '#475569',
  },
  colorDot: {
    width: 14,
    height: 14,
    borderRadius: 7,
    marginRight: 6,
  },
});

export default RouteList;
