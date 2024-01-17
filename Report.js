import { StyleSheet, Text, View , TouchableOpacity,Image,Dimensions, ScrollView} from 'react-native'
import React from 'react'
import AntDesign from './back.png';
import notification from './notification.png';
const { width, height } = Dimensions.get('window');
import report from './reportin.png';
import download from './download.png';
import { useNavigation } from '@react-navigation/native';

const Card=(props)=>{
    return(
    <>
    <View style={styles.carder}>
                <TouchableOpacity style={{display:'flex',flexDirection:'row',gap:8,padding:10}}>
                    <View style={{backgroundColor:'#978cd0',borderRadius:50,padding:15,borderColor:'darkblue',borderWidth:1.7}}>
                        <Image source={report} style={{height:20,width:20}}/>
                    </View>
                    <Text style={{color:'grey',alignSelf:'center',color:'black'}}>{props.name}</Text>
                </TouchableOpacity>

                <TouchableOpacity style={{padding:10}}>
                    <Image source={download} style={{height:30,width:30,alignSelf:'center'}}/>
                </TouchableOpacity>
    </View>
    </>
    )
}

const Report = () => {
    const navigation=useNavigation();
  return (
    <View style={styles.container}>
    <View style={styles.head}>
      <View style={{ flexDirection: 'row', alignItems: 'center', justifyContent: 'center' }}>
        <TouchableOpacity style={{ marginLeft: 10, paddingRight: 10 }}>
        <Image source={AntDesign} style={{height:20,width:20}}/>
        </TouchableOpacity>
        <Text style={{ fontSize: 20 ,color:'black'}}>Report</Text>
      </View>
      <TouchableOpacity style={{ marginRight: 10, backgroundColor: 'lightgrey', borderRadius: 50, padding: 10 }}
      onPress={()=>{
        navigation.navigate('Notification');
      }}
      >
        <Image source={notification} style={{ height: 25, width: 25 }} />
      </TouchableOpacity>
    </View>

    <ScrollView contentContainerStyle={styles.second}>
        <Card name="resources.pdf"/>
        <Card name="resources.pdf"/>
        <Card name="resources.pdf"/>
        <Card name="resources.pdf"/>
        <Card name="resources.pdf"/>
        <Card name="resources.pdf"/>
        <Card name="resources.pdf"/>
        <Card name="resources.pdf"/>
        <Card name="resources.pdf"/>
        <Card name="resources.pdf"/>

    </ScrollView>


    </View>
  )
}

export default Report

const styles = StyleSheet.create({
    container: {
        display: 'flex',
        flexDirection: 'column',
        width: width,
        gap:20,
      },
      head: {
        width: width,
        justifyContent: 'space-between',
        alignItems: 'center',
        flexDirection: 'row',
        marginTop: '5%',
      },
      second:{
        alignSelf:'center',
        display:'flex',
        alignItems:'center',
        gap:20,
      },
      carder:{
        width:width-60,
        height:100,
        borderColor:'#9e77ed',
        borderWidth:2,
        borderRadius:15,
        justifyContent:'space-between',
        flexDirection:'row',
        alignItems:'center',
      }
})