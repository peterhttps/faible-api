import React, { useState } from 'react';
import ToggleSwitch from 'toggle-switch-react-native';
import { useSettings } from '../../components/hooks/useSettings';
import { setAdultContentSettings } from '../../store/settings/actions';

import {
  SettingsCard,
  SettingsCardTitle,
  SettingsContainer,
  Title,
  Wrapper,
} from './styles';

const Settings: React.FC = () => {
  const [isEnabled, setIsEnabled] = useState(false);
  const { adultContent } = useSettings();

  const toggleSwitch = () => {
    setIsEnabled(previousState => !previousState);
    setAdultContentSettings(!isEnabled);
  };

  return (
    <Wrapper>
      <Title>Configurações</Title>
      <SettingsContainer>
        <SettingsCard notBorderTop notBorderBottom>
          <SettingsCardTitle>Filtrar conteúdo adulto</SettingsCardTitle>
          <ToggleSwitch
            isOn={isEnabled}
            onToggle={toggleSwitch}
            animationSpeed={150}
            label={isEnabled ? 'On' : 'Off'}
            labelStyle={{
              color: '#8A8A8A',
            }}
          />
        </SettingsCard>
      </SettingsContainer>
    </Wrapper>
  );
};

export default Settings;
