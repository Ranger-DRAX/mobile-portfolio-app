import React from 'react';
import {View, Text, StyleSheet, Image} from 'react-native';
import {heroData} from '../../constants/data';
import {colors} from '../../constants/colors';
import {fonts} from '../../constants/fonts';
import {spacing} from '../../constants/spacing';
import CustomButton from '../common/CustomButton';
import ProfilePicture from '../../assets/images/ProfilePicture.jpg';



const HeroSection = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.greeting}>{heroData.greeting}</Text>
      <Text style={styles.name}>{heroData.name}</Text>
      <Text style={styles.title}>{heroData.title}</Text>
      <Text style={styles.subtitle}>{heroData.subtitle}</Text>
      <Image
        source={ProfilePicture} 
        style={{width: '100%', height: 300, borderRadius: 12, marginBottom: spacing.xl}}/>
      <View style={styles.buttonRow}>
        <CustomButton label="View Projects" onPress={() => {}} style={styles.btn} />
        <CustomButton label="Contact Me" onPress={() => {}} variant="outline" style={styles.btn} />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: spacing.sectionPadding,
    paddingTop: spacing.xxl,
    paddingBottom: spacing.xl,
    backgroundColor: colors.background,
  },
  greeting: {
    fontSize: fonts.sizes.lg,
    color: colors.textLight,
    marginBottom: spacing.xs,
  },
  name: {
    fontSize: fonts.sizes.hero,
    fontWeight: 'bold',
    color: colors.text,
    lineHeight: 50,
  },
  title: {
    fontSize: fonts.sizes.xl,
    fontWeight: '600',
    color: colors.primary,
    marginTop: spacing.xs,
    marginBottom: spacing.sm,
  },
  subtitle: {
    fontSize: fonts.sizes.md,
    color: colors.textLight,
    lineHeight: 24,
    marginBottom: spacing.xl,
  },
  buttonRow: {
    flexDirection: 'row',
    gap: spacing.md,
  },
  btn: {
    flex: 1,
  },
});

export default HeroSection;