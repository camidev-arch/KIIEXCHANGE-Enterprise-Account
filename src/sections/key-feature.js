/** @jsx jsx */
import { jsx } from 'theme-ui';
import { Container, Grid } from 'theme-ui';
import SectionHeader from '../components/section-header';
import FeatureCardColumn from 'components/feature-card-column.js';
import Vector from 'assets/key-feature/vector.png';
import Editing from 'assets/key-feature/editing.png';
import Speed from 'assets/key-feature/speed.png';
import Exchangebg from 'assets/key-feature/EXCHANGE2 LETTER.png';

const data = [
  {
    id: 1,
    imgSrc: Editing,
    altText: 'Configuración Rápida',
    title: 'Configuración Rápida',
    text:
      'De los primeros pasos en solo minutos con nuestro producto autogestionado',
  },
  {
    id: 2,
    imgSrc: Speed,
    altText: 'Conversion',
    title: 'Conversión Fácil',
    text:
      'Puedes cambiar tus criptomonedas por efectivo con nuestro producto gestionado por KiiEx',
  },
  {
    id: 3,
    imgSrc: Vector,
    altText: 'Mercado',
    title: 'Mercado Global',
    text:
      'Recibe pagos en cualquier momento de clientes que estén en cualquier lugar del mundo',
  },
];

export default function KeyFeature() {
  return (
    <section sx={{ variant: 'section.keyFeature' }} id="feature">
      <Container>
        <h1 style={{textAlign:'center',fontSize:'60px',fontWeight:'900',color:'#0F26A7',marginBlockEnd:'0',marginBlockStart:'0'}}>KII EXCHANGE</h1>
        <h4 style={{textAlign:'center',fontSize:'25px',fontWeight:'900',color:'black',marginBlockEnd:'0',marginBlockStart:'0'}}>Somos el aliado cripto más confiable para su negocio</h4>
        <p style={{textAlign:'center',marginBottom:'80px',marginBlockStart:'5px'}}>Hemos desarrollado la herramienta más adecuada para que su empresa comience a <br></br>aceptar todos los pagos con las criptomonedas más populares</p>

        <Grid sx={styles.grid}>
          {data.map((item) => (
            <FeatureCardColumn
              key={item.id}
              src={item.imgSrc}
              alt={item.title}
              title={item.title}
              text={item.text}
            />
          ))}
        </Grid>

        <section style={{backgroundImage:'linear-gradient(90deg, #0F26A7 0%, #0F50CF 100%)', borderRadius:'10px', marginRight:'70px', marginLeft:'70px',alignItems:'center', justifyContent:'center', paddingBottom:'50px', paddingLeft:'30px',paddingRight:'30px'}}>
          <h2 style={{color:'white',lineHeight:'1.2 !important',textAlign:'center',marginTop:'70px',paddingTop:'50px'}}>Diseñado para recibir pagos de cualquier persona sin importar donde esté.</h2>
          <button style={{backgroundColor:'#08080830',marginLeft: '42%',borderColor:'transparent !Important', borderRadius:'10px'}} className='donate__btn css-d7q6ja'>Regístrese aquí</button>  

        </section>
      </Container>
    </section>
  );
}

const styles = {
  grid: {
    px: [0, null, null, '40px', null, '80px'],
    pt: [0, null, null, null, null, null, null, 3],
    gridGap: ['35px 0', null, '40px 0'],
    gridTemplateColumns: [
      'repeat(1,1fr)',
      null,
      'repeat(2,1fr)',
      null,
      'repeat(3,1fr)',
    ],
    width: ['100%', '80%', '100%'],
    mx: 'auto',
    '& > div': {
      px: [0, '15px', null, '25px', null, '30px', '40px', '60px'],
    },
  },
};
