import { useState, useEffect } from 'react';

interface ThemeColors {
  foreground: string;
  primary: string;
  background: string;
  card: string;
  border: string;
}

/**
 * Convert rgba string to hex format that SVG can understand
 */
function rgbaToHex(rgba: string): string {
  // Handle rgba(r, g, b, a) format
  const match = rgba.match(/rgba?\((\d+),\s*(\d+),\s*(\d+)(?:,\s*[\d.]+)?\)/);
  
  if (!match) {
    // If it's already in hex or other format, return as is
    return rgba;
  }
  
  const r = parseInt(match[1]);
  const g = parseInt(match[2]);
  const b = parseInt(match[3]);
  
  const toHex = (n: number) => {
    const hex = n.toString(16);
    return hex.length === 1 ? '0' + hex : hex;
  };
  
  return `#${toHex(r)}${toHex(g)}${toHex(b)}`;
}

/**
 * Hook to get CSS variable colors and update them when theme changes
 * Returns colors in hex format for SVG compatibility
 */
export function useThemeColors(): ThemeColors {
  const [colors, setColors] = useState<ThemeColors>({
    foreground: '#1c1c1c',
    primary: '#00e424',
    background: '#f1f4ff',
    card: '#ffffff',
    border: '#ffffff19',
  });

  useEffect(() => {
    const updateColors = () => {
      const root = document.documentElement;
      const style = getComputedStyle(root);

      const getColor = (varName: string, fallback: string): string => {
        const value = style.getPropertyValue(varName).trim();
        if (!value) return fallback;
        
        return rgbaToHex(value);
      };

      const isDark = root.classList.contains('dark');
      
      setColors({
        foreground: isDark ? '#ffffff' : getColor('--foreground', '#1c1c1c'),
        primary: getColor('--primary', '#00e424'),
        background: isDark ? '#0a0a0a' : getColor('--background-editor', '#f1f4ff'),
        card: isDark ? '#1c1c1c' : getColor('--card', '#ffffff'),
        border: isDark ? '#ffffff19' : getColor('--border', '#ffffff19'),
      });
      
      console.log('Theme colors updated:', {
        isDark,
        foreground: isDark ? '#ffffff' : getColor('--foreground', '#1c1c1c'),
        primary: getColor('--primary', '#00e424'),
      });
    };

    updateColors();

    const observer = new MutationObserver((mutations) => {
      mutations.forEach((mutation) => {
        if (mutation.type === 'attributes' && mutation.attributeName === 'class') {
          setTimeout(updateColors, 50);
        }
      });
    });

    observer.observe(document.documentElement, {
      attributes: true,
      attributeFilter: ['class'],
    });

    return () => observer.disconnect();
  }, []);

  return colors;
}
