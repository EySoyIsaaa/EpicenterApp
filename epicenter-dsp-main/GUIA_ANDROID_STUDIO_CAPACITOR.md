# 📱 Guía completa: Android Studio + Gradle + Capacitor

Esta guía deja el proyecto listo para trabajar directamente en **Android Studio** usando **Capacitor** y compilación con **Gradle**.

---

## 1) Requisitos

- Node.js 20+
- Java 17 (recomendado para Android Gradle moderno)
- Android Studio (SDK + Platform Tools)
- Variables Android configuradas (`ANDROID_HOME` / SDK)

---

## 2) Instalar dependencias web

```bash
pnpm install
```

---

## 3) Build web + crear plataforma Android

> Ejecuta esto una sola vez al inicializar Android.

```bash
pnpm run build:mobile
pnpm run cap:add:android
pnpm run cap:sync
```

---

## 4) Abrir en Android Studio

```bash
pnpm run android:open
```

Esto abre la carpeta `android/` en Android Studio con el proyecto Gradle.

---

## 5) Flujo recomendado de trabajo

Cada vez que cambies frontend (React/Vite):

```bash
pnpm run android:sync
```

Después compila/ejecuta desde Android Studio o por CLI:

```bash
pnpm run android:run
```

---

## 6) Compilar con Gradle

### APK debug
```bash
pnpm run android:gradle:debug
```

Salida típica:
- `android/app/build/outputs/apk/debug/app-debug.apk`

### AAB release (Play Store)
```bash
pnpm run android:gradle:release
```

Salida típica:
- `android/app/build/outputs/bundle/release/app-release.aab`

---

## 7) Firma release (Play Store)

En Android Studio:
- **Build > Generate Signed Bundle/APK**

O manualmente en Gradle:
- Configura keystore + `signingConfigs` en `android/app/build.gradle`
- No subas keystore al repo

---

## 8) AdMob en Android

1. Crea App + Banner en AdMob.
2. Reemplaza IDs de prueba por IDs reales:
   - `capacitor.config.ts` → `plugins.AdMob.appId`
   - variable `VITE_ADMOB_BANNER_ID_ANDROID`
3. Mantén IDs de prueba en desarrollo para evitar sanciones.

---

## 9) Troubleshooting

- Si Android no refleja cambios web:
  - `pnpm run android:sync`
- Si falla Gradle por JDK:
  - usa JDK 17 en Android Studio
- Si falla SDK:
  - revisa `local.properties` y SDK instalado

---

## 10) Comandos resumidos

```bash
pnpm run build:mobile
pnpm run cap:add:android
pnpm run cap:sync
pnpm run android:open
pnpm run android:sync
pnpm run android:gradle:debug
pnpm run android:gradle:release
```
