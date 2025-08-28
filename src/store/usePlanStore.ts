'use client';

import { create } from "zustand";
import axios from "axios";

export const usePlanStore = create((set) => ({
    plan: {},
    plans:[],


    fetchPlans: async () : Promise<void> => {
        try {
            const response: any = await axios.get("/api/plans");
            set({ plans: response.data });
        } catch (error: any) {
            console.error("Error fetching plans:", error);
        }
    },
    fetchPlanById: async (id: string) : Promise<void> => {
        try {
            const response:any = await axios.get(`/api/plans/${id}`);
            set({ plan: response.data });
        } catch (error: any) {
            console.error("Error fetching plan by ID:", error);
        }
    },   

}));