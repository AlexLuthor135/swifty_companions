import React, { useState, useEffect } from 'react';
import { getUserData } from '../api/api';
import { View, Text, Button, ActivityIndicator, ScrollView, Image } from 'react-native';
import styles from '../styles/ProfileScreenStyle';

export default function ProfileScreen({ route, navigation }) {
    const { userLogin } = route.params;
    const [ userInfo, setUserInfo ] = useState(null);
    const [ loading, setLoading ] = useState(true);

    function getProfileImage(userInfo) {
        return userInfo.image?.link || 'https://cdn-icons-png.flaticon.com/512/847/847969.png';
    }

    useEffect (() => {
        async function getData() {
            try {
                const data = await getUserData(userLogin);
                setUserInfo(data);
            } catch (error) {
                alert('No user data was collected');
                navigation.goBack();
            } finally {
                setLoading(false);
            }
        }
        getData();
    }, []);

    if (loading) {
        return (
            <View style={styles.loadingContainer}>
                <ActivityIndicator size="large"/>
            </View>
        );
    }

    if (!userInfo) {
        return null;
    }
    
    return (
        <ScrollView contentContainerStyle={styles.container}>
          <Image source={{ uri: getProfileImage(userInfo) }} style={styles.profileImage} />
          <Text style={styles.title}>{userInfo.displayname}</Text>
          <Text>Login: {userInfo.login}</Text>
          <Text>Email: {userInfo.email}</Text>
          <Text>Wallet: {userInfo.wallet} ₳</Text>
          <Text>Correction Points: {userInfo.correction_point}</Text>
      
          {userInfo.cursus_users && userInfo.cursus_users.length > 0 && (
            <>
              <Text style={styles.sectionTitle}>Cursus</Text>
              {userInfo.cursus_users.map((cursusUser, index) => (
                <View key={index} style={styles.cursusContainer}>
                  <Text style={styles.cursusName}>{cursusUser.cursus?.name ?? 'Unknown Cursus'}</Text>
                  <Text style={styles.levelText}>Level: {cursusUser.level.toFixed(2)}</Text>
      
                  {cursusUser.skills.length > 0 ? (
                    <>
                      <Text style={styles.sectionTitle}>Skills</Text>
                      {cursusUser.skills.map((skill, idx) => (
                        <View key={idx} style={styles.skillContainer}>
                          <Text style={styles.skillName}>{skill.name} - {skill.level.toFixed(2)}</Text>
                          <View style={styles.progressBar}>
                            <View style={[styles.progressFill, { width: `${(skill.level / 21) * 100}%` }]} />
                          </View>
                        </View>
                      ))}
                    </>
                  ) : (
                    <Text>No skills available for this cursus</Text>
                  )}
                </View>
              ))}
            </>
          )}
      
          {userInfo.projects_users && (
            <>
              <Text style={styles.sectionTitle}>Projects</Text>
              {userInfo.projects_users
                .filter(p => p.project && p.status === "finished")
                .map((project, index) => (
                  <View key={index} style={styles.projectContainer}>
                    <Text style={styles.projectName}>{project.project.name}</Text>
                    <Text style={{
                      color: project['validated?'] ? 'green' : 'red',
                      fontWeight: 'bold',
                    }}>
                      {project['validated?'] ? `✓ Passed (${project.final_mark})` : `✗ Failed`}
                    </Text>
                  </View>
                ))}
            </>
          )}
      
          <Button title="Go back" onPress={() => navigation.goBack()} />
        </ScrollView>
      );
      
}