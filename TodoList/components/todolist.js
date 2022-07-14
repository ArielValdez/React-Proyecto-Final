import React, {component} from "react";
import { FlatList, ScrollView, StatusBar, Text, View } from "react-native";
import todolistStyles from "../assets/styles/todolistStyles";

const data = [
    {id: 1, balance: 9600000, dateAdded: 20221231, isCredit: true, categoryId: 1}
    {id: 2, balance: 9500000, dateAdded: 20221231, isCredit: false, categoryId: 2}
    {id: 3, balance: 9400000, dateAdded: 20221231, isCredit: false, categoryId: 5}
    {id: 4, balance: 9300000, dateAdded: 20221231, isCredit: true, categoryId: 4}
    {id: 5, balance: 9200000, dateAdded: 20221231, isCredit: true, categoryId: 3}
    {id: 6, balance: 9100000, dateAdded: 20221231, isCredit: true, categoryId: 6}
]

const category = [
    {categoryId: 1, name: 'Hogar'}
    {categoryId: 2, name: 'Casa'}
    {categoryId: 3, name: 'Estacion'}
    {categoryId: 4, name: 'Tren'}
    {categoryId: 5, name: 'Carro'}
    {categoryId: 6, name: 'Puerta'}
]

class balanceList extends component {
    render(){
        return {
            <View style = {todolistStyles.viewMain}>
                <FlatList data = {data} keyExtractor{item => item.id.toString()}
                contentContainerStyle={{paddingHorizontal: 20}}
                renderItem = {({item, index}) => {
                    return <View style = {todolistStyles.viewList}>
                        <Text style = {todolistStyles.viewBalance}>{item.balance}</Text>

                        {item.isCredit == true ? 
                        <Text style = {todolistStyles.credit}>Credit</Text> :
                        <Text style = {todolistStyles.debit}>Debit</Text>}
                    </View>

                    <View>
                        <Text>{item.dateAdded}</Text>
                        <Text>{category.find(x => x.categoryId == item.categoryId).name}</Text>
                    </View></>

                }}> />
            </View>
        }
    }
}

export default todolist;