/** @jsx jsx */
import { jsx, Container, Box, Grid, Text, Heading } from 'theme-ui';
import TextFeature from 'components/text-feature';
import Image from 'components/image';

import CoreFeatureThumb from 'assets/coreFeature.png';
import Briefcase from 'assets/core-feature/logo3.png';
import Secure from 'assets/core-feature/logo1.png';
import Logo3 from 'assets/core-feature/logo2.png';
import Logo4 from 'assets/core-feature/logo4.png';
import { secureHeapUsed } from 'crypto';

const data = {
  subTitle: 'Core features',
  title: 'Estos son los beneficios por ser un comerciante verificado por KiiEx',
  features: [
    {
      id: 1,
      imgSrc: Briefcase,
      altText: 'Bajas comisiones de negociación',
      title: 'Bajas comisiones de negociación',
      text:
        'Comisión de menos del 1% para todas las ordenes P2P. Tarifa cero hasta 2023-07-01.'
    },
    {
      id: 2,
      imgSrc: Secure,
      altText: 'Personalizar cada pedido',
      title: 'Personalizar cada pedido',
      text:
        'Personalice el precio y la cantidad de su pedido. Gana con la diferencia de precios.',
    },
    {
      id: 2,
      imgSrc: Logo3,
      altText: 'Servicio de atención al cliente 24/7',
      title: 'Servicio de atención al cliente 24/7',
      text: 'Atención al cliente uno a uno, todas sus preguntas serán atendidas puntualmente'
    },
    {
      id: 2,
      imgSrc: Logo4,
      altText: 'Protección del comerciante verificado',
      title: 'Protección del comerciante verificado',
      text: 'Disfrute de la protección exclusiva de la plataforma. Más garantías en transacciones.'
    },

  ],
};

export default function CoreFeature() {
  return (
    <section sx={styles.coreFeature}>
      <Container sx={styles.containerBox}>
      <Box sx={styles.contentBox}>
          <Box sx={styles.headingTop}>
            <TextFeature title={data.title} />
            <p>Estar verificado es generar confianza a los usuarios para identificar a las empresas con las que puede comerciar</p>
            <p style={{color:'#0F26A7'}}><strong>Registrese y reciba un bono de $100</strong></p>
            <button style={{backgroundColor:'#0F26A7',borderRadius:'10px'}} className='donate__btn css-d7q6ja'>Crea tu cuenta</button>
          </Box>
        </Box>
        <Box>
        <hr style={{color:'gray', border:'none', borderLeft:'1px solid rgb(115 132 140 / 21%)',height:'70vh',width:'1px'}}>
        </hr>
        </Box>
        <Box sx={styles.contentBox}>
          <Grid gap="15px 0" columns={1} sx={styles.grid}>
            {data.features.map((item) => (
              <Box sx={styles.card} key={item.id}>
                <Image src={item.imgSrc} alt={item.altText} sx={styles.img} />

                <Box sx={styles.wrapper}>
                  <Heading sx={styles.wrapper.title}>{item.title}</Heading>
                  <Text sx={styles.wrapper.subTitle}>{item.text}</Text>
                </Box>
              </Box>
            ))}
          </Grid>
        </Box>
      </Container>
    </section>
  );
}

const styles = {
  coreFeature: {
    py: [0, null, null, 2, null, 7],
    position: 'relative',
    '&::before': {
      position: 'absolute',
      content: '""',
      top: ['auto', null, null, '50%'],
      bottom: ['100px', 0, null, 'auto'],
      left: 0,
      background: 'linear-gradient(-157deg, #F6FAFD, #F9FCFC, #FCFDFC)',
      height: [350, 550, '60%'],
      width: '50%',
      zIndex: -1,
      borderTopRightRadius: '50%',
      borderBottomRightRadius: '50%',
      transform: ['translateY(0)', null, null, 'translateY(-50%)'],
    },
  },
  containerBox: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between',
    flexDirection: ['column', null, null, 'row'],
  },
  thumbnail: {
    pl: [0, 5, 0, null, 7, 95],
    pr: [0, 5, null, null, null, 75, 95],
    order: [2, null, null, 0],
  },
  contentBox: {
    width: ['100%', 450, 550, 350, 500, 570],
    pr: [0, null, 'auto', null, null, 80],
    pl: 'auto',
    flexShrink: 0,
  },
  headingTop: {
    pl: [0, null, null, null, '35px', null, '55px', 6],
    mb: [3, null, null, null, 1],
    textAlign: ['center', null, null, 'left'],
  },
  grid: {
    p: ['0 0px 35px', null, null, null, '0 20px 40px', null, '0 40px 40px', 0],
  },
  card: {
    display: 'flex',
    alignItems: 'flex-start',
    p: [
      '0 17px 20px',
      null,
      null,
      '0 0 20px',
      '20px 15px 17px',
      null,
      null,
      '25px 30px 23px',
    ],
    backgroundColor: 'white',
    borderRadius: '10px',
    transition: 'all 0.3s',
    width: ['100%', '85%', null, '100%'],
    mx: 'auto',
    '&:hover': {
      boxShadow: [
        '0px 0px 0px rgba(0, 0, 0, 0)',
        null,
        null,
        null,
        '0px 8px 24px rgba(69, 88, 157, 0.07)',
      ],
    },
  },

  img: {
    width: ['50px', null, '55px'],
    height: 'auto',
    flexShrink: 0,
    mr: [3, 4],
  },
  wrapper: {
    width: '100%',
    display: 'flex',
    flexDirection: 'column',
    mt: '-5px',
    title: {
      fontSize: 3,
      color: 'heading_secondary',
      lineHeight: 1.4,
      fontWeight: 700,
      mb: [2, null, null, null, 3],
    },

    subTitle: {
      fontSize: 1,
      fontWeight: 400,
      lineHeight: [1.85, null, 2],
    },
  },
};
