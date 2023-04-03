import React from 'react';
import { Close } from '@mui/icons-material';
import { Box, Button, IconButton, Typography } from '@mui/material';
import { blue, green, grey, orange, pink } from '@mui/material/colors';


function convertTagTypeToColor(tagType, isColor) {
    switch (tagType) {
    case 'assignment':
        return isColor ? `${blue[800]}!important` : `${blue[50]}!important`;
    case 'note':
        return isColor ? `${green[800]}!important` : `${green[50]}!important`;
    case 'notification':
        return isColor ? `${orange[800]}!important` : `${orange[50]}!important`;
    default:
        return isColor ? `${pink[800]}!important` : `${pink[50]}!important`;
    }
}

function GroupNoteBoardCard(props) {
    const { card, removeCard } = props;

    return (
        <Box sx={{
            width: '100%',
            height: 'auto',
            boxSizing: 'border-box',
            p: 2,
            cursor: 'pointer',
            boxShadow: 'rgba(149, 157, 165, 0.2) 0px 1px 3px',
            display: 'flex',
            flexDirection: 'column',
            gap: 1,
            background: 'white',
            textAlign: 'left',
            borderRadius: 2,
            position: 'relative',
            whiteSpace: 'pre-wrap',
            overflow: 'hidden',
            '& img': {
                display: 'block',
                width: '100%',
                maxHeight: 500,
                objectFit: 'cover',
                borderRadius: 1
            }
        }}>
            <Box sx={{
                display: 'flex',
                justifyContent: 'space-between',
                alignItems: 'center'
            }}>
                <Button disabled sx={{
                    pt: 0, pb: 0, pl: 2, pr: 2,
                    bgcolor: convertTagTypeToColor(card.tagType, false),
                    color: convertTagTypeToColor(card.tagType, true),
                    fontWeight: 600
                }}>
                    {card.tagName}
                </Button>
                <IconButton size="small" onClick={() => removeCard(card.id)}>
                    <Close />
                </IconButton>
            </Box>
            {card.cover && <img src={card.cover} alt={card.title}/>}
            <Typography sx={{ color: grey[600], fontWeight: 600, mt: 0.5 }}>
                {card.title ? card.title : ''}
            </Typography>
            {card.content && <Typography sx={{ fontSize: 16, color: grey[600] }}>
                {card.content}
            </Typography>}
        </Box>
    );
}

export default GroupNoteBoardCard;