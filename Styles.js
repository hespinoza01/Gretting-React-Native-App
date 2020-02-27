import { StyleSheet, Dimensions } from 'react-native';

const Style = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        padding: 50,
        width: Dimensions.get('window').width
    },

    fieldset: {
        flex: 1,
        flexDirection: 'column',
        alignItems: 'center',
    },

    label: {
        fontSize: 16
    },

    input: {
        height: 32,
        width: Dimensions.get('window').width - 64,
        paddingLeft: 5,
        borderColor: 'gainsboro',
        borderWidth: 2,
        borderRadius: 3,
        marginTop: 16,
        marginBottom: 16
    },

    gretting: {
        fontSize: 40,
        textAlign: 'center',
        marginBottom: 50
    }
});

export default Style;
