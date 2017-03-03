/**
 * Created by Administrator on 2017/3/3.
 */
'use strict';
import React, {
    Component
} from 'react'
import {
    StyleSheet,
    View,
    Text,
    Image
} from 'react-native';

var styles=StyleSheet.create({
     container:{
         marginTop:65
     },
    heading:{
         backgroundColor:'#F8F8F8'
    },
    separator:{
         height:1,
        backgroundColor:'#DDDDDD'
    },
    image:{
         width:400,
        height:300
    },
    price:{
         fontSize:25,
        fontWeight:'bold',
        margin:5,
        color:'#48BBEC'
    },
    title:{
         fontSize:20,
        margin:5,
        color:'#656565'
    },
    description:{
         fontSize:18,
        margin:5,
        color:'#656565'
    }
})
export default class PropertyComponent extends Component{
    render(){
        var property=this.props.property;
        var stats=property.bedroom_number +' bed '+property.prototype_type;
        if (property.bathroom_number ){
            stats+=', '+property.bathroom_number +' '+(property.bathroom_number >1 ?'bathrooms':'bathroom');
        }
        var price=property.price_formatted.split(' ')[0];
        return (
            <View style={styles.container}>
                <Image style={styles.image}
                       source={{uri:property.img_url}}/>
                <View style={styles.heading}>
                    <Text style={styles.price}>£{price}</Text>
                    <Text style={styles.title}>{property.title}</Text>
                    <Text style={styles.separator}/>
                </View>
                <Text style={styles.description}>{stats}</Text>
                <Text style={styles.description}>{property.summary}</Text>
            </View>
        );
    }
}