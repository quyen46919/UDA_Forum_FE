import React from 'react';
import { Box, Button, Dialog, DialogActions, DialogContent, DialogTitle, TextField, Typography } from '@mui/material';
import { grey } from '@mui/material/colors';
import { AddIcon } from 'libs/icons';
import { initialNoteData } from 'libs/seed-data/initialNoteData.js';
import { applyDrag } from 'libs/utils/dragDrop.js';
import { mapOrder } from 'libs/utils/sorts.js';
import { useEffect, useState } from 'react';
import { Container, Draggable } from 'react-smooth-dnd';
import GroupNoteBoardColumn from './GroupNoteBoardColumn.js';

function GroupNoteBoardPage(props) {
    const { id } = props;
    const [board, setBoard] = useState({});
    const [columns, setColumns] = useState([]);
    const [open, setOpen] = useState(false);
    const [newColumnTitle, setNewColumnTitle] = useState('');

    useEffect(() => {

        // FAKE CALL API
        const boardFromDb = initialNoteData.boards.find(board => board.id === id || 'board-1');

        if (!boardFromDb) {
            return;
        } else {
            setBoard(boardFromDb);
            setColumns(mapOrder(boardFromDb.columns, boardFromDb.columnOrder, 'id'));
        }
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);

    const onColumnDrop = (dropResult) => {
        let newColumns = [...columns];
        newColumns = applyDrag(newColumns, dropResult);

        let newBoard = { ...board };
        newBoard.columnOrder = newColumns.map(c => c.id);
        newBoard.columns = newColumns;

        setColumns(newColumns);
        setBoard(newBoard);
    };

    const onCardDrop = (columnId, dropResult) => {
        if (dropResult.removeIndex !== null || dropResult.addedIndex !== null) {
            let newColumns = [...columns];

            let currentColumn = newColumns.find(c => c.id === columnId);
            currentColumn.cards = applyDrag(currentColumn.cards, dropResult);
            currentColumn.cardOrder = currentColumn.cards.map(i => i.id);

            setColumns(newColumns);
        }
    };

    const openDialog = () => {
        setOpen(!open);
    };
    const handleClose = () => {
        setOpen(false);
    };

    const handleNewColumnTitleChange = (e) => {
        setNewColumnTitle(e.target.value);
    };

    const createNewColumn = () => {
        if (newColumnTitle) {
            const newColumnToCreate = {
                id: Math.random().toString(36).substr(2, 5),
                boardId: board,
                title: newColumnTitle.trim(),
                cardOrder: [],
                cards: []
            };

            let newColumns = [...columns];
            newColumns.push(newColumnToCreate);

            let newBoard = { ...board };
            newBoard.columnOrder = newColumns.map(c => c.id);
            newBoard.columns = newColumns;

            setColumns(newColumns);
            setBoard(newBoard);
            setOpen(false);
            setNewColumnTitle('');
        }
    };

    const updateCardColumn = (newColumn) => {

        const columnIdToUpdate = newColumn.id;
        let newColumns = [...columns];
        const columnIndexToUpdate = newColumns.findIndex(i => i.id === columnIdToUpdate);

        if (newColumn._destroy) {
            // remove card column
            newColumns.splice(columnIndexToUpdate, 1);
        } else {
            // update card column
            newColumns.splice(columnIndexToUpdate, 1, newColumn);
        }

        let newBoard = { ...board };
        newBoard.columnOrder = newColumns.map(c => c.id);
        newBoard.columns = newColumns;

        setColumns(newColumns);
        setBoard(newBoard);
    };

    return (
        <Box sx={{
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'flex-start',
            bgcolor: grey[100]
        }}>
            <Box sx={{
                width: '100%',
                p: '8px 16px',
                boxSizing: 'border-box',
                display: 'flex',
                flexWrap: 'wrap',
                justifyContent: 'space-between',
                alignItems: 'center',
                gap: '10px'
            }}>
                <Typography sx={{
                    fontSize: 26,
                    fontWeight: 600,
                    color: grey[600],
                    maxWidth: 800
                }}>
                    {board.title}
                </Typography>
                <Button variant='contained' startIcon={<AddIcon />} onClick={openDialog}>Tạo mới ghi chú</Button>
            </Box>
            <Box sx={{
                width: '100%',
                p: '0 8px',
                pt: 1,
                boxSizing: 'border-box',
                display: 'flex',
                justifyContent: 'flex-start',
                alignItems: 'flex-start',
                gap: 1,
                borderRadius: 1,
                overflowX: 'auto',
                overflowY: 'hidden',
                '&::-webkit-scrollbar': {
                    WebkitAppearance: 'none',
                    height: 8
                },
                '&::-webkit-scrollbar-thumb': {
                    backgroundClip: 'padding-box',
                    borderRadius: '99px',
                    backgroundColor: '#cecece'
                },
                '& .smooth-dnd-draggable-wrapper': { pr: 1 },
                '& .column-drop-preview': {
                    bgcolor: grey[50],
                    border: '1px dashed #abc',
                    m: '5px 45px 5px 5px'
                },
                '& .smooth-dnd-container.horizontal': {
                    height: '100%'
                }
            }}>
                <Container
                    orientation="horizontal"
                    onDrop={onColumnDrop}
                    dragHandleSelector=".column-drag-handle"
                    dropPlaceholder={{
                        animationDuration: 150,
                        showOnTop: true,
                        className: 'column-drop-preview'
                    }}
                    getChildPayload={index => columns[index]}
                >
                    {columns.map((column, index) => (
                        <Draggable key={index}>
                            <GroupNoteBoardColumn
                                column={column}
                                onCardDrop={onCardDrop}
                                updateCardColumn={updateCardColumn}
                            />
                        </Draggable>
                    ))}
                </Container>
            </Box>
            {open &&
                <Dialog
                    open={true}
                    aria-labelledby="form-dialog-title"
                    fullWidth
                    disablebackdropclick="true"
                >
                    <DialogTitle id="form-dialog-title" sx={{ pb: 0 }}>
                        Tạo mới cột ghi chú
                    </DialogTitle>
                    <DialogContent sx={{ color: grey[600] }}>
                        Lưu ý: Tên cột quá dài sẽ bị ẩn đi một phần. Nên đặt tên dưới 25 kí tự.
                    </DialogContent>
                    <DialogContent>
                        <TextField
                            margin="dense"
                            id="name"
                            placeholder="Nhập tên cột"
                            type="text"
                            fullWidth
                            onChange={handleNewColumnTitleChange}
                            spellCheck="false"
                        />
                    </DialogContent>
                    <DialogActions>
                        <Button color="primary" onClick={createNewColumn}>
                            Xác nhận
                        </Button>
                        <Button color="primary" onClick={handleClose}>
                            Hủy
                        </Button>
                    </DialogActions>
                </Dialog>
            }
        </Box>
    );
}

export default GroupNoteBoardPage;