import * as React from 'react';
import { Grid } from '@mui/material';
import FloorTab from '../../components/tabelaAndar/tabelaAndar';
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from 'react-responsive-carousel';
import './Painel.css';
import imagem1 from '../../imagens/testeTela/di2win.png';
import imagem2 from '../../imagens/logos/LogoSoftex.png';
import imagem3 from '../../imagens/testeTela/unibta_digital_logo.png'
import imagem4 from '../../imagens/testeTela/brvoice.png'
import imagem5 from '../../imagens/testeTela/LogoLanlink.png'
import imagem6 from '../../imagens/testeTela/logo-mobilicidade.png'
import imagem7 from '../../imagens/testeTela/logo-In-Forma.png'
import imagem8 from '../../imagens/testeTela/LogoAvantia.png'
import imagem9 from '../../imagens/testeTela/tributus.jpeg'
import imagem10 from '../../imagens/testeTela/logo-nox-vert.png'
import imagem11 from '../../imagens/testeTela/facilit.png'
import imagem12 from '../../imagens/testeTela/GW-sistemas-logo.jpeg'
import imagem13 from '../../imagens/testeTela/iLand_logo.png'
import imagem14 from '../../imagens/testeTela/consenso.png'
import imagem15 from '../../imagens/testeTela/spacemidia.jpeg'
import imagem16 from '../../imagens/testeTela/elogica_logo.png'
import imagemSF from '../../imagens/testeTela/sem_foto.png'

export default function Painel() {
    const mezzaninoItems = [
      {
        img: imagemSF,
        title: 'Sala de Reunião',
        author: '001',
      },
      {
        img: imagemSF,
        title: 'Sala de Reunião',
        author: '002',
      },
      {
        img: imagemSF,
        title: 'Auditório',
        author: '003',
      },
      
        {
            img: imagem3,
            title: 'UniBTA',
            author: '004',
          },
          
    ];
    const mezzaninoSalas = [
      {
          author: '003',
        },
  ];


    const primeiroAndarItems = [
        {
            img: imagem4,
            title: 'BR Voice',
            author: '101',
          },
          {
            img: imagem2,
            title: 'Softex PE',
            author: '102',
          },
          {
            img: imagemSF,
            title: 'Empresa x',
            author: '103',
          },
          {
            img: imagemSF,
            title: 'Empresa XX',
            author: '104',
          },
          {
            img: imagemSF,
            title: 'Empresa Xy',
            author: '105',
          },
          {
            img: imagem2,
            title: 'Softex Coworking',
            author: '106',
          },
          {
            img: imagemSF,
            title: 'Joy Education',
            author: '106.02',
          },
          {
            img: imagemSF,
            title: 'Agil Média Tensão',
            author: '106-04',
          },
          {
            img: imagemSF,
            title: 'L.a.',
            author: '106.05',
          },
          {
            img: imagemSF,
            title: 'Neuron Predict',
            author: '106.06',
          },
          {
            img: imagemSF,
            title: 'MedPerícia',
            author: '106.07',
          },
          {
            img: imagemSF,
            title: 'Monitore',
            author: '106.08',
          },
          {
            img: imagemSF,
            title: 'IncubaTic',
            author: '106.09',
          },
          {
            img: imagem5,
            title: 'LanLink',
            author: '109',
          },
    ];

    const segundoAndarItems = [
        {
            img: imagem1,
            title: 'di2win',
            author: '206',
          },
          {
            img: imagem6,
            title: 'Mobilcidade',
            author: '207',
          },
    ];

    const terceiroAndarItems = [
        {
            img: imagem2,
            title: 'Softex PE',
            author: '301',
          },
          {
            img: imagem7,
            title: 'In Forma',
            author: '302',
          },
          {
            img: imagem8,
            title: 'Avantia',
            author: '305',
          },
    ];

    const quartoAndarItems = [
      {
        img: imagem9,
        title: 'Tributus',
        author: '402',
      },
      {
        img: imagem2,
        title: 'Softex PE',
        author: '404',
      },
    ];

    const quintoAndarItems = [
        {
            img: imagem10,
            title: 'Noxtec',
            author: '501',
          },
          {
            img: imagem11,
            title: 'Facilit',
            author: '502',
          },
          {
            img: imagem12,
            title: 'GW Sistemas',
            author: '505',
          },
    ];

    const sextoAndarItems = [
        {
            img: imagem13,
            title: 'iLand+',
            author: '601',
          },
          {
            img: imagem14,
            title: 'Consenso',
            author: '603',
          },
          {
            img: imagem15,
            title: 'Space Midia',
            author: '605',
          },
          {
            img: imagem16,
            title: 'Elógica',
            author: '606',
          },
    ];

    const andares = [
        { title: "Mezanino", items: mezzaninoItems, salas: mezzaninoSalas },
        { title: "1º Andar", items: primeiroAndarItems },
        { title: "2º Andar", items: segundoAndarItems },
        { title: "3º Andar", items: terceiroAndarItems },
        { title: "4º Andar", items: quartoAndarItems },
        { title: "5º Andar", items: quintoAndarItems },
        { title: "6º Andar", items: sextoAndarItems },
      ];

      /*return (
        <>
        <div >
        <Grid container spacing={1} className='painelRecepcao'>
        {andares.map((andar, index) => (
          <Grid key={index} item xs={12} sm={6} md={4} lg={1.6} xl={1}>
            <FloorTab title={andar.title} items={andar.items} salas={andar.salas} />
          </Grid>
        ))}
      </Grid>
      </div>
      </>
      );*/
      return (
        <div className="painelRecepcao">
          <Carousel 
            autoPlay 
            interval={4500} 
            infiniteLoop 
            showThumbs={false}
            showStatus={false}
            showArrows={false}
          >
            
            {andares.map((andar, index) => (
                    <div key={index}>
                        <div className="andar-title-container">
                            <h2 className="andar-title">{andar.title}</h2>
                        </div>
                        <Grid container spacing={1}>
                            {andar.items.map((item, idx) => (
                                <Grid key={idx} item xs={12} sm={6} md={4} lg={2} xl={1}>
                                    <FloorTab  items={[item]} salas={andar.salas} />
                                </Grid>
                            ))}
                        </Grid>
                    </div>
                ))}
            </Carousel>
        </div>
    );
    }

