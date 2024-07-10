// store.ts
import { ReactNode } from "react";
import create from "zustand";

interface StoreState {
  title: string;
  name: string;

  Body: React.FunctionComponent; // Assuming Body is a React component
  id: string;
  brief: string;
  show: boolean;
  show2: boolean;
  phone: string;
  city: string;
  setTitle: (name: string) => void;
  setName: (name: string) => void;

  setId: (id: string) => void;
  setBody: (body: React.FunctionComponent) => void; // Assuming setBody sets a React component
  setBrief: (brief: string) => void;
  setShow: (data: boolean) => void;
  setShow2: (data: boolean) => void;

  setPhone: (data: string) => void;
  setCity: (data: string) => void;
  handleClose: () => void; // Corrected from handelClose to handleClose
}

const AddressStore = create<StoreState>((set) => ({
  title: "",
  id: "",
  brief: "",
  show: false,
  show2: false,
  phone: "",
  name: "",
  city: "",
  setTitle: (title) => set({ title }), // Corrected: Specify type for 'title' argument
  setName: (name) => set({ name }), // Corrected: Specify type for 'title' argument
  setBrief: (brief) => set({ brief }), // Corrected: Specify type for 'brief' argument
  setShow: (data) => set({ show: data }), // Corrected: Specify type for 'data' argument
  setShow2: (data) => set({ show2: data }), // Corrected: Specify type for 'data' argument
  setId: (id) => set({ id }), // Corrected: Specify type for 'id' argument
  setBody: (body) => set({ Body: body }), // Corrected: Specify type for 'body' argument
  setPhone: (data) => set({ phone: data }), // Corrected: Specify type for 'data' argument
  setCity: (data) => set({ city: data }), // Corrected: Specify type for 'data' argument

  handleClose: () =>
    set({
      name: "",
      title: "",
      id: "",
      brief: "",
      show: false,
      phone: "",
      city: "",
      show2: false,
    }),
  Body: () => <h1></h1>,
}));

export default AddressStore;
