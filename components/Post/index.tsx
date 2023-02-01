import CustomQuill from '@components/Quill'
import {
  Autocomplete,
  Button,
  Chip,
  Divider,
  IconButton,
  InputAdornment,
  ListItem,
  Stack,
  TextField,
  Typography,
  useMediaQuery,
  useTheme,
} from '@mui/material'
import Snackbar from '@mui/material/Snackbar'
import { CloseIcon, DeleteIcon, FileCopyIcon } from 'libs/icons'
import React, { Fragment, useState } from 'react'

interface TagsData {
  id: number
  name: string
}

const Post = () => {
  const theme = useTheme()
  const [lengthTitle, setLengthTitle] = useState<string>('')
  const [questionsTag, setQuestionsTag] = useState<TagsData[]>([])
  const [githubLink, setGithubLink] = useState<string>('')
  const [value, setValue] = useState('')
  const [open, setOpen] = useState(false)
  const upLg = useMediaQuery(theme.breakpoints.up('lg'))
  const upXl = useMediaQuery(theme.breakpoints.up('xl'))
  const data: TagsData[] = [
    { id: 1, name: 'The Shawshank Redemption' },
    { id: 2, name: 'The Godfather' },
    { id: 3, name: 'The Godfather: Part II' },
    { id: 4, name: 'The Dark Knight' },
    { id: 5, name: '12 Angry Men' },
    { id: 6, name: "Schindler's List" },
    { id: 7, name: 'Pulp Fiction' },
  ]

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setLengthTitle(e.target.value)
  }

  const handleLimitQuestionTags = (e: React.SyntheticEvent, value: TagsData[]) => {
    if (value.length <= 3) {
      setQuestionsTag(value)
    } else {
      setOpen(true)
    }
  }

  const handleDelete = (chipToDelete: TagsData) => () => {
    setQuestionsTag((chips) => chips.filter((chip) => chip.id !== chipToDelete.id))
  }

  const handleClose = (event: React.SyntheticEvent | Event, reason?: string) => {
    if (reason === 'clickaway') {
      return
    }

    setOpen(false)
  }

  const action = (
    <Fragment>
      <IconButton size="small" aria-label="close" color="inherit" onClick={handleClose}>
        <CloseIcon />
      </IconButton>
    </Fragment>
  )

  const handlePaste = async (event: any) => {
    event.preventDefault()
    setGithubLink(await navigator.clipboard.readText())
  }

  return (
    <Stack width="100%" maxWidth="1208px" alignItems="center" justifyContent="flex-start">
      <Stack
        width="100%"
        maxWidth="896px"
        borderRadius="16px"
        padding="24px"
        sx={{
          backgroundColor:
            theme.palette.mode === 'dark' ? theme.palette.white.main : theme.palette.white.main,
          height: '1200px',
        }}
      >
        <Typography variant="h1" fontSize="16px" fontWeight={600}>
          Đăng Bài
        </Typography>
        <Divider />
        <Stack width="auto" padding="12px 0 40px" gap="24px">
          <Stack marginTop="24px">
            <Stack component="span" lineHeight="20px" marginBottom="8px">
              Tiêu Đề
            </Stack>
            <Stack
              border="1px solid #f1f4f9"
              borderRadius="8px"
              position="relative"
              width="100%"
              direction="row"
              height="60px"
              alignItems="center"
              sx={{
                '&:has(input:focus)': {
                  border: '1px solid #657ef8',
                },
              }}
            >
              <TextField
                sx={{
                  backgroundColor: 'transparent',
                  flex: 1,
                  '& fieldset': {
                    border: 'none',
                    outline: 'none',
                  },
                  '& input': {
                    height: '60px',
                    p: '0 16px',
                    pl: '24px',
                    flex: 1,
                    fontSize: '16px',
                  },
                }}
                spellCheck="false"
                placeholder="Vui lòng nhập tiêu đề (bắt buộc)"
                inputProps={{ maxLength: 200 }}
                required
                onChange={handleChange}
              />
              <Stack
                component="span"
                marginRight="24px"
                color="#00000073"
                fontSize="14px"
                lineHeight="60px"
              >
                {lengthTitle.length}/200
              </Stack>
            </Stack>
          </Stack>

          <Stack height="431px">
            <Stack component="span" lineHeight="20px" marginBottom="8px">
              Nội Dung
            </Stack>
            <Stack>
              <CustomQuill />
            </Stack>
          </Stack>

          <Stack>
            <Stack height="68px">
              <Stack component="span" lineHeight="20px" marginBottom="8px">
                Chọn chủ đề({questionsTag.length}/3)
              </Stack>

              <Autocomplete
                onChange={handleLimitQuestionTags}
                value={questionsTag}
                multiple
                id="tags-outlined"
                options={data}
                groupBy={() => ''}
                getOptionLabel={(option) => option.name}
                isOptionEqualToValue={(option, value) => option.id === value.id}
                filterSelectedOptions
                renderTags={() => {
                  return (
                    <Stack
                      component="ul"
                      margin={0}
                      paddingLeft={0}
                      width="inherit"
                      direction="row"
                      justifyContent="flex-start"
                      sx={{ listStyleType: 'none' }}
                    >
                      {questionsTag.map((option, index) => (
                        <ListItem
                          key={index}
                          sx={{
                            padding: 0,
                            margin: '4px 5px',
                            width: 'unset',
                            '& div': {
                              backgroundColor: '#f1f4f9',
                              '& svg': {
                                width: '14px',
                                height: '14px',
                                fill: '#dde3ec',
                              },
                            },
                          }}
                        >
                          <Chip label={option.name} onDelete={handleDelete(option)} />
                        </ListItem>
                      ))}
                    </Stack>
                  )
                }}
                renderInput={(params) => (
                  <TextField
                    {...params}
                    placeholder="Tối đa thêm 3 chủ đề"
                    sx={{ height: '40px' }}
                  />
                )}
                renderGroup={(params) => {
                  return (
                    <Stack
                      component="li"
                      key={params.key}
                      direction="column"
                      sx={{
                        '&': { maxHeight: '260px' },
                        '& ul': {
                          p: 0,
                          '& li': {
                            height: '48px',
                            '&:focus': {
                              backgroundColor: '#eff2ff',
                            },
                          },
                        },
                      }}
                    >
                      <Typography variant="body1">{params.group}</Typography>
                      <Stack component="ul">{params.children}</Stack>
                    </Stack>
                  )
                }}
                componentsProps={{
                  paper: {
                    style: {
                      borderRadius: '10px',
                      boxShadow: '0px 12px 24px rgba(47, 63, 86, 0.2)',
                      width: upLg ? '504px' : '384px',
                    },
                  },
                }}
                sx={{
                  '& .MuiOutlinedInput-root': {
                    borderRadius: '0',
                    padding: '0',
                  },
                  '& .MuiOutlinedInput-root .MuiOutlinedInput-notchedOutline': {
                    border: '1px solid #f1f4f9 !important',
                  },
                  '& .MuiInputBase-root': {
                    height: '40px',
                    borderRadius: '8px',
                    width: 'unset',
                    display: 'flex',
                    p: 0,
                    '& .MuiInputBase-inputAdornedEnd': {
                      p: 0,
                      pl: '16px',
                    },
                  },
                  '& .MuiAutocomplete-popupIndicator': { display: 'none' },
                }}
              />
              <Snackbar
                open={open}
                autoHideDuration={6000}
                onClose={handleClose}
                message="Chỉ được chọn 3 chủ đề"
                action={action}
              />
            </Stack>
            <Stack marginTop="24px">
              <Stack component="span" lineHeight="20px" marginBottom="8px">
                Github link
              </Stack>
              <TextField
                placeholder="Nhấn để dán link dẫn"
                value={githubLink}
                onClick={handlePaste}
                InputProps={{
                  readOnly: true,
                  endAdornment: (
                    <InputAdornment position="end">
                      {githubLink ? (
                        <IconButton
                          onClick={(e) => {
                            e.stopPropagation()
                            setGithubLink('')
                          }}
                          sx={{ padding: '8px', '& svg': { width: '20px', height: '20px' } }}
                        >
                          <DeleteIcon />
                        </IconButton>
                      ) : (
                        <IconButton
                          onClick={handlePaste}
                          sx={{ padding: '8px', '& svg': { width: '20px', height: '20px' } }}
                        >
                          <FileCopyIcon />
                        </IconButton>
                      )}
                    </InputAdornment>
                  ),
                }}
                sx={{
                  width: { lg: githubLink.length > 100 ? '696px' : '328px' },
                  maxWidth: '696px',
                  backgroundColor: '#f6f9fb',
                  borderRadius: '8px',
                  '& fieldset': {
                    border: 'none',
                    outline: 'none',
                  },
                  '& input': {
                    height: '40px',
                    maxHeight: '40px',
                    p: '0 16px',
                    lineHeight: '40px',
                    wordBreak: 'break-all',
                    fontSize: '14px',
                    fontWeight: 400,
                    overflow: 'hidden',
                    textOverflow: 'ellipsis',
                  },
                }}
              />
            </Stack>
          </Stack>
        </Stack>
        <Stack
          direction="row"
          gap={{ lg: '44px' }}
          justifyContent="center"
          sx={{
            '& button': {
              minWidth: '80px',
              width: { lg: '280px' },
              borderRadius: '22px',
              lineHeight: '44px',
              height: '44px',
              fontSize: '16px',
              fontWeight: 600,
              textTransform: 'inherit',
              backgroundColor: '#e1e7ff',
              color: '#657ef8',
              boxShadow: 'none',
              '&:hover': {
                backgroundColor: '#657ef8',
                color: theme.palette.white.main,
              },
            },
          }}
        >
          <Button variant="contained">Xem trước</Button>
          <Button variant="contained">Đăng</Button>
        </Stack>
      </Stack>
    </Stack>
  )
}

export default Post
