import React, { useMemo } from 'react';
import { useCalculator } from '../hooks/useCalculator';
import { Grid, Box, Paper, Fab, styled } from '@mui/material';
import { setClipboard } from '@os/phone/hooks/useClipboard';
import FileCopyIcon from '@mui/icons-material/FileCopy';
import { useSnackbar } from '@os/snackbar/hooks/useSnackbar';
import { useTranslation } from 'react-i18next';
import { CalculatorButton } from './CalculatorButton';

const getFontSize = (length: number) => {
  const currentSize = 5 - length * 0.2;
  return currentSize <= 1.5 ? '1.5rem' : `${currentSize}rem`;
};

const StyledFab = styled(Fab)({
  position: 'absolute',
  top: '16px',
  left: '16px',
});

const StyledResultWrapper = styled(Box)<{ length: number }>(({ theme, length }) => ({
  minHeight: '7rem',
  fontSize: length < 9 ? theme.typography.h2.fontSize : getFontSize(length),
  textAlign: 'right',
  overflow: 'hidden',
  textOverflow: 'ellipsis',
  position: 'relative',
}));

const StyledCalcBtn = styled(CalculatorButton)(({ theme }) => ({
  fontSize: theme.typography.h5.fontSize,
  padding: theme.spacing(2),
  color: theme.palette.text.primary,
}));

export const Calculator: React.FC = () => {
  const {
    result,
    equals,
    clear,
    clearAll,
    divider,
    multiplier,
    substractor,
    adder,
    dot,
    zero,
    one,
    two,
    three,
    four,
    five,
    six,
    seven,
    eight,
    nine,
  } = useCalculator();

  const { addAlert } = useSnackbar();

  const resultStr = useMemo(
    () =>
      result().toLocaleString(undefined, {
        minimumFractionDigits: 0,
        maximumFractionDigits: 4,
      }),
    [result],
  );

  const handleCopyClipboard = () => {
    setClipboard(resultStr);
    addAlert({
      message: t('GENERIC.WRITE_TO_CLIPBOARD_MESSAGE', {
        content: 'number',
      }),
      type: 'success',
    });
  };

  const [t] = useTranslation();

  return (
    <Box display="flex" flexDirection="column">
      <StyledResultWrapper flexGrow={1} component={Paper} p={2} length={resultStr.length}>
        <StyledFab size="small" onClick={handleCopyClipboard}>
          <FileCopyIcon />
        </StyledFab>
        {resultStr}
      </StyledResultWrapper>
      <Box>
        <Grid container justifyContent="space-around">
          <StyledCalcBtn buttonOpts={clear} />
          <StyledCalcBtn buttonOpts={clearAll} />
          <StyledCalcBtn buttonOpts={divider} />
          <StyledCalcBtn buttonOpts={multiplier} />
          <StyledCalcBtn buttonOpts={seven} />
          <StyledCalcBtn buttonOpts={eight} />
          <StyledCalcBtn buttonOpts={nine} />
          <StyledCalcBtn buttonOpts={substractor} />
          <StyledCalcBtn buttonOpts={four} />
          <StyledCalcBtn buttonOpts={five} />
          <StyledCalcBtn buttonOpts={six} />
          <StyledCalcBtn buttonOpts={adder} />
          <StyledCalcBtn buttonOpts={one} />
          <StyledCalcBtn buttonOpts={two} />
          <StyledCalcBtn buttonOpts={three} />
          <StyledCalcBtn buttonOpts={equals} />
          <StyledCalcBtn buttonOpts={dot} />
          <StyledCalcBtn buttonOpts={zero} GridProps={{ xs: 9 }} />
        </Grid>
      </Box>
    </Box>
  );
};
