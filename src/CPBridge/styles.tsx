import { StyleSheet } from "react-native"
const styles = StyleSheet.create({
    MainBody: {
        flex: 1,
        backgroundColor: '#fff'
    },
    button: {
        alignItems: 'center',
        justifyContent: 'center',
        marginTop: 0
    },
    flatlistStyle: {
        width: '90%',
      alignSelf:'center',
      marginVertical:50
    },
    image:{
        height:300,
        width:300
    },
    imageView:{
        alignItems:'center',
        borderWidth:1,
        borderRadius:10,
        paddingVertical:50,
        backgroundColor:'#f2f2f2'
    },
    title:{
        fontSize:20,
        fontWeight:'500',
        marginTop:20,
    },
    playButtonImage:{
        height:50,
        width:50,       
    }
})

export default styles;