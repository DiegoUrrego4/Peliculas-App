import React from 'react';
import {Text, View} from 'react-native';
import {MovieFull} from '../interfaces/movieInterface';
import {Cast} from '../interfaces/creditsInterface';
import Icon from 'react-native-vector-icons/Ionicons';
import currencyFormatter from 'currency-formatter';
import {CastItem} from './CastItem';
import {FlatList} from 'react-native-gesture-handler';

interface Props {
  movieFull: MovieFull;
  cast: Cast[];
}

export const MovieDetails = ({movieFull, cast}: Props) => {
  return (
    <>
      {/* Detalles */}
      <View style={{marginHorizontal: 20}}>
        <View style={{flexDirection: 'row'}}>
          <Icon name="star" color="blue" size={16} />
          <Text>{movieFull.vote_average}</Text>
          <Text style={{marginLeft: 5}}>
            - {movieFull.genres.map(g => g.name).join(', ')}
          </Text>
        </View>
        {/* Historia */}
        <Text style={{fontSize: 23, marginTop: 20, fontWeight: 'bold'}}>
          History
        </Text>
        <Text style={{fontSize: 16}}>{movieFull.overview}</Text>
        <Text style={{fontSize: 23, marginTop: 20, fontWeight: 'bold'}}>
          Budget
        </Text>
        <Text style={{fontSize: 18}}>
          {currencyFormatter.format(movieFull.budget, {code: 'USD'})}
        </Text>
        <View style={{marginTop: 10, marginBottom: 100}}>
          <Text
            style={{
              fontSize: 23,
              marginTop: 10,
              fontWeight: 'bold',
            }}>
            Actors
          </Text>
          <FlatList
            data={cast}
            keyExtractor={item => item.id.toString()}
            renderItem={({item}) => <CastItem actor={item} />}
            horizontal={true}
            showsHorizontalScrollIndicator={false}
            style={{marginTop: 10, height: 70}}
          />
          {/* <CastItem actor={cast[0]} /> */}
        </View>
      </View>
      {/* Cating */}
    </>
  );
};
