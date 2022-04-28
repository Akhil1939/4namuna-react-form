import React, { useState } from 'react'
import Typography from '@material-ui/core/Typography'
import Button from '@material-ui/core/Button'
import Container from '@material-ui/core/Container'
import { makeStyles } from '@material-ui/core'
import TextField from '@material-ui/core/TextField'

const useStyles = makeStyles({
  field: {
    marginTop: 20,
    marginBottom: 20,
    display: 'block'
  },
})

export default function Createform() {
  const [dateLable,setDateLable] = useState('')
  const classes = useStyles()
  const [title, setTitle] = useState('')
  const [details, setDetails] = useState('')
  const [titleError, setTitleError] = useState(false)
  const [detailsError, setDetailsError] = useState(false)


  const handleSubmit = (e) => {
    e.preventDefault()
    setTitleError(false)
    setDetailsError(false)

    // if (title == '') {
    //   setTitleError(true)
    // }
    // if (details == '') {
    //   setDetailsError(true)
    // }
    // if (title && details) {
    //   console.log(title, details)
    // } 
  }

  return (
    <Container size="sm">
      <Typography
        variant="h6" 
        color="textSecondary"
        component="h2"
        gutterBottom
      >
        Add Certificate
      </Typography>
      
      <form noValidate autoComplete="off" onSubmit={handleSubmit}>
        <TextField className={classes.field}
          onChange={(e) => setTitle(e.target.value)}
          label="Name of Event" 
          variant="outlined" 
          color="secondary" 
          fullWidth
          required
          // error={titleError}
        />
        <TextField className={classes.field}
          onChange={(e) => setTitle(e.target.value)}
          label="Cirtificate Number" 
          variant="outlined" 
          color="secondary" 
          fullWidth
          required
          // error={titleError}
        />
        <TextField className={classes.field}
          onChange={(e) => setTitle(e.target.value)}
          label="Validation Link" 
          variant="outlined" 
          color="secondary" 
          fullWidth
          required
          // error={titleError}
        />
        <TextField
        label="upload file"
        type="file"
        variant='outlined'
        color='secondary'
        fullWidth
        required>
          {/* <input type="file" name="Choose file" id=""  variant='outlined'/> */}
        </TextField>
        
        
        <TextField className={classes.field}
          onChange={(e) => setTitle(e.target.value)}
          label="Points" 
          variant="outlined" 
          color="secondary" 
          fullWidth
          required
          // error={titleError}
        />
        <TextField className={classes.field}
          onChange={(e) => setTitle(e.target.value)}
          type="date"
          variant="outlined" 
          color="secondary" 
          fullWidth
          required
          // error={titleError}
        />
        <TextField className={classes.field}
          onChange={(e) => setTitle(e.target.value)}
          label="Special Instruction" 
          variant="outlined" 
          color="secondary"
          multiline
          rows={4} 
          fullWidth
          required
          // error={titleError}
        />
         <Button
        //  onClick={()=>{}}
          type="submit" 
          color="secondary" 
          variant="contained"
          
          >
          Submit
        </Button>
       
      </form>

      
    </Container>
  )
}
