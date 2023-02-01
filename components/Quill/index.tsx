import { Stack } from '@mui/material'
import * as React from 'react'
import { useMemo, useState } from 'react'
import 'react-quill/dist/quill.snow.css'
import dynamic from 'next/dynamic'
import { RedoIcon } from 'libs/icons'

const modules = {
  toolbar: [
    // ['undo', 'redo'],
    ['bold', 'italic', 'underline', 'strike'],
    ['blockquote', 'code-block'],
    [{ header: 1 }, { header: 2 }],
    [{ list: 'ordered' }, { list: 'bullet' }],
    [{ script: 'sub' }, { script: 'super' }],
    [{ indent: '-1' }, { indent: '+1' }],
    [{ direction: 'rtl' }],
    ['link', 'image'],
    [{ size: ['small', false, 'large', 'huge'] }],
    [{ header: [1, 2, 3, 4, 5, 6, false] }],
    [{ color: [] }, { background: [] }],
    [{ font: [] }],
    [{ align: [] }],
    ['clean'],
  ],
  history: {
    delay: 2000,
    maxStack: 500,
    userOnly: true,
  },
}

const CustomQuill = () => {
  const [value, setValue] = useState('')
  const ReactQuill = useMemo(() => dynamic(() => import('react-quill'), { ssr: false }), [])

  // const icons = Quill.import('ui/icons')
  // icons['undo'] = <RedoIcon />

  return (
    <Stack>
      <ReactQuill value={value} onChange={setValue} modules={modules} />
    </Stack>
  )
}

export default CustomQuill
