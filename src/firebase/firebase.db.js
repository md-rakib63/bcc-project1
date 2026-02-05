// Firestore Todo CRUD functions

import { db } from "./firebase.config";
import {
  collection,
  addDoc,
  getDocs,
  deleteDoc,
  doc,
  updateDoc,
} from "firebase/firestore";

const todoCollection = collection(db, "todos");

// Add Todo
export const addTodoDB = (text) => {
  return addDoc(todoCollection, {
    text,
    completed: false,
    createdAt: Date.now(),
  });
};

// Get Todos
export const getTodosDB = async () => {
  const snapshot = await getDocs(todoCollection);
  return snapshot.docs.map((doc) => ({
    id: doc.id,
    ...doc.data(),
  }));
};

// Delete Todo
export const deleteTodoDB = (id) => {
  return deleteDoc(doc(db, "todos", id));
};

// Update Todo
export const toggleTodoDB = (id, completed) => {
  return updateDoc(doc(db, "todos", id), { completed });
};
