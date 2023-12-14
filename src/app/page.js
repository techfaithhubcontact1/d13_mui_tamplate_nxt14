'use client'
//1. import area
import { QuizOutlined } from '@mui/icons-material';
import { AppBar, Box, Button, Card, CardActions, CardContent, CardHeader, Container, Divider, Grid, Link, List, ListItem, ThemeProvider, Toolbar, Typography, createTheme } from '@mui/material'


//2. deination area
export function Text() {

  return <Typography variant="h6" align="center" sx={{ m:4 }}>
    Copyright &copy;
    <Link href="/" className="list_color"> Your Website </Link>
    2023.
  </Typography>
}

const themeObject = createTheme();

export default function Home() {
  return (
    <>
       <ThemeProvider theme={themeObject}>
        {/* Header Start here */}
         <AppBar sx={{ bgcolor:"#9c27b0", position:"sticky" }}>
          <Toolbar sx={{ display:"flex", flexDirection:"row", justifyContent:"space-between" }}>
            <Typography variant="h5"> <QuizOutlined /> Quiz</Typography>
            <List sx={{ display:"flex",  justifyContent:"flex-end" }}>
              <ListItem>
                <Link href="/" sx={{ color:"#fff" }}>FUTURE</Link>
              </ListItem>
              <ListItem>
                <Link href="/" sx={{ color:"#fff" }}>ENTERPRISE</Link>
              </ListItem>
              <ListItem>
                <Link href="/" sx={{ color:"#fff" }}> SUPPORT</Link>
              </ListItem>
              <ListItem>
                <Link href="/" sx={{ color:"#fff" }}>ABOUT</Link>
              </ListItem>
              <ListItem>
                <Link href="/" sx={{ color:"#fff" }}>CONTACT</Link>
              </ListItem>
              <ListItem>
                <Button href="/" variant="button" sx={{ border:"2px solid #fff"}}>Login</Button>
              </ListItem>
            </List>
          </Toolbar>
         </AppBar>
          {/* Header Finished here */}

          
          <Container component="main" maxWidth="md" align="center" sx={{ display:"flex", flexDirection:"column", alignItems:"center" }}>

            {/* Hero Start Here */}
            <Box fullWidth maxWidth="sm" sx={{ mt:10, mb:4 }}>
               <Typography variant="h1" sx={{ color:"#9c27b0" }}>Pricing</Typography>
               <Typography sx={{ fontSize:"25px", color:"#666666", mt:3, mb:3 }}>Quickly build an effective pricing table for your potential customers with this layout. It's built with default MUI components with little customization.
               </Typography>
            </Box>
            {/* Hero finished Here */}

            {/* Card Start Here */}
            <Box maxWidth="md" sx={{ mb:10 }}>
               <Grid container sx={{  }} spacing={5}>

                 <Grid item md={4} sm={6} xs={12} sx={{ mt:4 }}>
                  <Card>
                    <CardHeader title="FREE" sx={{ bgcolor:"#F3F6F9" }}></CardHeader>
                    <CardContent sx={{ p:5 }}>
                      <Typography variant="h3" sx={{ display:"inline", color:"#9c27b0" }}>$0</Typography>
                      <Typography variant="h6" sx={{ display:"inline" }}>/m</Typography>
                      <Typography>
                        10 users included 2 GB of storage Help center access Email support
                      </Typography>
                    </CardContent>
                    <CardActions className="card_btn" >
                      <Button variant="outlined">Sign Up For Free</Button>
                    </CardActions>
                  </Card>
                 </Grid>

                 <Grid item md={4} sm={6} xs={12} sx={{  }}>
                  <Card>
                      <CardHeader title="PRO" subheader="Most Popular" sx={{ bgcolor:"#F3F6F9" }}></CardHeader>
                      <CardContent sx={{ p:4 }}>
                        <Typography variant="h3" sx={{ display:"inline", color:"#9c27b0" }}>$50</Typography>
                        <Typography variant="h6" sx={{ display:"inline" }}>/m</Typography>
                        <Typography>
                          20 users included 10 GB of storage Help center access Priority email support
                        </Typography>
                      </CardContent>
                      <CardActions className="card_btn">
                        <Button variant="contained">Get Started</Button>
                      </CardActions>
                    </Card>
                 </Grid>

                 <Grid item md={4} sm={6} xs={12} sx={{ mt:3 }}>
                  <Card>
                      <CardHeader title="INTERPRISE" sx={{ bgcolor:"#F3F6F9" }}></CardHeader>
                      <CardContent sx={{ p:4 }}>
                        <Typography variant="h3" sx={{ display:"inline", color:"#9c27b0" }}>$100</Typography>
                        <Typography variant="h6" sx={{ display:"inline" }}>/m</Typography>
                        <Typography>
                          50 users included 30 GB of storage Help center access Phone & email support
                        </Typography>
                      </CardContent>
                      <CardActions className="card_btn">
                        <Button variant="outlined">Contacts Us</Button>
                      </CardActions>
                    </Card>
                 </Grid>
               </Grid>
            </Box>
            <Divider  sx={{ color:"#666666" }}/>
          </Container>
          {/* Card Finished here */}

          {/* Footer start here */}
          <Container component="footer" variant="footer" >
            <Box maxWidth="md" sx={{ m:"auto" }}>
               <Grid container>

                  <Grid item md={3} sm={4} xs={6} >
                   <List > 
                      <Typography variant="h5" sx={{ color:"#9c27b0" }}>Company</Typography>
                      <ListItem>
                        <Link href="/" className="list_color">Team</Link>
                      </ListItem>
                      <ListItem>
                        <Link href="/" className="list_color">History</Link>
                      </ListItem>
                      <ListItem>
                        <Link href="/" className="list_color">Contact Us</Link>
                      </ListItem>
                      <ListItem>
                        <Link href="/" className="list_color">Locations</Link>
                      </ListItem>
                   </List>
                  </Grid>

                  <Grid item md={3} sm={4} xs={6} sx={{ }}>
                    <List> 
                        <Typography variant="h5" sx={{ color:"#9c27b0" }}>Features</Typography>
                        <ListItem>
                          <Link href="/" className="list_color" >Cool stuff</Link>
                        </ListItem>
                        <ListItem>
                          <Link href="/" className="list_color">Random feature</Link>
                        </ListItem>
                        <ListItem>
                          <Link href="/" className="list_color">Team feature</Link>
                        </ListItem>
                        <ListItem>
                          <Link href="/" className="list_color">Developer stuff</Link>
                        </ListItem>
                        <ListItem>
                          <Link href="/" className="list_color">Another one</Link>
                        </ListItem>
                    </List>
                  </Grid>

                  <Grid item md={3} sm={4} xs={6} sx={{ }}>
                    <List> 
                        <Typography variant="h5" sx={{ color:"#9c27b0" }}>Resources</Typography>
                        <ListItem>
                          <Link href="/" className="list_color">Resource</Link>
                        </ListItem>
                        <ListItem>
                          <Link href="/" className="list_color">Resource</Link>
                        </ListItem>
                        <ListItem>
                          <Link href="/" className="list_color">Resource name</Link>
                        </ListItem>
                        <ListItem>
                          <Link href="/" className="list_color">Final resource</Link>
                        </ListItem>
                    </List>
                  </Grid>

                  <Grid item md={3} sm={4} xs={6} sx={{ }}>
                    <List> 
                        <Typography variant="h5" sx={{ color:"#9c27b0" }}>Legal</Typography>
                        <ListItem>
                          <Link href="/" className="list_color">Privacy policy</Link>
                        </ListItem>
                        <ListItem>
                          <Link href="/" className="list_color">Terms of use</Link>
                        </ListItem>
                        <ListItem>
                          <Link href="/" className="list_color">Rules</Link>
                        </ListItem>
                        <ListItem>
                          <Link href="/" className="list_color">Term & Conditons</Link>
                        </ListItem>
                    </List>
                  </Grid>
               </Grid>
            </Box>
            <Text />
          </Container>
          {/* Footer Finished here */}
       </ThemeProvider>
    </>
  )
}

//3. export area