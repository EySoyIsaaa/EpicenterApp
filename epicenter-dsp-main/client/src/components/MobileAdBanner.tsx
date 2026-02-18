import { useEffect } from 'react';
import { Capacitor } from '@capacitor/core';
import {
  AdMob,
  BannerAdPosition,
  BannerAdSize,
} from '@capacitor-community/admob';

const DEFAULT_TEST_BANNER_ANDROID = 'ca-app-pub-3940256099942544/6300978111';

export function MobileAdBanner() {
  useEffect(() => {
    if (!Capacitor.isNativePlatform()) {
      return;
    }

    const showBanner = async () => {
      const bannerId =
        import.meta.env.VITE_ADMOB_BANNER_ID_ANDROID || DEFAULT_TEST_BANNER_ANDROID;

      await AdMob.initialize({
        initializeForTesting: import.meta.env.DEV,
      });

      await AdMob.showBanner({
        adId: bannerId,
        adSize: BannerAdSize.ADAPTIVE_BANNER,
        position: BannerAdPosition.BOTTOM_CENTER,
        margin: 0,
        isTesting: import.meta.env.DEV,
      });
    };

    showBanner().catch((error) => {
      console.error('No se pudo mostrar el banner de AdMob:', error);
    });

    return () => {
      AdMob.hideBanner().catch(() => undefined);
    };
  }, []);

  return null;
}
