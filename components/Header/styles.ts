export const PAPER_STYLES = {
    elevation: 0,
    sx: {
        overflow: 'visible',
        boxShadow: ' 0px 12px 24px rgba(47, 63, 86, 0.2)',
        minWidth: { lg: '365px' },
        mt: 0.6,
        borderRadius: '10px',
        '& ul': {
            p: 0,
        },
        '& ul p': {
            color: '#000000d9',
            fontSize: '16px',
            fontWeight: 'bold',
            p: '10px',
        },
        '& ul li': {
            height: '46px',
            padding: '5px',
            borderRadius: '6px',
            display: 'flex',
            gap: '10px',
            '& .MuiListItemIcon-root': {
                maxWidth: '24px',
                minWidth: '24px',
            },
            '&:hover': {
                backgroundColor: '#FF6F00',
                boxShadow: '1px 3px 17px -2px rgba(255,105,52,0.4)',
                '& span, & svg': {
                    color: '#FFFFFF',
                },
            },
        },
    },
}

export const POPOVER_STYLES = {
    transform: 'translate(0, 5px)',
    '& .MuiPopover-paper': {
        minWidth: '214px',
        '& li': {
            height: '46px',
            padding: '5px',
            borderRadius: '6px',
            display: 'flex',
            gap: '10px',
            '&:hover': {
                backgroundColor: '#FF6F00',
                boxShadow: '1px 3px 17px -4px rgba(255,105,52,0.4)',
                '& p, & svg': {
                    color: '#FFFFFF',
                },
            },
        },
        borderRadius: '10px',
        boxShadow: '0px 12px 24px rgba(47, 63, 86, 0.2)',
    },
    '& li': {
        pt: 1.2,
        pb: 1.2,
    },
    '& li svg': {
        mr: 2,
    },
}