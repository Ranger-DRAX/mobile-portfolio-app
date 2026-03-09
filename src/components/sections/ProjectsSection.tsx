import React from 'react';
import {View, Text, StyleSheet} from 'react-native';
import {projectsData} from '../../constants/data';
import {colors} from '../../constants/colors';
import {fonts} from '../../constants/fonts';
import {spacing} from '../../constants/spacing';
import SectionTitle from '../common/SectionTitle';

const ProjectsSection = () => {
  return (
    <View style={styles.container}>
      <SectionTitle title="Projects" subtitle="Some things I've built" />
      {projectsData.map(project => (
        <View key={project.id} style={styles.card}>
          <Text style={styles.cardTitle}>{project.title}</Text>
          <Text style={styles.cardDesc}>{project.description}</Text>
          <Text style={styles.cardTech}>{project.tech}</Text>
        </View>
      ))}
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
    marginBottom: spacing.md,
    borderLeftWidth: 4,
    borderLeftColor: colors.primary,
  },
  cardTitle: {
    fontSize: fonts.sizes.lg,
    fontWeight: 'bold',
    color: colors.text,
    marginBottom: spacing.xs,
  },
  cardDesc: {
    fontSize: fonts.sizes.sm,
    color: colors.textLight,
    lineHeight: 22,
    marginBottom: spacing.sm,
  },
  cardTech: {
    fontSize: fonts.sizes.xs,
    color: colors.primary,
    fontWeight: '600',
  },
});

export default ProjectsSection;
