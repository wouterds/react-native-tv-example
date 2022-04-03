import React, { ReactNode, RefObject, useMemo } from 'react';
import { Text, TextInput, TextInputProps, View } from 'react-native';

import createStyles from './styles';

type Props = {
  title: string;
  value?: string;
  onValuePress?: () => void;
  last?: boolean;
  onValueChange?: (value: string) => void;
  inputOptions?: TextInputProps;
  suffix?: ReactNode;
  inputRef?: RefObject<TextInput>;
  mono?: boolean;
  multiline?: boolean;
  vertical?: boolean;
};

const TableRow = ({
  title,
  value,
  onValuePress,
  onValueChange,
  last,
  suffix,
  inputOptions,
  inputRef,
  mono,
  multiline,
  vertical,
}: Props) => {
  if (onValueChange && onValuePress) {
    throw new Error(
      "onValueChange can't be used in combination with onValuePress",
    );
  }

  const styles = useMemo(() => {
    return createStyles({ onValueChange, mono, multiline, vertical });
  }, [onValueChange, mono, multiline, vertical]);

  return (
    <View style={styles.container}>
      <View style={styles.content}>
        {!onValueChange && (
          <Text style={[styles.text, styles.title]}>{title}</Text>
        )}
        {onValueChange ? (
          <TextInput
            style={[styles.text, styles.value]}
            defaultValue={value}
            placeholder={title}
            onChangeText={onValueChange}
            {...inputOptions}
            ref={inputRef}
          />
        ) : (
          <Text
            style={[styles.text, styles.value]}
            adjustsFontSizeToFit
            numberOfLines={multiline ? 5 : 1}
            minimumFontScale={0.8}
            onPress={onValuePress}>
            {value}
          </Text>
        )}
        {suffix && <View style={styles.suffix}>{suffix}</View>}
      </View>
      {!last && <View style={styles.border} />}
    </View>
  );
};

export default TableRow;
