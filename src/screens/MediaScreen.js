import React, { useEffect, useState } from 'react';
import { View, Text, Button, FlatList, Image } from 'react-native';
import { useSelector, useDispatch } from 'react-redux';
import { fetchMedia, uploadMedia } from '../store/actions/mediaActions';
import { launchCamera } from 'react-native-camera';

const MediaScreen = () => {
    const media = useSelector(state => state.media.media);
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(fetchMedia());
    }, []);

    const captureMedia = () => {
        launchCamera({ mediaType: 'photo' }, async (response) => {
            if (!response.didCancel && !response.error) {
                const file = {
                    uri: response.uri,
                    type: response.type,
                    name: response.fileName
                };
                dispatch(uploadMedia(file));
            }
        });
    };

    return (
        <View>
            <Button title="Capture Media" onPress={captureMedia} />
            <FlatList 
                data={media}
                keyExtractor={item => item._id}
                renderItem={({ item }) => (
                    <Image source={{ uri: item.url }} style={{ width: 100, height: 100 }} />
                )}
            />
        </View>
    );
};

export default MediaScreen;
