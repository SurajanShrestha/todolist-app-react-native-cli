import { DefaultTheme } from 'react-native-paper';

export const PRIMARY_COLOR = '#00BCD4';

export const customTheme = {
    ...DefaultTheme,
    roundness: 2,
    colors: {
        ...DefaultTheme.colors,
        primary: PRIMARY_COLOR,
    },
}