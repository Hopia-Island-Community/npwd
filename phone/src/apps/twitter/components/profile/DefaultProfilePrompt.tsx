import React from 'react';
import makeStyles from '@mui/styles/makeStyles';
import InputLabel from '@mui/material/InputLabel';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import { useTranslation } from 'react-i18next';

import ProfileUpdateButton from '../buttons/ProfileUpdateButton';
import { Box, MenuItem, SelectChangeEvent, styled } from '@mui/material';

interface DefaultProfilePromptProps {
  handleUpdate: () => void;
  profileName: string;
  setProfileName: (name: string) => void;
  defaultProfileNames: string[];
}

const useStyles = makeStyles((theme) => ({
  formControl: {
    width: '100%',
  },
}));

const Root = styled(Box)({
  position: 'relative',
  width: '100%',
  height: '100%',
  padding: '15px',
});

export const DefaultProfilePrompt: React.FC<DefaultProfilePromptProps> = ({
  profileName,
  setProfileName,
  handleUpdate,
  defaultProfileNames,
}) => {
  const classes = useStyles();
  const [t] = useTranslation();

  const handleChange = (event: SelectChangeEvent<string>): void => {
    event.preventDefault();
    setProfileName(event.target.value);
  };

  return (
    <Root>
      <FormControl className={classes.formControl}>
        <InputLabel htmlFor="profile-name">{t('TWITTER.EDIT_DEFAULT_PROFILE_NAME')}</InputLabel>
        <Select
          value={profileName}
          onChange={handleChange}
          inputProps={{
            name: 'profileName',
            id: 'profile-name',
          }}
        >
          {defaultProfileNames.map((name) => (
            <MenuItem key={name} value={name}>
              {name}
            </MenuItem>
          ))}
        </Select>
      </FormControl>
      <ProfileUpdateButton handleClick={handleUpdate} />
    </Root>
  );
};

export default DefaultProfilePrompt;
