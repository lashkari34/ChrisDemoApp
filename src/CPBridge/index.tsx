import React, { useEffect, useState } from "react";
import { SafeAreaView, ScrollView, Text, TouchableOpacity, View, Image, FlatList } from 'react-native';
import styles from "./styles";
import TrackPlayer from 'react-native-track-player';

const PlayMusic = () => {

    const [state, setState] = useState(true)

    useEffect(() => {
        startUp()
    }, [])

    const MusicList = [
        {
            id: 1,
            url: require('../assets/music/music.mp3'),
            title: "music",
            artwork: require('../assets/images/pause.png'),
        },
    ]

    const startUp = async () => {
        await TrackPlayer.setupPlayer();
        await TrackPlayer.add(MusicList)
    }

    const Play = async () => {
        await TrackPlayer.play();
        setState(false)
    }
    const Pause = async () => {
        await TrackPlayer.pause();
        setState(true)
    }

    const renderItem = ({ item }: any) => (
        <View style={styles.imageView}>

            <Image source={item.artwork}
                style={styles.image}
            />
            <Text style={styles.title}>
                {item.title}
            </Text>
        </View>
    )


    return (
        <SafeAreaView style={styles.MainBody}>
            <View style={styles.flatlistStyle}>
                <FlatList
                    data={MusicList}
                    renderItem={renderItem}
                />
            </View>

            {state == true ?
                <TouchableOpacity
                    style={styles.button}
                    onPress={() => {
                        Play()
                    }}
                >
                    <Image source={require('../assets/images/play.png')}
                        style={styles.playButtonImage}
                    />
                    <Text style={styles.title}>
                        Play
                    </Text>
                </TouchableOpacity>
                :
                <TouchableOpacity
                    style={styles.button}
                    onPress={() => Pause()}            >
                    <Image source={require('../assets/images/pause.png')}
                        style={styles.playButtonImage}
                    />
                    <Text style={styles.title}>
                        pause
                    </Text>
                </TouchableOpacity>
            }

        </SafeAreaView>
    );
};

export default PlayMusic;