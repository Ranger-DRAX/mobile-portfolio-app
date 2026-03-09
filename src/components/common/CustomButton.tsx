import React from 'react';
import {TouchableOpacity, Text, StyleSheet, ViewStyle} from 'react-native';
import {colors} from '../../constants/colors';
import {fonts} from '../../constants/fonts';
import {spacing} from '../../constants/spacing';

interface CustomButtonProps {
  label: string;
  onPress: () => void;
  variant?: 'primary' | 'outline';
  style?: ViewStyle;
}

const CustomButton = ({label, onPress, variant = 'primary', style}: CustomButtonProps) => {
  const isPrimary = variant === 'primary';
  return (
    <TouchableOpacity
      style={[styles.button, isPrimary ? styles.primary : styles.outline, style]}
      onPress={onPress}
      activeOpacity={0.8}>
      <Text style={[styles.label, isPrimary ? styles.labelPrimary : styles.labelOutline]}>
        {label}
      </Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  button: {
    paddingVertical: spacing.sm + 2,
    paddingHorizontal: spacing.xl,
    borderRadius: 8,
    alignItems: 'center',
  },
  primary: {
    backgroundColor: colors.primary,
  },
  outline: {
    borderWidth: 2,
    borderColor: colors.primary,
    backgroundColor: 'transparent',
  },
  label: {
    fontSize: fonts.sizes.md,
    fontWeight: '600',
  },
  labelPrimary: {
    color: colors.white,
  },
  labelOutline: {
    color: colors.primary,
  },
});

export default CustomButton;