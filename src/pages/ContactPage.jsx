import React from 'react';
// Text Content
import pageText from '../assets/translations/contact.json';
// Framer Motion
import { motion } from 'framer-motion';
import { pageAnimation } from '../assets/styling/GlobalStyles';
// Components
import ContactWrapper from '../components/contact/ContactWrapper';
import Footer from '../components/footer/Footer';
// Scroll Top
import ScrollTop from '../assets/util/ScrollTop';
// Redux
import { useSelector } from 'react-redux';

function ContactPage() {

  const { selectedLanguage } = useSelector( state => state.language );
  const { info, form } = pageText[selectedLanguage];

  return (
    <motion.div variants={pageAnimation} initial="hidden" animate="show" exit="exit">
      <ContactWrapper infoText={info} formText={form} />
      <Footer/>
      <ScrollTop/>
    </motion.div>
  );
};

export default ContactPage;