import React from 'react';
import { View, Text, FlatList, Image, TouchableOpacity, StyleSheet } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import Header from './Header';

const jobs = [
  {
    id: '1',
    company: 'Pinterest, Inc.',
    location: 'California, USA',
    position: 'Motion Designer',
    level: 'Senior',
    type: 'Fulltime',
    remote: 'Remote',
    salary: '$7K/Month',
    logo: 'https://upload.wikimedia.org/wikipedia/commons/0/08/Pinterest-logo.png',
  },
  {
    id: '2',
    company: 'Google',
    position: 'Product Designer',
    level: 'Senior',
    type: 'Fulltime',
    remote: 'Remote',
    salary: '$5K/Month',
    logo: 'https://upload.wikimedia.org/wikipedia/commons/2/2f/Google_2015_logo.svg',
  },
];

const JobCard = ({ job }: { job: typeof jobs[0] }) => (
  <View style={styles.jobCard}>
    <View style={styles.jobHeader}>
      <Image source={{ uri: job.logo }} style={styles.logo} />
      <View style={styles.jobInfo}>
        <Text style={styles.company}>{job.company}</Text>
        <Text style={styles.location}>{job.location}</Text>
      </View>
    </View>
    <Text style={styles.position}>{job.position}</Text>
    <Text style={styles.details}>
      {job.level} • {job.type} • {job.remote}
    </Text>
    <View style={styles.footer}>
      <TouchableOpacity style={styles.applyButton}>
        <Text style={styles.applyText}>Apply Now</Text>
      </TouchableOpacity>
      <Text style={styles.salary}>{job.salary}</Text>
    </View>
  </View>
);
export default function HomeScreen() {
  return (
    <SafeAreaView style={styles.container}>

      <Header />
      <View style={styles.content}>
        <Text style={styles.sectionTitle}>Recommendation</Text>
        <FlatList
          horizontal
          data={jobs.slice(0, 1)}
          renderItem={({ item }) => <JobCard job={item} />}
          keyExtractor={(item) => item.id}
        />
        <Text style={styles.sectionTitle}>Recent Job List</Text>
        <FlatList
          data={jobs}
          renderItem={({ item }) => <JobCard job={item} />}
          keyExtractor={(item) => item.id}
        />
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1, paddingBottom: 0,
    backgroundColor: "#F9FAFB",
  },
  content: {
    flex: 1,
    marginTop: 40, // Push content down so it doesn’t overlap with the search bar
    paddingHorizontal: 20,
  },

  sectionTitle: { fontSize: 18, fontWeight: 'bold', marginTop: 16 },
  jobCard: { backgroundColor: '#f0f0f0', padding: 16, margin: 8, borderRadius: 12, shadowOpacity: 0.1, shadowRadius: 4 },
  jobHeader: { flexDirection: 'row', alignItems: 'center', marginBottom: 8 },
  logo: { width: 32, height: 32, borderRadius: 16 },
  jobInfo: { marginLeft: 8 },
  company: { fontWeight: 'bold' },
  location: { color: 'gray', fontSize: 12 },
  position: { fontSize: 16, fontWeight: 'bold' },
  details: { color: 'gray', fontSize: 12 },
  footer: { flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', marginTop: 8 },
  applyButton: { backgroundColor: '#007bff', paddingVertical: 8, paddingHorizontal: 16, borderRadius: 8 },
  applyText: { color: 'white', fontWeight: 'bold' },
  salary: { fontWeight: 'bold' },
});
