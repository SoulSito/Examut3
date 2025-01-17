/*import React, { useState, useEffect } from 'react';
import { TextField, Button, Grid, Box, Typography, Table, TableBody, TableCell, TableContainer, TableHead, TableRow } from '@mui/material';
import DeleteForeverIcon from '@mui/icons-material/DeleteForever'; // Para el icono de eliminar

// Definir la interface ItemType
interface ItemType {
  id: number; // El id es obligatorio para cada ítem
  nombre: string;
  marca: string;
  tipo: string;
  precio: number;
}

const Dashboard: React.FC = () => {
  const [item, setItem] = useState<ItemType>({
    id: 0, // Inicializamos el id con 0 para el formulario
    nombre: '',
    marca: '',
    tipo: '',
    precio: 0,
  }); // Estado para los campos del formulario
  const [error, setError] = useState<string>(''); // Estado para manejar errores
  const [itemsList, setItemsList] = useState<ItemType[]>([]); // Estado para la lista de items

  // Manejar cambios en los campos del formulario
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setItem({
      ...item,
      [name]: value,
    });
  };

  // Validar el formulario antes de enviarlo
  const validateForm = (): boolean => {
    if (!item.nombre || !item.marca || !item.tipo || item.precio <= 0) {
      setError('Por favor, completa todos los campos correctamente.');
      return false;
    }
    setError('');
    return true;
  };

  // Obtener los ítems desde la base de datos
  const fetchItems = async () => {
    const response = await fetch('http://localhost:3030/getItems');
    const data = await response.json();
    setItemsList(data.data); // Almacenamos los datos en itemsList
  };

  // Manejar el envío del formulario
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    // Validar el formulario
    if (!validateForm()) return;

    // Realizamos la llamada al endpoint para insertar los datos en la base de datos
    const response = await fetch('http://localhost:3030/addItem', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        nombre: item.nombre,
        marca: item.marca,
        tipo: item.tipo,
        precio: item.precio,
      }),
    });

    if (response.ok) {
      alert('Item insertado correctamente');
      setItem({ id: 0, nombre: '', marca: '', tipo: '', precio: 0 }); // Limpiar los campos después de la inserción
      fetchItems(); // Actualizar la lista de items después de la inserción
    } else {
      alert('Error al insertar el item');
    }
  };

  // Eliminar un ítem
  const handleDelete = async (id: number) => {
    const response = await fetch(`http://localhost:3030/deleteItem?id=${id}`, {
      method: 'GET',
    });

    if (response.ok) {
      alert('Item eliminado correctamente');
      fetchItems(); // Actualizamos la lista después de eliminar el item
    } else {
      alert('Error al eliminar el item');
    }
  };

  // Cargar los items al montar el componente
  useEffect(() => {
    fetchItems();
  }, []); // Solo se ejecuta una vez cuando el componente se monta

  return (
    <Box sx={{ padding: 3 }}>
      <Typography variant="h5" gutterBottom>
        Dashboard - Agregar un Nuevo Ítem
      </Typography>

      {/* Mostrar el error si lo hay *//*}
    /*  {error && (
        <Typography variant="body2" color="error" sx={{ mb: 2 }}>
          {error}
        </Typography>
      )}

      {/* Formulario *//*}
  /*    <Box component="form" onSubmit={handleSubmit} sx={{ mb: 3 }}>
        <Grid container spacing={2}>
          <Grid item xs={12} sm={6}>
            <TextField
              label="Nombre"
              variant="outlined"
              fullWidth
              name="nombre"
              value={item.nombre}
              onChange={handleChange}
            />
          </Grid>
          <Grid item xs={12} sm={6}>
            <TextField
              label="Marca"
              variant="outlined"
              fullWidth
              name="marca"
              value={item.marca}
              onChange={handleChange}
            />
          </Grid>
          <Grid item xs={12} sm={6}>
            <TextField
              label="Tipo"
              variant="outlined"
              fullWidth
              name="tipo"
              value={item.tipo}
              onChange={handleChange}
            />
          </Grid>
          <Grid item xs={12} sm={6}>
            <TextField
              label="Precio"
              variant="outlined"
              fullWidth
              type="number"
              name="precio"
              value={item.precio}
              onChange={handleChange}
            />
          </Grid>
        </Grid>
        <Button type="submit" variant="contained" color="primary" sx={{ mt: 2 }}>
          Insertar Datos
        </Button>
      </Box>

      {/* Mostrar los ítems insertados *//*}
   /*   <Typography variant="h6" gutterBottom>
        Items Insertados:
      </Typography>

      <TableContainer sx={{ maxHeight: 400 }}>
        <Table aria-label="Items Table">
          <TableHead>
            <TableRow>
              <TableCell><strong>Nombre</strong></TableCell>
              <TableCell><strong>Marca</strong></TableCell>
              <TableCell><strong>Tipo</strong></TableCell>
              <TableCell><strong>Precio</strong></TableCell>
              <TableCell><strong>Acciones</strong></TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {itemsList.length > 0 ? (
              itemsList.map((row: ItemType) => (
                <TableRow key={row.id}>
                  <TableCell>{row.nombre}</TableCell>
                  <TableCell>{row.marca}</TableCell>
                  <TableCell>{row.tipo}</TableCell>
                  <TableCell>{row.precio}</TableCell>
                  <TableCell>
                    <Button
                      variant="outlined"
                      color="secondary"
                      onClick={() => handleDelete(row.id)} // Asegúrate de pasar el id
                    >
                      <DeleteForeverIcon />
                    </Button>
                  </TableCell>
                </TableRow>
              ))
            ) : (
              <TableRow>
                <TableCell colSpan={5} align="center">
                  No hay datos disponibles.
                </TableCell>
              </TableRow>
            )}
          </TableBody>
        </Table>
      </TableContainer>
    </Box>
  );
};

export default Dashboard;*/














//&Dashboard modificado para roles

/*
import React, { useState, useEffect } from 'react';
import { TextField, Button, Grid, Box, Typography, Table, TableBody, TableCell, TableContainer, TableHead, TableRow } from '@mui/material';
import DeleteForeverIcon from '@mui/icons-material/DeleteForever'; // Para el icono de eliminar
import { useSelector } from 'react-redux'; // Para acceder al estado de Redux

// Definir la interface ItemType
interface ItemType {
  id: number; // El id es obligatorio para cada ítem
  nombre: string;
  marca: string;
  tipo: string;
  precio: number;
}

const Dashboard: React.FC = () => {
  const [item, setItem] = useState<ItemType>({
    id: 0, // Inicializamos el id con 0 para el formulario
    nombre: '',
    marca: '',
    tipo: '',
    precio: 0,
  }); // Estado para los campos del formulario
  const [error, setError] = useState<string>(''); // Estado para manejar errores
  const [itemsList, setItemsList] = useState<ItemType[]>([]); // Estado para la lista de items

  // Acceder al rol del usuario desde Redux
  const userRole = useSelector((state: any) => state.authenticator?.rol);

  // Manejar cambios en los campos del formulario
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setItem({
      ...item,
      [name]: value,
    });
  };

  // Validar el formulario antes de enviarlo
  const validateForm = (): boolean => {
    if (!item.nombre || !item.marca || !item.tipo || item.precio <= 0) {
      setError('Por favor, completa todos los campos correctamente.');
      return false;
    }
    setError('');
    return true;
  };

  // Obtener los ítems desde la base de datos
  const fetchItems = async () => {
    const response = await fetch('http://localhost:3030/getItems');
    const data = await response.json();
    setItemsList(data.data); // Almacenamos los datos en itemsList
  };

  // Manejar el envío del formulario
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    // Validar el formulario
    if (!validateForm()) return;

    // Realizamos la llamada al endpoint para insertar los datos en la base de datos
    const response = await fetch('http://localhost:3030/addItem', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        nombre: item.nombre,
        marca: item.marca,
        tipo: item.tipo,
        precio: item.precio,
      }),
    });

    if (response.ok) {
      alert('Item insertado correctamente');
      setItem({ id: 0, nombre: '', marca: '', tipo: '', precio: 0 }); // Limpiar los campos después de la inserción
      fetchItems(); // Actualizar la lista de items después de la inserción
    } else {
      alert('Error al insertar el item');
    }
  };

  // Eliminar un ítem
  const handleDelete = async (id: number) => {
    const response = await fetch(`http://localhost:3030/deleteItem?id=${id}`, {
      method: 'GET',
    });

    if (response.ok) {
      alert('Item eliminado correctamente');
      fetchItems(); // Actualizamos la lista después de eliminar el item
    } else {
      alert('Error al eliminar el item');
    }
  };

  // Cargar los items al montar el componente
  useEffect(() => {
    fetchItems();
  }, []); // Solo se ejecuta una vez cuando el componente se monta

  return (
    <Box sx={{ padding: 3 }}>
      <Typography variant="h5" gutterBottom>
        Dashboard - Agregar un Nuevo Ítem
      </Typography>

      {/* Mostrar el error si lo hay *//*}
      {error && (
        <Typography variant="body2" color="error" sx={{ mb: 2 }}>
          {error}
        </Typography>
      )}

      {/* Formulario *//*}
      <Box component="form" onSubmit={handleSubmit} sx={{ mb: 3 }}>
        <Grid container spacing={2}>
          <Grid item xs={12} sm={6}>
            <TextField
              label="Nombre"
              variant="outlined"
              fullWidth
              name="nombre"
              value={item.nombre}
              onChange={handleChange}
            />
          </Grid>
          <Grid item xs={12} sm={6}>
            <TextField
              label="Marca"
              variant="outlined"
              fullWidth
              name="marca"
              value={item.marca}
              onChange={handleChange}
            />
          </Grid>
          <Grid item xs={12} sm={6}>
            <TextField
              label="Tipo"
              variant="outlined"
              fullWidth
              name="tipo"
              value={item.tipo}
              onChange={handleChange}
            />
          </Grid>
          <Grid item xs={12} sm={6}>
            <TextField
              label="Precio"
              variant="outlined"
              fullWidth
              type="number"
              name="precio"
              value={item.precio}
              onChange={handleChange}
            />
          </Grid>
        </Grid>
        <Button type="submit" variant="contained" color="primary" sx={{ mt: 2 }}>
          Insertar Datos
        </Button>
      </Box>

      {/* Mostrar los ítems insertados *//*}
      <Typography variant="h6" gutterBottom>
        Items Insertados:
      </Typography>

      <TableContainer sx={{ maxHeight: 400 }}>
        <Table aria-label="Items Table">
          <TableHead>
            <TableRow>
              <TableCell><strong>Nombre</strong></TableCell>
              <TableCell><strong>Marca</strong></TableCell>
              <TableCell><strong>Tipo</strong></TableCell>
              <TableCell><strong>Precio</strong></TableCell>
              <TableCell><strong>Acciones</strong></TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {itemsList.length > 0 ? (
              itemsList.map((row: ItemType) => (
                <TableRow key={row.id}>
                  <TableCell>{row.nombre}</TableCell>
                  <TableCell>{row.marca}</TableCell>
                  <TableCell>{row.tipo}</TableCell>
                  <TableCell>{row.precio}</TableCell>
                  <TableCell>
                    {/* Mostrar el botón de eliminar solo si el rol es 'admin' *//*}
                    {userRole === 'admin' && (
                      <Button
                        variant="outlined"
                        color="secondary"
                        onClick={() => handleDelete(row.id)} // Asegúrate de pasar el id
                      >
                        <DeleteForeverIcon />
                      </Button>
                    )}
                  </TableCell>
                </TableRow>
              ))
            ) : (
              <TableRow>
                <TableCell colSpan={5} align="center">
                  No hay datos disponibles.
                </TableCell>
              </TableRow>
            )}
          </TableBody>
        </Table>
      </TableContainer>
    </Box>
  );
};

export default Dashboard;*/


//& DASHBOARD EXAMEN

/*
import React, { useState, useEffect } from 'react';
import { TextField, Button, Grid, Box, Typography, Table, TableBody, TableCell, TableContainer, TableHead, TableRow } from '@mui/material';
import DeleteForeverIcon from '@mui/icons-material/DeleteForever'; // Para el icono de eliminar
import { useSelector } from 'react-redux'; // Para acceder al estado de Redux

// Definir la interface ItemType
interface ItemType {
  id: number; // El id es obligatorio para cada ítem
  nombre: string;
  marca: string;
  tipo: string;
  precio: number;
}

const Dashboard: React.FC = () => {
  const [item, setItem] = useState<ItemType>({
    id: 0, // Inicializamos el id con 0 para el formulario
    nombre: '',
    marca: '',
    tipo: '',
    precio: 0,
  }); // Estado para los campos del formulario
  const [error, setError] = useState<string>(''); // Estado para manejar errores
  const [itemsList, setItemsList] = useState<ItemType[]>([]); // Estado para la lista de items

  // Acceder al rol del usuario desde Redux
  const userRole = useSelector((state: any) => state.authenticator?.rol);

  // Manejar cambios en los campos del formulario
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setItem({
      ...item,
      [name]: value,
    });
  };

  // Validar el formulario antes de enviarlo
  const validateForm = (): boolean => {
    if (!item.nombre || !item.marca || !item.tipo || item.precio <= 0) {
      setError('Por favor, completa todos los campos correctamente.');
      return false;
    }
    setError('');
    return true;
  };

  // Obtener los ítems desde la base de datos
  const fetchItems = async () => {
    const response = await fetch('http://localhost:3030/getItems');
    const data = await response.json();
    setItemsList(data.data); // Almacenamos los datos en itemsList
  };

  // Manejar el envío del formulario
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    // Validar el formulario
    if (!validateForm()) return;

    // Realizamos la llamada al endpoint para insertar los datos en la base de datos
    const response = await fetch('http://localhost:3030/addItem', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        nombre: item.nombre,
        marca: item.marca,
        tipo: item.tipo,
        precio: item.precio,
      }),
    });

    if (response.ok) {
      alert('Item insertado correctamente');
      setItem({ id: 0, nombre: '', marca: '', tipo: '', precio: 0 }); // Limpiar los campos después de la inserción
      fetchItems(); // Actualizar la lista de items después de la inserción
    } else {
      alert('Error al insertar el item');
    }
  };

  // Eliminar un ítem
  const handleDelete = async (id: number) => {
    const response = await fetch(`http://localhost:3030/deleteItem?id=${id}`, {
      method: 'GET',
    });

    if (response.ok) {
      alert('Item eliminado correctamente');
      fetchItems(); // Actualizamos la lista después de eliminar el item
    } else {
      alert('Error al eliminar el item');
    }
  };

  // Cargar los items al montar el componente
  useEffect(() => {
    fetchItems();
  }, []); // Solo se ejecuta una vez cuando el componente se monta

  return (
    <Box sx={{ padding: 3 }}>
      <Typography variant="h5" gutterBottom>
        Dashboard - Agregar un Nuevo Ítem
      </Typography>

      {/* Mostrar el error si lo hay *//*}
      {error && (
        <Typography variant="body2" color="error" sx={{ mb: 2 }}>
          {error}
        </Typography>
      )}

      {/* Formulario *//*}
      <Box component="form" onSubmit={handleSubmit} sx={{ mb: 3 }}>
        <Grid container spacing={2}>
          <Grid item xs={12} sm={6}>
            <TextField
              label="Nombre"
              variant="outlined"
              fullWidth
              name="nombre"
              value={item.nombre}
              onChange={handleChange}
            />
          </Grid>
          <Grid item xs={12} sm={6}>
            <TextField
              label="Marca"
              variant="outlined"
              fullWidth
              name="marca"
              value={item.marca}
              onChange={handleChange}
            />
          </Grid>
          <Grid item xs={12} sm={6}>
            <TextField
              label="Tipo"
              variant="outlined"
              fullWidth
              name="tipo"
              value={item.tipo}
              onChange={handleChange}
            />
          </Grid>
          <Grid item xs={12} sm={6}>
            <TextField
              label="Precio"
              variant="outlined"
              fullWidth
              type="number"
              name="precio"
              value={item.precio}
              onChange={handleChange}
            />
          </Grid>
        </Grid>
        {/* Deshabilitar el botón para usuarios que no son 'admin' *//*}
        <Button 
          type="submit" 
          variant="contained" 
          color="primary" 
          sx={{ mt: 2 }} 
          disabled={userRole !== 'admin'} // Deshabilitado para 'user' o 'invitado'
        >
          Insertar Datos
        </Button>
      </Box>

      {/* Mostrar los ítems insertados *//*}
      <Typography variant="h6" gutterBottom>
        Items Insertados:
      </Typography>

      <TableContainer sx={{ maxHeight: 400 }}>
        <Table aria-label="Items Table">
          <TableHead>
            <TableRow>
              <TableCell><strong>Nombre</strong></TableCell>
              <TableCell><strong>Marca</strong></TableCell>
              <TableCell><strong>Tipo</strong></TableCell>
              <TableCell><strong>Precio</strong></TableCell>
              {/* Solo mostrar la columna de acciones si el rol es 'admin' *//*}
              {userRole === 'admin' && <TableCell><strong>Acciones</strong></TableCell>}
            </TableRow>
          </TableHead>
          <TableBody>
            {itemsList.length > 0 ? (
              itemsList.map((row: ItemType) => (
                <TableRow key={row.id}>
                  <TableCell>{row.nombre}</TableCell>
                  <TableCell>{row.marca}</TableCell>
                  <TableCell>{row.tipo}</TableCell>
                  <TableCell>{row.precio}</TableCell>
                  {/* Mostrar el botón de eliminar solo si el rol es 'admin' *//*}
                  {userRole === 'admin' && (
                    <TableCell>
                      <Button
                        variant="outlined"
                        color="secondary"
                        onClick={() => handleDelete(row.id)} // Asegúrate de pasar el id
                      >
                        <DeleteForeverIcon />
                      </Button>
                    </TableCell>
                  )}
                </TableRow>
              ))
            ) : (
              <TableRow>
                <TableCell colSpan={5} align="center">
                  No hay datos disponibles.
                </TableCell>
              </TableRow>
            )}
          </TableBody>
        </Table>
      </TableContainer>
    </Box>
  );
};

export default Dashboard;*/


//& DASHBOARD TOOLTIP


import React, { useState, useEffect } from 'react';
import { TextField, Button, Grid, Box, Typography, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Tooltip } from '@mui/material';
import DeleteForeverIcon from '@mui/icons-material/DeleteForever';
import { useSelector } from 'react-redux';

interface ItemType {
  id: number;
  nombre: string;
  marca: string;
  tipo: string;
  precio: number;
}

const Dashboard: React.FC = () => {
  const [item, setItem] = useState<ItemType>({
    id: 0,
    nombre: '',
    marca: '',
    tipo: '',
    precio: 0,
  });
  const [error, setError] = useState<string>('');
  const [itemsList, setItemsList] = useState<ItemType[]>([]);

  const userRole = useSelector((state: any) => state.authenticator?.rol);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setItem({ ...item, [name]: value });
  };

  const validateForm = (): boolean => {
    if (!item.nombre || !item.marca || !item.tipo || item.precio <= 0) {
      setError('Por favor, completa todos los campos correctamente.');
      return false;
    }
    setError('');
    return true;
  };

  const fetchItems = async () => {
    const response = await fetch('http://localhost:3030/getItems');
    const data = await response.json();
    setItemsList(data.data);
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!validateForm()) return;

    const response = await fetch('http://localhost:3030/addItem', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(item),
    });

    if (response.ok) {
      alert('Item insertado correctamente');
      setItem({ id: 0, nombre: '', marca: '', tipo: '', precio: 0 });
      fetchItems();
    } else {
      alert('Error al insertar el item');
    }
  };

  const handleDelete = async (id: number) => {
    const response = await fetch(`http://localhost:3030/deleteItem?id=${id}`, { method: 'GET' });
    if (response.ok) {
      alert('Item eliminado correctamente');
      fetchItems();
    } else {
      alert('Error al eliminar el item');
    }
  };

  useEffect(() => {
    fetchItems();
  }, []);

  return (
    <Box sx={{ padding: 3 }}>
      <Typography variant="h5" gutterBottom>Dashboard - Agregar un Nuevo Ítem</Typography>

      {error && (
        <Typography variant="body2" color="error" sx={{ mb: 2 }}>
          {error}
        </Typography>
      )}

      <Box component="form" onSubmit={handleSubmit} sx={{ mb: 3 }}>
        <Grid container spacing={2}>
          <Grid item xs={12} sm={6}>
            <Tooltip title="Introduce el nombre del ítem" arrow placement="top">
              <TextField
                label="Nombre"
                variant="outlined"
                fullWidth
                name="nombre"
                value={item.nombre}
                onChange={handleChange}
              />
            </Tooltip>
          </Grid>
          <Grid item xs={12} sm={6}>
            <Tooltip title="Introduce la marca del ítem" arrow placement="top">
              <TextField
                label="Marca"
                variant="outlined"
                fullWidth
                name="marca"
                value={item.marca}
                onChange={handleChange}
              />
            </Tooltip>
          </Grid>
          <Grid item xs={12} sm={6}>
            <Tooltip title="Introduce el tipo del ítem" arrow placement="top">
              <TextField
                label="Tipo"
                variant="outlined"
                fullWidth
                name="tipo"
                value={item.tipo}
                onChange={handleChange}
              />
            </Tooltip>
          </Grid>
          <Grid item xs={12} sm={6}>
            <Tooltip title="Introduce el precio del ítem" arrow placement="top">
              <TextField
                label="Precio"
                variant="outlined"
                fullWidth
                type="number"
                name="precio"
                value={item.precio}
                onChange={handleChange}
              />
            </Tooltip>
          </Grid>
        </Grid>
        <Tooltip title="Haz clic para insertar un nuevo ítem" arrow placement="top">
          <Button
            type="submit"
            variant="contained"
            color="primary"
            sx={{ mt: 2 }}
            disabled={userRole !== 'admin'}
          >
            Insertar Datos
          </Button>
        </Tooltip>
      </Box>

      <Typography variant="h6" gutterBottom>Items Insertados:</Typography>

      <TableContainer sx={{ maxHeight: 400 }}>
        <Table aria-label="Items Table">
          <TableHead>
            <TableRow>
              <TableCell><strong>Nombre</strong></TableCell>
              <TableCell><strong>Marca</strong></TableCell>
              <TableCell><strong>Tipo</strong></TableCell>
              <TableCell><strong>Precio</strong></TableCell>
              {userRole === 'admin' && <TableCell><strong>Acciones</strong></TableCell>}
            </TableRow>
          </TableHead>
          <TableBody>
            {itemsList.length > 0 ? (
              itemsList.map((row: ItemType) => (
                <TableRow key={row.id}>
                  <TableCell>{row.nombre}</TableCell>
                  <TableCell>{row.marca}</TableCell>
                  <TableCell>{row.tipo}</TableCell>
                  <TableCell>{row.precio}</TableCell>
                  {userRole === 'admin' && (
                    <TableCell>
                      <Tooltip title="Eliminar este ítem" arrow placement="left">
                        <Button
                          variant="outlined"
                          color="secondary"
                          onClick={() => handleDelete(row.id)}
                        >
                          <DeleteForeverIcon />
                        </Button>
                      </Tooltip>
                    </TableCell>
                  )}
                </TableRow>
              ))
            ) : (
              <TableRow>
                <TableCell colSpan={5} align="center">
                  No hay datos disponibles.
                </TableCell>
              </TableRow>
            )}
          </TableBody>
        </Table>
      </TableContainer>
    </Box>
  );
};

export default Dashboard;
