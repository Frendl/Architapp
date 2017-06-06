import React, { Component } from 'react';
import {
    View,
    Text,
    FlatList
} from 'react-native';



export default class App extends Component {
    constructor(props){
        super()
        this.state = {
            RSSFeedArray: []
        }
    }
    componentDidMount() {
        let url = 'https://api.rss2json.com/v1/api.json?rss_url=http%3A%2F%2Ffeeds.feedburner.com%2FArchdaily'
        fetch(url)
            .then((response) => response.json())
            .then((responseJson) => {
                console.log(responseJson)
                if (responseJson) {
                    console.log(responseJson)
                    this.setState({RSSFeedArray: responseJson.items})
                    // store.raw = responseJson.raw
                }
            })
            .catch((error) => {
                console.error(error)
            });
// this is a prommis, learn it. fetch is also explaing in the react native doc.
    }

    render() {
        return (
            <View style={{flex:1, marginTop:20}}>
                <FlatList
                    keyExtractor={item => item.guid}
                    data={this.state.RSSFeedArray}
                    renderItem={({item}) => <Text>{item.title}</Text>}
                />
            </View>
        );
    }
}

/*
const app = new App()
export default App
*/