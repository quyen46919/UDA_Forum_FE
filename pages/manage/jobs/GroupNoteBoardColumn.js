import { Add, Close, Star, StarBorder } from '@mui/icons-material';
import { Box, Button, Checkbox, Dialog, DialogActions, DialogContent, DialogContentText, DialogTitle, IconButton, Input, MenuItem, TextField, useTheme } from '@mui/material';
import { grey } from '@mui/material/colors';
import { mapOrder } from 'libs/utils/sorts';
import { cloneDeep } from 'lodash';
import { useEffect, useState } from 'react';
import { Container, Draggable } from 'react-smooth-dnd';
import GroupNoteBoardCard from './GroupNoteBoardCard.js';
import React from 'react';

function GroupNoteBoardColumn(props) {
    const { column, onCardDrop, updateCardColumn } = props;
    const cards = mapOrder(column.cards, column.cardOrder, 'id');
    const [columnTitle, setColumnTitle] = useState('');
    const [confirm, setConfirm] = useState(false);
    const [createCard, setCreateCard] = useState(false);
    const [createCardContent, setCreateCardContent] = useState({
        title: '',
        content: '',
        cover: '',
        tagName: '',
        tagType: ''
    });
    const [isFavorite, setIsFavorite] = useState(false);
    const theme = useTheme()

    useEffect(() => {
        setColumnTitle(column.title);
        setIsFavorite(column.isFavorite);
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [column.title, column.isFavorite]);

    const handleConfirmPopUpClose = () => { setConfirm(false); };
    const handleConfirmPopUpOpen = () => { setConfirm(true); };

    const handleCreateCardPopupOpen = () => {
        setCreateCard(true);
    };
    const handleCreateCardPopupClose = () => { setCreateCard(false); };

    const removeColumn = () => {
        const newColumn = {
            ...column,
            _destroy: true
        };
        updateCardColumn(newColumn);
        handleConfirmPopUpClose();
    };

    const onChangePicture = e => {
        if (e.target.files[0]) {
            const reader = new FileReader();
            reader.addEventListener('load', () => {
                setCreateCardContent(prevState => ({
                    ...prevState,
                    cover: reader.result
                }));
            });
            reader.readAsDataURL(e.target.files[0]);
        }
    };

    const handleCreateContentChange = (e) => {
        setCreateCardContent(prevState => ({
            ...prevState,
            [e.target.name]: e.target.value
        }));
    };

    const createNewCard = () => {
        if (
            createCardContent.content ||
            createCardContent.title ||
            createCardContent.cover ||
            createCardContent.tagName ||
            createCardContent.tagType
        ) {
            // fake create new column
            const newCardToCreate = {
                id: Math.random().toString(36).substr(2, 5),
                boardId: column.boardId,
                columnId: column.id,
                title: createCardContent.title.trim(),
                content: createCardContent.content,
                cover: createCardContent.cover,
                tagName: createCardContent.tagName,
                tagType: createCardContent.tagType
            };

            let newColumn = cloneDeep(column);
            newColumn.cards.push(newCardToCreate);
            newColumn.cardOrder.push(newCardToCreate.id);

            updateCardColumn(newColumn);
        }

        setCreateCard(false);
        setCreateCardContent({
            title: '',
            content: '',
            cover: '',
            tagName: '',
            tagType: ''
        });
    };

    const removeCard = (cardId) => {
        let newColumn = cloneDeep(column);
        newColumn.cards = newColumn.cards.filter(i => i.id !== cardId);
        const cardIndex = newColumn.cardOrder.findIndex(i => i.id === cardId);
        newColumn.cardOrder.splice(cardIndex, 1);

        updateCardColumn(newColumn);
    };

    const handleColumnTitleChange = (e) => {
        setColumnTitle(e.target.value);
    };

    const handleColumnTitleBlur = () => {
        const newColumn = {
            ...column,
            title: columnTitle
        };
        updateCardColumn(newColumn);
    };

    const saveContentAfterPressEnter = (e) => {
        if (e.key === 'Enter') {
            e.target.blur();
        }
    };

    const editTitleInLine = (e) => {
        e.target.focus();
        e.target.select();
    };

    const handleFavoriteStarClick = () => {
        const newColumn = {
            ...column,
            isFavorite: !isFavorite
        };
        updateCardColumn(newColumn);
    };

    return (
        <Box sx={{
            width: 300,
            overflow: 'hidden',
            bgcolor: grey[200],
            borderRadius: 1,
            p: 1,
            boxSizing: 'border-box',
            gap: 1,
            mb: 0.5,
            '& .smooth-dnd-draggable-wrapper': {
                width: '100%',
                margin: 1
            },
            '& .card-ghost': {
                transition: 'transform .18s ease-in-out',
                transform: 'rotateZ(5deg)'
            },
            '& .card-ghost-drop': {
                transition: 'transform 0.18s ease-in-out',
                transform: 'rotateZ(0deg)'
            },
        }}>
            <Box
                sx={{
                    width: '100%',
                    display: 'flex',
                    justifyContent: 'space-between',
                    alignItems: 'center',
                    cursor: 'pointer',
                    gap: 1
                }}
            >
                <TextField
                    sx={{
                        maxWidth: 200,
                        backgroundColor: 'transparent !important',
                        '& input': {
                            fontWeight: 700,
                            color: grey[600],
                            fontSize: 18,
                            textOverflow: 'ellipsis'
                        },
                        '& *': {
                            border: 'none',
                            outline: 'none'
                        },
                        '& *:focus': {
                            bgcolor: grey[50]
                        }
                    }}
                    size="small"
                    value={columnTitle}
                    onChange={handleColumnTitleChange}
                    onBlur={handleColumnTitleBlur}
                    onKeyDown={saveContentAfterPressEnter}
                    onClick={editTitleInLine}
                    onMouseDown={e => e.preventDefault()}
                    spellCheck="false"
                />
                <Box sx={{ display: 'flex', alignItems: 'center', pb: 1, gap: 1 }}>
                    <IconButton onClick={handleFavoriteStarClick} sx={{ width: '32px', height: '32px' }}>
                        <Checkbox
                            icon={<StarBorder />}
                            checkedIcon={<Star />}
                            checked={isFavorite}
                            sx={{
                                width: '32px',
                                height: '32px',

                                '&.Mui-checked svg': {
                                    fill: theme.palette.orange.main
                                }
                            }}
                        />
                    </IconButton>
                    <IconButton onClick={handleConfirmPopUpOpen}>
                        <Close />
                    </IconButton>
                </Box>
            </Box>
            {confirm &&
                <Dialog
                    open={confirm}
                    onClose={handleConfirmPopUpClose}
                    aria-labelledby="alert-dialog-title"
                    aria-describedby="alert-dialog-description"
                >
                    <DialogTitle>
                        Bạn có thực sự muốn xóa cột ghi chú này
                    </DialogTitle>
                    <DialogContent>
                        <DialogContentText id="alert-dialog-description">
                            Tất cả ghi chú có trong cột này đều sẽ bị xóa đi và không thể khôi phục
                        </DialogContentText>
                    </DialogContent>
                    <DialogActions>
                        <Button onClick={removeColumn} color="primary">
                            Đồng ý
                        </Button>
                        <Button onClick={handleConfirmPopUpClose} color="primary" >
                            Hủy
                        </Button>
                    </DialogActions>
                </Dialog>
            }
            <Box sx={{
                width: '100%',
                height: 530,
                overflowX: 'hidden',
                overflowY: 'scroll',
                mt: 1,
                mb: 1,
                '&::-webkit-scrollbar': {
                    WebkitAppearance: 'none'
                },
                '&::-webkit-scrollbar:vertical': {
                    width: 5
                },
                '&::-webkit-scrollbar-thumb': {
                    background: grey[200],
                    borderRight: 0,
                    borderRadius: 1
                }
            }}>
                <Container
                    groupName="columns"
                    onDrop={dropResult => onCardDrop(column.id, dropResult)}
                    getChildPayload={index => cards[index]}
                    dragClass="card-ghost"
                    dropClass="card-ghost-drop"
                    dropPlaceholder={{
                        animationDuration: 150,
                        showOnTop: true,
                        className: 'cards-drop-preview'
                    }}
                    dropPlaceholderAnimationDuration={200}
                >
                    {cards.map((card, index) => (
                        <Draggable key={index}>
                            <GroupNoteBoardCard card={card} removeCard={removeCard} />
                        </Draggable>
                    ))}
                </Container>
            </Box>
            <Box sx={{
                width: '100%',
                height: 40,
                minHeight: 40,
                display: 'flex',
                justifyContent: 'space-between',
                alignItems: 'center',
                cursor: 'pointer',
                gap: 1
            }}>
                <Button
                    sx={{
                        width: '100%',
                        color: grey[600]
                    }}
                    startIcon={<Add />}
                    onClick={handleCreateCardPopupOpen}
                >
                    Thêm ghi chú mới
                </Button>
            </Box>
            {createCard &&
                <Dialog
                    open={createCard}
                    onClose={handleConfirmPopUpClose}
                    aria-labelledby="alert-dialog-title"
                    aria-describedby="alert-dialog-description"
                    fullWidth
                >
                    <DialogTitle id="form-dialog-title" sx={{ pb: 1 }}>
                        Tạo mới ghi chú
                    </DialogTitle>
                    <DialogContent>
                        <Box sx={{
                            display: 'flex',
                            alignItems: 'center',
                            gap: 1
                        }}>
                            <TextField
                                size="small"
                                margin="dense"
                                placeholder="Nhập tiêu đề ghi chú"
                                type="text"
                                fullWidth
                                name="tagType"
                                onChange={handleCreateContentChange}
                                value="assigment"
                                select
                            >
                                <MenuItem value="assigment">Bài tập</MenuItem>
                                <MenuItem value="notification">Thông báo</MenuItem>
                                <MenuItem value="note">Ghi chú</MenuItem>
                            </TextField>
                            <TextField
                                size="small"
                                margin="dense"
                                placeholder="Nhập nội dung tag"
                                type="text"
                                fullWidth
                                name="tagName"
                                onChange={handleCreateContentChange}
                                spellCheck="false"
                            />
                        </Box>
                        <TextField
                            size="small"
                            margin="dense"
                            placeholder="Nhập tiêu đề ghi chú"
                            type="text"
                            fullWidth
                            name="title"
                            onChange={handleCreateContentChange}
                            spellCheck="false"
                        />
                        <TextField
                            size="small"
                            margin="dense"
                            placeholder="Nhập nội dung ghi chú"
                            type="text"
                            fullWidth
                            multiline
                            maxRows={3}
                            minRows={3}
                            name="content"
                            onChange={handleCreateContentChange}
                            spellCheck="false"
                        />
                        <label htmlFor="contained-button-file">
                            <Input
                                accept="image/*"
                                id="contained-button-file"
                                multiple type="file"
                                style={{ display: 'none' }}
                                name="cover"
                                onChange={onChangePicture}
                            />
                            <Button
                                variant="contained"
                                component="span"
                                disableElevation
                                sx={{ mt: 1, mb: 2 }}
                            >
                                Tải ảnh lên
                            </Button>
                        </label>
                        {createCardContent.cover &&
                            <img src={createCardContent.cover} alt="cover"
                                style={{ width: '100%', maxHeight: 400, objectFit: 'cover' }}
                            />
                        }
                    </DialogContent>
                    <DialogActions>
                        <Button onClick={createNewCard} color="primary">
                            Tạo mới
                        </Button>
                        <Button onClick={handleCreateCardPopupClose} color="primary" >
                            Hủy
                        </Button>
                    </DialogActions>
                </Dialog>
            }
        </Box>
    );
}

export default GroupNoteBoardColumn;