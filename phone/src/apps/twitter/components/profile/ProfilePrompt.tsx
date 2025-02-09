import React, { useState } from 'react';
import { useTranslation } from 'react-i18next';
import ProfileField from '../../../../ui/components/ProfileField';
import { useProfile } from '../../hooks/useProfile';
import ProfileUpdateButton from '../buttons/ProfileUpdateButton';
import { useRecoilValue } from 'recoil';
import { twitterState, useSetTwitterProfile } from '../../hooks/state';
import { usePhone } from '@os/phone/hooks/usePhone';
import { Profile, TwitterEvents } from '@typings/twitter';
import DefaultProfilePrompt from './DefaultProfilePrompt';
import { ServerPromiseResp } from '@typings/common';
import { useSnackbar } from '@os/snackbar/hooks/useSnackbar';
import fetchNui from '@utils/fetchNui';
import { Box, styled } from '@mui/material';

const PromptRoot = styled(Box)({
  position: 'relative',
  width: '100%',
  height: '100%',
  padding: '15px',
});

export function ProfilePrompt() {
  const [t] = useTranslation();
  const { profile } = useProfile();
  const setTwitterProfile = useSetTwitterProfile();
  const defaultProfileNames = useRecoilValue(twitterState.defaultProfileNames);
  const [profileName, setProfileName] = useState(profile?.profile_name || '');
  const { ResourceConfig } = usePhone();
  const { addAlert } = useSnackbar();

  const showDefaultProfileNames = !ResourceConfig.twitter.allowEditableProfileName;

  const handleCreate = async () => {
    fetchNui<ServerPromiseResp<Profile>>(TwitterEvents.CREATE_PROFILE, {
      profile_name: profileName,
    }).then((resp) => {
      if (resp.status !== 'ok') {
        return addAlert({
          message: 'Failed to update profile',
          type: 'error',
        });
      }

      setTwitterProfile(resp.data);
    });
  };

  // case where profile doesn't exist, couldn't be created automatically
  // and the player is not allowed to edit their own profile name
  if (showDefaultProfileNames) {
    return (
      <DefaultProfilePrompt
        profileName={profileName}
        defaultProfileNames={defaultProfileNames}
        setProfileName={setProfileName}
        handleUpdate={handleCreate}
      />
    );
  }

  // case where profile doesn't exist, couldn't be created automatically
  // but the player IS allowed to edit their own profile name
  return (
    <PromptRoot>
      <ProfileField
        label={t('TWITTER.EDIT_PROFILE_NAME')}
        value={profileName}
        handleChange={setProfileName}
        allowChange
      />
      <ProfileUpdateButton handleClick={handleCreate} />
    </PromptRoot>
  );
}

export default ProfilePrompt;
