// vehiculoService.js
import { db } from './firebaseConfig.js';
import { collection, addDoc, getDocs, doc, getDoc, updateDoc, deleteDoc, query, where, orderBy, limit, startAfter, setDoc } from 'firebase/firestore';
import { getAuth } from 'firebase/auth';

const vehiculosCollection = collection(db, 'vehiculos');

// Crear un nuevo vehículo
export const crearVehiculo = async (matricula, marca, modelo, km, precio, year) => {
  try {
    // Asegúrate de que precio y year son números
    const precioNumerico = parseFloat(precio);
    const yearNumerico = parseInt(year, 10);

    if (isNaN(precioNumerico) || isNaN(yearNumerico)) {
      throw new Error('Los valores de precio y año deben ser números.');
    }

    // Obtén el ID del usuario autenticado
    const auth = getAuth();
    const user = auth.currentUser;

    if (!user) {
      throw new Error('Usuario no autenticado.');
    }

    const nuevoVehiculo = {
      matricula,
      marca,
      modelo,
      km,
      precio: precioNumerico,
      year: yearNumerico,
      userId: user.uid // Añade el ID del usuario al documento del vehículo
    };

    const vehiculoRef = doc(db, 'vehiculos', matricula); // Usar la matrícula como ID
    await setDoc(vehiculoRef, nuevoVehiculo); // Guardar el documento con la matrícula como clave
    return { id: matricula, ...nuevoVehiculo };
  } catch (error) {
    throw new Error('Error al crear el vehículo: ' + error.message);
  }
};

// Leer todos los vehículos
export const leerVehiculos = async () => {
  try {
    const querySnapshot = await getDocs(vehiculosCollection);
    const vehiculos = [];
    querySnapshot.forEach((doc) => {
      vehiculos.push({ id: doc.id, ...doc.data() });
    });
    return vehiculos;
  } catch (error) {
    throw new Error('Error al leer los vehículos: ' + error.message);
  }
};

// Leer un vehículo por ID
export const leerVehiculoPorId = async (id) => {
  try {
    const vehiculoRef = doc(db, 'vehiculos', id);
    const vehiculoSnap = await getDoc(vehiculoRef);

    if (vehiculoSnap.exists()) {
      return { id: vehiculoSnap.id, ...vehiculoSnap.data() };
    } else {
      throw new Error('No se encontró el vehículo.');
    }
  } catch (error) {
    throw new Error('Error al leer el vehículo: ' + error.message);
  }
};

// Actualizar un vehículo
export const actualizarVehiculo = async (id, datosActualizados) => {
  try {
    const vehiculoRef = doc(db, 'vehiculos', id);
    await updateDoc(vehiculoRef, datosActualizados);
    return { id, ...datosActualizados };
  } catch (error) {
    throw new Error('Error al actualizar el vehículo: ' + error.message);
  }
};

// Eliminar un vehículo
export const eliminarVehiculo = async (id) => {
  try {
    const vehiculoRef = doc(db, 'vehiculos', id);
    await deleteDoc(vehiculoRef);
    return { id };
  } catch (error) {
    throw new Error('Error al eliminar el vehículo: ' + error.message);
  }
};

// Listar vehículos por ID de usuario
export const listarVehiculosPorUsuario = async () => {
  try {
    // Obtén el ID del usuario autenticado
    const auth = getAuth();
    const user = auth.currentUser;

    if (!user) {
      throw new Error('Usuario no autenticado.');
    }

    // Realiza una consulta para obtener los vehículos del usuario
    const q = query(vehiculosCollection, where('userId', '==', user.uid));
    const querySnapshot = await getDocs(q);
    const vehiculos = [];
    querySnapshot.forEach((doc) => {
      vehiculos.push({ id: doc.id, ...doc.data() });
    });
    return vehiculos;
  } catch (error) {
    throw new Error('Error al listar los vehículos por usuario: ' + error.message);
  }
};