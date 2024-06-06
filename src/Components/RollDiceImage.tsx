/* eslint-disable prettier/prettier */
import { Image, ImageSourcePropType, View } from 'react-native';
import React, { PropsWithChildren } from 'react';

type DiceProps = PropsWithChildren<{
  imageUrl: ImageSourcePropType;
}>;

const RollDiceImage = ({ imageUrl }: DiceProps): JSX.Element => {
  return (
    <View>
      <Image source={imageUrl} />
    </View>
  );
};

export default RollDiceImage;
