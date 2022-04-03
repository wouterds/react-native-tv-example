import { PressableProps, StyleSheet, TextStyle, ViewStyle } from 'react-native';

import { ButtonType } from './index';

interface Props extends PressableProps {
  isActive: boolean;
  type?: ButtonType;
}

export default (props: Props) => {
  const button: ViewStyle = {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
  };

  const text: TextStyle = {
    fontSize: 17,
    fontWeight: 'bold',
    color: '#007CFF',
  };

  if (props.type === ButtonType.Default) {
    if (props.isActive) {
      button.opacity = 0.3;
    }
  } else if (props.type === ButtonType.Primary) {
    button.height = 48;
    button.paddingHorizontal = 20;
    button.borderRadius = 10;
    button.backgroundColor = '#007CFF';

    if (props.isActive) {
      button.backgroundColor = '#0064E2';
    }

    if (props.disabled) {
      button.backgroundColor = '#74748044';
    }

    text.color = '#fff';
  }

  return StyleSheet.create({
    button,
    text,
  });
};
