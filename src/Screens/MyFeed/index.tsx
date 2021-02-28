import React, {useContext, useState, useEffect} from 'react';
import {FlatList, Text, View} from 'react-native';
import {StackNavigationProp} from '@react-navigation/stack';
import Styled from 'styled-components/native';

import { RandomUserDataContext } from '~/Context/RandomUserData';
import IconButton from '~/Components/IconButton';
import Feed from '~/Components/Feed';
import StoryList from './StoryList';

const HeaderRightContainer = Styled.View`
    flex-direction: row;
`;

type NavigationProp = StackNavigationProp<MyFeedTabParamList, 'MyFeed'>;
interface Props {
    navigation: NavigationProp;
}

const MyFeed = ({navigation}: Props) => {
    const {getMyFeed} = useContext(RandomUserDataContext);
    const [feedList, setFeedList] = useState<Array<IFeed>>([]);
    const [storyList, setStoryList] = useState<Array<IFeed>>([]);
    const [loading, setLoading] = useState<boolean>(false);


    React.useLayoutEffect(() => {
        navigation.setOptions({
            headerLeft: () => <IconButton iconName="camera" />,
            headerRight: () => (
                <HeaderRightContainer>
                    <IconButton iconName="live" />
                    <IconButton iconName="send" />
                </HeaderRightContainer>
            )
        })
    }, []);

    useEffect(()=> {
        setFeedList(getMyFeed());
        setStoryList(getMyFeed());
        // console.log(feedList);
    }, []);

    return (
        <FlatList
          data={feedList}
          keyExtractor={(item, index) => {
              return `myfeed-${index}`;
          }}
          showsVerticalScrollIndicator={false}
          onRefresh={() => {
              setLoading(true);
              setTimeout(() => {
                  setFeedList(getMyFeed());
                  setStoryList(getMyFeed());
                  setLoading(false);
              }, 2000);
          }}
          onEndReached={() => {
              setFeedList([...feedList, ...getMyFeed()]);
          }}
          onEndReachedThreshold={0.5}
          refreshing={loading}
          ListHeaderComponent={<StoryList storyList={storyList} />}
          renderItem={({ item, index }) => (
              <Feed
                id={index}
                name={item.name}
                photo={item.photo}
                description={item.description}
                images={item.images}
              />
          )}
        />
    );
};



export default MyFeed;