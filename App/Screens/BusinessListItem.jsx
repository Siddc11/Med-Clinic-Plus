import { View, Text, Image, TouchableOpacity } from "react-native";
import React from "react";
import { FontAwesome6 } from '@expo/vector-icons';
import { useNavigation } from "@react-navigation/native";
import { AntDesign } from '@expo/vector-icons';

const BusinessListItem = ({ business , booking}) => {
  const navigation = useNavigation()
  return (
    <TouchableOpacity
      style={{
        padding: 10,
        backgroundColor: "#fff",
        borderRadius: 10,
        marginTop: 10,
        display: 'flex',
        flexDirection:'row',
        gap: 20
      }}
      
      onPress={() => navigation.push('Business-Detail', { business })}
    >
      <Image
        source={{ uri: business?.images[0]?.url }}
        style={{ width: 100, height: 120, borderRadius: 10 }}
      />
      <View style={{display:'flex', gap:8}}>
        <Text style={{fontSize: 15, color:'#3c3c3d'}}>{business.contactPerson}</Text>
        <Text style={{fontWeight:'bold', fontSize:18}}>{business.name}</Text>

        {!booking?.id?<Text
        style={{
          color:'#8E3FFF'
        }}><FontAwesome6 name="location-dot" size={20} color="#8E3FFF"/>{business.address}</Text>
         :
        <Text style={[{
          padding:5, 
          borderRadius: 5, 
          fontSize: 14, 
          alignSelf: 'flex-start'
        },
        booking?.bookingStatus=='Completed'?
        {backgroundColor:'lightgreen', color:'green'}:
        booking.bookingStatus=='Cancled'?
        {backgroundColor:'lightred', color:'red'}:
        {
          color:'#8ERFFF',
          backgroundColor: '#f2e3fa' }]}>
           {booking?.bookingStatus} 
     </Text> 
        }
        <View>
        {
          booking?.id?
          <Text
          style={{
            fontSize:16, 
            color: 'grey'
          }}>
         <AntDesign name="calendar" size={24} color="#8E3FFF" />
         {booking.date} at {booking.time}
          </Text>: null
        }
        </View>
      </View>
    </TouchableOpacity>
  );
};

export default BusinessListItem;
