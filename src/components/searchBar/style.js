import { StyleSheet } from "react-native";

const styles = StyleSheet.create({

    containerSearch:{
        flexDirection:'row',
        width:'90%',
        backgroundColor:'white',
        marginTop:30,
        alignItems:'center',
        borderRadius:3
    },
    inputSearch:{
        height:35,
        width:'100%',
        marginLeft:5

    },
    buttonSearch:{
        padding: 10,
        paddingTop: 5,
        width: 40,
        height: 40,
        backgroundColor: 'black',
        textAlign: 'center',
        position: "absolute",
        right: 0,
        top: -20
}
})

export default styles;