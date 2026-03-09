import React from 'react';
import {View, Text, StyleSheet} from 'react-native';
import {aboutData} from '../../constants/data';
import {colors} from '../../constants/colors';
import {fonts} from '../../constants/fonts';
import {spacing} from '../../constants/spacing';
import SectionTitle from '../common/SectionTitle';

const AboutSection = () => {
  return (
    <View style={styles.container}>
      <SectionTitle title="About Me" />
      <Text style={styles.bio}>{aboutData.bio}</Text>
      <View style={styles.tags}>
        {aboutData.highlights.map(item => (
          <View key={item} style={styles.tag}>
            <Text style={styles.tagText}>{item}</Text>
          </View>
        ))}
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: spacing.sectionPadding,
    paddingVertical: spacing.xl,
    backgroundColor: colors.surface,
  },
  bio: {
    fontSize: fonts.sizes.md,
    color: colors.textLight,
    lineHeight: 26,
    marginBottom: spacing.lg,
  },
  tags: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    gap: spacing.sm,
  },
  tag: {
    backgroundColor: colors.primary + '20',
    borderRadius: 20,
    paddingVertical: spacing.xs,
    paddingHorizontal: spacing.md,
  },
  tagText: {
    color: colors.primary,
    fontSize: fonts.sizes.sm,
    fontWeight: '600',
  },
});

export default AboutSection;
