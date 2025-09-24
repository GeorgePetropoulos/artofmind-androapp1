import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  ScrollView,
  Image,
} from 'react-native';
import { useNavigation } from '@react-navigation/native';

const HomeScreen = () => {
  const navigation = useNavigation();

  const navigateToWebsite = () => {
    navigation.navigate('WebView' as never);
  };

  return (
    <ScrollView style={styles.container}>
      <View style={styles.header}>
        <View style={styles.logoContainer}>
          <Text style={styles.logoText}>Art of Mind</Text>
          <Text style={styles.subtitle}>Ψυχοθεραπεία & Συμβουλευτική</Text>
        </View>
      </View>

      <View style={styles.content}>
        <View style={styles.card}>
          <Text style={styles.cardTitle}>Καλώς ήρθατε</Text>
          <Text style={styles.cardText}>
            Το Art of Mind είναι ένα κέντρο ψυχικής υγείας που παρέχει
            υπηρεσίες ψυχοθεραπείας και συμβουλευτικής στην Πάτρα.
          </Text>
        </View>

        <View style={styles.servicesContainer}>
          <Text style={styles.sectionTitle}>Υπηρεσίες</Text>

          <View style={styles.serviceCard}>
            <Text style={styles.serviceTitle}>Online Συνεδρίες</Text>
            <Text style={styles.serviceText}>
              45λεπτες συνεδρίες ψυχοθεραπείας μέσω βιντεοκλήσης
            </Text>
            <Text style={styles.servicePrice}>€36-€45 ανά συνεδρία</Text>
          </View>

          <View style={styles.serviceCard}>
            <Text style={styles.serviceTitle}>Ατομική Ψυχοθεραπεία</Text>
            <Text style={styles.serviceText}>
              Εξατομικευμένη προσέγγιση με σύγχρονες θεραπευτικές μεθόδους
            </Text>
          </View>

          <View style={styles.serviceCard}>
            <Text style={styles.serviceTitle}>Ομαδική Θεραπεία</Text>
            <Text style={styles.serviceText}>
              Θεραπευτικές ομάδες για διάφορα θέματα ψυχικής υγείας
            </Text>
          </View>
        </View>

        <TouchableOpacity style={styles.websiteButton} onPress={navigateToWebsite}>
          <Text style={styles.websiteButtonText}>Επισκεφτείτε την Ιστοσελίδα</Text>
        </TouchableOpacity>

        <View style={styles.contactInfo}>
          <Text style={styles.contactTitle}>Επικοινωνία</Text>
          <Text style={styles.contactText}>Πάτρα, Ελλάδα</Text>
          <Text style={styles.contactText}>artofmind.gr</Text>
        </View>
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f2f2f2',
  },
  header: {
    backgroundColor: '#1676a4',
    paddingVertical: 40,
    paddingHorizontal: 20,
    alignItems: 'center',
  },
  logoContainer: {
    alignItems: 'center',
  },
  logoText: {
    fontSize: 28,
    fontWeight: 'bold',
    color: '#ffffff',
    marginBottom: 5,
    fontFamily: 'System',
  },
  subtitle: {
    fontSize: 16,
    color: '#ffffff',
    textAlign: 'center',
    opacity: 0.9,
  },
  content: {
    padding: 20,
  },
  card: {
    backgroundColor: '#ffffff',
    borderRadius: 8,
    padding: 20,
    marginBottom: 20,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.1,
    shadowRadius: 3.84,
    elevation: 3,
  },
  cardTitle: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#1676a4',
    marginBottom: 10,
    lineHeight: 24,
  },
  cardText: {
    fontSize: 16,
    color: '#222222',
    lineHeight: 24,
  },
  servicesContainer: {
    marginBottom: 20,
  },
  sectionTitle: {
    fontSize: 22,
    fontWeight: 'bold',
    color: '#1676a4',
    marginBottom: 15,
    lineHeight: 26,
  },
  serviceCard: {
    backgroundColor: '#ffffff',
    borderRadius: 8,
    padding: 16,
    marginBottom: 12,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 1,
    },
    shadowOpacity: 0.08,
    shadowRadius: 2,
    elevation: 2,
    borderLeftWidth: 3,
    borderLeftColor: '#1676a4',
  },
  serviceTitle: {
    fontSize: 18,
    fontWeight: '600',
    color: '#155e85',
    marginBottom: 6,
    lineHeight: 22,
  },
  serviceText: {
    fontSize: 15,
    color: '#222222',
    lineHeight: 22,
  },
  servicePrice: {
    fontSize: 15,
    color: '#1676a4',
    fontWeight: '600',
    marginTop: 6,
  },
  websiteButton: {
    backgroundColor: '#1676a4',
    borderRadius: 8,
    paddingVertical: 16,
    paddingHorizontal: 32,
    alignItems: 'center',
    marginVertical: 20,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.1,
    shadowRadius: 3,
    elevation: 3,
  },
  websiteButtonText: {
    color: '#ffffff',
    fontSize: 16,
    fontWeight: 'bold',
  },
  contactInfo: {
    backgroundColor: '#ffffff',
    borderRadius: 8,
    padding: 20,
    alignItems: 'center',
    borderTopWidth: 3,
    borderTopColor: '#1676a4',
  },
  contactTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#1676a4',
    marginBottom: 12,
  },
  contactText: {
    fontSize: 16,
    color: '#222222',
    marginBottom: 6,
    textAlign: 'center',
  },
});

export default HomeScreen;