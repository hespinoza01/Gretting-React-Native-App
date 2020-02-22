import { StyleSheet, Dimensions } from 'react-native';

const Style = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'space-between',
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
});

export default Style;
