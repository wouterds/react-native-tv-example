import { StyleSheet, TextStyle, ViewStyle } from 'react-native';

interface Props {
  onValueChange?: (value: string) => void;
  mono?: boolean;
  vertical?: boolean;
  multiline?: boolean;
}

export default (props: Props) => {
  const value: TextStyle = {
    color: '#8a8a8a',
    textAlign: 'right',
    flex: 1,
    fontVariant: ['tabular-nums'],
  };

  if (props.mono) {
    value.fontFamily = 'Hack-Regular';
  }

  if (props.onValueChange) {
    value.textAlign = 'left';
    value.color = '#000';
  }

  const content: ViewStyle = {
    paddingVertical: 11,
    paddingHorizontal: 15,
    flexDirection: 'row',
    alignItems: 'center',
  };

  if (props.multiline || props.vertical) {
    content.flexDirection = 'column';
    delete content.alignItems;
    content.justifyContent = 'center';
    delete value.flex;
    delete value.textAlign;
    value.paddingTop = 2;
  }

  return StyleSheet.create({
    container: {},
    content,
    text: {
      fontSize: 17,
      color: '#000',
    },
    title: {
      color: '#000',
      paddingRight: 8,
    },
    value,
    border: {
      height: StyleSheet.hairlineWidth,
      backgroundColor: '#C6C6C6',
      marginLeft: 16,
    },
    suffix: {
      paddingLeft: 8,
    },
  });
};
