import { ScrollView, StyleSheet, Text, View ,Dimensions, Image,TouchableOpacity} from 'react-native'
import React from 'react'
import report from './reportin.png';
import syll from './syll.png';
import test from './test.png';
import pay from './payment.png';
import menu from './menu.png';
import notification from './notification.png';
import { useNavigation } from '@react-navigation/native';

const { width, height } = Dimensions.get('window');
const Home = () => {
    const navigation=useNavigation();
  return (
    <View style={styles.container}>
      <View style={styles.first}>

        <TouchableOpacity style={{marginLeft:20,backgroundColor:'lightgrey',borderRadius:50,padding:10}}>
            <Image source={menu} style={{height:25,width:25}}/>
        </TouchableOpacity>

        <TouchableOpacity style={{marginRight:20,backgroundColor:'lightgrey',borderRadius:50,padding:10}}
        onPress={()=>{
            navigation.navigate('Notification');
        }}
        >
            <Image source={notification} style={{height:25,width:25}}/>
        </TouchableOpacity>
        
      </View>

      <ScrollView contentContainerStyle={styles.second}>

        <View style={styles.one}>
            <Text style={styles.wel}>Welcome back</Text>
            <Text style={styles.name}>Amit Patel</Text>

            <View style={styles.card}>

                <View style={styles.attend}>
                    <Text style={{color:'white'}}>Attendance</Text>
                    <Text style={{color:'white',fontSize:25,}}>Jan 2024</Text>
                </View>

                <View style={styles.prog}>
                    <Text style={{color:'white',fontSize:30}}>93%</Text>
                </View>

            </View>

        </View>

        <View style={styles.two}>

            <Text style={styles.quick}>Quick Links</Text>

            <View style={styles.card2}>

                <TouchableOpacity style={{display:'flex',flexDirection:'column',gap:8}}
                onPress={()=>{
                    navigation.navigate('report');
                }}
                >
                    <View style={{backgroundColor:'#978cd0',borderRadius:50,padding:15,borderColor:'darkblue',borderWidth:1.7}}>
                        <Image source={report} style={{height:22,width:22}}/>
                    </View>
                    <Text style={{color:'grey',alignSelf:'center'}}>Report</Text>
                </TouchableOpacity>

                <TouchableOpacity style={{display:'flex',flexDirection:'column',gap:8}}>
                    <View style={{backgroundColor:'#978cd0',borderRadius:50,padding:15,borderColor:'darkblue',borderWidth:1.7}}>
                        <Image source={syll} style={{height:22,width:22}}/>
                    </View>
                    <Text style={{color:'grey',alignSelf:'center'}}>Syllabus</Text>
                </TouchableOpacity>

                <TouchableOpacity style={{display:'flex',flexDirection:'column',gap:8}}>
                    <View style={{backgroundColor:'#978cd0',borderRadius:50,padding:15,borderColor:'darkblue',borderWidth:1.7}}>
                        <Image source={test} style={{height:22,width:22}}/>
                    </View>
                    <Text style={{color:'grey',alignSelf:'center'}}>Unit Test</Text>
                </TouchableOpacity>

                <TouchableOpacity style={{display:'flex',flexDirection:'column',gap:8}}>
                    <View style={{backgroundColor:'#978cd0',borderRadius:50,padding:15,borderColor:'darkblue',borderWidth:1.7}}>
                        <Image source={pay} style={{height:22,width:22,alignSelf:'center'}}/>
                    </View>
                    <Text style={{color:'grey',alignSelf:'center'}}>Payment</Text>
                </TouchableOpacity>

            </View>


        </View>


        <View style={styles.three}>

            <Text style={styles.quick}>Upcoming Events(07)</Text>

            <View style={styles.card3}>

                <View style={{flexDirection:'row', gap:5}}>
                    <Image source={report} style={{height:20,width:20,alignSelf:'center',marginLeft:8}}/>
                    <Text style={{fontWeight:'500',fontSize:18,color:'black'}}>Science Fair Showcase</Text>

                </View>

                <View style={{flexDirection:'column',alignSelf:'center',marginRight:8}}>
                    <Text  style={{color:'black'}}>JAN</Text>
                    <Text style={{fontSize:25,color:'black'}}>18</Text>
                </View>

            </View>
            
            <View style={styles.card3}>

            <View style={{flexDirection:'row', gap:5}}>
                    <Image source={test} style={{height:20,width:20,alignSelf:'center',marginLeft:8}}/>
                    <Text style={{fontWeight:'500',fontSize:18,color:'black'}}>Math Olympiad</Text>

                </View>

                <View style={{flexDirection:'column',alignSelf:'center',marginRight:8}}>
                    <Text style={{color:'black'}}>JAN</Text>
                    <Text style={{fontSize:25,color:'black'}}>24</Text>
                </View>

            </View>

            <View style={styles.card3}>

                <View style={{flexDirection:'row', gap:5}}>
                    <Image source={report} style={{height:20,width:20,alignSelf:'center',marginLeft:8}}/>
                    <Text style={{fontWeight:'500',fontSize:18,color:'black'}}>Science Fair Showcase</Text>

                </View>

                <View style={{flexDirection:'column',alignSelf:'center',marginRight:8}}>
                    <Text style={{color:'black'}}>JAN</Text>
                    <Text style={{fontSize:25,color:'black'}}>18</Text>
                </View>

            </View>
            
            <View style={styles.card3}>

            <View style={{flexDirection:'row', gap:5}}>
                    <Image source={test} style={{height:20,width:20,alignSelf:'center',marginLeft:8}}/>
                    <Text style={{fontWeight:'500',fontSize:18,color:'black'}}>Math Olympiad</Text>

                </View>

                <View style={{flexDirection:'column',alignSelf:'center',marginRight:8}}>
                    <Text style={{color:'black'}}>JAN</Text>
                    <Text style={{fontSize:25,color:'black'}}>24</Text>
                </View>

            </View>
            <View style={styles.card3}>

            <View style={{flexDirection:'row', gap:5}}>
                    <Image source={test} style={{height:20,width:20,alignSelf:'center',marginLeft:8}}/>
                    <Text style={{fontWeight:'500',fontSize:18,color:'black'}}>Math Olympiad</Text>

                </View>

                <View style={{flexDirection:'column',alignSelf:'center',marginRight:8}}>
                    <Text style={{color:'black'}}>JAN</Text>
                    <Text style={{fontSize:25,color:'black'}}>24</Text>
                </View>

            </View>
            <View style={styles.card3}>

            <View style={{flexDirection:'row', gap:5}}>
                    <Image source={test} style={{height:20,width:20,alignSelf:'center',marginLeft:8}}/>
                    <Text style={{fontWeight:'500',fontSize:18,color:'black'}}>Math Olympiad</Text>

                </View>

                <View style={{flexDirection:'column',alignSelf:'center',marginRight:8}}>
                    <Text style={{color:'black'}}>JAN</Text>
                    <Text style={{fontSize:25,color:'black'}}>24</Text>
                </View>

            </View>
            <View style={styles.card3}>

            <View style={{flexDirection:'row', gap:5}}>
                    <Image source={test} style={{height:20,width:20,alignSelf:'center',marginLeft:8}}/>
                    <Text style={{fontWeight:'500',fontSize:18,color:'black'}}>Math Olympiad</Text>

                </View>

                <View style={{flexDirection:'column',alignSelf:'center',marginRight:8}}>
                    <Text style={{color:'black'}}>JAN</Text>
                    <Text style={{fontSize:25,color:'black'}}>24</Text>
                </View>

            </View>

        </View>

      </ScrollView>

    </View>
  )
}

export default Home

const styles = StyleSheet.create({
    container:{
        flex:1,
        height:height,
        width:width,
        marginTop:'6%',
        justifyContent:'center',
        alignItems:'center',
        // borderWidth:2,
        // borderColor:'blue',
        gap:10,
    },
    first:{
        // borderWidth:2,
        // borderColor:'black',
        flexDirection:'row',
        alignItems:'center',
        width:width,
        height:50,
        justifyContent:'space-between',
        gap:0,
    },
    second:{
        // flex:1,
        // flex:1,
        width:width,
        // height:600,
        // height:50,
        // borderWidth:2,
        gap:15,
        // borderColor:'green',
        alignItems:'center',
    },
    one:{
        display:'flex',
        width:width-40,
        // borderWidth:2,
        // borderColor:'red',
        // height:200,
    },
    two:{
        display:'flex',
        width:width-40,
        // borderWidth:2,
        // borderColor:'red',

    },
    three:{
        display:'flex',
        width:width-40,
        // borderWidth:2,
        // borderColor:'red',
        gap:10,

    },
    wel:{
        fontWeight:'400',
        marginLeft:"2%",
        color:'black',
    },
    name:{
        marginLeft:"2%",
        fontSize:25,
        fontWeight:'600',
        color:'black',

    },
    card:{
        alignSelf:'center',
        height:160,
        width:width-40,
        justifyContent:'center',
        alignItems:'center',
        flexDirection:'row',
        gap:90,
        marginTop:'5%',
        backgroundColor:'#978cd0',
        borderRadius:20,
    },
    card2:{
        alignSelf:'center',
        height:125,
        width:width-40,
        justifyContent:'center',
        alignItems:'center',
        flexDirection:'row',
        gap:30,
        marginTop:'5%',
        backgroundColor:'#dcd9ef',
        borderRadius:20,
    },
    card3:{
        alignSelf:'center',
        height:55,
        width:width-40,
        justifyContent:'space-between',
        alignItems:'center',
        flexDirection:'row',
        // marginTop:'5%',
        backgroundColor:'#dcd9ef',
        borderRadius:10,
    },
    attend:{
        display:'flex',
        justifyContent:'center',
        // alignItems:'center',
        // alignSelf:'center',
        // width:'20%',
    },
    prog:{
        display:'flex',
        justifyContent:'center',
        alignItems:'center',
        // alignSelf:'center',
        // width:'20%',
    },
    quick:{
        marginLeft:"2%",
        fontSize:20,
        fontWeight:'400',
        color:'black',
    }
})