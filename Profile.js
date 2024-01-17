import React, { useState, useEffect } from 'react';
import { StyleSheet, Text, View, Dimensions, TouchableOpacity, Image, ActivityIndicator } from 'react-native';
import AntDesign from './back.png';
import notification from './notification.png';
const { width, height } = Dimensions.get('window');
import profill from './prof.jpg';
import { useNavigation } from '@react-navigation/native';

const Card = (props) => {
    return (
        <>
      <View style={styles.profill}>
        <Text style={{ fontSize: 25, fontWeight: '500', alignSelf: 'center',color:'black' }}>{props.name}</Text>
        <Image source={profill} style={{ height: 55, width: 55, borderRadius: 50, alignSelf: 'center' }} />
      </View>
      <View style={styles.card}>
        <View style={{ flexDirection: 'row', justifyContent: 'space-between', width: width - 70, padding: 15 }}>
          <Text style={{color:'grey'}}>Student ID Number:</Text>
          <Text style={{color:'grey'}}>{props.id}</Text>
        </View>
        <View style={{ flexDirection: 'row', justifyContent: 'space-between', width: width - 70, padding: 15 }}>
          <Text style={{color:'grey'}}>Class/Grade:</Text>
          <Text style={{color:'grey'}}>{props.class}</Text>
        </View>
        <View style={{ flexDirection: 'row', justifyContent: 'space-between', width: width - 70, padding: 15 }}>
          <Text style={{color:'grey'}}>Contact Number:</Text>
          <Text style={{color:'grey'}}>{props.number}</Text>
        </View>
        <View style={{ flexDirection: 'row', justifyContent: 'space-between', width: width - 70, padding: 15 }}>
          <Text style={{color:'grey'}}>Email Address:</Text>
          <Text style={{color:'grey'}}>{props.email}</Text>
        </View>
        <View style={{ flexDirection: 'row', justifyContent: 'space-between', width: width - 70, padding: 15 }}>
          <Text style={{color:'grey'}}>Parent/Guardian:</Text>
          <Text style={{color:'grey'}}>{props.parent}</Text>
        </View>
        <View style={{ flexDirection: 'row', justifyContent: 'space-between', width: width - 70, padding: 15 }}>
          <Text style={{color:'grey'}}>Parent Contact:</Text>
          <Text style={{color:'grey'}}>{props.contact}</Text>
        </View>
        <View style={{ flexDirection: 'row', justifyContent: 'space-between', width: width - 70, padding: 15 }}>
          <Text style={{color:'grey'}}>Address</Text>
          <Text style={{color:'grey'}}>{props.address}</Text>
        </View>
      </View>
    </>
  );
};

const Profile = () => {
    const navigation=useNavigation();
    const [profileData, setProfileData] = useState(null);
    const [loading, setLoading] = useState(true);
    
    useEffect(() => {
        const fetchProfileData = async () => {
      try {
        const response = await fetch('https://noder-blond.vercel.app/getProfileCard');
        const data = await response.json();
        setProfileData(data.profileCards[0].profileCardInfo);
      } catch (error) {
        console.error('Error fetching data:', error);
      } finally {
        setLoading(false);
      }
    };

    fetchProfileData();
  }, []);

  return (
    <View style={styles.container}>
      <View style={styles.head}>
        <View style={{ flexDirection: 'row', alignItems: 'center', justifyContent: 'center' }}>
          <TouchableOpacity style={{ marginLeft: 10, paddingRight: 10 }}>
            <Image source={AntDesign} style={{height:20,width:20}}/>
          </TouchableOpacity>
          <Text style={{ fontSize: 20 ,color:'black'}}>Profile</Text>
        </View>
        <TouchableOpacity style={{ marginRight: 10, backgroundColor: 'lightgrey', borderRadius: 50, padding: 10 }}
        onPress={()=>{
            navigation.navigate('Notification');
        }}
        >
          <Image source={notification} style={{ height: 25, width: 25 }} />
        </TouchableOpacity>
      </View>
      <View>
        {loading ? (
          <ActivityIndicator size="50%" color="#978cd0" style={{top:"60%"}}/>
        ) : (
          <Card {...profileData} />
        )}
      </View>
    </View>
  );
};

export default Profile;

const styles = StyleSheet.create({
  container: {
    display: 'flex',
    flexDirection: 'column',
    width: width,
  },
  head: {
    width: width,
    justifyContent: 'space-between',
    alignItems: 'center',
    flexDirection: 'row',
    marginTop: '5%',
  },
  card: {
    marginTop: '5%',
    alignItems: 'center',
    backgroundColor: '#dcd9ef',
    width: width - 50,
    borderRadius: 15,
    alignSelf: 'center',
  },
  profill: {
    width: width - 60,
    alignSelf: 'center',
    justifyContent: 'space-between',
    marginTop: '10%',
    flexDirection: 'row',
  },
});
