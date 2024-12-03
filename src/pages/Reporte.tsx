
//& REPORTE TOOLTIP

import React, { useState, useEffect } from 'react';
import { Box, Typography, Container, Button, Paper, CircularProgress, Alert, Tooltip } from '@mui/material';
import { useNavigate } from 'react-router-dom';
import { useSelector } from 'react-redux';
import Menu from '../components/Menu';
import InformeColeccion from '../components/InformeColeccion';

const Reports: React.FC = () => {
  const navigate = useNavigate();
  const [isReportGenerated, setIsReportGenerated] = useState(false);
  const [data, setData] = useState<any[]>([]);
  const [loading, setLoading] = useState<boolean>(false);
  const [error, setError] = useState<string>('');
  const userData = useSelector((state: any) => state.authenticator);
  const isAuthenticated = userData?.isAuthenticated;

  useEffect(() => {
    if (!isAuthenticated) {
      navigate('/');
    }
  }, [isAuthenticated, navigate]);

  const fetchReportData = async () => {
    setLoading(true);
    setError('');
    try {
      const response = await fetch('http://localhost:3030/getItems');
      const data = await response.json();

      if (response.ok) {
        setData(data.data);
        setIsReportGenerated(true);
      } else {
        throw new Error('Error al obtener los datos del informe');
      }
    } catch {
      setError('Hubo un problema al cargar los datos. Inténtalo nuevamente.');
    } finally {
      setLoading(false);
    }
  };
  
  return (
    <Box sx={{ flexGrow: 1 }}>
      <Menu nombreUsuario={userData?.nombreUsuario} />

      <Container sx={{ display: 'flex', flexDirection: 'column', justifyContent: 'center', marginTop: 3 }}>
        <Typography variant="h3" color="primary" align="center" gutterBottom>
          Página de Reportes
        </Typography>
        <Typography variant="body1" color="text.secondary" align="center" paragraph>
          Aquí puedes generar informes detallados de la colección. Haz clic en el botón de abajo para generar el informe de la colección.
        </Typography>

        {!isReportGenerated && !loading && (
          <Tooltip title="Haz clic para generar el informe de la colección" arrow placement="top">
            <Button
              variant="contained"
              color="primary"
              onClick={fetchReportData}
              sx={{
                mt: 3,
                padding: '12px 24px',
                borderRadius: '20px',
                fontSize: '16px',
                width: '50%',
                alignSelf: 'center',
                boxShadow: 3,
                '&:hover': {
                  backgroundColor: '#1976d2',
                },
              }}
            >
              GENERAR INFORME COLECCIÓN
            </Button>
          </Tooltip>
        )}

        {!isReportGenerated && !loading && (
          <Tooltip title="Haz clic para generar el informe de los Usuarios" arrow placement="top">
            <Button
              variant="contained"
              color="primary"
              onClick={fetchReportData}
              sx={{
                mt: 3,
                padding: '12px 24px',
                borderRadius: '20px',
                fontSize: '16px',
                width: '50%',
                alignSelf: 'center',
                boxShadow: 3,
                '&:hover': {
                  backgroundColor: '#1976d2',
                },
              }}
            >
              GENERAR INFORME USUARIOS
            </Button>
          </Tooltip>
        )}

        {loading && (
          <Box sx={{ display: 'flex', justifyContent: 'center', mt: 3 }}>
            <CircularProgress />
          </Box>
        )}

        {error && (
          <Alert severity="error" sx={{ mt: 2 }}>
            {error}
          </Alert>
        )}

        {isReportGenerated && !loading && (
          <Paper sx={{ mt: 4, padding: 3, boxShadow: 3 }}>
            <InformeColeccion data={data} usuarios={data} />
          </Paper>
        )}
      </Container>
    </Box>
  );
};

export default Reports;