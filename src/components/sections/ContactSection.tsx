import React from 'react';
import {View, Text, StyleSheet} from 'react-native';
import {contactData} from '../../constants/data';
import {colors} from '../../constants/colors';
import {fonts} from '../../constants/fonts';
import {spacing} from '../../constants/spacing';
import SectionTitle from '../common/SectionTitle';

const ContactRow = ({label, value}: {label: string; value: string}) => (
  <View style={rowStyles.row}>
    <Text style={rowStyles.label}>{label}</Text>
    <Text style={rowStyles.value}>{value}</Text>
  </View>
);

const ContactSection = () => {
  return (
    <View style={styles.container}>
      <SectionTitle title="Contact" subtitle="Let's work together" />
      <View style={styles.card}>
        <ContactRow label="Email" value={contactData.email} />
        <ContactRow label="GitHub" value={contactData.github} />
        <ContactRow label="LinkedIn" value={contactData.linkedin} />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: spacing.sectionPadding,
    paddingVertical: spacing.xl,
    backgroundColor: colors.background,
  },
  card: {
    backgroundColor: colors.surface,
    borderRadius: 12,
    padding: spacing.lg,
  },
});

const rowStyles = StyleSheet.create({
  row: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingVertical: spacing.sm,
    borderBottomWidth: 1,
    borderBottomColor: colors.border,
  },
  label: {
    fontSize: fonts.sizes.sm,
    fontWeight: '700',
    color: colors.text,
  },
  value: {
    fontSize: fonts.sizes.sm,
    color: colors.primary,
    flexShrink: 1,
    textAlign: 'right',
  },
});

export default ContactSection;
