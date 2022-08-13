export const CUI_COLOR_BASES = {
    'base': 'base',
    'primary': 'primary',
    'success': 'success',
    'warning': 'warning',
    'danger': 'danger',
} as const;

export type CuiColorBase = typeof CUI_COLOR_BASES[keyof typeof CUI_COLOR_BASES];

export const CUI_COLORS = {

    // Base
    'base-50': 'base-50',
    'base-100': 'base-100',
    'base-200': 'base-200',
    'base-300': 'base-300',
    'base-400': 'base-400',
    'base-500': 'base-500',
    'base-600': 'base-600',
    'base-700': 'base-700',
    'base-800': 'base-800',
    'base-900': 'base-900',

    // Primary
    'primary-50': 'primary-50',
    'primary-100': 'primary-100',
    'primary-200': 'primary-200',
    'primary-300': 'primary-300',
    'primary-400': 'primary-400',
    'primary-500': 'primary-500',
    'primary-600': 'primary-600',
    'primary-700': 'primary-700',
    'primary-800': 'primary-800',
    'primary-900': 'primary-900',

    // Success
    'warning-50': 'warning-50',
    'warning-100': 'warning-100',
    'warning-200': 'warning-200',
    'warning-300': 'warning-300',
    'warning-400': 'warning-400',
    'warning-500': 'warning-500',
    'warning-600': 'warning-600',
    'warning-700': 'warning-700',
    'warning-800': 'warning-800',
    'warning-900': 'warning-900',

    // Danger
    'danger-50': 'danger-50',
    'danger-100': 'danger-100',
    'danger-200': 'danger-200',
    'danger-300': 'danger-300',
    'danger-400': 'danger-400',
    'danger-500': 'danger-500',
    'danger-600': 'danger-600',
    'danger-700': 'danger-700',
    'danger-800': 'danger-800',
    'danger-900': 'danger-900',

} as const;

export type CuiColor = typeof CUI_COLORS[keyof typeof CUI_COLORS];
