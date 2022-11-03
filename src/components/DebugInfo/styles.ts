import { Platform, StyleSheet, TextStyle, ViewStyle } from 'react-native';
import { size } from 'utils/styles';

interface Props {
  cpu: number;
  cpuAvg: number;
  landscape: boolean;
}

const createStyles = ({ cpu, cpuAvg, landscape }: Props) => {
  const container: ViewStyle = {
    position: 'absolute',
    top: 0,
    right: 0,
    zIndex: 999999999,
    paddingRight: size(10),
  };

  if (landscape) {
    if (Platform.isTV) {
      if (Platform.OS === 'ios') {
        container.marginTop = -size(20);
        container.marginRight = -size(40);
      } else {
        container.paddingTop = size(10);
      }
    } else {
      container.paddingTop = size(8);
      container.paddingRight = 0;

      if (Platform.OS === 'android') {
        container.paddingRight = size(24);
      }
    }
  }

  const text: TextStyle = {
    fontSize: size(11),
    fontWeight: 'bold',
    fontVariant: ['tabular-nums'],
    color: '#FFF',
  };

  const config: TextStyle = {};
  if (__DEV__) {
    config.color = '#FD0C47';
  } else {
    config.color = '#55efc4';
  }

  const bar: ViewStyle = {
    width: size(3),
    height: size(4),
    borderRadius: size(1),
    backgroundColor: 'rgba(0, 0, 0, 0.2)',
  };

  const live: ViewStyle = { marginBottom: size(1.5) };
  const live1: ViewStyle = {};
  const live2: ViewStyle = {};
  const live3: ViewStyle = {};
  const live4: ViewStyle = {};
  const live5: ViewStyle = {};
  const avg: ViewStyle = {};
  const avg1: ViewStyle = {};
  const avg2: ViewStyle = {};
  const avg3: ViewStyle = {};
  const avg4: ViewStyle = {};
  const avg5: ViewStyle = {};

  if (cpu >= 0.8) {
    live.backgroundColor = '#eb3b5a';
  } else if (cpu >= 0.6) {
    live.backgroundColor = '#fa8231';
    live5.backgroundColor = bar.backgroundColor;
  } else if (cpu >= 0.4) {
    live.backgroundColor = '#fed330';
    live5.backgroundColor = bar.backgroundColor;
    live4.backgroundColor = bar.backgroundColor;
  } else if (cpu >= 0.2) {
    live.backgroundColor = '#26de81';
    live5.backgroundColor = bar.backgroundColor;
    live4.backgroundColor = bar.backgroundColor;
    live3.backgroundColor = bar.backgroundColor;
  } else {
    live.backgroundColor = '#2bcbba';
    live5.backgroundColor = bar.backgroundColor;
    live4.backgroundColor = bar.backgroundColor;
    live3.backgroundColor = bar.backgroundColor;
    live2.backgroundColor = bar.backgroundColor;
  }

  if (cpuAvg >= 0.8) {
    avg.backgroundColor = '#eb3b5a';
  } else if (cpuAvg >= 0.6) {
    avg.backgroundColor = '#fa8231';
    avg5.backgroundColor = bar.backgroundColor;
  } else if (cpuAvg >= 0.4) {
    avg.backgroundColor = '#fed330';
    avg5.backgroundColor = bar.backgroundColor;
    avg4.backgroundColor = bar.backgroundColor;
  } else if (cpuAvg >= 0.2) {
    avg.backgroundColor = '#26de81';
    avg5.backgroundColor = bar.backgroundColor;
    avg4.backgroundColor = bar.backgroundColor;
    avg3.backgroundColor = bar.backgroundColor;
  } else {
    avg.backgroundColor = '#2bcbba';
    avg5.backgroundColor = bar.backgroundColor;
    avg4.backgroundColor = bar.backgroundColor;
    avg3.backgroundColor = bar.backgroundColor;
    avg2.backgroundColor = bar.backgroundColor;
  }

  return StyleSheet.create({
    container,
    box: {
      flexDirection: 'row',
      backgroundColor: 'rgba(0, 0, 0, 0.3)',
      paddingHorizontal: size(1),
      justifyContent: 'center',
      alignItems: 'center',
      borderRadius: size(3),
    },
    content: {
      padding: size(3),
      flexDirection: 'row',
    },
    text,
    bars: {
      flexDirection: 'row',
      alignItems: 'flex-end',
    },
    row: {
      marginLeft: size(1),
    },
    separator: {
      backgroundColor: 'rgba(255, 255, 255, 0.1)',
      width: size(1),
      height: '100%',
    },
    config,
    bar,
    live,
    live1,
    live2,
    live3,
    live4,
    live5,
    avg,
    avg1,
    avg2,
    avg3,
    avg4,
    avg5,
  });
};

export default createStyles;
