import React from 'react';
import {View, Text, StyleSheet} from 'react-native';
import {colors} from '../../constants/colors';
import {fonts} from '../../constants/fonts';
import {spacing} from '../../constants/spacing';

interface SectionTitleProps {
  title: string;
  subtitle?: string;
}

const SectionTitle = ({title, subtitle}: SectionTitleProps) => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>{title}</Text>
      <View style={styles.underline} />
      {subtitle ? <Text style={styles.subtitle}>{subtitle}</Text> : null}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    marginBottom: spacing.lg,
  },
  title: {
    fontSize: fonts.sizes.xl,
    fontWeight: 'bold',
    color: colors.text,
    marginBottom: spacing.xs,
  },
  underline: {
    width: 40,
    height: 3,
    backgroundColor: colors.primary,
    borderRadius: 2,
    marginBottom: spacing.sm,
  },
  subtitle: {
    fontSize: fonts.sizes.md,
    color: colors.textLight,
  },
});

export default SectionTitle;