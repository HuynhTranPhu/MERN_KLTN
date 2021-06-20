import {
    Box,
    Button,
    Dialog,
    DialogContent,
    DialogTitle,
    Grid,
    IconButton,
    makeStyles,
    TextField,
  } from '@material-ui/core';
import CloseIcon from '@material-ui/icons/Close';
import { useTranslation } from 'react-i18next';
import React, { useState } from 'react';
import LoadingBackdrop from '../../Config/LoadingBackdrop';


  
  const useStyles = makeStyles((theme) => ({
    padding2: {
      padding: theme.spacing(2)
    },
    closeButton: {
      position: 'absolute',
      right: theme.spacing(1),
      top: theme.spacing(1),
      color: theme.palette.grey[500]
    },
    promoCodeInput: {
      flex: 1
    },
    applyPromoBtn: {
      minWidth: 'fit-content',
      marginLeft: theme.spacing(2)
    },
    cardActions: {
      justifyContent: 'flex-end'
    },
    promoTypeLabel: {
      textTransform: 'uppercase',
      fontWeight: 700
    },
    promoTimeLeft: {
      fontSize: 14
    }
  }));
  

  
  export default function ApplyPromoCodesDialog(props) {
    const { t } = useTranslation(['place_order']);
    

    
    const [input, setInput] = useState('');
    
    const classes = useStyles();
  
    const handleKeyPress = (e) => {
      if (e.key === 'Enter' && input.length > 0) {
        props.handleApplyCoupon(input);
      }
    };
    
  
    return (
      <Dialog open={props.open} onClose={props.onClose} maxWidth="sm" fullWidth>
        <LoadingBackdrop open={props.loading} />
  
        <DialogTitle className={classes.padding2}>
          {t('place_order:apply_coupon_popup_title')}
          <IconButton className={classes.closeButton} onClick={props.onClose}>
            <CloseIcon />
          </IconButton>
        </DialogTitle>
  
        <DialogContent dividers className={classes.padding2}>
          <Grid container spacing={3}>
            <Grid item xs={12}>
              <Box display="flex">
                <TextField
                  className={classes.promoCodeInput}
                  name="promoCode"
                  size="small"
                  label={t('place_order:apply_coupon_input_label')}
                  variant="outlined"
                  value={input}
                  onChange={(event) => setInput(event.target.value)}
                  onKeyPress={handleKeyPress}
                />
  
                <Button
                  className={classes.applyPromoBtn}
                  onClick={() =>props.handleApplyCoupon(input)}
                  variant="contained"
                  color="secondary"
                  disabled={!input}>
                  {t('place_order:apply_coupon_confirm_btn')}
                </Button>
              </Box>
            </Grid>
           
            <Grid item xs={12} spacing={2}>
                <Box textAlign="center">{t('place_order:no_coupon')}</Box>
            </Grid>
                  
          
              
  
           
          </Grid>
        </DialogContent>
      </Dialog>
    );
  }
  