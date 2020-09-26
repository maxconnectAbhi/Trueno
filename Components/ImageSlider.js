import React,{useState} from 'react';
import {
  View,TouchableOpacity,StyleSheet
} from 'react-native';
import ImageSlider from 'react-native-image-slider';
import Icon from 'react-native-vector-icons/Ionicons';

var dataImages = [
  require('../assets/bike.png'),
  require('../assets/bike.png'),
  require('../assets/bike.png'),
  ]

 const TopImageSlider = () => {
  const [position, setposition] = useState(0)
    return (
<View style={{height:'45%',width:'90%',overflow:'hidden',alignSelf:'center'}}>
<ImageSlider
disabled
images={dataImages}
onPositionChanged={(i)=> setposition(i)}
customButtons={(position, move) => (
<View style={styles.row}>
 <TouchableOpacity
       disabled={position==0?true:false}
       key={position+1}
       onPress={() => move(position-1)}
      style={styles.arrow}
     >
  <Icon name='arrow-back' size={20}/>
     </TouchableOpacity>
     <TouchableOpacity
     disabled={position==dataImages.length-1?true:false}
       key={position}
       onPress={() => move(position+1)}
      style={[styles.arrow,{right:0}]}
     >
<Icon name='arrow-forward' size={20}/>  
   </TouchableOpacity>
     </View>
)}
/>

<View style={styles.indicator}>
         {dataImages.map((image, index) => {
                return (
                    <View style={{backgroundColor:position == index ? '#3BCEBE':'#C3F0EB',height:4,width:20,borderRadius:2,margin:2}}/>
                );
              })}
         </View>

</View>
    )
}

export default TopImageSlider

const styles = StyleSheet.create({
  arrow: {
    padding:5,
    position:'absolute',
    bottom:120,zIndex:2
  },
  row: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center'
  },
  indicator:{
    flexDirection:'row',
    justifyContent:'center',
    marginTop:10, 
    width:'100%',
    position:'absolute',
    bottom:0
  }
})