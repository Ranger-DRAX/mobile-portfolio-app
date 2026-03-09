import React from 'react';
import {ScrollView} from 'react-native';
import HeroSection from '../../components/sections/HeroSection';
import AboutSection from '../../components/sections/AboutSection';
import ProjectsSection from '../../components/sections/ProjectsSection';
import SkillsSection from '../../components/sections/SkillsSection';
import ContactSection from '../../components/sections/ContactSection';
import {styles} from './HomeScreenStyles';

const HomeScreen = () => {
  return (
    <ScrollView contentContainerStyle={styles.container} showsVerticalScrollIndicator={false}>
      <HeroSection />
      <AboutSection />
      <ProjectsSection />
      <SkillsSection />
      <ContactSection />
    </ScrollView>
  );
};

export default HomeScreen;