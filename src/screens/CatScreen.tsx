// src/screens/CatScreen.tsx

import React, { useState, useEffect } from 'react';
import {
  View,
  Text,
  Image,
  TouchableOpacity,
  ActivityIndicator,
  StyleSheet,
  Dimensions,
} from 'react-native';
import { fetchCatImage } from '../services/api';

const { width } = Dimensions.get('window');

export default function CatScreen() {
  const [imageUrl, setImageUrl] = useState<string>('');
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string>('');

  const loadCatImage = async () => {
    setLoading(true);
    setError('');
    try {
      const url = await fetchCatImage();
      setImageUrl(url);
    } catch (err) {
      setError('No se pudo cargar la imagen');
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    loadCatImage();
  }, []);

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.emoji}>🐱</Text>
        <Text style={styles.title}>Gatos Aleatorios</Text>
        <Text style={styles.subtitle}>Independientes y adorables</Text>
      </View>

      <View style={styles.content}>
        {loading ? (
          <View style={styles.loadingContainer}>
            <ActivityIndicator size="large" color="#9B59B6" />
            <Text style={styles.loadingText}>Cargando gatito...</Text>
          </View>
        ) : error ? (
          <View style={styles.errorContainer}>
            <Text style={styles.errorText}>❌ {error}</Text>
          </View>
        ) : (
          <View style={styles.imageCard}>
            <Image source={{ uri: imageUrl }} style={styles.image} resizeMode="cover" />
          </View>
        )}

        <TouchableOpacity
          style={styles.button}
          onPress={loadCatImage}
          disabled={loading}
          activeOpacity={0.8}
        >
          <Text style={styles.buttonText}>🔄 Otro Gatito</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F3E5F5',
  },
  header: {
    paddingTop: 60,
    paddingBottom: 30,
    paddingHorizontal: 20,
    backgroundColor: '#9B59B6',
    borderBottomLeftRadius: 30,
    borderBottomRightRadius: 30,
    alignItems: 'center',
  },
  emoji: {
    fontSize: 60,
    marginBottom: 10,
  },
  title: {
    fontSize: 32,
    fontWeight: 'bold',
    color: '#FFF',
    marginBottom: 5,
  },
  subtitle: {
    fontSize: 16,
    color: '#E8D5EF',
    fontStyle: 'italic',
  },
  content: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
  },
  loadingContainer: {
    alignItems: 'center',
  },
  loadingText: {
    marginTop: 15,
    fontSize: 16,
    color: '#666',
  },
  errorContainer: {
    padding: 20,
    backgroundColor: '#E8D5EF',
    borderRadius: 15,
  },
  errorText: {
    color: '#9B59B6',
    fontSize: 16,
    textAlign: 'center',
  },
  imageCard: {
    width: width - 40,
    height: 400,
    borderRadius: 25,
    backgroundColor: '#FFF',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 8,
    },
    shadowOpacity: 0.3,
    shadowRadius: 10,
    elevation: 15,
    overflow: 'hidden',
  },
  image: {
    width: '100%',
    height: '100%',
  },
  button: {
    backgroundColor: '#9B59B6',
    paddingVertical: 16,
    paddingHorizontal: 40,
    borderRadius: 30,
    marginTop: 30,
    shadowColor: '#9B59B6',
    shadowOffset: {
      width: 0,
      height: 4,
    },
    shadowOpacity: 0.3,
    shadowRadius: 5,
    elevation: 8,
  },
  buttonText: {
    color: '#FFF',
    fontSize: 18,
    fontWeight: 'bold',
  },
});