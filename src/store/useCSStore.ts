'use client';

import { create } from "zustand";
import axios from "axios";

export const usePlanStore = create((set) => ({
    CS: {},
    CSs:[],


    fetchCS: async () : Promise<void> => {
        try {
            const response: any = await axios.get("/api/cs");
            set({ CSs: response.data.CSs });
        } catch (error: any) {
            console.error("Error fetching plans:", error);
        }
    },
    fetchCSById: async (id: string) : Promise<void> => {
        try {
            const response:any = await axios.get(`/api/cs/${id}`);
            set({ CS: response.data });
        } catch (error: any) {
            console.error("Error fetching plan by ID:", error);
        }
    },   

}));