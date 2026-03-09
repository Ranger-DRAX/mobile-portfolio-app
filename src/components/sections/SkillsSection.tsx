import React from 'react';
import {View, Text, StyleSheet} from 'react-native';
import {skillsData} from '../../constants/data';
import {colors} from '../../constants/colors';
import {fonts} from '../../constants/fonts';
import {spacing} from '../../constants/spacing';
import SectionTitle from '../common/SectionTitle';

const SkillsSection = () => {
  return (
    <View style={styles.container}>
      <SectionTitle title="Skills" subtitle="Technologies I work with" />
      {skillsData.map(skill => (
        <View key={skill.id} style={styles.skillRow}>
          <View style={styles.labelRow}>
            <Text style={styles.skillName}>{skill.name}</Text>
            <Text style={styles.skillLevel}>{skill.level}%</Text>
          </View>
          <View style={styles.barBg}>
            <View style={[styles.barFill, {width: `${skill.level}%`}]} />
          </View>
        </View>
      ))}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: spacing.sectionPadding,
    paddingVertical: spacing.xl,
    backgroundColor: colors.surface,
  },
  skillRow: {
    marginBottom: spacing.md,
  },
  labelRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: spacing.xs,
  },
  skillName: {
    fontSize: fonts.sizes.sm,
    fontWeight: '600',
    color: colors.text,
  },
  skillLevel: {
    fontSize: fonts.sizes.sm,
    color: colors.primary,
    fontWeight: '600',
  },
  barBg: {
    height: 8,
    backgroundColor: colors.border,
    borderRadius: 4,
  },
  barFill: {
    height: 8,
    backgroundColor: colors.primary,
    borderRadius: 4,
  },
});

export default SkillsSection;