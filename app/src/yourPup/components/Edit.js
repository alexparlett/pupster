import React from 'react';
import {FAB, Portal, Provider} from 'react-native-paper';

const Edit = () => {
  const [state, setState] = React.useState({open: false});

  const onStateChange = ({open}) => setState({open});

  const {open} = state;

  return (
    <Portal>
      <FAB.Group
        open={open}
        icon={open ? 'close' : 'plus'}
        actions={[
          {
            icon: 'scale',
            label: 'Weigh In',
            onPress: () => console.log('Pressed weight in'),
          },
          {
            icon: 'content-cut',
            label: 'Neutered',
            onPress: () => console.log('Pressed neutered'),
          },
        ]}
        onStateChange={onStateChange}
        onPress={() => {
          if (open) {
            // do something if the speed dial is open
          }
        }}
      />
    </Portal>
  );
};

export default Edit;
