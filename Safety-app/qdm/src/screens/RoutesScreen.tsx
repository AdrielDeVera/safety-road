import React from 'react';
import { View, StyleSheet, Text } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { StackNavigationProp } from '@react-navigation/stack';
import { RootStackParamList } from '../navigation/AppNavigator';
import { useRoutes } from '../state/useRoutes';
import RouteMap from '../components/RouteMap';
import RouteList from '../components/RouteList';
import ScoreBreakdownModal from '../components/ScoreBreakdownModal';

type RoutesNavProp = StackNavigationProp<RootStackParamList, 'Routes'>;

type Props = {
  navigation: RoutesNavProp;
};

const RoutesScreen: React.FC<Props> = () => {
  const {
    routes,
    selectedRouteId,
    selectRoute,
    breakdownRoute,
    openBreakdown,
    closeBreakdown,
  } = useRoutes();

  return (
    <SafeAreaView style={styles.container}>
      <RouteMap routes={routes} selectedRouteId={selectedRouteId} onSelectRoute={selectRoute} />
      <View style={styles.header}>
        <Text style={styles.headerTitle}>Top 3 Safest Routes</Text>
        <Text style={styles.headerSubtitle}>Downtown Toronto</Text>
      </View>
      <RouteList
        routes={routes}
        selectedRouteId={selectedRouteId}
        onSelect={selectRoute}
        onShowBreakdown={openBreakdown}
      />
      <ScoreBreakdownModal visible={!!breakdownRoute} route={breakdownRoute} onClose={closeBreakdown} />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: '#f4f6fb' },
  header: {
    position: 'absolute',
    top: 18,
    left: 16,
    right: 16,
    paddingVertical: 10,
    paddingHorizontal: 14,
    backgroundColor: 'rgba(255,255,255,0.9)',
    borderRadius: 12,
  },
  headerTitle: {
    fontSize: 18,
    fontWeight: '700',
    color: '#0f172a',
  },
  headerSubtitle: {
    marginTop: 2,
    color: '#475569',
  },
});

export default RoutesScreen;
