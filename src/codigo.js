const top100Films = [
    { title: 'The Shawshank Redemption', year: 1994 },
    { title: 'The Godfather', year: 1972 },
    { title: 'The Godfather: Part II', year: 1974 },
    { title: 'The Dark Knight', year: 2008 },
    { title: '12 Angry Men', year: 1957 },
    { title: "Schindler's List", year: 1993 },
    { title: 'Pulp Fiction', year: 1994 },
    {
      title: 'The Lord of the Rings: The Return of the King',
      year: 2003,
    },
    { title: 'The Good, the Bad and the Ugly', year: 1966 },
    { title: 'Fight Club', year: 1999 },
    {
      title: 'The Lord of the Rings: The Fellowship of the Ring',
      year: 2001,
    },
    {
      title: 'Star Wars: Episode V - The Empire Strikes Back',
      year: 1980,
    },
    { title: 'Forrest Gump', year: 1994 },
    { title: 'Inception', year: 2010 },
    {
      title: 'The Lord of the Rings: The Two Towers',
      year: 2002,
    },
    { title: "One Flew Over the Cuckoo's Nest", year: 1975 },
    { title: 'Goodfellas', year: 1990 },
    { title: 'The Matrix', year: 1999 },
    { title: 'Seven Samurai', year: 1954 },
    {
      title: 'Star Wars: Episode IV - A New Hope',
      year: 1977,
    },
    { title: 'City of God', year: 2002 },
    { title: 'Se7en', year: 1995 },
    { title: 'The Silence of the Lambs', year: 1991 },
    { title: "It's a Wonderful Life", year: 1946 },
    { title: 'Life Is Beautiful', year: 1997 },
    { title: 'The Usual Suspects', year: 1995 },
    { title: 'Léon: The Professional', year: 1994 },
    { title: 'Spirited Away', year: 2001 },
    { title: 'Saving Private Ryan', year: 1998 },
    { title: 'Once Upon a Time in the West', year: 1968 },
    { title: 'American History X', year: 1998 },
    { title: 'Interstellar', year: 2014 },
    { title: 'Casablanca', year: 1942 },
    { title: 'City Lights', year: 1931 },
    { title: 'Psycho', year: 1960 },
    { title: 'The Green Mile', year: 1999 },
    { title: 'The Intouchables', year: 2011 },
    { title: 'Modern Times', year: 1936 },
    { title: 'Raiders of the Lost Ark', year: 1981 },
    { title: 'Rear Window', year: 1954 },
    { title: 'The Pianist', year: 2002 },
    { title: 'The Departed', year: 2006 },
    { title: 'Terminator 2: Judgment Day', year: 1991 },
    { title: 'Back to the Future', year: 1985 },
    { title: 'Whiplash', year: 2014 },
    { title: 'Gladiator', year: 2000 },
    { title: 'Memento', year: 2000 },
    { title: 'The Prestige', year: 2006 },
    { title: 'The Lion King', year: 1994 },
    { title: 'Apocalypse Now', year: 1979 },
    { title: 'Alien', year: 1979 },
    { title: 'Sunset Boulevard', year: 1950 },
    {
      title: 'Dr. Strangelove or: How I Learned to Stop Worrying and Love the Bomb',
      year: 1964,
    },
    { title: 'The Great Dictator', year: 1940 },
    { title: 'Cinema Paradiso', year: 1988 },
    { title: 'The Lives of Others', year: 2006 },
    { title: 'Grave of the Fireflies', year: 1988 },
    { title: 'Paths of Glory', year: 1957 },
    { title: 'Django Unchained', year: 2012 },
    { title: 'The Shining', year: 1980 },
    { title: 'WALL·E', year: 2008 },
    { title: 'American Beauty', year: 1999 },
    { title: 'The Dark Knight Rises', year: 2012 },
    { title: 'Princess Mononoke', year: 1997 },
    { title: 'Aliens', year: 1986 },
    { title: 'Oldboy', year: 2003 },
    { title: 'Once Upon a Time in America', year: 1984 },
    { title: 'Witness for the Prosecution', year: 1957 },
    { title: 'Das Boot', year: 1981 },
    { title: 'Citizen Kane', year: 1941 },
    { title: 'North by Northwest', year: 1959 },
    { title: 'Vertigo', year: 1958 },
    {
      title: 'Star Wars: Episode VI - Return of the Jedi',
      year: 1983,
    },
    { title: 'Reservoir Dogs', year: 1992 },
    { title: 'Braveheart', year: 1995 },
    { title: 'M', year: 1931 },
    { title: 'Requiem for a Dream', year: 2000 },
    { title: 'Amélie', year: 2001 },
    { title: 'A Clockwork Orange', year: 1971 },
    { title: 'Like Stars on Earth', year: 2007 },
    { title: 'Taxi Driver', year: 1976 },
    { title: 'Lawrence of Arabia', year: 1962 },
    { title: 'Double Indemnity', year: 1944 },
    {
      title: 'Eternal Sunshine of the Spotless Mind',
      year: 2004,
    },
    { title: 'Amadeus', year: 1984 },
    { title: 'To Kill a Mockingbird', year: 1962 },
    { title: 'Toy Story 3', year: 2010 },
    { title: 'Logan', year: 2017 },
    { title: 'Full Metal Jacket', year: 1987 },
    { title: 'Dangal', year: 2016 },
    { title: 'The Sting', year: 1973 },
    { title: '2001: A Space Odyssey', year: 1968 },
    { title: "Singin' in the Rain", year: 1952 },
    { title: 'Toy Story', year: 1995 },
    { title: 'Bicycle Thieves', year: 1948 },
    { title: 'The Kid', year: 1921 },
    { title: 'Inglourious Basterds', year: 2009 },
    { title: 'Snatch', year: 2000 },
    { title: '3 Idiots', year: 2009 },
    { title: 'Monty Python and the Holy Grail', year: 1975 },
  ];

  {/*<Autocomplete
          freeSolo
          id="free-solo-2-demo"
          clearText="Limpiar"
          options={top100Films.map((option) => option.title)}
          renderInput={(params) => (
            <TextField
              {...params}
              label="Buscar..."
              InputProps={{
                ...params.InputProps,
              }}
            />
          )}
            />*/}


            const tutorialSteps = [
                {
                  label: 'Slide 1',
                  imgPath: 'https://media.gazetadopovo.com.br/2020/01/17155825/lamborghini-huracan-Alexander-Migl-wikimedia-commons.jpg',
                },
                {
                  label: 'Slide 2',
                  imgPath: 'https://th.bing.com/th/id/R.d9c2773b1c241854571d1bdad23af4a5?rik=Au1AINhvAWZmRg&riu=http%3a%2f%2f4.bp.blogspot.com%2f-QMGOoEe7ORo%2fUictQ1DRsJI%2fAAAAAAAB4ow%2fQ3F1jbR67fo%2fs1600%2fcerca-del-cielo-y-los-planetas-im%c3%a1genes-de-fantas%c3%ada-close-to-sky-landscape-1920x1200-wallpaper-.jpg&ehk=7N3VXXUF7ESxVu%2fJqYAG2lwflwMsjAwn7hdRxBGsJms%3d&risl=&pid=ImgRaw&r=0',
                },
                {
                  label: 'Slide 3',
                  imgPath: 'https://4.bp.blogspot.com/-Imh-wjTJoLQ/UtL0ednyuQI/AAAAAAAAY2g/YPkh9qzvlbU/s1600/240773.jpg',
                },
              ];
              
              function App() {
              
              const theme = useTheme();
              const [activeStep, setActiveStep] = React.useState(0);
              const maxSteps = tutorialSteps.length;
              
              const handleNext = () => {
                setActiveStep((prevActiveStep) => (prevActiveStep + 1) % maxSteps);
              };
              
              const handleBack = () => {
                setActiveStep((prevActiveStep) => (prevActiveStep - 1 + maxSteps) % maxSteps);
              };
              
                return (
                  <Grid container>
                    <Grid item xs={12} md={12}>
                     <Box
                      component="img"
                      sx={{
                        height: 255,
                        display: 'block',
                        maxWidth: 400,
                        overflow: 'hidden',
                        width: '100%',
                        margin: 'auto'
                      }}
                      src={tutorialSteps[activeStep].imgPath}
                      alt={tutorialSteps[activeStep].label}
                    />
                    <MobileStepper
                      steps={maxSteps}
                      position="static"
                      activeStep={activeStep}
                      nextButton={
                        <Button
                          size="small"
                          onClick={handleNext}
                          disabled={activeStep === maxSteps - 1}
                        >
                          Next
                          {theme.direction === 'rtl' ? (
                            <KeyboardArrowLeft />
                          ) : (
                            <KeyboardArrowRight />
                          )}
                        </Button>
                      }
                      backButton={
                        <Button size="small" onClick={handleBack} disabled={activeStep === 0}>
                          {theme.direction === 'rtl' ? (
                            <KeyboardArrowRight />
                          ) : (
                            <KeyboardArrowLeft />
                          )}
                          Back
                        </Button>
                      }
                    />
                    </Grid>
                  </Grid>
              
                );
              }
              
              export default App;



              const images = [
                {
                  label: 'San Francisco – Oakland Bay Bridge, United States',
                  imgPath:
                    'https://images.unsplash.com/photo-1537944434965-cf4679d1a598?auto=format&fit=crop&w=400&h=250&q=60',
                },
                {
                  label: 'Bird',
                  imgPath:
                    'https://images.unsplash.com/photo-1538032746644-0212e812a9e7?auto=format&fit=crop&w=400&h=250&q=60',
                },
                {
                  label: 'Bali, Indonesia',
                  imgPath:
                    'https://images.unsplash.com/photo-1537996194471-e657df975ab4?auto=format&fit=crop&w=400&h=250',
                },
                {
                  label: 'Goč, Serbia',
                  imgPath:
                    'https://images.unsplash.com/photo-1512341689857-198e7e2f3ca8?auto=format&fit=crop&w=400&h=250&q=60',
                },
              ];
              



              <Box sx={{ maxWidth: 400, flexGrow: 1 }}>
      <Box
        sx={{
          height: 255,
          display: 'flex',
          overflow: 'hidden',
          width: '100%',
          justifyContent: 'center',
        }}
      >
        <img
          src={images[activeStep].imgPath}
          alt={images[activeStep].label}
          style={{ height: '100%', transition: 'transform 0.5s ease' }}
        />
      </Box>
      <MobileStepper
        steps={maxSteps}
        position="static"
        activeStep={activeStep}
        nextButton={
          <Button
            size="small"
            onClick={handleNext}
            disabled={activeStep === maxSteps - 1}
          >
            
            {theme.direction === 'rtl' ? <KeyboardArrowLeft /> : <KeyboardArrowRight />}
          </Button>
        }
        backButton={
          <Button size="small" onClick={handleBack} disabled={activeStep === 0}>
            {theme.direction === 'rtl' ? <KeyboardArrowRight /> : <KeyboardArrowLeft />}
            
          </Button>
        }
      />
    </Box>



/// mi ultima versión 
function App() {
  const theme = useTheme();
  const [activeStep, setActiveStep] = React.useState(0);
  const maxSteps = images.length;

  const handleNext = () => {
    setActiveStep((prevActiveStep) => prevActiveStep + 1);
  };

  const handleBack = () => {
    setActiveStep((prevActiveStep) => prevActiveStep - 1);
  };

  return (
    <Box sx={{ flexGrow: 1, position: 'relative' }}>
      <img
        src={images[activeStep].imgPath}
        alt={images[activeStep].label}
        style={{
          width: '100%',
          objectFit: 'cover',
          objectPosition: 'center', // centra la imagen
          height: '50vh',
          maxHeight: '500px',
          transition: 'transform 0.5s ease'
        }}
      />
      <MobileStepper
        steps={maxSteps}
        position="static"
        activeStep={activeStep}
        sx={{
          position: 'absolute',
          bottom: 10,
          width: '100%',
          backgroundColor: 'transparent'
        }} backButton={
          <Button size="small" onClick={handleBack} disabled={activeStep === 0}>
            {theme.direction === 'rtl' ? <KeyboardArrowRight /> : <KeyboardArrowLeft />}
          </Button>
        } nextButton={
          <Button
            size="small"
            onClick={handleNext}
            disabled={activeStep === maxSteps - 1}
          >
            {theme.direction === 'rtl' ? <KeyboardArrowLeft /> : <KeyboardArrowRight />}
          </Button>
        }
      />
    </Box>
  );
}


/// codigo con scroll 
<Box sx={{ width: '100%', position: 'relative', flexGrow: 1, height: '80vh' }}> {/* Ajuste el height aquí */}
<AutoPlaySwipeableViews
  axis={theme.direction === 'rtl' ? 'x-reverse' : 'x'}
  index={activeStep}
  onChangeIndex={handleStepChange}
  enableMouseEvents
  style={{ position: 'absolute', top: 0, left: 0, right: 0, bottom: 50 }}> {/* Ajuste el bottom para dejar espacio para el MobileStepper */}
  {images.map((step, index) => (
    <div key={step.label}>
      {Math.abs(activeStep - index) <= 2 ? (
        <Box
          component="img"
          sx={{
            height: '100%',
            width: '100%',
            objectFit: 'contain',
          }}
          src={step.imgPath}
          alt={step.label}
        />
      ) : null}
    </div>
  ))}
</AutoPlaySwipeableViews>
<MobileStepper
  sx={{ position: 'absolute', bottom: 0, left: 0, right: 0, backgroundColor: 'background.paper' }}
  steps={maxSteps}
  position="static"
  activeStep={activeStep}
  nextButton={
    <Button
      size="small"
      onClick={handleNext}
      disabled={activeStep === maxSteps - 1}
    >
      Next
      {theme.direction === 'rtl' ? (
        <KeyboardArrowLeft />
      ) : (
        <KeyboardArrowRight />
      )}
    </Button>
  }
  backButton={
    <Button size="small" onClick={handleBack} disabled={activeStep === 0}>
      {theme.direction === 'rtl' ? (
        <KeyboardArrowRight />
      ) : (
        <KeyboardArrowLeft />
      )}
      Back
    </Button>
  }
/>
</Box>



/// codigo verdadero
{/*<>
<Box sx={{ width: '100%', position: 'relative', height: '80vh', overflow: 'hidden', flexGrow: 1 }}>
  <AutoPlaySwipeableViews
    axis={theme.direction === 'rtl' ? 'x-reverse' : 'x'}
    index={activeStep}
    onChangeIndex={handleStepChange}
    enableMouseEvents
  >
    {images.map((step, index) => (
    <div key={step.label}>
      {Math.abs(activeStep - index) <= 2 ? (
        <Box
          component="img"
          sx={{
            height: '100%',
            width: '100%',
            objectFit: 'contain',
          }}
          src={step.imgPath}
          alt={step.label}
        />
      ) : null}
    </div>
  ))}
  </AutoPlaySwipeableViews>
  <MobileStepper
  sx={{ position: 'absolute', bottom: 0, left: 0, right: 0, backgroundColor: 'background.paper' }}
  steps={maxSteps}
    position="static"
    activeStep={activeStep}
    nextButton={
      <Button
        size="small"
        onClick={handleNext}
        disabled={activeStep === maxSteps - 1}
      >
        Next
        {theme.direction === 'rtl' ? (
          <KeyboardArrowLeft />
        ) : (
          <KeyboardArrowRight />
        )}
      </Button>
    }
    backButton={
      <Button size="small" onClick={handleBack} disabled={activeStep === 0}>
        {theme.direction === 'rtl' ? (
          <KeyboardArrowRight />
        ) : (
          <KeyboardArrowLeft />
        )}
        Back
      </Button>
    }
  />
</Box>

  </>*/}


  //el códgigo de la última reunión
  {
    /*function App() {
    
    
      return (
        <Box sx={{ width: '100%', position: 'relative', height: { xs: '40vh', sm: '70vh', md: '80vh' },
        overflow: 'hidden', flexGrow: 1 }}>
          <AutoPlaySwipeableViews
            axis={theme.direction === 'rtl' ? 'x-reverse' : 'x'}
            index={activeStep}
            onChangeIndex={handleStepChange}
            enableMouseEvents
          >
            {images.map((step, index) => (
              <div key={step.label}>
                {Math.abs(activeStep - index) <= 2 ? (
                  <Box
                    component="img"
                    sx={{
                      height: '100%',
                      width: '100%',
                      objectFit: 'contain',
                    }}
                    src={step.imgPath}
                    alt={step.label}
                  />
                ) : null}
              </div>
            ))}
          </AutoPlaySwipeableViews>
          <MobileStepper
            sx={{ position: 'absolute', bottom: 0, left: 0, right: 0, backgroundColor: 'background.paper' }}
            steps={maxSteps}
            position="static"
            activeStep={activeStep}
            nextButton={
              <Button
                size="small"
                onClick={handleNext}
                disabled={activeStep === maxSteps - 1}
              >
                {theme.direction === 'rtl' ? (
                  <KeyboardArrowLeft />
                ) : (
                  <KeyboardArrowRight />
                )}
              </Button>
            }
            backButton={
              <Button size="small" onClick={handleBack} disabled={activeStep === 0}>
                {theme.direction === 'rtl' ? (
                  <KeyboardArrowRight />
                ) : (
                  <KeyboardArrowLeft />
                )}
              </Button>
            }
          />
        </Box>
      );
    }*/}



//17-01-2024

     {/*<Grid container>
      <Grid item xs={12}>
        <CarouselActividades />
      </Grid>


      <Grid alignItems="center" container spacing={2} justifyContent="center">
        <Grid item xs={12}>
          <Card>
            <CardContent>
                <Grid item xs={12}>
                  <Typography gutterBottom variant="h5" component="div">
                    Reuniones
                  </Typography>
                </Grid>
                <Grid item lg={4} xs={4}>
                  <Grid alignItems="center" container spacing={2} justifyContent="space-between">
                    {reuniones.map((reunion, index) => (
                      <Grid item lg={4} xs={12}>
                        <Reuniones titulo={reunion.tiulo} imgPath={reunion.imgPath} descripcion={reunion.descripcion} linkConexionMeet={reunion.linkConexionMeet} linkConexionYoutube={reunion.linkConexionYoutube} />
                      </Grid>
                    ))}
                  </Grid>
                </Grid>
           
            </CardContent>
          </Card>
        </Grid>
      </Grid>

     
    </Grid>*/} 