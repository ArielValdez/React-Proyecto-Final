import { StyleSheet } from 'react-native';

const balanceListStyle = StyleSheet.create(
    {
        viewMain: {
            flex: 1,
            marginTop: 30
        },
        viewList: {
            flexDirection: 'column',
            justifyContent: 'flex-start',
            width: '100%',
            padding: 20,
            marginBottom: 20,
            backgroundColor: 'rgba(255,255,255,1)',
            borderRadius: 15,
            shadowColor: 'black',
            shadowOffset: {
                width: 100,
                height: 20
            },
            shadowOpacity: 1,
            shadowRadius: 20,
            elevation: 40
        },
        viewBalance: {
            flexDirection: 'row',
            borderWidth: 2,
            justifyContent: 'space-between',
            alignItems: 'center',
            margin: 10
        },
        credit: {
            color: '#fff000'
        },
        debit: {
            color: 'green'
        }
    }
);