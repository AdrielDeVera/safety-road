import React from 'react';
import { View, StyleSheet, Platform, Text } from 'react-native';
import { SafeRoute } from '../data/routes';

// Conditionally import react-native-maps only on native platforms
let MapView: any;
let Marker: any;
let Polyline: any;

if (Platform.OS !== 'web') {
  const maps = require('react-native-maps');
  MapView = maps.default;
  Marker = maps.Marker;
  Polyline = maps.Polyline;
} else {
  // Web fallback components
  MapView = ({ children, ...props }: any) => <View {...props}>{children}</View>;
  Marker = (props: any) => null;
  Polyline = (props: any) => null;
}

type Props = {
  routes: SafeRoute[];
  selectedRouteId?: string;
  onSelectRoute?: (routeId: string) => void;
};

const initialRegion = {
  latitude: 43.65107,
  longitude: -79.347015,
  latitudeDelta: 0.08,
  longitudeDelta: 0.05,
};

const RouteMap: React.FC<Props> = ({ routes, selectedRouteId, onSelectRoute }) => {
  // Web fallback
  if (Platform.OS === 'web') {
    return (
      <View style={styles.container}>
        <View style={styles.webPlaceholder}>
          <Text style={styles.webPlaceholderText}>Map view is not available on web</Text>
        </View>
      </View>
    );
  }

  return (
    <View style={styles.container}>
      <MapView 
        style={StyleSheet.absoluteFill} 
        initialRegion={initialRegion}
      >
        {routes.map((route) => {
          const isSelected = selectedRouteId !== undefined && route.id === selectedRouteId;
          return (
            <Polyline
              key={route.id}
              coordinates={route.coordinates}
              strokeColor={route.color}
              strokeWidth={isSelected ? 7 : 4}
              {...(onSelectRoute && {
                tappable: Boolean(true),
                onPress: () => onSelectRoute(route.id),
              })}
            />
          );
        })}
        {routes.length > 0 && (
          <Marker 
            coordinate={routes[0].coordinates[0]} 
            title="Start"
          />
        )}
        {routes.length > 0 && (
          <Marker
            coordinate={routes[0].coordinates[routes[0].coordinates.length - 1]}
            title="Destination"
          />
        )}
      </MapView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  webPlaceholder: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#f0f0f0',
  },
  webPlaceholderText: {
    color: '#666',
    fontSize: 16,
  },
});

export default RouteMap;
