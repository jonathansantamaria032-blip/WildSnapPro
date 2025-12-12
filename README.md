# WildSnapPro - App de Animales Aleatorios

## 1. Identificación del Proyecto

- **Nombre de la App:** WildSnapPro
- **Asignatura/Profesor:** Desarrollo de Aplicaciones Móviles / M.C. Leonel González Vidales
- **Periodo/Fecha:** Noviembre 2025
- **URL del Repositorio:** [https://github.com/jonathansantamaria032-blip/WildSnapPro](https://github.com/jonathansantamaria032-blip/WildSnapPro)

## 2. Descripción del Proyecto

WildSnapPro es una aplicación móvil desarrollada con React Native, TypeScript y Expo que permite a los usuarios visualizar imágenes aleatorias de diferentes animales en tiempo real. La aplicación consume múltiples APIs públicas gratuitas y presenta una interfaz moderna con navegación por pestañas.

### Características Principales:
- 📸 **Imágenes Aleatorias**: Obtiene fotos aleatorias de 6 especies diferentes
- 🎨 **Interfaz Moderna**: Cada animal tiene su propio tema de color único
- 🔄 **Actualización Dinámica**: Botón para generar nuevas imágenes al instante
- 🧭 **Navegación por Tabs**: Navegación intuitiva entre diferentes animales
- 🌍 **APIs Públicas**: Integración con múltiples servicios REST gratuitos
- ⚡ **TypeScript**: Código tipado para mayor seguridad y mantenibilidad

### Funcionalidades Implementadas:
- Visualización de imágenes de 6 animales diferentes
- Sistema de carga con indicadores visuales
- Manejo de errores con mensajes informativos
- Navegación fluida entre pestañas
- Diseño responsivo optimizado para móviles
- Arquitectura modular y escalable con TypeScript

## 3. Tecnologías y Versiones Utilizadas

### Stack Tecnológico:
- **React Native:** 0.76.5
- **React:** 18.3.1
- **TypeScript:** ^5.3.0
- **Expo:** ~52.0.11
- **React Navigation Bottom Tabs:** ^6.5.11
- **React Navigation Native:** ^6.1.9
- **React Native Screens:** ~4.0.0
- **React Native Safe Area Context:** 4.12.0

### Herramientas de Desarrollo Requeridas:

- **Node.js:** v18+ o superior
  ```bash
  node --version
  ```
- **NPM:** 9.0.0+
  ```bash
  npm --version
  ```
- **Expo CLI:** Latest
  ```bash
  npx expo --version
  ```
- **Expo Go:** App móvil para testing en dispositivo físico

### Verificación de Entorno:
```bash
npx expo doctor
```

## 4. Estructura del Proyecto

### Organización de Archivos:
```
WildSnapPro/
├── App.tsx                         # Componente principal
├── app.json                        # Configuración de Expo
├── package.json                    # Dependencias y scripts
├── tsconfig.json                   # Configuración de TypeScript
├── assets/                         # Recursos estáticos
│   ├── adaptive-icon.png
│   ├── favicon.png
│   ├── icon.png
│   └── splash.png
└── src/
    ├── navigation/                 # Configuración de navegación
    │   └── TabNavigator.tsx       # Bottom Tabs Navigator
    ├── screens/                    # Pantallas de la aplicación
    │   ├── DogScreen.tsx          # Pantalla de perros
    │   ├── CatScreen.tsx          # Pantalla de gatos
    │   ├── FoxScreen.tsx          # Pantalla de zorros
    │   ├── BunnyScreen.tsx        # Pantalla de conejos
    │   ├── DuckScreen.tsx         # Pantalla de patos
    │   └── BearScreen.tsx         # Pantalla de osos
    ├── services/                   # Servicios y APIs
    │   └── api.ts                 # Funciones de llamadas a APIs
    └── types/                      # Tipos de TypeScript
        └── index.ts               # Interfaces y tipos
```

### Arquitectura de la Aplicación:
- **App.tsx**: Componente raíz con NavigationContainer y SafeAreaProvider
- **TabNavigator.tsx**: Configuración del Bottom Tab Navigator con 6 tabs
- **Screens**: Cada pantalla maneja su propio estado y llamadas a API
- **api.ts**: Centraliza todas las llamadas a APIs externas
- **types/index.ts**: Define interfaces TypeScript para type safety

## 5. Instalación y Configuración

### Instalación de Dependencias:
```bash
# Clonar el repositorio
git clone https://github.com/jonathansantamaria032-blip/WildSnapPro
cd WildSnapPro

# Instalar dependencias
npm install
```

### Dependencias del Proyecto:

| Dependencia | Versión | Propósito |
|-------------|---------|-----------|
| `expo` | ~52.0.11 | Framework de desarrollo móvil multiplataforma |
| `react` | 18.3.1 | Biblioteca de interfaz de usuario |
| `react-native` | 0.76.5 | Framework React Native |
| `@react-navigation/native` | ^6.1.9 | Core de navegación entre pantallas |
| `@react-navigation/bottom-tabs` | ^6.5.11 | Bottom Tab Navigator para navegación principal |
| `react-native-screens` | ~4.0.0 | Optimización de rendimiento para pantallas nativas |
| `react-native-safe-area-context` | 4.12.0 | Manejo de áreas seguras (notch, barras) |
| `typescript` | ^5.3.0 | Lenguaje con tipado estático |
| `expo-status-bar` | ~2.0.0 | Control de barra de estado |

### Verificar instalación:
```bash
npm list --depth=0
```

## 6. APIs Utilizadas

La aplicación consume las siguientes APIs públicas gratuitas (sin autenticación):

| Animal | API | URL | Descripción |
|--------|-----|-----|-------------|
| 🐶 Perro | Dog CEO API | https://dog.ceo/api/breeds/image/random | Imágenes aleatorias de perros de diferentes razas |
| 🐱 Gato | The Cat API | https://api.thecatapi.com/v1/images/search | Imágenes aleatorias de gatos |
| 🦊 Zorro | RandomFox | https://randomfox.ca/floof/ | Fotografías aleatorias de zorros |
| 🐰 Conejo | Bunnies.io API | https://api.bunnies.io/v2/loop/random/?media=gif,png | Imágenes y GIFs de conejos |
| 🦆 Pato | Random Duck | https://random-d.uk/api/random | Imágenes aleatorias de patos |
| 🐻 Oso | PlaceBear | https://placebear.com/400/400 | Imágenes placeholder de osos |

### Características de las APIs:
- ✅ 100% gratuitas
- ✅ Sin necesidad de API key
- ✅ Sin límite de requests (uso razonable)
- ✅ Respuestas en formato JSON
- ✅ CORS habilitado

## 7. Ejecución de la Aplicación

### Scripts Disponibles:
```bash
# Iniciar servidor de desarrollo
npm start
# o
npx expo start

# Ejecutar en Android
npm run android

# Ejecutar en iOS (solo macOS)
npm run ios

# Ejecutar en web
npm run web

# Limpiar caché y reiniciar
npx expo start -c
```

### Primera Ejecución:
1. **Instalar dependencias:**
   ```bash
   npm install
   ```

2. **Iniciar el servidor de desarrollo:**
   ```bash
   npx expo start
   ```

3. **Conectar dispositivo:**
   - **Opción 1 - Expo Go (Recomendado):**
     - Descargar Expo Go en tu teléfono
     - Escanear el código QR que aparece en la terminal
   - **Opción 2 - Emulador:**
     - Android: `npm run android`
     - iOS: `npm run ios` (solo macOS)

### Notas de Entorno:
- **Dispositivo físico:** La forma más rápida es usar Expo Go
- **Misma red WiFi:** El dispositivo y la computadora deben estar en la misma red
- **Túnel:** Si hay problemas de red, usar `npx expo start --tunnel`

## 8. Funcionalidades por Pantalla

### 🐶 Pantalla de Perros (DogScreen)
- **Tema:** Rojo (#FF6B6B)
- **Funcionalidad:** Muestra imágenes aleatorias de diferentes razas de perros
- **API:** Dog CEO API
- **Características:** Loading state, manejo de errores, botón de recarga

### 🐱 Pantalla de Gatos (CatScreen)
- **Tema:** Morado (#9B59B6)
- **Funcionalidad:** Muestra imágenes aleatorias de gatos
- **API:** The Cat API
- **Características:** Imágenes de alta calidad, actualización instantánea

### 🦊 Pantalla de Zorros (FoxScreen)
- **Tema:** Naranja (#FF8C42)
- **Funcionalidad:** Muestra fotografías aleatorias de zorros
- **API:** RandomFox
- **Características:** Fotos reales de zorros en su hábitat natural

### 🐰 Pantalla de Conejos (BunnyScreen)
- **Tema:** Rosa (#E91E63)
- **Funcionalidad:** Muestra imágenes y GIFs de conejos
- **API:** Bunnies.io
- **Características:** Soporte para imágenes estáticas y animadas

### 🦆 Pantalla de Patos (DuckScreen)
- **Tema:** Amarillo (#FFC107)
- **Funcionalidad:** Muestra imágenes aleatorias de patos
- **API:** Random Duck
- **Características:** Gran variedad de especies de patos

### 🐻 Pantalla de Osos (BearScreen)
- **Tema:** Café (#8D6E63)
- **Funcionalidad:** Muestra imágenes aleatorias de osos
- **API:** PlaceBear
- **Características:** Imágenes de placeholder con timestamp para variación

## 9. Capturas de Pantalla

### Pantalla Principal - Perros
![Pantalla de Perros](screenshots/perros.jpg)
*Vista de la pantalla de perros con imagen aleatoria y botón de recarga*

### Navegación por Tabs
![Navegación](screenshots/navegacion.jpg)
*Bottom Tab Navigator con iconos de animales y colores temáticos*

### Pantalla de Gatos
![Pantalla de Gatos](screenshots/gatos.jpg)
*Interfaz de gatos con tema morado*

### Pantalla de Zorros
![Pantalla de Zorros](screenshots/zorros.jpg)
*Pantalla de zorros con diseño naranja*

### Estado de Carga
![Loading State](screenshots/loading.jpg)
*Indicador de carga mientras se obtiene la imagen*

### Manejo de Errores
![Error State](screenshots/error.jpg)
*Mensaje de error cuando falla la carga de imagen*

## 10. Desarrollo y Extensión

### Próximas Funcionalidades Sugeridas:
- **Sistema de Favoritos**: Guardar animales favoritos con AsyncStorage
- **Compartir Imágenes**: Funcionalidad para compartir en redes sociales
- **Galería**: Ver historial de imágenes vistas
- **Información del Animal**: Datos curiosos sobre cada especie
- **Más Animales**: Agregar nuevas especies (pandas, koalas, pingüinos)
- **Modo Oscuro/Claro**: Toggle entre temas
- **Animaciones**: Transiciones suaves entre imágenes
- **Descargar Imágenes**: Guardar imágenes en el dispositivo

### Agregar Nuevos Animales:

1. **Crear nueva pantalla en `src/screens/`:**
```typescript
// src/screens/PandaScreen.tsx
import React, { useState, useEffect } from 'react';
import { View, Image, TouchableOpacity, ActivityIndicator, StyleSheet } from 'react-native';
import { fetchPandaImage } from '../services/api';

export default function PandaScreen() {
  const [imageUrl, setImageUrl] = useState<string>('');
  const [loading, setLoading] = useState<boolean>(true);
  
  const loadImage = async () => {
    setLoading(true);
    const url = await fetchPandaImage();
    setImageUrl(url);
    setLoading(false);
  };
  
  useEffect(() => {
    loadImage();
  }, []);
  
  return (
    <View style={styles.container}>
      {loading ? (
        <ActivityIndicator size="large" color="#000" />
      ) : (
        <Image source={{ uri: imageUrl }} style={styles.image} />
      )}
      <TouchableOpacity onPress={loadImage} style={styles.button}>
        <Text style={styles.buttonText}>🔄 Otro Panda</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, justifyContent: 'center', alignItems: 'center' },
  image: { width: 300, height: 300, borderRadius: 20 },
  button: { marginTop: 20, padding: 15, backgroundColor: '#000', borderRadius: 10 },
  buttonText: { color: '#fff', fontSize: 18, fontWeight: 'bold' },
});
```

2. **Agregar función de API en `src/services/api.ts`:**
```typescript
export const fetchPandaImage = async (): Promise<string> => {
  try {
    const response = await fetch('https://some-panda-api.com/random');
    const data = await response.json();
    return data.image;
  } catch (error) {
    throw new Error('Error al cargar imagen de panda');
  }
};
```

3. **Actualizar TabNavigator en `src/navigation/TabNavigator.tsx`:**
```typescript
import PandaScreen from '../screens/PandaScreen';

// Agregar nueva Tab dentro del Tab.Navigator
<Tab.Screen
  name="Pandas"
  component={PandaScreen}
  options={{
    tabBarIcon: ({ color, size }) => (
      <Text style={{ fontSize: size + 6, color }}>🐼</Text>
    ),
    tabBarActiveTintColor: '#000000',
  }}
/>
```

## 11. Estructura de Código TypeScript

### Tipos e Interfaces Principales:

```typescript
// src/types/index.ts

export interface AnimalImage {
  url: string;
  loading: boolean;
  error: string | null;
}

export type AnimalType = 'dog' | 'cat' | 'fox' | 'bunny' | 'duck' | 'bear';
```

### Ejemplo de Función de API:

```typescript
// src/services/api.ts

export const fetchDogImage = async (): Promise<string> => {
  try {
    const response = await fetch('https://dog.ceo/api/breeds/image/random');
    const data = await response.json();
    return data.message;
  } catch (error) {
    throw new Error('Error al cargar imagen de perro');
  }
};
```

## 12. Troubleshooting

### Problemas Comunes:

| Problema | Solución |
|----------|----------|
| **Error de dependencias** | `npm install --legacy-peer-deps` |
| **Cache corrupto** | `npx expo start --clear` |
| **Puerto ocupado** | `npx expo start --port 8082` |
| **No carga imágenes** | Verificar conexión a internet |
| **Error de TypeScript** | `npm install typescript @types/react @types/react-native` |
| **Expo Go no conecta** | Verificar misma red WiFi o usar `--tunnel` |

### Comandos Útiles:
```bash
# Verificar estado del proyecto
npx expo doctor

# Limpiar cache de Metro
npx expo start --clear

# Reinstalar dependencias
rm -rf node_modules package-lock.json && npm install

# Verificar versiones
npm list react-native react @react-navigation/native
```

### Solución de Errores de API:
```typescript
// Agregar timeouts a las llamadas
const fetchWithTimeout = async (url: string, timeout = 5000) => {
  const controller = new AbortController();
  const id = setTimeout(() => controller.abort(), timeout);
  
  try {
    const response = await fetch(url, { signal: controller.signal });
    clearTimeout(id);
    return response;
  } catch (error) {
    clearTimeout(id);
    throw error;
  }
};
```

## 13. Testing

### Pruebas Manuales:
- ✅ Verificar carga de imágenes en cada pantalla
- ✅ Probar botón de recarga múltiples veces
- ✅ Verificar navegación entre tabs
- ✅ Probar manejo de errores (desconectar internet)
- ✅ Verificar estados de carga
- ✅ Probar en diferentes tamaños de pantalla

### Pruebas Futuras (Sugerencias):
```bash
# Instalar Jest y React Native Testing Library
npm install --save-dev @testing-library/react-native jest

# Ejecutar tests
npm test
```

## 14. Deployment

### Preparación para Producción:
```bash
# Build para Android
eas build --platform android

# Build para iOS
eas build --platform ios

# Publicar actualización OTA
eas update --branch production
```

### Configuración de app.json para producción:
```json
{
  "expo": {
    "name": "WildSnapPro",
    "slug": "wildsnappro",
    "version": "1.0.0",
    "orientation": "portrait",
    "icon": "./assets/icon.png",
    "userInterfaceStyle": "light",
    "splash": {
      "image": "./assets/splash.png",
      "resizeMode": "contain",
      "backgroundColor": "#1a1a2e"
    },
    "ios": {
      "supportsTablet": true,
      "bundleIdentifier": "com.jonathansantamaria.wildsnappro"
    },
    "android": {
      "adaptiveIcon": {
        "foregroundImage": "./assets/adaptive-icon.png",
        "backgroundColor": "#1a1a2e"
      },
      "package": "com.jonathansantamaria.wildsnappro"
    }
  }
}
```

## 15. Contribuciones

### Cómo Contribuir:
1. Fork el repositorio
2. Crear una rama para tu feature (`git checkout -b feature/NuevoAnimal`)
3. Commit tus cambios (`git commit -m 'Agregar nuevo animal'`)
4. Push a la rama (`git push origin feature/NuevoAnimal`)
5. Abrir un Pull Request

### Guía de Estilo:
- Usar TypeScript para todos los archivos nuevos
- Seguir convenciones de nombres (PascalCase para componentes)
- Agregar comentarios en funciones complejas
- Mantener consistencia con el código existente

## 16. Licencia

Este proyecto fue desarrollado con fines educativos para la asignatura de Desarrollo de Aplicaciones Móviles.

## 17. Créditos y Agradecimientos

### APIs Utilizadas:
- [Dog CEO API](https://dog.ceo/dog-api/) - Imágenes de perros
- [The Cat API](https://thecatapi.com/) - Imágenes de gatos
- [RandomFox](https://randomfox.ca/) - Fotografías de zorros
- [Bunnies.io](https://api.bunnies.io/) - Imágenes de conejos
- [Random Duck](https://random-d.uk/) - Imágenes de patos
- [PlaceBear](https://placebear.com/) - Imágenes de osos

### Tecnologías:
- React Native & Expo - Framework de desarrollo
- React Navigation - Sistema de navegación
- TypeScript - Lenguaje tipado

## 18. Contacto

- **Desarrollador:** Jonathan Santamaría
- **GitHub:** [https://github.com/jonathansantamaria032-blip](https://github.com/jonathansantamaria032-blip)
- **Institución:** Instituto Tecnológico Superior de Apatzingán

## 19. Recursos y Documentación

- [Documentación de Expo](https://docs.expo.dev/)
- [React Navigation](https://reactnavigation.org/)
- [React Native Docs](https://reactnative.dev/)
- [TypeScript Handbook](https://www.typescriptlang.org/docs/)
- [Expo Components](https://docs.expo.dev/versions/latest/)

---

**Desarrollado por:** Jonathan Santamaría  
**Asignatura:** Desarrollo de Aplicaciones Móviles  
**Profesor:** M.C. Leonel González Vidales  
**Última actualización:** 14 de noviembre 2025  
**Versión:** 1.0.0 